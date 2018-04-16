import 'bootstrap'
import './utils/dragscroll.js'
import './utils/stretchy.js'
import * as tuichart from 'tui-chart'
import {
  LineChart,
  RadialChart
} from './components/charts'
import Chips from './components/chips'
import Control from './components/control'
import Nav from './components/nav-extern'
import Picker from './components/picker'
import RangeSlider from './components/rangeSliders'
import Searchbar from './components/searchbar'
import SelectExclusive from './components/selectExclusive'
import SelectMultiple from './components/selectMultiple'
import SelectRadios from './components/selectRadios'

const theme = {
  series: {
    colors: ['#0088ce']
  }
}
tuichart.registerTheme('sncf', theme)

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
  const dataMainNav = 'mainnav'
  const dataPicker = 'picker'
  const dataRangeSlider = 'range-slider'
  const dataSearchbar = 'searchbar'
  const dataSelectExclusive = 'select-exclusive'
  const dataSelectMultiple = 'select-multiple'
  const dataSelectRadios = 'select-radios'

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

    if (component.dataset.component === dataMainNav) {
      new Nav(component)
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
    /* eslint-enable no-new */
  })
})
