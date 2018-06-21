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

    // gradient
    const gradientStroke = ctx.createLinearGradient(0, 400, 0, 0)
    gradientStroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
    gradientStroke.addColorStop(1, 'rgb(29, 136, 202)')

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
        config.data.datasets.push({
          ...pointHoverConfig,
          data: valueArray,
          backgroundColor: gradientStroke,
          borderColor: valuesArray.length > 1 ? gradientStroke : [colors[0]],
          borderWidth: valuesArray.length > 1 ? 1 : 3,
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
