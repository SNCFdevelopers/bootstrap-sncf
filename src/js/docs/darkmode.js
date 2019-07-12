// Toggle switch along localstorage value
if (localStorage.getItem('bootstrap-sncf-css-name') === 'dark') {
  document.getElementById('darkmode-btn').checked = true
}

document.querySelectorAll('.darkmode-btn').forEach((item) => {
  item.addEventListener('click', () => {
    toggleDarkmode()
  })
})

function toggleDarkmode() {
  const activecss = document.getElementById('activecss')
  const inactivecss = document.getElementById('inactivecss')
  const oldhref = activecss.getAttribute('href')
  const newhref = inactivecss.getAttribute('href')
  const name = inactivecss.getAttribute('name')
  activecss.setAttribute('href', newhref)
  inactivecss.setAttribute('href', oldhref)
  localStorage.setItem('bootstrap-sncf-css-name', name)
}

