/* eslint-disable */
import jQuery from 'jquery'
import Anchors from './vendor/anchor.min.js'
import Clipboard from './vendor/clipboard.min.js'

// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com)
 * Copyright 2011-2018 The Bootstrap Authors
 * Copyright 2011-2018 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License. For
 * details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global Clipboard: false, anchors: false, Holder: false */

(function ($) {
  'use strict'

  $(function () {
    // Tooltip and popover demos
    $('.tooltip-demo').tooltip({
      selector: '[data-toggle="tooltip"]',
      container: 'body'
    })

    $('[data-toggle="popover"]').popover()

    $('.toast')
      .toast({
         autohide: false
      })
      .toast('show')

    // Demos within modals
    $('.tooltip-test').tooltip()
    $('.popover-test').popover()

    // Indeterminate checkbox example
    $('.bd-example-indeterminate [type="checkbox"]').prop('indeterminate', true)

    // Disable empty links in docs examples
    $('.bd-content [href="#"]').click(function (e) {
      e.preventDefault()
    })

    // Modal relatedTarget demo
    $('#exampleModal').on('show.bs.modal', function (event) {
      var $button = $(event.relatedTarget)      // Button that triggered the modal
      var recipient = $button.data('whatever')  // Extract info from data-* attributes
      // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
      // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
      var $modal = $(this)
      $modal.find('.modal-title').text('New message to ' + recipient)
      $modal.find('.modal-body input').val(recipient)
    })

    // Activate animated progress bar
    $('.bd-toggle-animated-progress').on('click', function () {
      $(this).siblings('.progress').find('.progress-bar-striped').toggleClass('progress-bar-animated')
    })

    // Insert hide & copy to clipboard button before .highlight
    $('figure.highlight, div.highlight').each(function () {
      var btnHtml = '<div class="bd-clipboard bd-clipboard-bg-light d-flex"><button class="btn-show-source d-none mr-auto align-items-center" title="Show the source code">Show source code <i class="icons-arrow-down icons-size-x5 ml-2"></i></button><button class="btn-hide-source mr-auto d-none d-flex align-items-center" title="Hide the source code">Hide source code <i class="icons-arrow-up icons-size-x5 ml-2"></i></button><button class="btn-clipboard btn-secondary" title="Copy to clipboard">Copy</button></div>'
      $(this).before(btnHtml)
      $('.btn-clipboard')
        .tooltip()
        .on('mouseleave', function () {
          // Explicitly hide tooltip, since after clicking it remains
          // focused (as it's a button), so tooltip would otherwise
          // remain visible until focus is moved away
          $(this).tooltip('hide')
        })
      $('.btn-hide-source')
        .tooltip()
        .on('click', function () {
          var bdClipboard = $(this).closest('.bd-clipboard')
          $(this).prev('.btn-show-source').addClass('d-flex')
          bdClipboard.next().addClass('d-none') // Highlight div hiding
          bdClipboard.find('.btn-clipboard').addClass('d-none') // Copy bouton
          bdClipboard.removeClass('bd-clipboard-bg-light')
          $(this).removeClass('d-flex')
        })
        .on('mouseleave', function () {
          $(this).tooltip('hide')
        })
      $('.btn-show-source')
        .tooltip()
        .on('click', function () {
          var bdClipboard = $(this).closest('.bd-clipboard')
          $(this).next('.btn-hide-source').addClass('d-flex')
          bdClipboard.next().removeClass('d-none') // Highlight div hiding
          bdClipboard.find('.btn-clipboard').removeClass('d-none') // Copy bouton
          bdClipboard.addClass('bd-clipboard-bg-light')
          $(this).removeClass('d-flex')
        })
        .on('mouseleave', function () {
          $(this).tooltip('hide')
        })

    })

    var clipboard = new Clipboard('.btn-clipboard', {
      target: function (trigger) {
        return trigger.parentNode.nextElementSibling
      }
    })

    clipboard.on('success', function (e) {
      $(e.trigger)
        .attr('title', 'Copied!')
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')

      e.clearSelection()
    })

    clipboard.on('error', function (e) {
      var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
      var fallbackMsg = 'Press ' + modifierKey + 'C to copy'

      $(e.trigger)
        .attr('title', fallbackMsg)
        .tooltip('_fixTitle')
        .tooltip('show')
        .attr('title', 'Copy to clipboard')
        .tooltip('_fixTitle')
    })

    var anchors = new Anchors()

    anchors.options = {
      icon: '#'
    }
    anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')
    $('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5').wrapInner('<div></div>')

    // Search
    // Splitted into intern & extern versions

    // Holder
    // Holder.addTheme('gray', {
    //   bg: '#777',
    //   fg: 'rgba(255,255,255,.75)',
    //   font: 'Helvetica',
    //   fontweight: 'normal'
    // })
  })
}(jQuery))
/* eslint-enable */
