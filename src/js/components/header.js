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
        event.stopPropagation()
      })
    })
  }
}

export default Header
