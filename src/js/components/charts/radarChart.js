import {
  DEFAULT_COLORS,
  TRANSLUCENT_DEFAULT_COLORS
} from './config'
import Chart from 'chart.js'

/* eslint-disable no-magic-numbers, no-new */
export default class RadarChart {
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

    values.forEach((value) => {
      barChartData.datasets.push({
        backgroundColor: TRANSLUCENT_DEFAULT_COLORS[dataCounter],
        borderColor: DEFAULT_COLORS[dataCounter],
        borderWidth: 2,
        pointRadius: 0,
        data: value
      })
      dataCounter += 1
    })

    element.chart = new Chart(canvas, {
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
