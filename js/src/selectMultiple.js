import $ from 'jquery'
import findIndex from '../../node_modules/lodash-es/findIndex'
import includes from '../../node_modules/lodash-es/includes'
import pull from '../../node_modules/lodash-es/pull'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class SelectMultiple {
  constructor(element) {
    this.element = element
    this.btn = element.querySelector('[data-role=btn]')
    this.toggle = element.querySelector('[data-role=select-toggle')
    this.collapses = element.querySelectorAll('[data-role=collapse')
    this.data = {}
    this.input = element.querySelector('[data-role=input]')
    this.selectedOptions = this._getSelectedOptions(this.input)
    this.placeholder = element.querySelector('[data-role=placeholder]')
    const groups = element.querySelectorAll('[data-role=group]')

    this._addEventListeners()

    groups.forEach((group) => {
      const groupId = group.dataset.id;
      const values = group.querySelectorAll('[data-role=value]')

      this.data[groupId] = {
        label: group.querySelector('[data-role=counter]'),
        currentValues: [],
        values: [],
        valuesNode: values,
        max: values.length
      }

      this.data[groupId].label.addEventListener('click', () => {
        this._handleChangeGroupState(groupId)
      })

      values.forEach((value) => {
        this.data[groupId].values.push(value.dataset.target)
        this._handleDefaultOptionState(value, groupId)

        value.addEventListener('click', () => {
          this._handleChangeOptionState(value, groupId)
        })
      })

      this._updatePlaceholder()
      this._handleGroupState(groupId)
    })

    this.placeholder.addEventListener('click', (event) => {
      console.log('click')
      event.stopPropagation()
      this._handleChangePlaceholder()
    })
  }

  // Private

  _addEventListeners() {
    this.toggle.addEventListener('click', (event) => {
      event.stopPropagation()
      this.element.classList.toggle('active')
      this.btn.classList.toggle('active')
    })

    this.collapses.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.target.classList.toggle('active')
        // bootstrap jQuery collapse
        $(event.target.dataset.target).collapse('toggle')
      })
    })

    this.element.addEventListener('click', (event) => {
      event.stopPropagation()
    })

    document.addEventListener('click', () => {
      this.element.classList.remove('active')
      this.btn.classList.remove('active')
    })
  }

  _getSelectedOptions(element) {
    // validate element
    if (!element || !element.options) {
      // or null?
      return []
    }

    // return HTML5 implementation of selectedOptions instead.
    if (element.selectedOptions) {
      return element.selectedOptions
    }

    // you are here because your browser doesn't have the HTML5 selectedOptions
    const opts = element.options
    const selectedOptions = []

    for (let i = 0; i < opts.length; i++) {
      if (opts[i].selected) {
        selectedOptions.push(opts[i])
      }
    }

    return selectedOptions
  }

  _handleDefaultOptionState(value, groupId = 0) {
    const valueId = value.dataset.target;
    const isSelected = findIndex(this.selectedOptions, (o) => { return o.dataset.id === valueId })
    this._toggleValue(value, groupId, isSelected >= 0 ? false : true)
  }

  _handleChangeOptionState(value, groupId = 0) {
    const valueId = value.dataset.target;
    const isSelected = includes(this.data[groupId].currentValues, valueId);

    this._toggleValue(value, groupId, isSelected)
  }

  _toggleValue(value, groupId, isSelected) {
    const valueId = value.dataset.target;

    if (!isSelected) {
      this.data[groupId].currentValues.push(valueId)
      value.classList.add('active')
    } else {
      pull(this.data[groupId].currentValues, valueId)
      value.classList.remove('active')
    }

    this._updatePlaceholder()
    this._handleGroupState(groupId)
  }

  _handleGroupState(groupId = 0) {
    const counter = this.data[groupId].label
    const length = this.data[groupId].currentValues.length

    if (length > 0) {
      if (length === this.data[groupId].max) {
        counter.classList.add('active')
        counter.classList.remove('indeterminate')
      } else {
        counter.classList.remove('active')
        counter.classList.add('indeterminate')
      }
    } else {
      counter.classList.remove('active')
      counter.classList.remove('indeterminate')
    }
  }

  _handleChangeGroupState(groupId) {
    if (this.data[groupId].currentValues.length === this.data[groupId].values.length) {
      this.data[groupId].label.classList.remove('active')
      this.data[groupId].label.classList.remove('indeterminate')
      this._removeValues(groupId)
    } else {
      this.data[groupId].label.classList.add('active')
      this.data[groupId].label.classList.remove('indeterminate')
      this._addValues(groupId)
    }

    this._updatePlaceholder()
  }

  _addValues(groupId) {
    this.data[groupId].currentValues = this.data[groupId].values
    this.data[groupId].valuesNode.forEach((value) => {
      value.classList.add('active')
      value.classList.remove('indeterminate')
      this.input[value.dataset.target].selected = true
    })
  }

  _removeValues(groupId) {
    this.data[groupId].currentValues = []
    this.data[groupId].valuesNode.forEach((value) => {
      value.classList.remove('active')
      value.classList.remove('indeterminate')
      this.input[value.dataset.target].selected = false
    })
  }

  _handleChangePlaceholder() {
    let totalCurrentValues = null
    let totalValues = null

    for (const key in this.data) {
      totalCurrentValues += this.data[key].currentValues.length
      totalValues += this.data[key].values.length
    }

    console.log('totalCurrentValues: ', totalCurrentValues)
    console.log('totalValues: ', totalValues)

    if (totalCurrentValues > 0) {
      for (const key in this.data) {
        this.data[key].currentValues = []
        this._handleGroupState(key)
        this._removeValues(key)
      }
    } else {
      for (const key in this.data) {
        this.data[key].currentValues = this.data[key].values
        this._handleGroupState(key)
        this._addValues(key)
      }
    }

    this._updatePlaceholder()
  }

  _updatePlaceholder() {
    let totalCurrentValues = null
    let totalValues = null

    for (const key in this.data) {
      totalCurrentValues += this.data[key].currentValues.length
      totalValues += this.data[key].values.length
    }

    if (totalCurrentValues > 0) {
      if (totalValues === totalCurrentValues) {
        this.placeholder.classList.add('active')
        this.placeholder.classList.remove('indeterminate')
      } else {
        this.placeholder.classList.remove('active')
        this.placeholder.classList.add('indeterminate')
      }
    } else {
      this.placeholder.classList.remove('active')
      this.placeholder.classList.remove('indeterminate')
    }
  }
}

export default SelectMultiple
