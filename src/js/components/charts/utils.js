import {
  DEFAULT_COLOR
} from './config'
const DASHED_LINE = 'dashed'

/* eslint-disable */
export function renderTooltip(
  tooltipModel,
  element,
  canvas,
  labels = [],
  values = [],
  colors = [],
  lineStyles = []
) {
  let tooltipEl = element.querySelector('#chartjs-tooltip');

  // create element on first render
  if (!tooltipEl) {
    tooltipEl = document.createElement('div')
    tooltipEl.id = 'chartjs-tooltip'
    tooltipEl.innerHTML = "<table></table>"
    element.appendChild(tooltipEl)
  }

  // Hide if no tooltip
  if (tooltipModel.opacity === 0) {
    tooltipEl.style.opacity = 0
    return
  }

  function getBody(bodyItem) {
    return bodyItem.lines;
  }

  // set content
  if (tooltipModel.body) {
    const titleLines = tooltipModel.title.length > 0 ? tooltipModel.title : [labels[tooltipModel.dataPoints[0].index]]
    const bodyLines = tooltipModel.body.map(getBody)

    let innerHtml = '<thead>'
    titleLines.forEach((title) => {
      innerHtml += `<tr><th class="chartjs-tooltip-title">${title}</th></tr>`
    })
    innerHtml += '</thead><tbody>'
    bodyLines.forEach((body, i) => {
      const currentColor = colors[i] || DEFAULT_COLOR
      const currentValue = tooltipModel.dataPoints[i].yLabel !== '' ? tooltipModel.dataPoints[i].yLabel : values[i]

      const backgroundColor = `background: ${currentColor};`
      const backgroundGradient = `background: linear-gradient(to right, ${currentColor} 50%, transparent 50%); background-size: 4px;`
      const style = lineStyles[i] && lineStyles[i] === DASHED_LINE ? backgroundGradient : backgroundColor
      
      var span = `<span class='chartjs-tooltip-line-indicator' style='${style}'></span>`
      innerHtml += '<tr><td>' + span + currentValue + '</td></tr>'
    })
    innerHtml += '</tbody>';

    let tableRoot = tooltipEl.querySelector('table');
    tableRoot.innerHTML = innerHtml;
  }

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = tooltipModel.caretX + 12 + 'px';
  tooltipEl.style.top = tooltipModel.caretY + 40 + 'px';
}
/* eslint-enable */

// draw vertical line at data point on chart on mouseover
/* eslint-disable no-magic-numbers */
export function renderVerticalLine(chart, color) {
  if (chart.tooltip._active && chart.tooltip._active.length) {
    const activePoint = chart.tooltip._active[0]
    const ctx = chart.ctx
    const yAxis = chart.scales['y-axis-0']
    const x = activePoint.tooltipPosition().x
    const topY = yAxis.top
    const bottomY = yAxis.bottom

    // draw line
    ctx.save()
    ctx.beginPath()
    ctx.moveTo(x, topY)
    ctx.lineTo(x, bottomY)
    ctx.lineWidth = 1
    ctx.strokeStyle = color || '#1592d2'
    ctx.setLineDash([4])
    ctx.stroke()
    ctx.restore()
  }
}
/* eslint-enable no-magic-numbers */

