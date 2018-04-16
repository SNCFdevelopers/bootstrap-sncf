/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Nav {
  constructor(element) {
    this.element = element
    this.currentLink = null
    this.currentTarget = null
    const links = element.querySelectorAll('[data-link]')

    links.forEach((link) => {
      link.addEventListener('click', (event) => {
        this.handleLinkEvent(event)
      })
    })
  }

  handleLinkEvent = (event) => {
    if (this.currentLink) {
      this.currentLink.classList.remove('active')
    }

    if (this.currentTarget) {
      this.currentTarget.classList.remove('active')
    }

    this.currentLink = event.target
    this.currentTarget = this.element.querySelector(event.target.dataset.target)
    this.currentTarget.classList.toggle('active')
    this.currentLink.classList.toggle('active')
  }
}

export default Nav
