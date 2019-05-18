import {
  DEFAULT_COLOR,
  DEFAULT_COLORS,
  DEFAULT_GRIDCOLOR,
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
    const values = element.dataset.values ? JSON.parse(element.dataset.values) : []

    // styles
    const lineColors = element.dataset.colors ? JSON.parse(element.dataset.colors) : DEFAULT_COLORS // if more than 6 lines, we use the same color
    const lineStyles = element.dataset.styles ? JSON.parse(element.dataset.styles) : []
    const fill = element.dataset.fill === 'true'
    const lineTension = element.dataset.straightlines === 'true'
    const gridColor = element.dataset.gridcolor ? element.dataset.gridcolor : DEFAULT_GRIDCOLOR
    // no-console  -> comment console.log('lineColors: ', lineColors);

    let counter = 0

    const config = {
      type: 'line',
      data: {
        datasets: []
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            },
            gridLines: {
              color: gridColor
            }
          }],
          xAxes: [{
            gridLines: {
              color: gridColor
            }
          }]
        },
        hover: {
          intersect: false
        },
        tooltips: {
          mode: 'index',
          enabled: false,
          intersect: false,
          custom: (tooltipModel) => {
            renderTooltip(tooltipModel, element, canvas, labels, values, lineColors, lineStyles)
          }
        }
      },
      plugins: [{
        afterDatasetsDraw: (chart) => {
          renderVerticalLine(chart, lineColors.length > 0 ? lineColors[0] : DEFAULT_COLORS)
        }
      }]
    }

    values.forEach((valueArray) => {
      // pointHoverConfig.pointBorderColor = lineColors[counter] ? lineColors[counter] : DEFAULT_COLOR
      pointHoverConfig.pointHoverBorderColor = lineColors[counter] ? lineColors[counter] : DEFAULT_COLOR

      if (fill) {
        const gradientStroke = ctx.createLinearGradient(0, element.getBoundingClientRect().width, 0, 0)
        gradientStroke.addColorStop(0.5, 'rgba(255, 255, 255, 0)')
        gradientStroke.addColorStop(0.8, lineColors[counter] ? lineColors[counter] : DEFAULT_COLOR)

        config.data.datasets.push({
          ...pointHoverConfig,
          data: valueArray,
          backgroundColor: gradientStroke,
          borderColor: values.length === 1 && lineTension ? [lineColors[counter] ? lineColors[counter] : DEFAULT_COLOR] : gradientStroke,
          borderWidth: values.length === 1 && lineTension ? 3 : 1,
          pointRadius: 0,
          fill: true
        })
      } else {
        config.data.datasets.push({
          ...pointHoverConfig,
          data: valueArray,
          backgroundColor: ['transparent'],
          borderColor: [lineColors[counter] || DEFAULT_COLOR],
          borderWidth: 3 // line width
        })
      }

      if (lineStyles[counter] && lineStyles[counter] === 'dashed') {
        config.data.datasets[counter].borderDash = [4]
      }

      if (lineTension) {
        config.data.datasets[counter].lineTension = 0
      }

      counter += 1
    })

    config.data.labels = labels

    element.chart = new Chart(canvas, config)
  }
}
/* eslint-enable no-magic-numbers, no-new */
