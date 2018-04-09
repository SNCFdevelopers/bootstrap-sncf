import {
  French
} from 'flatpickr/dist/l10n/fr.js'
import flatpickr from 'flatpickr'
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'
flatpickr.localize(French) // default locale is now Russian
flatpickr.l10ns.default.locale = {
  weekdays: {
    shorthand: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
  }
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Picker {
  constructor(element) {
    flatpickr(element, {
      locale: {
        weekdays: {
          shorthand: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
        }
      },
      wrap: true,
      /* eslint-disable new-cap, camelcase */
      plugins: [
        new rangePlugin({
          input: '#secondRangeInput'
        })
      ],
      static: true,
      enableTime: true,
      dateFormat: 'j/m/Y à H\\hi',
      time_24hr: true
      /* eslint-enable new-cap, camelcase */
    })
  }
}

export default Picker
