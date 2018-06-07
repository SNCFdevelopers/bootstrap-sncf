import {
  French
} from 'flatpickr/dist/l10n/fr.js'
import flatpickr from 'flatpickr'
import rangePlugin from 'flatpickr/dist/plugins/rangePlugin'
flatpickr.localize(French) // default locale is now Russian

const DEFAULT_OPTIONS = {
  locale: {
    weekdays: {
      shorthand: ['D', 'L', 'M', 'M', 'J', 'V', 'S']
    }
  },
  wrap: true,
  static: true,
  /* eslint-disable camelcase */
  time_24hr: true
  /* eslint-enable camelcase */
}

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Picker {
  constructor(element) {
    const btnNode = element.querySelector('[data-role=btn]')
    const defaultDate = element.getAttribute('data-default-date')
    const mode = element.getAttribute('data-mode') || 'single'
    const enableTime = element.getAttribute('data-enable-time')
    const dateFormat = this._getDateFormat(enableTime ? 'datetime' : mode)
    const secondRangeInput = element.getAttribute('data-second-range')
    const incrementHoursOnMinutesMax = element.getAttribute('data-increment-hours-on-minutes-max') || false
    const decrementHoursOnMinutesMin = element.getAttribute('data-decrement-hours-on-minutes-min') || false
    const plugins = []

    if (secondRangeInput) {
      /* eslint-disable new-cap */
      plugins.push(new rangePlugin({
        input: secondRangeInput
      }))
      /* eslint-enable new-cap */
    }

    const options = {
      mode,
      dateFormat,
      enableTime,
      plugins,
      incrementHoursOnMinutesMax,
      decrementHoursOnMinutesMin
    }

    if (mode === 'time') {
      options.enableTime = true
    }

    if (defaultDate) {
      options.defaultDate = defaultDate
    }

    flatpickr(element, {
      ...DEFAULT_OPTIONS,
      ...options,
      onOpen: () => {
        btnNode.classList.add('active')
      },
      onClose: () => {
        btnNode.classList.remove('active')
      }
    })
  }

  _getDateFormat(mode) {
    switch (mode) {
      case 'datetime':
        return 'j/m/Y à H\\:i'
      case 'time':
        return 'H\\:i'
      default:
        return 'j/m/Y'
    }
  }
}

export default Picker
