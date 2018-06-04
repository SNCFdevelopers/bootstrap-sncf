/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class Schedule {
  constructor(element) {
    this.currentEvent = null
    const events = element.querySelectorAll('[data-role=event]')

    events.forEach((event) => {
      event.querySelector('[data-role=modal-event-close]').addEventListener('click', (e) => {
        e.stopPropagation()
        event.classList.remove('active')
        this.currentEvent = null
      })

      event.addEventListener('click', (e) => {
        e.stopPropagation()

        if (this.currentEvent) {
          this.currentEvent.classList.remove('active')
        }
        event.classList.toggle('active')
        this.currentEvent = event
      })
    })

    document.addEventListener('click', () => {
      if (this.currentEvent) {
        this.currentEvent.classList.remove('active')
      }
    })
  }
}

export default Schedule
