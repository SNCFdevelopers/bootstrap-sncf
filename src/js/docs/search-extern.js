/* eslint-disable */
import jQuery from 'jquery'

(function ($) {
  'use strict'

  $(function () {
    // Search
    if (window.docsearch) {
      window.docsearch({
        apiKey: '996aab06a4205310fdcd8ad5cb155900',
        indexName: 'sncf_design-bootstrap',
        inputSelector: '#search-input',
        handleSelected: function (input, event, suggestion) {
          var url = suggestion.url
          url = suggestion.isLvl1 ? url.split('#')[0] : url
          // If it's a title we remove the anchor so it does not jump.
          window.location.href = url
        },
        transformData: function (hits) {
          return hits.map(function (hit) {
            hit.url = hit.url.replace('https://design-bootstrap.sncf.fr/', '/')
            return hit
          })
        },
        debug: false // Set debug to true if you want to inspect the dropdown
      })
    }
  })
}(jQuery))
