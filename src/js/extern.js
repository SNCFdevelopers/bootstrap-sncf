import 'bootstrap'
import './utils/dragscroll.js'
import './utils/stretchy.js'
import BarChart from './components/charts/barChart'
import Chips from './components/chips'
import Control from './components/control'
import Header from './components/header'
import LineChart from './components/charts/lineChart'
import Menu from './components/menu'
import Nav from './components/nav-extern'
import Picker from './components/picker'
import PieChart from './components/charts/pieChart'
import RadarChart from './components/charts/radarChart'
import RadialProgress from './components/progress'
import RangeSlider from './components/rangeSliders'
import Searchbar from './components/searchbar'
import SelectExclusive from './components/selectExclusive'
import SelectMultiple from './components/selectMultiple'
import SelectRadios from './components/selectRadios'
import Swiper from 'swiper'
import Table from './components/table'

document.addEventListener('DOMContentLoaded', () => {
  /* eslint-disable no-console */
  console.log('Hello from the Fab Design.')
  /* eslint-enable no-console */

  // data components
  const dataComponent = '[data-component]'
  const dataLineChart = 'line-chart'
  const dataBarChart = 'bar-chart'
  const dataPieChart = 'pie-chart'
  const dataRadarChart = 'radar-chart'
  const dataChips = 'chips'
  const dataControl = 'control'
  const dataMastheader = 'mastheader'
  const dataMastnav = 'mastnav'
  const dataPicker = 'picker'
  const dataRangeSlider = 'range-slider'
  const dataSearchbar = 'searchbar'
  const dataSelectExclusive = 'select-exclusive'
  const dataSelectMultiple = 'select-multiple'
  const dataSelectRadios = 'select-radios'
  const dataCarousel = 'carousel'
  const dataSlideshow = 'slideshow'
  const dataMultiSlideshow = 'multi-slideshow'
  const dataTable = 'table'
  const dataRadialProgress = 'radial-progress'
  const dataMenu = 'menu-toutsncf'

  const components = document.querySelectorAll(dataComponent)

  /* eslint-disable complexity */
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

    if (component.dataset.component === dataMastheader) {
      new Header(component)
    }

    if (component.dataset.component === dataMastnav) {
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

    if (component.dataset.component === dataRadialProgress) {
      new RadialProgress(component)
    }

    if (component.dataset.component === dataCarousel) {
      new Swiper(component.querySelector('[data-role=container]'), {
        navigation: {
          nextEl: component.querySelector('[data-role=button-next]'),
          prevEl: component.querySelector('[data-role=button-prev]')
        },
        pagination: {
          el: component.querySelector('[data-role=pagination]'),
          type: 'bullets'
        },
        slidesPerView: 1
      })
    }

    if (component.dataset.component === dataSlideshow) {
      new Swiper(component.querySelector('[data-role=container]'), {
        navigation: {
          nextEl: component.querySelector('[data-role=button-next]'),
          prevEl: component.querySelector('[data-role=button-prev]')
        },
        pagination: {
          el: component.querySelector('[data-role=pagination]'),
          type: 'custom',
          renderCustom: (swiper, current, total) => `${current}/${total}`
        },
        slidesPerView: 1
      })
    }

    if (component.dataset.component === dataMultiSlideshow) {
      new Swiper(component.querySelector('[data-role=container]'), {
        navigation: {
          nextEl: component.querySelector('[data-role=button-next]'),
          prevEl: component.querySelector('[data-role=button-prev]')
        },
        pagination: {
          el: component.querySelector('[data-role=pagination]'),
          type: 'bullets',
          clickable: true
        },
        slidesPerView: 3,
        spaceBetween: 40,
        breakpoints: {
          // when window width is <= 575px
          575: {
            slidesPerView: 1,
            spaceBetween: 10
          },
          // when window width is <= 767px
          767: {
            slidesPerView: 2,
            spaceBetween: 20
          }
        }
      })
    }

    if (component.dataset.component === dataTable) {
      new Table(component)
    }

    if (component.dataset.component === dataMenu) {
      new Menu(component)
    }
    /* eslint-enable no-new */
  })
})
