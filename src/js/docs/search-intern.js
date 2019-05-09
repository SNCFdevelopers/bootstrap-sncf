/* eslint-disable */
import jQuery from 'jquery'

(function ($) {
  'use strict'

  $(function () {
    // Search
    if (window.docsearch) {
      window.docsearch({
        apiKey: '0596a97fca2db2e3d9ad5178032d774f',
        indexName: 'sncf_designmetier-bootstrap',
        inputSelector: '#search-input',
        handleSelected: function (input, event, suggestion) {
          var url = suggestion.url
          url = suggestion.isLvl1 ? url.split('#')[0] : url
          // If it's a title we remove the anchor so it does not jump.
          window.location.href = url
        },
        transformData: function (hits) {
          return hits.map(function (hit) {
            hit.url = hit.url.replace('https://designmetier-bootstrap.sncf.fr/', '/')
            return hit
          })
        },
        debug: false // Set debug to true if you want to inspect the dropdown
      })
    }
  })
}(jQuery))
