import Chart from 'chart.js'
import {
  colors
} from './config'
import {
  renderTooltip
} from './utils'

/* eslint-disable no-magic-numbers, no-new */
export default class PieChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')

    // data
    const labels = element.dataset.labels ? JSON.parse(element.dataset.labels) : []
    const valuesArray = element.dataset.values ? JSON.parse(element.dataset.values) : []
    const cutoutPercentage = element.dataset.cutoutpercentage || 0

    const chartData = {
      labels,
      datasets: [{
        backgroundColor: colors,
        data: valuesArray,
        borderWidth: 0
      }]
    }

    new Chart(canvas, {
      type: 'pie',
      data: chartData,
      options: {
        cutoutPercentage,
        responsive: true,
        legend: {
          display: false
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
