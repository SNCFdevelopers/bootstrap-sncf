/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class SelectRadios {
  constructor(element) {
    const placeholder = element.querySelector('[data-role=placeholder]')
    const values = element.querySelectorAll('[data-role=value]')

    values.forEach((value) => {
      value.addEventListener('change', (event) => {
        const label = element.querySelector(`[for=${event.target.id}]`);
        placeholder.innerHTML = label.innerHTML;
      })
    })
  }
}

export default SelectRadios
