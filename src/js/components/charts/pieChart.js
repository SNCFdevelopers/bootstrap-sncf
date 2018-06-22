import Chart from 'chart.js'
import {
  DEFAULT_COLORS
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
    const values = element.dataset.values ? JSON.parse(element.dataset.values) : []
    const cutoutPercentage = element.dataset.cutoutpercentage || 0

    new Chart(canvas, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          backgroundColor: DEFAULT_COLORS,
          hoverBackgroundColor: DEFAULT_COLORS,
          hoverBorderColor: DEFAULT_COLORS,
          data: values,
          borderWidth: 0,
          hoverBorderWidth: 4
        }]
      },
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
            renderTooltip(tooltipModel, element, canvas, labels, values, DEFAULT_COLORS)
          }
        }
      }
    })
  }
}
/* eslint-enable no-magic-numbers, no-new */
