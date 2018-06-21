import {
  colors,
  pointHoverConfig
} from './config'
import {
  renderTooltip,
  renderVerticalLine
} from './utils'
import Chart from 'chart.js'

/* eslint-disable no-magic-numbers, no-new */
export default class LineChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')
    const ctx = canvas.getContext('2d')

    // data
    const labels = element.dataset.labels ? JSON.parse(element.dataset.labels) : []
    const valuesArray = element.dataset.values ? JSON.parse(element.dataset.values) : []
    const lineStyles = element.dataset.lineStyles ? JSON.parse(element.dataset.lineStyles) : []
    const lineColors = element.dataset.lineColors ? JSON.parse(element.dataset.lineColors) : colors
    const fill = element.dataset.fill === 'true'
    const lineTension = element.dataset.straightlines === 'true'

    let dataCounter = 0 // util to select the next color

    const config = {
      type: 'line',
      data: {
        datasets: []
      },
      options: {
        hover: {
          intersect: false
        },
        tooltips: {
          mode: 'index',
          enabled: false,
          custom: (tooltipModel) => {
            renderTooltip(tooltipModel, element, canvas, lineStyles)
          }
        }
      },
      plugins: [{
        afterDatasetsDraw: (chart) => {
          renderVerticalLine(chart)
        }
      }]
    }

    valuesArray.forEach((valueArray) => {
      if (fill) {
        const gradientStroke = ctx.createLinearGradient(0, element.getBoundingClientRect().width, 0, 0)
        gradientStroke.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
        gradientStroke.addColorStop(0.8, lineColors[dataCounter] ? lineColors[dataCounter] : ['rgb(29, 136, 202)'])

        config.data.datasets.push({
          ...pointHoverConfig,
          data: valueArray,
          backgroundColor: gradientStroke,
          borderColor: valuesArray.length === 1 && lineTension ? [lineColors[dataCounter] ? lineColors[dataCounter] : ['rgb(29, 136, 202)']] : gradientStroke,
          borderWidth: valuesArray.length === 1 && lineTension ? 3 : 1,
          pointRadius: 0,
          fill: true
        })
      } else {
        config.data.datasets.push({
          ...pointHoverConfig,
          data: valueArray,
          backgroundColor: ['transparent'],
          borderColor: [lineColors[dataCounter] ? lineColors[dataCounter] : ['rgb(29, 136, 202)']],
          borderWidth: 3 // line width
        })
      }

      if (lineStyles[dataCounter] && lineStyles[dataCounter] === 'dashed') {
        config.data.datasets[dataCounter].borderDash = [4]
      }

      if (lineTension) {
        config.data.datasets[dataCounter].lineTension = 0
      }

      dataCounter += 1
    })

    config.data.labels = labels

    new Chart(canvas, config)
  }
}
/* eslint-enable no-magic-numbers, no-new */
