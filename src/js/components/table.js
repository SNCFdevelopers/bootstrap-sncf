/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Table {
  constructor(element) {
    const headGroups = element.querySelectorAll('[data-role=trhead]')
    const groupItems = element.querySelectorAll('[data-trgroup]')

    headGroups.forEach((group) => {
      group.addEventListener('click', (event) => {
        const index = event.currentTarget.dataset.id
        event.currentTarget.classList.toggle('active')
        groupItems.forEach((item) => {
          if (item.dataset.trgroup === index) {
            item.classList.toggle('active')
          }
        })
      })
    })
  }
}

export default Table
