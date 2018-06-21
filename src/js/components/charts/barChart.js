import Chart from 'chart.js'
import {
  colors
} from './config'
import {
  renderTooltip
} from './utils'

/* eslint-disable no-magic-numbers, no-new */
export default class BarChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')

    // data
    const labels = element.dataset.labels ? JSON.parse(element.dataset.labels) : []
    const valuesArray = element.dataset.values ? JSON.parse(element.dataset.values) : []

    let dataCounter = 0

    const barChartData = {
      labels,
      datasets: []
    }

    valuesArray.forEach((valueArray) => {
      barChartData.datasets.push({
        label: `Dataset ${dataCounter}`,
        backgroundColor: colors[dataCounter],
        hoverBackgroundColor: colors[dataCounter + 1],
        borderWidth: 0,
        data: valueArray
      })
      dataCounter += 1
    })

    new Chart(canvas, {
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
              stacked: true
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
            renderTooltip(tooltipModel, element, canvas)
          }
        }
      }
    })
  }
}
/* eslint-enable no-magic-numbers, no-new */
