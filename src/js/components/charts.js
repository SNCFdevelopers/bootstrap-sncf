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
    const dataCounter = 0
    const fill = element.dataset.fill === "true" ? true : false

    var ctx = element.getContext("2d")
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
            renderTooltip(tooltipModel, this)
          }
        }
      }
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

    new Chart(element, config)
  }
}

export class BarChart {
  constructor(element) {
    var barChartData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [{
        label: 'Dataset 1',
        backgroundColor: colors[2],
        backgroundHoverColor: colors[0],
        borderWidth: 0,
        data: multiData[0]
      }, {
        label: 'Dataset 2',
        backgroundColor: colors[3],
        backgroundHoverColor: colors[1],
        borderWidth: 0,
        data: multiData[1]
      }]
    };

    new Chart(element, {
      type: 'bar',
      data: barChartData,
      options: {
        responsive: true,
        legend: {
          display: false
        },
        scales: {
          xAxes: [{
            stacked: true
          }],
          yAxes: [{
            stacked: true
          }]
        }
      }
    });
  }
}

function renderTooltip(tooltipModel, _this) {
  // Tooltip Element
  var tooltipEl = document.getElementById('chartjs-tooltip');

  // Create element on first render
  if (!tooltipEl) {
      tooltipEl = document.createElement('div');
      tooltipEl.id = 'chartjs-tooltip';
      tooltipEl.innerHTML = "<table></table>";
      document.body.appendChild(tooltipEl);
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
      console.log('tooltipModel: ', tooltipModel);

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
  var position = _this._chart.canvas.getBoundingClientRect();

  // Display, position, and set styles for font
  tooltipEl.style.opacity = 1;
  tooltipEl.style.position = 'absolute';
  tooltipEl.style.left = position.left + tooltipModel.caretX + 12 + 'px';
  tooltipEl.style.top = position.top + tooltipModel.caretY + 40 + 'px';
}
/* eslint-enable */
