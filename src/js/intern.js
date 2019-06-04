import 'bootstrap'
import './utils/dragscroll.js'
import './utils/polyfill.js'
import './utils/stretchy.js'
import BarChart from './components/charts/barChart'
import Chips from './components/chips'
import Control from './components/control'
import LineChart from './components/charts/lineChart'
import Picker from './components/picker'
import PieChart from './components/charts/pieChart'
import RadarChart from './components/charts/radarChart'
import RadialProgress from './components/progress'
import RangeSlider from './components/rangeSliders'
import Schedule from './components/schedule'
import Searchbar from './components/searchbar'
import SelectExclusive from './components/selectExclusive'
import SelectMultiple from './components/selectMultiple'
import SelectRadios from './components/selectRadios'
import Table from './components/table'
import state from './components/states'

function initializeComponents(componentsToInit) {
  /* eslint-disable no-console */

  // data components
  const dataComponent = '[data-component]'
  const dataLineChart = 'line-chart'
  const dataBarChart = 'bar-chart'
  const dataPieChart = 'pie-chart'
  const dataRadarChart = 'radar-chart'
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

  const components = componentsToInit ? componentsToInit : document.querySelectorAll(dataComponent)

  components.forEach((component) => {
    /* eslint-disable no-new */
    if (component.dataset.component === dataLineChart) {
      new LineChart(component)
    }

    if (component.dataset.component === dataBarChart) {
      new BarChart(component)
    }

    if (component.dataset.component === dataPieChart) {
      new PieChart(component)
    }

    if (component.dataset.component === dataRadarChart) {
      new RadarChart(component)
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
}
window.fabDesign = {}
window.fabDesign.initializeComponents = initializeComponents
