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
  time_24hr: true,
  /* eslint-enable camelcase */
  /* Désactivation de l'appel au calendrier natif */
  disableMobile: false
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
    const timePicker = element.getAttribute('data-timepicker')
    /* eslint-disable no-nested-ternary */
    const dateFormat = this._getDateFormat(timePicker ? 'time' : enableTime ? 'datetime' : mode)
    /* eslint-enable no-nested-ternary */
    const secondRangeInput = element.getAttribute('data-second-range')
    const incrementHoursOnMinutesMax = element.getAttribute('data-increment-hours-on-minutes-max') || false
    const decrementHoursOnMinutesMin = element.getAttribute('data-decrement-hours-on-minutes-min') || false
    const plugins = []
    const onOpen = []

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

    if (mode === 'time' || timePicker) {
      options.enableTime = true
      options.noCalendar = true
    }

    if (enableTime) {
      onOpen.push((selectedDates, dateStr, instance) => {
        if (selectedDates.length === 0) {
          instance.setDate(new Date())
        }
      })
    }

    if (defaultDate) {
      options.defaultDate = defaultDate
    }

    onOpen.push(
      () => btnNode.classList.add('active')
    )

    element.flatpickr = flatpickr(element, {
      ...DEFAULT_OPTIONS,
      ...options,
      onOpen,
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
