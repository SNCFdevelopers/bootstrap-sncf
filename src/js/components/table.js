/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Table {
  constructor(element) {
    element.addEventListener('click', (event) => {
      if (event.target.getAttribute('data-role') === 'toggle-group-btn') {
        const index = event.target.dataset.id
        event.target.classList.toggle('active')
        element.querySelectorAll('[data-trgroup]').forEach((item) => {
          if (item.dataset.trgroup === index) {
            item.classList.toggle('active')
          }
        })
      }
    })
  }
}

export default Table
