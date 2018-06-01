/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

/* eslint-disable no-magic-numbers */
const RADIUS = 54
const CIRCUMFERENCE = 2 * Math.PI * RADIUS
/* eslint-enable no-magic-numbers */

class RadialProgress {
  constructor(element) {
    this.control = element.querySelector('[data-role=control]')
    this.label = element.querySelector('[data-role=label]')
    this.figure = element.querySelector('[data-role=figure]')
    this.figure.style.strokeDasharray = CIRCUMFERENCE
    this.progress(this.control.value || 0)

    this.control.addEventListener('input', (event) => {
      this.progress(event.target.valueAsNumber)
    })
  }

  progress(value) {
    /* eslint-disable no-magic-numbers */
    const progress = value / 100
    /* eslint-enable no-magic-numbers */
    const dashoffset = CIRCUMFERENCE * (1 - progress)

    if (this.label) {
      this.label.innerHTML = value
    }
    this.figure.style.strokeDashoffset = dashoffset
  }
}

export default RadialProgress
