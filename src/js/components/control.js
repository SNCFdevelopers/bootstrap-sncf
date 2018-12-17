/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Control {
  constructor(element) {
    this.element = element
    const inputNode = element.querySelector('[data-role=input]')
    const counterNode = element.parentNode.querySelector('[data-role=counter]')
    this.alertElement = false
    // this.alertElement = document.createElement('div')
    // this.alertElement.setAttribute('class', 'sr-only')
    // this.alertElement.setAttribute('role', 'alert')
    // this.alertElement.innerHTML = 'Vous avez dépassé le nombre de caractères'

    if (counterNode) {
      const counterValueNode = counterNode.querySelector('[data-role=counter-value]')
      const maxLimit = counterNode.getAttribute('data-limit')

      this._toggleInvalidClass(inputNode.value.length, maxLimit)
      counterValueNode.innerHTML = inputNode.value.length

      inputNode.addEventListener('input', (event) => {
        this._toggleInvalidClass(event.target.value.length, maxLimit)
        counterValueNode.innerHTML = event.target.value.length
      })
    }

    if (element.getAttribute('data-clear-option') === 'true') {
      const btnClearNode = element.querySelector('[data-btn=clear]')
      this._handleInputClearChange(inputNode, btnClearNode)

      inputNode.addEventListener('input', () => {
        this._handleInputClearChange(inputNode, btnClearNode)
      })

      btnClearNode.addEventListener('click', () => {
        inputNode.value = ''
        btnClearNode.classList.add('d-none')
      })
    }
  }

  _toggleInvalidClass(currentValueLength, maxLimit) {
    if (currentValueLength > maxLimit) {
      this.element.classList.add('is-invalid')
      this._addAlert()
    } else {
      this.element.classList.remove('is-invalid')
      this._removeAlert()
    }
  }

  _handleInputClearChange(inputNode, btnClearNode) {
    if (inputNode.value.length > 0) {
      btnClearNode.classList.remove('d-none')
    } else {
      btnClearNode.classList.add('d-none')
    }
  }

  _addAlert() {
    if (!this.alertElement) {
      this.element.insertAdjacentHTML('afterend', '<div class="sr-only" role="alert">Vous avez dépassé le nombre de caractères</div>')
      this.alertElement = true
    }
  }

  _removeAlert() {
    if (this.alertElement) {
      this.element.parentNode.querySelector('[role=alert]').remove()
      this.alertElement = false
    }
  }
}

export default Control
