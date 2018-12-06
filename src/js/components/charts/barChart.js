/* eslint-disable no-unused-vars */
import * as zoom from 'chartjs-plugin-zoom'
/* eslint-enable no-unused-vars */
import {
  DEFAULT_COLOR,
  DEFAULT_COLORS
} from './config'
import Chart from 'chart.js'
import {
  renderTooltip
} from './utils'

/* eslint-disable no-magic-numbers, no-new */
export default class BarChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')

    // data
    const labels = element.dataset.labels ? JSON.parse(element.dataset.labels) : []
    const values = element.dataset.values ? JSON.parse(element.dataset.values) : []
    let dataCounter = 0

    const barChartData = {
      labels,
      datasets: []
    }

    values.forEach((valueArray) => {
      barChartData.datasets.push({
        backgroundColor: DEFAULT_COLORS[dataCounter] || DEFAULT_COLOR,
        hoverBackgroundColor: DEFAULT_COLORS[dataCounter + 1] || DEFAULT_COLOR,
        borderWidth: 0,
        maxBarThickness: 40,
        data: valueArray
      })
      dataCounter += 1
    })

    element.chart = new Chart(canvas, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [
            {
              stacked: true,
              maxBarThickness: 40
            }
          ],
          yAxes: [
            {
              stacked: true
            }
          ]
        },
        tooltips: {
          mode: 'index',
          enabled: false,
          custom: (tooltipModel) => {
            renderTooltip(tooltipModel, element, canvas, labels, values, DEFAULT_COLORS)
          }
        },
        pan: {
          enabled: true,
          mode: 'xy'
        },
        zoom: {
          enabled: true,
          mode: 'xy'
        }
      }
    })
  }
}
/* eslint-enable no-magic-numbers, no-new */
