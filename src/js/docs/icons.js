/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

const api = 'http://0.0.0.0:3000/api'
const download = `${api}/download`

class IconsGenerator {
  constructor(element) {
    this.element = element
    const data = {
      withFont: true,
      withPng: true
    }
    const container = element.querySelector('[data-role=container]')
    const colors = element.querySelectorAll('[data-role=color]')
    const icons = element.querySelectorAll('[data-role=icon')
    const downloadBtn = element.querySelector('[data-role=download]')
    const pngInput = element.getElementById('png')
    const svgInput = element.getElementById('svg')

    colors.forEach((elem) => {
      const color = elem.getAttribute('data-color')
      elem.addEventListener('click', () => {
        container.style.color = color
        data.withColor = color
      })
    })

    icons.forEach((elem) => {
      const icon = elem.getAttribute('data-icon')
      elem.addEventListener('click', () => {
        if (!data.icons || !Array.isArray(data.icons)) {
          data.icons = []
        }

        if (elem.classList.contains('selected')) {
          const index = data.icons.indexOf(icon)
          if (index > -1) {
            data.icons.splice(index, 1)
          }
        } else {
          data.icons.push(icon)
        }

        elem.classList.toggle('selected')
        this.handleBtnState(downloadBtn, data)
      })
    })

    downloadBtn.addEventListener('click', () => {
      this.handleDownload(downloadBtn, data)
    })

    pngInput.addEventListener('change', () => {
      if (pngInput.checked) {
        data.withPng = true
      } else {
        data.withPng = false
      }
    })

    svgInput.addEventListener('change', () => {
      if (svgInput.checked) {
        data.withSvg = true
      } else {
        data.withSvg = false
      }
    })
  }

  handleDownload(btn, data) {
    this.disableBtn(btn)

    window.fetch(download, {
      method: 'POST',
      mode: 'cors',
      body: JSON.stringify(data),
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then((response) => response.json())
      .then((data) => {
        /* eslint-disable no-console */
        console.log('data: ', data)
        window.open(`${download}/${data}`)
      })
      // .then(() => window.open('http://0.0.0.0:3000/api/download/ace35159081a0dec2676862bf2beacc6b55fb9e6'))
  }

  disableBtn(btn) {
    btn.style['pointer-event'] = 'none'
  }

  enableBtn(btn) {
    btn.style['pointer-event'] = 'initial'
  }

  handleBtnState(btn, data) {
    if (data.icons && data.icons.length > 0) {
      btn.removeAttribute('disabled')
    } else {
      btn.setAttribute('disabled', true)
    }
  }
}

export default IconsGenerator
