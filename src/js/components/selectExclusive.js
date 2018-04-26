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
    this.menu = element.querySelector('[data-role=menu]')
    const optionsNode = element.querySelectorAll('[data-role=value]') // options
    this.currentValueNode = null

    this.collapses = element.querySelectorAll('[data-role=collapse]') // if collapse groups

    this.addContainerNode = element.querySelector('[data-role=add]')
    const addBtn = element.querySelector('[data-role=add-btn]')
    this.addInput = element.querySelector('[data-role=add-input]')

    this._addEventListeners() // ui event listeners

    optionsNode.forEach((option) => {
      if (this.inputNode.selectedIndex === Number(option.dataset.target)) {
        this._updatePlaceholder(option.innerHTML)
        this._updateOption(option)
      }

      option.addEventListener('click', (event) => {
        this._onOptionChange(event)
      })
    })

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
      this.btnNode.classList.remove('active')
    })
  }

  _addOption(value) {
    const currentValueNode = this._createOptionBtn(value)
    this._updateOption(currentValueNode)
    currentValueNode.addEventListener('click', (event) => {
      this._onOptionChange(event)
    })

    this.inputNode.add(this._createOption(value))
    this._updatePlaceholder(value)

    this.menu.insertBefore(currentValueNode, this.addContainerNode)
  }

  _createOption(value) {
    const option = document.createElement('option')
    option.value = value
    option.text = value

    return option
  }

  _createOptionBtn(value) {
    const btn = document.createElement('button')
    const btnLabel = document.createTextNode(value)
    btn.setAttribute('class', 'select-menu-item active')
    btn.setAttribute('data-role', 'value')
    btn.setAttribute('data-target', this.inputNode.length + 1)
    btn.appendChild(btnLabel)

    return btn
  }

  _updatePlaceholder(value) {
    this.placeholderNode.classList.remove('is-placeholder')
    this.placeholderNode.innerHTML = value
  }

  _updateSelect(event) {
    this.inputNode.selectedIndex = event.target.dataset.target
  }

  _updateOption(optionNode) {
    if (this.currentValueNode) {
      this.currentValueNode.classList.remove('active')
    }

    optionNode.classList.add('active')
    this.currentValueNode = optionNode
  }

  _onOptionChange = (event) => {
    event.stopPropagation()
    this._updateSelect(event)
    this._updatePlaceholder(event.target.innerHTML)
    this._updateOption(event.target)
  }
}

export default SelectExclusive
