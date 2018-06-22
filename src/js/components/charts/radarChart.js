import Chart from 'chart.js'
import {
  colors,
  translucentColors
} from './config'
import {
  renderTooltip
} from './utils'

/* eslint-disable no-magic-numbers, no-new */
export default class RadarChart {
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
        backgroundColor: translucentColors[dataCounter],
        borderColor: colors[dataCounter],
        borderWidth: 2,
        pointRadius: 0,
        data: valueArray
      })
      dataCounter += 1
    })

    new Chart(canvas, {
      type: 'radar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          display: false
        }
      }
    })
  }
}
/* eslint-enable no-magic-numbers, no-new */
