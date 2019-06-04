import Chart from 'chart.js'
Chart.defaults.global.legend.display = false

export const month = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre']

export const DEFAULT_COLOR = 'rgb(203, 2, 11)'

export const DEFAULT_COLORS = [
  'rgb(29, 136, 202)',
  'rgb(45, 160, 217)',
  'rgb(114, 191, 230)',
  'rgb(140, 202, 234)',
  'rgb(179, 221, 243)',
  'rgb(217, 238, 250)'
]

export const DEFAULT_HEX_COLORS = [
  '#1D88CA',
  '#2DA0D9',
  '#72BFE6',
  '#8CCAEA',
  '#B3DDF3',
  '#D9EEFA'
]

export const TRANSLUCENT_DEFAULT_COLORS = [
  'rgb(29, 136, 202, .2)',
  'rgb(45, 160, 217, .2)',
  'rgb(114, 191, 230, .2)',
  'rgb(140, 202, 234, .2)',
  'rgb(179, 221, 243, .2)',
  'rgb(217, 238, 250, .2)'
]

export const pointConfig = {
  pointRadius: 7, // point size
  pointBorderColor: 'rgb(0, 136, 206)',
  pointBorderWidth: 3,
  pointBackgroundColor: 'rgb(255, 255, 255)',
  pointHoverRadius: 7,
  pointHoverBorderWidth: 3,
  pointHoverBackgroundColor: 'rgb(0, 136, 206)',
  pointHoverBorderColor: 'rgb(0, 136, 206)'
}

export const pointHoverConfig = {
  pointRadius: 7, // point size
  pointBorderColor: 'transparent',
  pointBorderWidth: 3,
  pointBackgroundColor: 'transparent',
  pointHoverRadius: 7,
  pointHoverBorderWidth: 3,
  pointHoverBackgroundColor: 'rgb(255, 255, 255)',
  pointHoverBorderColor: 'rgb(0, 136, 206)'
}
