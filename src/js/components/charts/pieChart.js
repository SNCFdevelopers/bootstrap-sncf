import {
  DEFAULT_COLORS,
  DEFAULT_HEX_COLORS
} from './config'
import Chart from 'chart.js'
import {
  renderTooltip
} from './utils'

/* eslint-disable no-magic-numbers, no-new */
function hexToRgb(hex) {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)
  return result ? {
    r: parseInt(result[1], 16),
    g: parseInt(result[2], 16),
    b: parseInt(result[3], 16)
  } : null
}

function createGrad(canvas, colorsOne = '#62D7FA', opacityOne = 1, colorTwo = '#ffffff', opacityTwo = 0, colorStop = 95) {
  const colors = []
  const {
    width : canvasWidth,
    height: canvasHeight
  } = canvas.getBoundingClientRect()
  const rgbTwo = hexToRgb(colorTwo)
  colorStop /= 100

  colorsOne.forEach((color) => {
    const grd = canvas.getContext('2d').createRadialGradient(
      canvasWidth / 2,
      canvasHeight / 2,
      0.000,
      canvasWidth / 2,
      canvasWidth / 2,
      canvasWidth / 2
    )
    const rgbColor = hexToRgb(color)
    grd.addColorStop(0.000, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacityOne})`)
    grd.addColorStop(colorStop, `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${opacityOne})`)
    grd.addColorStop(colorStop, `rgba(${rgbTwo.r}, ${rgbTwo.g}, ${rgbTwo.b}, ${opacityTwo})`)
    grd.addColorStop(1.000, `rgba(${rgbTwo.r}, ${rgbTwo.g}, ${rgbTwo.b}, ${opacityTwo})`)

    colors.push(grd)
  })

  return colors
}

export default class PieChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')

    // data
    const labels = element.dataset.labels ? JSON.parse(element.dataset.labels) : []
    const values = element.dataset.values ? JSON.parse(element.dataset.values) : []
    const cutoutPercentage = element.dataset.cutoutpercentage || 0

    element.chart = new Chart(canvas, {
      type: 'pie',
      data: {
        labels,
        datasets: [{
          backgroundColor: createGrad(canvas, DEFAULT_HEX_COLORS),
          hoverBackgroundColor: DEFAULT_COLORS,
          data: values,
          borderWidth: 0
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
