/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Header {
  constructor(element) {
    const menus = element.querySelectorAll('[data-role=stop-propagation]')

    menus.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        /* eslint-disable no-console */
        console.log('click')
        /* eslint-enable no-console */
        event.stopPropagation()
      })
    })
  }
}

export default Header
