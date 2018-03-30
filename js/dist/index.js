/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */
(function ($) {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.');
  }

  var version = $.fn.jquery.split(' ')[0].split('.');
  var minMajor = 1;
  var ltMajor = 2;
  var minMinor = 9;
  var minPatch = 1;
  var maxMajor = 4;

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0');
  }
})($);

document.addEventListener('DOMContentLoaded', function () {
  /* eslint-disable no-console */
  console.log('Hello from the Fab Design.');
  /* eslint-enable no-console */
  // data components

  var dataComponent = '[data-component]';
  var dataControl = 'control';
  var dataSelectExclusive = 'select-exclusive';
  var dataSelectMultiple = 'select-multiple';
  var dataSelectRadios = 'select-radios';
  var components = document.querySelectorAll(dataComponent);
  components.forEach(function (component) {
    /* eslint-disable no-new */
    if (component.dataset.component === dataControl) {
      new Control(component);
    }

    if (component.dataset.component === dataSelectExclusive) {
      new SelectExclusive(component);
    }

    if (component.dataset.component === dataSelectMultiple) {
      new SelectMultiple(component);
    }

    if (component.dataset.component === dataSelectRadios) {
      new SelectRadios(component);
    }
    /* eslint-enable no-new */

  });
});
//# sourceMappingURL=index.js.map