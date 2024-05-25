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

let callbackTimeout = null
const timeoutDelay = 500
const intervalAwait = 200
const mutationObserverConfig = {
  attributes: true,
  childList: true,
  subtree: true
}

function initializeComponents() {
  /* eslint-disable no-console */

  // data components
  const dataComponent = '[data-component]:not([fabdesigninitialized="true"])'
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
  const components = document.querySelectorAll(dataComponent)

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

    component.setAttribute('fabdesigninitialized', true)
    /* eslint-enable no-new */
  })

  if (components.length > 0) {
    console.log(`FabDesign initialized ${components.length} components`)
  }
}

function mutationObserverCallback() {
  if (callbackTimeout) {
    clearTimeout(callbackTimeout)
  }
  callbackTimeout = setTimeout(() => {
    initializeComponents()
  }, timeoutDelay)
}


const interval = setInterval(() => {
  if (document.body && document.body !== null) {
    clearInterval(interval)
    const mutationObserver = new MutationObserver(mutationObserverCallback)
    mutationObserver.observe(document.body, mutationObserverConfig)
  }
}, intervalAwait)
