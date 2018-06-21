import Chart from 'chart.js'

/* eslint-disable */
const month = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ]
const data = [580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480]
const multiData = [
  [580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480],
  [500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]
]

const colors = [
  'rgb(29, 136, 202)',
  'rgb(45, 160, 217)',
  'rgb(114, 191, 230)',
  'rgb(140, 202, 234)',
  'rgb(179, 221, 243)',
  'rgb(217, 238, 250)'
]

const pointConfig = {
  pointRadius: 7, // point size
  pointBorderColor: 'rgb(0, 136, 206)',
  pointBorderWidth: 3,
  pointBackgroundColor: 'rgb(255, 255, 255)',
  pointHoverRadius: 7,
  pointHoverBorderWidth: 3,
  pointHoverBackgroundColor: 'rgb(0, 136, 206)',
  pointHoverBorderColor: 'rgb(0, 136, 206)'
}

const pointHoverConfig = {
  pointRadius: 7, // point size
  pointBorderColor: 'transparent',
  pointBorderWidth: 3,
  pointBackgroundColor: 'transparent',
  pointHoverRadius: 7,
  pointHoverBorderWidth: 3,
  pointHoverBackgroundColor: 'rgb(0, 136, 206)',
  pointHoverBorderColor: 'rgb(0, 136, 206)'
}

export class LineChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')
    const dataCounter = 0
    const fill = element.dataset.fill === "true" ? true : false

    var ctx = canvas.getContext("2d")
    var gradientStroke = ctx.createLinearGradient(0, 400, 0, 0)
    gradientStroke.addColorStop(0, 'rgba(255, 255, 255, 0)')
    gradientStroke.addColorStop(1, 'rgb(29, 136, 202)')

    const config = {
      type: 'line',
      data: {
        datasets: [],
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        legend: {
          display: false
        },
        tooltips: {
          enabled: false,
          custom: function(tooltipModel) {
            renderTooltip(tooltipModel, element, canvas)
          }
        }
      },
      plugins: [{
        afterDatasetsDraw: function(chart) {
          if (chart.tooltip._active && chart.tooltip._active.length) {
            var activePoint = chart.tooltip._active[0],
                ctx = chart.ctx,
                y_axis = chart.scales['y-axis-0'],
                x = activePoint.tooltipPosition().x,
                topY = y_axis.top,
                bottomY = y_axis.bottom;

            // draw line
            ctx.save();
            ctx.beginPath();
            ctx.moveTo(x, topY);
            ctx.lineTo(x, bottomY);
            ctx.lineWidth = 1;
            ctx.strokeStyle = '#1592d2';
            ctx.setLineDash([4]);
            ctx.stroke();
            ctx.restore();
          }
        }
      }]
    }

    if (fill) {
      config.data.datasets.push({
        ...config.data.datasets[0],
        backgroundColor: gradientStroke,
        borderColor: gradientStroke,
        borderWidth: 1,
        pointRadius: 0
      })
    } else {
      config.data.datasets.push({
        ...config.data.datasets[0],
        ...pointConfig,
        backgroundColor: ['transparent'],
        borderColor: [colors[0]],
        borderWidth: 3 // line width
      })
    }

    config.labels = month
    config.data.labels = month,
    config.data.datasets[0] = {
      ...config.data.datasets[0],
      data: data,
    }

    new Chart(canvas, config)
  }
}

export class BarChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')
    var barChartData = {
      labels: month,
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: colors[3],
        hoverBackgroundColor: colors[0],
        borderWidth: 0,
        data: [400, 500, 250, 300, 700, 600, 100, 200, 700, 180, 300, 600]
      }, {
        label: 'Dataset 2',
        backgroundColor: colors[4],
        hoverBackgroundColor: colors[2],
        borderWidth: 0,
        data: [400, 300, 550, 500, 100, 200, 700, 600, 100, 620, 500, 200]
      }]
    };

    new Chart(canvas, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        legend: { display: false },
        scales: {
          xAxes: [{ stacked: true }],
          yAxes: [{ stacked: true }]
        },
        tooltips: {
          mode: 'index',
          enabled: false,
          custom: function(tooltipModel) {
            renderTooltip(tooltipModel, element, canvas)
          }
        }
      }
    });
  }
}

export class PieChart {
  constructor(element) {
    const canvas = element.querySelector('canvas')
    const cutoutPercentage = element.dataset.cutoutpercentage || 0
    var chartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: colors,
        data: [580, 400, 500, 600, 700, 800],
        borderWidth: 0,
      }]
    };

    new Chart(canvas, {
      type: 'pie',
      data: chartData,
      options: {
        cutoutPercentage: cutoutPercentage,
        responsive: true,
        legend: {
          display: false
        }
      }
    });
  }
}

function renderTooltip(tooltipModel, element, canvas) {
  // Tooltip Element
  var tooltipEl = element.querySelector('#chartjs-tooltip');
  // console.log('tooltipModel: ', tooltipModel);

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
          var colors = tooltipModel.labelColors[i];
          var style = `background: ${colors.backgroundColor};`
          var span = '<span class="chartjs-tooltip-line-indicator" style="' + style + '"></span>';
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
