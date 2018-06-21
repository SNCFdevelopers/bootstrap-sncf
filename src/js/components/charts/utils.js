/* eslint-disable */
export function renderTooltip(tooltipModel, element, canvas, lineStyles = []) {
  // Tooltip Element
  console.log('tooltipModel: ', tooltipModel)
  var tooltipEl = element.querySelector('#chartjs-tooltip');

  // Create element on first render
  if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = "<table></table>";
      element.appendChild(tooltipEl);
  }

  // Hide if no tooltip
  if (tooltipModel.opacity === 0) {
      tooltipEl.style.opacity = 0;
      return;
  }

  function getBody(bodyItem) {
      return bodyItem.lines;
  }

  // Set Text
  if (tooltipModel.body) {
      var titleLines = tooltipModel.title || [];
      var bodyLines = tooltipModel.body.map(getBody);

      var innerHtml = '<thead>';

      titleLines.forEach(function(title) {
          innerHtml += '<tr><th class="chartjs-tooltip-title">' + title + '</th></tr>';
      });
      innerHtml += '</thead><tbody>';

      bodyLines.forEach(function(body, i) {
          const colors = tooltipModel.labelColors[i];
          console.log('colors: ', colors);
          const backgroundColor = `background: ${lineStyles[i] ? colors.borderColor : colors.backgroundColor};`
          const backgroundGradient = `background: linear-gradient(to right, ${colors.borderColor} 50%, transparent 50%); background-size: 4px;`
          const style = lineStyles[i] && lineStyles[i] === 'dashed' ? backgroundGradient : backgroundColor
          
          var span = `<span class='chartjs-tooltip-line-indicator' style='${style}'></span>`;
          innerHtml += '<tr><td>' + span + tooltipModel.dataPoints[i].yLabel + '</td></tr>';
      });
      innerHtml += '</tbody>';

      var tableRoot = tooltipEl.querySelector('table');
      tableRoot.innerHTML = innerHtml;
  }

  // `this` will be the overall tooltip
  var position = canvas.getBoundingClientRect();

  // console.log('position: ', position);
  // console.log('tooltipModel.caretY: ', tooltipModel.caretY);

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = tooltipModel.caretX + 12 + 'px';
  tooltipEl.style.top = tooltipModel.caretY + 40 + 'px';
  // console.log('tooltipEl.style.top: ', tooltipEl.style.top);
}
/* eslint-enable */

// draw vertical line at data point on chart on mouseover
/* eslint-disable no-magic-numbers */
export function renderVerticalLine(chart) {
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
    ctx.strokeStyle = '#1592d2'
    ctx.setLineDash([4])
    ctx.stroke()
    ctx.restore()
  }
}
/* eslint-enable no-magic-numbers */

