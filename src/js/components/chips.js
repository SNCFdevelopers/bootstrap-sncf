import getSelectedOptions from './../utils/getSelectedOptions'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Chips {
  constructor(element) {
    this.element = element
    this.inputNode = element.querySelector('[data-role=input]')
    this.defaultValues = JSON.parse(this.element.getAttribute('data-values')) || []
    this.selectedOptions = getSelectedOptions(this.inputNode)
    this.typewriterNode = element.querySelector('[data-role=typewriter]')
    this.values = {}
    this.count = 0

    this.defaultValues.forEach((value) => {
      this._createChipsNode(element, value)
    })

    if (this.typewriterNode) {
      element.addEventListener('click', () => {
        this.typewriterNode.focus()
      })

      this.typewriterNode.addEventListener('keyup', (e) => {
        /* eslint-disable no-magic-numbers */
        if (e.keyCode === 13) {
          if (this.typewriterNode.value !== '') {
            this._createChipsNode(element, e.target.value)
          }
        }
        /* eslint-enable no-magic-numbers */
      })
    }
  }

  // Public
  getValues() {
    return Object.keys(this.values).map((key) => this.values[key])
  }

  addChips(value) {
    this._createChipsNode(this.element, value)
  }

  destroyChips(node) {
    this._destroyChipsNode(this.element, node)
  }

  // Private
  _createChipsNode(element, value = 'Martin Dupond') {
    const groupNode = document.createElement('div')
    const chipsLabelNode = document.createElement('span')
    const chipsLabelContent = document.createTextNode(value)
    const chipsBtnNode = document.createElement('button')
    const chipsBtnRemove = document.createElement('span')
    const chipsBtnRemoveContent = document.createTextNode(`Remove ${value}`)
    const chipsIcon = document.createElement('i')
    const id = `chips-${this.count}`

    groupNode.setAttribute('id', id)
    groupNode.setAttribute('class', 'chips-group')
    groupNode.setAttribute('class', 'chips-group')
    chipsLabelNode.setAttribute('class', 'chips chips-label')
    chipsBtnNode.setAttribute('class', 'chips chips-btn chips-only-icon')
    chipsBtnRemove.setAttribute('class', 'sr-only')
    chipsIcon.setAttribute('class', 'icons-close')
    chipsIcon.setAttribute('aria-hidden', 'true')

    chipsBtnNode.addEventListener('click', (e) => {
      e.preventDefault()
      this._destroyChipsNode(element, groupNode)
    })

    chipsLabelNode.appendChild(chipsLabelContent)
    chipsBtnRemove.appendChild(chipsBtnRemoveContent)
    chipsBtnNode.appendChild(chipsBtnRemove)
    chipsBtnNode.appendChild(chipsIcon)
    groupNode.appendChild(chipsLabelNode)
    groupNode.appendChild(chipsBtnNode)

    this.values[id] = value
    element.insertBefore(groupNode, this.typewriterNode)
    this.typewriterNode.value = ''

    this.count += 1
    this.element = element
  }

  _destroyChipsNode = (element, chips) => {
    delete this.values[chips.getAttribute('id')]
    element.removeChild(chips)
    this.element = element
  }
}

export default Chips
