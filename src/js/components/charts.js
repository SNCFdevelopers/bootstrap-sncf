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
  pointHoverBackgroundColor: 'rgb(255, 255, 255)',
  pointHoverBorderColor: 'rgb(0, 136, 206)'
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
/* eslint-enable */
