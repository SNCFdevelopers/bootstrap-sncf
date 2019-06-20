/*
 * Avoid hiding menu when changing settings
 */

const menu = document.getElementById('dropdownSettingsMenu')
menu.addEventListener('click', (event) => {
  event.stopPropagation()
})
