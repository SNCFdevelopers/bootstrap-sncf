/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Searchbar {
  constructor(element) {
    const btnToggleNode = document.querySelector('[data-component=searchbar-toggle]')
    const btnCloseNode = element.querySelector('[data-role=close]')
    const inputNode = element.querySelector('[data-role=input]')
    const placeholder = inputNode.dataset.placeholder

    btnToggleNode.addEventListener('click', () => {
      element.classList.add('active')
      inputNode.placeholder = placeholder
      inputNode.focus()
    })

    btnCloseNode.addEventListener('click', () => {
      element.classList.remove('active')
      inputNode.placeholder = ''
      inputNode.blur()
    })
  }
}

export default Searchbar
