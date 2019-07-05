/*
 * Avoid hiding menu when changing settings
 */

const menu = document.getElementById('dropdownSettingsMenu').querySelectorAll('[data-role="stop-propagation"]')
menu.forEach((el) => {
  el.addEventListener('click', (event) => {
    event.stopPropagation()
  })
})
