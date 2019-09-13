import 'bootstrap'
import 'whatwg-fetch'
import './docs/application.js'
import './docs/ie-emulation-modes-warning.js'
import './docs/stop-propagation.js'
// import './docs/pwa.js'
import './docs/darkmode.js'
import './docs/hidesource.js'
import IconsGenerator from './docs/icons.js'

document.addEventListener('DOMContentLoaded', () => {
  // data components
  const dataComponent = '[data-component]'
  const dataIconsGenerator = 'icons-generator'

  const components = document.querySelectorAll(dataComponent)

  components.forEach((component) => {
    /* eslint-disable no-new */
    if (component.dataset.component === dataIconsGenerator) {
      new IconsGenerator(component)
    }
  })
})
