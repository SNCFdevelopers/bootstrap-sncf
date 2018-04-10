import getSelectedOptions from './../utils/getSelectedOptions'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Chips {
  constructor(element) {
    this.inputNode = element.querySelector('[data-role=input]')
    this.selectedOptions = getSelectedOptions(this.inputNode)
    this.typewriterNode = element.querySelector('[data-role=typewriter]')

    for (const key in this.selectedOptions) {
      if (Object.prototype.hasOwnProperty.call(this.selectedOptions, key)) {
        this._createChipsNode(element, this.selectedOptions[key].innerHTML, this.selectedOptions[key])
      }
    }

    if (this.typewriterNode) {
      element.addEventListener('click', () => {
        this.typewriterNode.focus()
      })

      this.typewriterNode.addEventListener('keyup', (e) => {
        /* eslint-disable no-magic-numbers */
        if (e.keyCode === 13) {
          this._createChipsNode(element, e.target.value)
        }
        /* eslint-enable no-magic-numbers */
      })
    }
  }

  _createChipsNode(element, value = 'Martin Dupond', optionNode = null) {
    const groupNode = document.createElement('div')
    const chipsLabelNode = document.createElement('span')
    const chipsLabelContent = document.createTextNode(value)
    const chipsBtnNode = document.createElement('button')
    const chipsBtnRemove = document.createElement('span')
    const chipsBtnRemoveContent = document.createTextNode('Remove')
    const chipsIcon = document.createElement('i')

    if (!optionNode) {
      const optionNode = document.createElement('option')
      optionNode.value = value
      optionNode.text = value
      optionNode.selected = true
      this.inputNode.add(optionNode)
    }

    groupNode.setAttribute('class', 'chips-group')
    groupNode.setAttribute('class', 'chips-group')
    chipsLabelNode.setAttribute('class', 'chips chips-label')
    chipsBtnNode.setAttribute('class', 'chips chips-btn chips-only-icon')
    chipsBtnRemove.setAttribute('class', 'sr-only')
    chipsIcon.setAttribute('class', 'icons-close')

    chipsBtnNode.addEventListener('click', () => this._destroyChipsNode(element, optionNode, groupNode))

    chipsLabelNode.appendChild(chipsLabelContent)
    chipsBtnRemove.appendChild(chipsBtnRemoveContent)
    chipsBtnNode.appendChild(chipsBtnRemove)
    chipsBtnNode.appendChild(chipsIcon)
    groupNode.appendChild(chipsLabelNode)
    groupNode.appendChild(chipsBtnNode)

    element.insertBefore(groupNode, this.typewriterNode)
    this.typewriterNode.value = ''
  }

  _destroyChipsNode = (element, optionNode, chips) => {
    element.removeChild(chips)
    optionNode.selected = false
  }
}

export default Chips
