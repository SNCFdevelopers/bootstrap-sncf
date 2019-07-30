import $ from 'jquery'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class SelectExclusive {
  constructor(element) {
    this.element = element
    this.btnNode = element.querySelector('[data-role=btn]') // arrow btn
    this.toggleNode = element.querySelector('[data-role=select-toggle]') // menu toggle trigger
    this.inputNode = element.querySelector('[data-role=input]') // select node
    this.placeholderNode = element.querySelector('[data-role=placeholder]') // placeholder
    this.selectedPrefix = this.placeholderNode.getAttribute('data-selected-prefix')
    this.menu = element.querySelector('[data-role=menu]')
    this.defaultHiddenOption = element.querySelector('[data-role=default-hidden-option]')
    this.currentValueNode = null

    this.collapses = element.querySelectorAll('[data-role=collapse]') // if collapse groups

    this.addContainerNode = element.querySelector('[data-role=add]')
    const addBtn = element.querySelector('[data-role=add-btn]')
    this.addInput = element.querySelector('[data-role=add-input]')

    this._addEventListeners() // ui event listeners

    if (addBtn && this.addInput) {
      addBtn.addEventListener('click', (event) => {
        event.stopPropagation()
        this._addOption(this.addInput.value)
        this.addInput.value = ''
      })
    }
  }

  // Private

  _addEventListeners() {
    this.toggleNode.addEventListener('click', (event) => {
      event.stopPropagation()
      this.element.classList.toggle('active')
      this.btnNode.classList.toggle('active')

      if (this.btnNode.getAttribute('aria-expanded') === 'true') {
        this.btnNode.setAttribute('aria-expanded', 'false')
      } else {
        this.btnNode.setAttribute('aria-expanded', 'true')
        this._refreshOptionsNode()
      }
    })

    this.collapses.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        // bootstrap jQuery collapse
        $(event.target.dataset.target).collapse('toggle')
      })
    })

    document.addEventListener('click', () => {
      this.element.classList.remove('active')
      this.btnNode.classList.remove('active')
      this.btnNode.setAttribute('aria-expanded', 'false')
    })
  }

  _addOption(value) {
    const currentValueNode = this._createOptionBtn(value)
    this._updateOption(currentValueNode)
    this.inputNode.add(this._createOption(value))
    this.inputNode.selectedIndex = this.defaultHiddenOption ? this.inputNode.length - 1 : this.inputNode.length // added option is always the las
    this._updatePlaceholder(value)

    this.menu.append(currentValueNode)
    currentValueNode.focus()
    this._refreshOptionsNode()
  }

  _createOption(value) {
    const option = document.createElement('option')
    option.text = value
    option.dataset.id = this.defaultHiddenOption ? this.inputNode.length : this.inputNode.length + 1

    return option
  }

  _createOptionBtn(value) {
    const btn = document.createElement('button')
    const btnLabel = document.createTextNode(value)
    btn.setAttribute('class', 'select-menu-item active')
    btn.setAttribute('data-role', 'value')
    btn.setAttribute('data-target', this.defaultHiddenOption ? this.inputNode.length : this.inputNode.length + 1)
    btn.appendChild(btnLabel)

    btn.addEventListener('click', (event) => {
      this._onOptionChange(event)
      this.element.classList.toggle('active')
      this.btnNode.classList.toggle('active')
    })

    return btn
  }

  _updatePlaceholder(value) {
    this.placeholderNode.classList.remove('is-placeholder')
    this.placeholderNode.innerHTML = `<span class="sr-only">${this.selectedPrefix}</span> ${value}`
  }

  _updateSelect(event) {
    this.inputNode.selectedIndex = event.target.dataset.target
  }

  _updateOption(optionNode) {
    if (this.currentValueNode) {
      this.currentValueNode.classList.remove('active')
      this.currentValueNode.removeAttribute('title')
    }

    optionNode.classList.add('active')
    optionNode.setAttribute('title', `${optionNode.innerHTML} active`)
    this.currentValueNode = optionNode
  }

  _onOptionChange = (event) => {
    event.stopPropagation()
    this._updateSelect(event)
    this._updatePlaceholder(event.target.innerHTML)
    this._updateOption(event.target)
  }

  _refreshOptionsNode() {
    const optionsNode = this.element.querySelectorAll('[data-role=value]') // options

    optionsNode.forEach((option) => {
      if (this.inputNode.selectedIndex === Number(option.dataset.target)) {
        this._updatePlaceholder(option.innerHTML)
        this._updateOption(option)
      }

      option.addEventListener('click', (event) => {
        this._onOptionChange(event)
        this.element.classList.remove('active')
        this.btnNode.classList.remove('active')
        this.btnNode.setAttribute('aria-expanded', 'false')
      })
    })
  }
}

export default SelectExclusive
