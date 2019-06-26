// Toggle switch along localstorage value
if (localStorage.getItem('bootstrap-sncf-hide-source') === 'true') {
  document.getElementById('hidesource-btn').checked = true
}

document.getElementById('hidesource-btn').addEventListener('click', () => {
  toggleHideSource(true)
})
document.getElementById('hidesource-btn-off').addEventListener('click', () => {
  toggleHideSource(false)
})

function toggleHideSource(bool) {
  if (bool === 'false') {
    localStorage.setItem('bootstrap-sncf-hidesource', 'false')
    Array.from(document.getElementsByClassName('btn-clipboard')).forEach((item) => {
      item.classList.remove('d-none')
    })
    Array.from(document.getElementsByClassName('btn-show-source')).forEach((item) => {
      item.classList.remove('d-flex')
    })
    Array.from(document.getElementsByClassName('btn-hide-source')).forEach((item) => {
      item.classList.add('d-flex')
    })
    Array.from(document.getElementsByClassName('highlight')).forEach((item) => {
      item.classList.remove('d-none')
    })
  } else {
    localStorage.setItem('bootstrap-sncf-hidesource', 'true')
    Array.from(document.getElementsByClassName('btn-clipboard')).forEach((item) => {
      item.classList.add('d-none')
    })
    Array.from(document.getElementsByClassName('btn-show-source')).forEach((item) => {
      item.classList.add('d-flex')
    })
    Array.from(document.getElementsByClassName('btn-hide-source')).forEach((item) => {
      item.classList.remove('d-flex')
    })
    Array.from(document.getElementsByClassName('highlight')).forEach((item) => {
      item.classList.add('d-none')
    })
  }
}
