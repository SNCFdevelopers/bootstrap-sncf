import 'bootstrap'
import './utils/dragscroll.js'
import './utils/polyfill.js'
import './utils/stretchy.js'
import {
  LineChart,
  RadialChart
} from './components/charts'
import Chips from './components/chips'
import Control from './components/control'
import Picker from './components/picker'
import RadialProgress from './components/progress'
import RangeSlider from './components/rangeSliders'
import Schedule from './components/schedule'
import Searchbar from './components/searchbar'
import SelectExclusive from './components/selectExclusive'
import SelectMultiple from './components/selectMultiple'
import SelectRadios from './components/selectRadios'
import Table from './components/table'
import state from './components/states'

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable no-console */
  console.log('Hello from the Fab Design.')
  /* eslint-enable no-console */

  // data components
  const dataComponent = '[data-component]'
  const dataLineChart = 'line-chart'
  const dataRadialChart = 'radial-chart'
  const dataChips = 'chips'
  const dataControl = 'control'
  const dataPicker = 'picker'
  const dataRangeSlider = 'range-slider'
  const dataSearchbar = 'searchbar'
  const dataSelectExclusive = 'select-exclusive'
  const dataSelectMultiple = 'select-multiple'
  const dataSelectRadios = 'select-radios'
  const dataState = 'state'
  const dataTable = 'table'
  const dataRadialProgress = 'radial-progress'
  const dataSchedule = 'schedule'

  const components = document.querySelectorAll(dataComponent)

  components.forEach((component) => {
    /* eslint-disable no-new */
    if (component.dataset.component === dataLineChart) {
      new LineChart(component)
    }

    if (component.dataset.component === dataRadialChart) {
      new RadialChart(component)
    }

    if (component.dataset.component === dataChips) {
      new Chips(component)
    }

    if (component.dataset.component === dataControl) {
      new Control(component)
    }

    if (component.dataset.component === dataPicker) {
      new Picker(component)
    }

    if (component.dataset.component === dataRangeSlider) {
      new RangeSlider(component)
    }

    if (component.dataset.component === dataSearchbar) {
      new Searchbar(component)
    }

    if (component.dataset.component === dataSelectExclusive) {
      new SelectExclusive(component)
    }

    if (component.dataset.component === dataSelectMultiple) {
      new SelectMultiple(component)
    }

    if (component.dataset.component === dataSelectRadios) {
      new SelectRadios(component)
    }

    if (component.dataset.component === dataState) {
      state(component)
    }

    if (component.dataset.component === dataTable) {
      new Table(component)
    }

    if (component.dataset.component === dataRadialProgress) {
      new RadialProgress(component)
    }

    if (component.dataset.component === dataSchedule) {
      new Schedule(component)
    }
    /* eslint-enable no-new */
  })
})
