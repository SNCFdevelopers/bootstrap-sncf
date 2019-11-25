import * as data from './example-api.json'
import slugify from '@sindresorhus/slugify'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Menu {
  constructor(element) {
    const container = element.querySelector('[data-role=summary]')
    const breadcrumb = document.querySelector('[data-role=breadcrumb]')
    const breadcrumbLink = document.querySelector('[data-role=breadcrumb-link]')
    const formattedData = this.getFormattedData(data)
    const rowsMarkup = Object.keys(formattedData).map((key) => formattedData[key].rows).join('') // Object.values() is not supported in IE11 :/
    const hash = window.location.hash

    if (hash) {
      Object.keys(formattedData).forEach((key) => {
        if (hash.replace(/#/g, '') === key) {
          const item = formattedData[key]
          container.innerHTML = item.content
          breadcrumbLink.classList.remove('active')
          breadcrumbLink.classList.add('cursor-pointer')
          breadcrumb.append(this.createBreadcrumbElem(item.title))
        }
      })
    } else {
      this.addRowsMarkup(container, rowsMarkup, formattedData, breadcrumb, breadcrumbLink)
    }

    breadcrumbLink.addEventListener('click', () => {
      if (!breadcrumbLink.classList.contains('active')) {
        breadcrumb.removeChild(breadcrumb.lastChild)
        breadcrumbLink.classList.add('active')
        window.location.hash = ''
        this.addRowsMarkup(container, rowsMarkup, formattedData, breadcrumb, breadcrumbLink)
      }
    })
  }

  getFormattedData(data) {
    const formatedData = {}
    Object.keys(data.default).forEach((key) => {
      const row = data.default[key]
      const id = slugify(row.title)

      formatedData[id] = {
        title: row.title,
        rows: this.createRowMarkup(row, id),
        content: row.below ? row.below.map((item) => this.createRowMarkup(item)).join('') : null
      }
    })

    return formatedData
  }

  addRowsMarkup(container, markup, formattedData, breadcrumb, breadcrumbLink) {
    container.innerHTML = markup
    this.addListeners(container, formattedData, breadcrumb, breadcrumbLink)
  }

  createRowMarkup(row, key) {
    if (!key || row.option && row.option.external) {
      return `<a class="col-12 col-md-6" data-role="button" href="${row.absolute}" target="_blank">
        <div class="d-flex align-items-end gr-md-4 gb-6 cursor-pointer">
          <div class="gr-3 text-gray200 pb-2">
            <i class="icons-large-clock icons-size-66px" aria-hidden="true"></i>
          </div>
          <div>
            <h2 class="display-3 d-flex align-items-center text-primary">${row.title} <i class="icons-arrow-next icons-size-1x pl-2" aria-hidden="true"></i></h2>
            <p class="text-lg mb-0">${row.description}</p>
          </div>
        </div>
      </a>`
    }

    return `<div class="col-12 col-md-6" data-role="button" data-id="${key}">
      <div class="d-flex align-items-end gr-md-4 gb-6 cursor-pointer">
        <div class="gr-3 text-gray200 pb-2">
          <i class="icons-large-clock icons-size-66px" aria-hidden="true"></i>
        </div>
        <div>
          <h2 class="display-3 d-flex align-items-center text-primary">${row.title} <i class="icons-arrow-next icons-size-1x pl-2" aria-hidden="true"></i></h2>
          <p class="text-lg mb-0">${row.description}</p>
        </div>
      </div>
    </div>`
  }

  createBreadcrumbElem(label) {
    const elem = document.createElement('li')
    elem.className = 'breadcrumb-item active'
    elem.setAttribute('aria-current', 'page')
    elem.setAttribute('data-role', 'link')
    elem.textContent = label
    return elem
  }

  addListeners(container, data, breadcrumb, breadcrumbLink) {
    container.querySelectorAll('[data-role=button]')
      .forEach((btn) => btn.addEventListener('click', () => {
        const id = btn.getAttribute('data-id')
        const item = data[id]
        window.location.hash = id
        container.innerHTML = item.content
        breadcrumbLink.classList.remove('active')
        breadcrumbLink.classList.add('cursor-pointer')
        breadcrumb.append(this.createBreadcrumbElem(item.title))
      }))
  }
}

export default Menu
