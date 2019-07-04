// Toggle switch along localstorage value
if (localStorage.getItem('bootstrap-sncf-hide-source') === 1) {
  document.getElementById('hidesource-btn').checked = 1
}

document.getElementById('hidesource-btn').addEventListener('click', () => {
  toggleHideSource(1)
})
document.getElementById('hidesource-btn-off').addEventListener('click', () => {
  toggleHideSource(0)
})

function toggleHideSource(bool) {
  if (bool === 0) {
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
    Array.from(document.getElementsByClassName('bd-clipboard')).forEach((item) => {
      item.classList.add('bd-clipboard-bg-light')
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
    Array.from(document.getElementsByClassName('bd-clipboard')).forEach((item) => {
      item.classList.remove('bd-clipboard-bg-light')
    })
  }
}
