/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Control {
  constructor(element) {
    const input = element.querySelector('[data-role=input]')

    if (element.getAttribute('data-clear-option') === "true") {
      const btnClear = element.querySelector('[data-btn=clear]');

      input.addEventListener('input', (event) => {
        if (input.value.length > 0) {
          btnClear.classList.remove('d-none')
        } else {
          btnClear.classList.add('d-none')
        }
      })
      
      btnClear.addEventListener('click', () => {
        input.value = ""
        btnClear.classList.add('d-none')
      })
    }
  }
}

export default Control