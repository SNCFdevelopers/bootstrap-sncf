import './utils/stretchy.js'
import $ from 'jquery'
import Alert from '../../node_modules/bootstrap/js/src/alert'
import Button from '../../node_modules/bootstrap/js/src/button'
import Carousel from '../../node_modules/bootstrap/js/src/carousel'
import Collapse from '../../node_modules/bootstrap/js/src/collapse'
import Dropdown from '../../node_modules/bootstrap/js/src/dropdown'
import Modal from '../../node_modules/bootstrap/js/src/modal'
import Popover from '../../node_modules/bootstrap/js/src/popover'
import Scrollspy from '../../node_modules/bootstrap/js/src/scrollspy'
import SelectExclusive from './selectExclusive'
import SelectMultiple from './selectMultiple'
import SelectRadios from './selectRadios'
import Tab from '../../node_modules/bootstrap/js/src/tab'
import Tooltip from '../../node_modules/bootstrap/js/src/tooltip'
import Util from '../../node_modules/bootstrap/js/src/util'

/**
 * --------------------------------------------------------------------------
 * Bootstrap (v4.0.0-alpha.6): index.js
 * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
 * --------------------------------------------------------------------------
 */

(($) => {
  if (typeof $ === 'undefined') {
    throw new TypeError('Bootstrap\'s JavaScript requires jQuery. jQuery must be included before Bootstrap\'s JavaScript.')
  }

  const version = $.fn.jquery.split(' ')[0].split('.')
  const minMajor = 1
  const ltMajor = 2
  const minMinor = 9
  const minPatch = 1
  const maxMajor = 4

  if (version[0] < ltMajor && version[1] < minMinor || version[0] === minMajor && version[1] === minMinor && version[2] < minPatch || version[0] >= maxMajor) {
    throw new Error('Bootstrap\'s JavaScript requires at least jQuery v1.9.1 but less than v4.0.0')
  }
})($)

export {
  Util,
  Alert,
  Button,
  Carousel,
  Collapse,
  Dropdown,
  Modal,
  Popover,
  Scrollspy,
  Tab,
  Tooltip
}

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable no-console */
  console.log('Hello from the Fab Design.')
  /* eslint-enable no-console */

  // data components
  const dataComponent = '[data-component]'
  const dataSelectExclusive = 'select-exclusive'
  const dataSelectMultiple = 'select-multiple'
  const dataSelectRadios = 'select-radios'

  const components = document.querySelectorAll(dataComponent)

  components.forEach((component) => {
    /* eslint-disable no-new */
    if (component.dataset.component === dataSelectExclusive) {
      new SelectExclusive(component)
    }

    if (component.dataset.component === dataSelectMultiple) {
      new SelectMultiple(component)
    }

    if (component.dataset.component === dataSelectRadios) {
      new SelectRadios(component)
    }
    /* eslint-enable no-new */
  })
})
