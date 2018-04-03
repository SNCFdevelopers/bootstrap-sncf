import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class SelectExclusive {
  constructor(element) {
    this.element = element
    this.btn = element.querySelector('[data-role=btn]')
    this.toggle = element.querySelector('[data-role=select-toggle')
    this.collapses = element.querySelectorAll('[data-role=collapse')
    const input = element.querySelector('[data-role=input]')
    const placeholder = element.querySelector('[data-role=placeholder]')
    const values = element.querySelectorAll('[data-role=value]')

    this._addEventListeners()

    values.forEach((value) => {
      value.addEventListener('click', (event) => {
        event.stopPropagation()
        input.selectedIndex = event.target.dataset.id
        placeholder.innerHTML = event.target.innerHTML
      })
    })
  }

  // Private

  _addEventListeners() {
    this.toggle.addEventListener('click', (event) => {
      event.stopPropagation()
      this.element.classList.toggle('active')
      this.btn.classList.toggle('active')
    })

    this.collapses.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        // bootstrap jQuery collapse
        $(event.target.dataset.target).collapse('toggle')
      })
    })

    this.element.addEventListener('click', (event) => {
      event.stopPropagation()
    })

    document.addEventListener('click', () => {
      this.element.classList.remove('active')
      this.btn.classList.remove('active')
    })
  }
}

export default SelectExclusive
