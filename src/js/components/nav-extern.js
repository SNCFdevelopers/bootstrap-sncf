/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Nav {
  constructor(element) {
    this.element = element
    this.currentMainToggle = null
    this.currentMainTarget = null
    this.currentSubToggle = null
    this.currentSubTarget = null
    const mainToggles = element.querySelectorAll('[data-role=main-toggle]')
    const subToggles = element.querySelectorAll('[data-role=sub-toggle]')
    const closeBtns = element.querySelectorAll('[data-role=close]')
    const prevBtns = element.querySelectorAll('[data-role=prev]')
    const menus = element.querySelectorAll('[data-role=stop-propagation]')
    const burger = element.querySelector('[data-role=burger]')
    const menu = element.querySelector('[data-role=menu]')
    const actionbarMenu = element.querySelector('[data-role=actionbar-menu]')

    menus.forEach((menu) => {
      menu.addEventListener('click', (event) => {
        event.stopPropagation()
      })
    })

    burger.addEventListener('click', () => {
      burger.classList.toggle('active')
      actionbarMenu.classList.toggle('active')
    })

    mainToggles.forEach((toggle) => {
      toggle.addEventListener('click', (event) => {
        event.stopPropagation()
        this.handleMainToggEvent(event)
      })
    })

    subToggles.forEach((toggle) => {
      toggle.addEventListener('click', (event) => {
        event.stopPropagation()
        this.handleSubToggEvent(event)
      })
    })

    closeBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation()
        this.handleCloseEvent()
      })
    })

    prevBtns.forEach((btn) => {
      btn.addEventListener('click', (event) => {
        event.stopPropagation()
        this.handlePrevEvent()
      })
    })

    menu.addEventListener('click', (event) => {
      event.stopPropagation()
    })

    document.addEventListener('click', () => {
      if (this.currentMainToggle) {
        this.currentMainToggle.classList.remove('active')
        this.currentMainToggle = null
      }

      if (this.currentMainTarget) {
        this.currentMainTarget.classList.remove('active')
        this.currentMainTarget = null
      }

      if (this.currentSubToggle) {
        this.currentSubToggle.classList.remove('active')
        this.currentSubToggle = null
      }

      if (this.currentSubTarget) {
        this.currentSubTarget.classList.remove('active')
        this.currentSubTarget = null
      }
    })
  }

  handleMainToggEvent = (event) => {
    if (this.currentMainToggle) {
      this.currentMainToggle.classList.remove('active')
    }

    if (this.currentMainTarget) {
      this.currentMainTarget.classList.remove('active')
    }

    if (this.currentSubToggle) {
      this.currentSubToggle.classList.remove('active')
      this.currentSubToggle = null
    }

    if (this.currentSubTarget) {
      this.currentSubTarget.classList.remove('active')
      this.currentSubTarget = null
    }

    if (this.currentMainToggle !== event.target) {
      this.currentMainToggle = event.target
      this.currentMainTarget = this.element.querySelector(event.target.dataset.target)
      this.currentMainToggle.classList.toggle('active')
      this.currentMainTarget.classList.toggle('active')
    } else {
      this.currentMainToggle = null
      this.currentMainTarget = null
    }
  }

  handleSubToggEvent = (event) => {
    if (this.currentSubToggle) {
      this.currentSubToggle.classList.remove('active')
      this.currentSubToggle.setAttribute('aria-expanded', 'false')
    }

    if (this.currentSubTarget) {
      this.currentSubTarget.classList.remove('active')
    }

    this.currentSubToggle = event.target
    this.currentSubTarget = this.element.querySelector(event.target.dataset.target)
    this.lastEntry = this.currentSubTarget
    this.currentSubToggle.classList.toggle('active')
    this.currentSubTarget.classList.toggle('active')
    this.currentSubToggle.setAttribute('aria-expanded', 'true')
  }

  handleCloseEvent = () => {
    if (this.currentMainToggle) {
      this.currentMainToggle.classList.remove('active')
      this.currentMainToggle = null
    }

    if (this.currentMainTarget) {
      this.currentMainTarget.classList.remove('active')
      this.currentMainTarget = null
    }

    if (this.currentSubToggle) {
      this.currentSubToggle.classList.remove('active')
      this.currentSubToggle = null
    }

    if (this.currentSubTarget) {
      this.currentSubTarget.classList.remove('active')
      this.currentSubTarget = null
    }
  }

  handlePrevEvent = () => {
    if (this.currentSubToggle && this.currentSubTarget) {
      this.currentSubToggle.classList.remove('active')
      this.currentSubToggle = null
      this.currentSubTarget.classList.remove('active')
      this.currentSubTarget = null
    } else if (this.currentMainToggle && this.currentMainTarget) {
      this.currentMainToggle.classList.remove('active')
      this.currentMainToggle = null
      this.currentMainTarget.classList.remove('active')
      this.currentMainTarget = null
    }
  }
}

export default Nav
