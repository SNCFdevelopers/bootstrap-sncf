import * as tuichart from 'tui-chart'
import Chart from 'chart.js'

/* eslint-disable */

const month = [ 'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre' ]

export class LineChart {
  constructor(element) {
    new Chart(element, {
      type: 'line',
      data: {
        labels: month,
        datasets: [{
          label: 'Titre de la courbe',
          data: [580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480],
          backgroundColor: [
            'transparent'
          ],
          borderColor: [
            'rgb(0, 136, 204)'
          ],
          borderWidth: 3,
          pointRadius: 7,
          pointBorderColor: 'rgb(0, 136, 204)',
          pointBorderWidth: 3,
          pointBackgroundColor: 'rgb(255, 255, 255)',
          pointHoverRadius: 7,
          pointHoverBorderWidth: 3,
          pointHoverBackgroundColor: 'rgb(0, 136, 204)',
          pointHoverBorderColor: 'rgb(0, 136, 204)'
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero:true
            }
          }]
        },
        tooltips: {
          backgroundColor: 'rgba(242, 242, 242, 1)',
          titleFontFamily: 'Avenir, -apple-system',
          titleFontSize: 16,
          titleFontColor: 'rgb(77, 79, 83)',
          titleFontStyle: 'normal',
          xPadding: 16,
          yPadding: 16,
          titleMarginBottom: 10
        }
      }
    })
  }
}

export class RadialChart {
  constructor(element) {
    const data = {
      categories: [ 'Ile-de-France', 'Centre', 'Hauts-de-France', 'Bretagne', 'PACA', 'Normandie', 'Nouvelle Aquitaine', 'Bourgogne-Franche-Comté' ],
      series: [
        {
          name: 'Budget',
          data: [ 170, 180, 130, 160, 50, 150, 200, 50 ]
        }
      ]
    }

    const options = {
      theme: 'sncf',
      plot: {
        type: 'circle'
      },
      series: {
        showArea: true,
        showDot: false
      },
      chartExportMenu: {
        visible: false
      },
      legend: {
        visible: false
      },
      tooltip: {
        visible: false
      }
    }

    tuichart.radialChart(element, data, options);
  }
}
/* eslint-enable */
