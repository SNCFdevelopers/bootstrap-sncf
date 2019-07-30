/* eslint-disable */
import jQuery from 'jquery'
import Anchors from './vendor/anchor.min.js'
import Clipboard from './vendor/clipboard.min.js'

// NOTICE!! DO NOT USE ANY OF THIS JAVASCRIPT
// IT'S ALL JUST JUNK FOR OUR DOCS!
// ++++++++++++++++++++++++++++++++++++++++++

/*!
 * JavaScript for Bootstrap's docs (https://getbootstrap.com/)
 * Copyright 2011-2019 The Bootstrap Authors
 * Copyright 2011-2019 Twitter, Inc.
 * Licensed under the Creative Commons Attribution 3.0 Unported License.
 * For details, see https://creativecommons.org/licenses/by/3.0/.
 */

/* global ClipboardJS: false, anchors: false, bootstrap: false, bsCustomFileInput: false */

(function () {
  'use strict'

  function makeArray(list) {
    return [].slice.call(list)
  }

  (function () {
    var checkbox = document.getElementById('flexCheckIndeterminate')

    if (!checkbox) {
      return
    }

    checkbox.indeterminate = true
  })()

  makeArray(document.querySelectorAll('.js-sidenav-group'))
    .forEach(function (sidenavGroup) {
      var groupHasLinks = Boolean(sidenavGroup.querySelector('li'))
      var groupLink = sidenavGroup.querySelector('a')

      if (groupHasLinks) {
        groupLink.addEventListener('click', function (e) {
          e.preventDefault()
          e.target.parentNode.classList.toggle('active')
        }, true)
      }
    })

  // Tooltip and popover demos
  makeArray(document.querySelectorAll('.tooltip-demo'))
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip, {
        selector: '[data-toggle="tooltip"]'
      })
    })

  makeArray(document.querySelectorAll('[data-toggle="popover"]'))
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  makeArray(document.querySelectorAll('.toast'))
    .forEach(function (toastNode) {
      var toast = new bootstrap.Toast(toastNode, {
        autohide: false
      })

      toast.show()
    })

  // Demos within modals
  makeArray(document.querySelectorAll('.tooltip-test'))
    .forEach(function (tooltip) {
      new bootstrap.Tooltip(tooltip)
    })

  makeArray(document.querySelectorAll('.popover-test'))
    .forEach(function (popover) {
      new bootstrap.Popover(popover)
    })

  // Indeterminate checkbox example
  makeArray(document.querySelectorAll('.bd-example-indeterminate [type="checkbox"]'))
    .forEach(function (checkbox) {
      checkbox.indeterminate = true
    })

  // Disable empty links in docs examples
  makeArray(document.querySelectorAll('.bd-content [href="#"]'))
    .forEach(function (link) {
      link.addEventListener('click', function (e) {
        e.preventDefault()
      })
    })

  // Modal relatedTarget demo
  var exampleModal = document.getElementById('exampleModal')
  if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', function (event) {
      var button = event.relatedTarget // Button that triggered the modal
      var recipient = button.getAttribute('data-whatever') // Extract info from data-* attributes

      // Update the modal's content.
      var modalTitle = exampleModal.querySelector('.modal-title')
      var modalBodyInput = exampleModal.querySelector('.modal-body input')

      modalTitle.innerHTML = 'New message to ' + recipient
      modalBodyInput.value = recipient
    })
  }

  // Activate animated progress bar
  var btnToggleAnimatedProgress = document.getElementById('btnToggleAnimatedProgress')
  if (btnToggleAnimatedProgress) {
    btnToggleAnimatedProgress.addEventListener('click', function () {
      btnToggleAnimatedProgress.parentNode
        .querySelector('.progress-bar-striped')
        .classList
        .toggle('progress-bar-animated')
    })
  }

  // Insert hide & copy to clipboard button before .highlight
  if (localStorage.getItem('bootstrap-sncf-hidesource') === 'true') {
    var btnHtml = '<div class="bd-clipboard d-flex"><button class="btn-show-source d-none d-flex mr-auto align-items-center" title="Show the source code">Show source code <i class="icons-arrow-down icons-size-x5 ml-2"></i></button><button class="btn-hide-source mr-auto d-none align-items-center" title="Hide the source code">Hide source code <i class="icons-arrow-up icons-size-x5 ml-2"></i></button><button class="btn-clipboard btn-secondary d-none" title="Copy to clipboard">Copy</button></div>'
  } else {
    var btnHtml = '<div class="bd-clipboard bd-clipboard-bg-light d-flex"><button class="btn-show-source d-none mr-auto align-items-center" title="Show the source code">Show source code <i class="icons-arrow-down icons-size-x5 ml-2"></i></button><button class="btn-hide-source mr-auto d-none d-flex align-items-center" title="Hide the source code">Hide source code <i class="icons-arrow-up icons-size-x5 ml-2"></i></button><button class="btn-clipboard btn-secondary" title="Copy to clipboard">Copy</button></div>'
  }
  $('figure.highlight, div.highlight').each(function () {
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
    var tooltipBtn = bootstrap.Tooltip._getInstance(e.trigger)

    e.trigger.setAttribute('data-original-title', 'Copied!')
    tooltipBtn.show()

    e.trigger.setAttribute('data-original-title', 'Copy to clipboard')
    e.clearSelection()
  })

  clipboard.on('error', function (e) {
    var modifierKey = /Mac/i.test(navigator.userAgent) ? '\u2318' : 'Ctrl-'
    var fallbackMsg = 'Press ' + modifierKey + 'C to copy'
    var tooltipBtn = bootstrap.Tooltip._getInstance(e.trigger)

    e.trigger.setAttribute('title', fallbackMsg)
    tooltipBtn._fixTitle()
    tooltipBtn.show()

    e.trigger.setAttribute('title', 'Copy to clipboard')
    tooltipBtn._fixTitle()
  })

  var anchors = new Anchors()

  anchors.options = {
    icon: '#'
  }
  anchors.add('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5')

  // Wrap inner
  makeArray(document.querySelectorAll('.bd-content > h2, .bd-content > h3, .bd-content > h4, .bd-content > h5'))
    .forEach(function (hEl) {
      hEl.innerHTML = '<span class="bd-content-title">' + hEl.innerHTML + '</span>'
    })

})(jQuery)
/* eslint-enable */
