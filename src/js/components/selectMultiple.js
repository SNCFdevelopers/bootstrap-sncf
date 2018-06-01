import $ from 'jquery'
import findIndex from 'lodash/findIndex'
import getSelectedOptions from './../utils/getSelectedOptions'
import includes from 'lodash/includes'
import pull from 'lodash/pull'

const ACTIVE_CLASS = 'active'
const INDETERMINATE_CLASS = 'indeterminate'

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class SelectMultiple {
  constructor(element) {
    this.element = element

    this.btn = element.querySelector('[data-role=btn]')
    this.toggle = element.querySelector('[data-role=select-toggle]')

    this.input = element.querySelector('[data-role=input]')
    this.placeholder = element.querySelector('[data-role=placeholder]')
    const groups = element.querySelectorAll('[data-role=group]')

    this.collapses = element.querySelectorAll('[data-role=collapse]')

    this.selectedOptions = getSelectedOptions(this.input)
    this.store = {}
    this.count = {
      values: 0,
      currentValues: 0
    }

    this._addEventListeners()

    groups.forEach((group) => {
      const id = group.dataset.id
      const labelNode = group.querySelector('[data-role=counter]')
      const valueNodeList = group.querySelectorAll('[data-role=value]')

      this.store[id] = {
        values: [],
        currentValues: [],
        labelNode,
        valueNodeList
      }

      labelNode.addEventListener('click', () => {
        this._onGroupChange(id, (id) => this._addCurrentValues(id), (id) => this._removeCurrentValues(id))
      })

      valueNodeList.forEach((value) => {
        this.store[id].values.push(value.dataset.target)
        this.count.values += 1
        const valueId = value.dataset.target
        this._setDefaultSelectedOptions(id, valueId, (isSelected) => this._toggleValue(id, valueId, value, isSelected))

        value.addEventListener('click', () => {
          this._onValueChange(id, valueId, (isSelected) => this._toggleValue(id, valueId, value, isSelected))
        })
      })

      this._updatePlaceholderNodeStyle()
      this._updateGroupNodeStyle(id)
    })

    this.placeholder.addEventListener('click', (event) => {
      event.stopPropagation()
      this._onPlaceholderChange((id) => this._addCurrentValues(id), (id) => this._removeCurrentValues(id))
    })
  }

  // Private

  _addEventListeners() {
    this.toggle.addEventListener('click', (event) => {
      event.stopPropagation()
      this.element.classList.toggle(ACTIVE_CLASS)
      this.btn.classList.toggle(ACTIVE_CLASS)
    })

    this.collapses.forEach((item) => {
      item.addEventListener('click', (event) => {
        event.target.classList.toggle(ACTIVE_CLASS)
        // bootstrap jQuery collapse
        $(event.target.dataset.target).collapse('toggle')
      })
    })

    this.element.addEventListener('click', (event) => {
      event.stopPropagation()
    })

    document.addEventListener('click', () => {
      this.element.classList.remove(ACTIVE_CLASS)
      this.btn.classList.remove(ACTIVE_CLASS)
    })
  }

  _setDefaultSelectedOptions(groupId, valueId, toggleCallback) {
    /* eslint-disable arrow-body-style */
    const isSelected = findIndex(this.selectedOptions, (o) => {
      return o.dataset.id === valueId
    })
    /* eslint-enable arrow-body-style */
    toggleCallback(isSelected < 0)
  }

  _onValueChange = (groupId = 0, valueId, toggleCallback) => {
    toggleCallback(includes(this.store[groupId].currentValues, valueId))
  }

  _toggleValue = (groupId, valueId, valueNode, isSelected) => {
    if (!isSelected) {
      this.store[groupId].currentValues.push(valueId)
      this.count.currentValues += 1
      valueNode.classList.add(ACTIVE_CLASS)
    } else {
      pull(this.store[groupId].currentValues, valueId)
      this.count.currentValues -= 1
      valueNode.classList.remove(ACTIVE_CLASS)
    }

    this._updatePlaceholderNodeStyle()
    this._updateGroupNodeStyle(groupId)
  }

  _updateGroupNodeStyle(id = 0) {
    const labelNode = this.store[id].labelNode
    const valuesLength = this.store[id].values.length
    const currentValuesLength = this.store[id].currentValues.length

    if (currentValuesLength > 0) {
      if (currentValuesLength === valuesLength) {
        labelNode.classList.add(ACTIVE_CLASS)
        labelNode.classList.remove(INDETERMINATE_CLASS)
      } else {
        labelNode.classList.remove(ACTIVE_CLASS)
        labelNode.classList.add(INDETERMINATE_CLASS)
      }
    } else {
      labelNode.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS)
    }
  }

  _onGroupChange = (id, addCallback, removeCallback) => {
    if (this.store[id].currentValues.length === this.store[id].values.length) {
      this.store[id].labelNode.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS)
      removeCallback(id)
    } else {
      this.store[id].labelNode.classList.add(ACTIVE_CLASS)
      this.store[id].labelNode.classList.remove(INDETERMINATE_CLASS)
      addCallback(id)
    }

    this._updatePlaceholderNodeStyle()
  }

  _addCurrentValues = (id) => {
    this.count.currentValues += this.store[id].values.length - this.store[id].currentValues.length
    this.store[id].currentValues = [...this.store[id].values]
    this.store[id].valueNodeList.forEach((value) => {
      value.classList.add(ACTIVE_CLASS)
      value.classList.remove(INDETERMINATE_CLASS)
      this.input[value.dataset.target].selected = true
    })
  }

  _removeCurrentValues = (id) => {
    this.count.currentValues -= this.store[id].currentValues.length
    this.store[id].currentValues = []
    this.store[id].valueNodeList.forEach((value) => {
      value.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS)
      this.input[value.dataset.target].selected = false
    })
  }

  _onPlaceholderChange = (addCallback, removeCallback) => {
    if (this.count.currentValues > 0) {
      for (const key in this.store) {
        if (Object.prototype.hasOwnProperty.call(this.store, key)) {
          this.store[key].currentValues = []
          this._updateGroupNodeStyle(key)
          removeCallback(key)
        }
      }
      this.count.currentValues = 0
    } else {
      for (const key in this.store) {
        if (Object.prototype.hasOwnProperty.call(this.store, key)) {
          this.store[key].currentValues = this.store[key].values
          this._updateGroupNodeStyle(key)
          addCallback(key)
        }
      }
      this.count.currentValues = this.count.values
    }

    this._updatePlaceholderNodeStyle()
  }

  _updatePlaceholderNodeStyle() {
    if (this.count.currentValues > 0) {
      if (this.count.values === this.count.currentValues) {
        this.placeholder.classList.add(ACTIVE_CLASS)
        this.placeholder.classList.remove(INDETERMINATE_CLASS)
      } else {
        this.placeholder.classList.remove(ACTIVE_CLASS)
        this.placeholder.classList.add(INDETERMINATE_CLASS)
      }
    } else {
      this.placeholder.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS)
    }
  }
}

export default SelectMultiple
