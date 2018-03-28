var ACTIVE_CLASS = 'active';
var INDETERMINATE_CLASS = 'indeterminate';
/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

var SelectMultiple =
/*#__PURE__*/
function () {
  function SelectMultiple(element) {
    var _this = this;

    this._toggleValue = function (groupId, valueId, valueNode, isSelected) {
      if (!isSelected) {
        _this.store[groupId].currentValues.push(valueId);

        _this.count.currentValues += 1;
        valueNode.classList.add(ACTIVE_CLASS);
      } else {
        pull(_this.store[groupId].currentValues, valueId);
        _this.count.currentValues -= 1;
        valueNode.classList.remove(ACTIVE_CLASS);
      }

      _this._updatePlaceholderNodeStyle();

      _this._updateGroupNodeStyle(groupId);
    };

    this._addCurrentValues = function (id) {
      _this.count.currentValues += _this.store[id].values.length - _this.store[id].currentValues.length;
      _this.store[id].currentValues = _this.store[id].values;

      _this.store[id].valueNodeList.forEach(function (value) {
        value.classList.add(ACTIVE_CLASS);
        value.classList.remove(INDETERMINATE_CLASS);
        _this.input[value.dataset.target].selected = true;
      });
    };

    this._removeCurrentValues = function (id) {
      _this.count.currentValues -= _this.store[id].currentValues.length;
      _this.store[id].currentValues = [];

      _this.store[id].valueNodeList.forEach(function (value) {
        value.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS);
        _this.input[value.dataset.target].selected = false;
      });
    };

    this.element = element;
    this.btn = element.querySelector('[data-role=btn]');
    this.toggle = element.querySelector('[data-role=select-toggle');
    this.input = element.querySelector('[data-role=input]');
    this.placeholder = element.querySelector('[data-role=placeholder]');
    var groups = element.querySelectorAll('[data-role=group]');
    this.collapses = element.querySelectorAll('[data-role=collapse');
    this.selectedOptions = getSelectedOptions(this.input);
    this.store = {};
    this.count = {
      values: 0,
      currentValues: 0
    };

    this._addEventListeners();

    groups.forEach(function (group) {
      var id = group.dataset.id;
      var labelNode = group.querySelector('[data-role=counter]');
      var valueNodeList = group.querySelectorAll('[data-role=value]');
      _this.store[id] = {
        values: [],
        currentValues: [],
        labelNode: labelNode,
        valueNodeList: valueNodeList
      };
      labelNode.addEventListener('click', function () {
        _this._onGroupChange(id, function (id) {
          return _this._addCurrentValues(id);
        }, function (id) {
          return _this._removeCurrentValues(id);
        });
      });
      valueNodeList.forEach(function (value) {
        _this.store[id].values.push(value.dataset.target);

        _this.count.values += 1;
        var valueId = value.dataset.target;

        _this._setDefaultSelectedOptions(id, valueId, function (isSelected) {
          return _this._toggleValue(id, valueId, value, isSelected);
        });

        value.addEventListener('click', function () {
          _this._onValueChange(id, valueId, function (isSelected) {
            return _this._toggleValue(id, valueId, value, isSelected);
          });
        });
      });

      _this._updatePlaceholderNodeStyle();

      _this._updateGroupNodeStyle(id);
    });
    this.placeholder.addEventListener('click', function (event) {
      event.stopPropagation();

      _this._onPlaceholderChange(function (id) {
        return _this._addCurrentValues(id);
      }, function (id) {
        return _this._removeCurrentValues(id);
      });
    });
  } // Private


  var _proto = SelectMultiple.prototype;

  _proto._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    this.toggle.addEventListener('click', function (event) {
      event.stopPropagation();

      _this2.element.classList.toggle(ACTIVE_CLASS);

      _this2.btn.classList.toggle(ACTIVE_CLASS);
    });
    this.collapses.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.target.classList.toggle(ACTIVE_CLASS); // bootstrap jQuery collapse

        $(event.target.dataset.target).collapse('toggle');
      });
    });
    this.element.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    document.addEventListener('click', function () {
      _this2.element.classList.remove(ACTIVE_CLASS);

      _this2.btn.classList.remove(ACTIVE_CLASS);
    });
  };

  _proto._setDefaultSelectedOptions = function _setDefaultSelectedOptions(groupId, valueId, toggleCallback) {
    /* eslint-disable arrow-body-style */
    var isSelected = findIndex(this.selectedOptions, function (o) {
      return o.dataset.id === valueId;
    });
    /* eslint-enable arrow-body-style */

    toggleCallback(isSelected < 0);
  };

  _proto._onValueChange = function _onValueChange(groupId, valueId, toggleCallback) {
    if (groupId === void 0) {
      groupId = 0;
    }

    toggleCallback(includes(this.store[groupId].currentValues, valueId));
  };

  _proto._updateGroupNodeStyle = function _updateGroupNodeStyle(id) {
    if (id === void 0) {
      id = 0;
    }

    var labelNode = this.store[id].labelNode;
    var valuesLength = this.store[id].values.length;
    var currentValuesLength = this.store[id].currentValues.length;

    if (currentValuesLength > 0) {
      if (currentValuesLength === valuesLength) {
        labelNode.classList.add(ACTIVE_CLASS);
        labelNode.classList.remove(INDETERMINATE_CLASS);
      } else {
        labelNode.classList.remove(ACTIVE_CLASS);
        labelNode.classList.add(INDETERMINATE_CLASS);
      }
    } else {
      labelNode.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS);
    }
  };

  _proto._onGroupChange = function _onGroupChange(id, addCallback, removeCallback) {
    if (this.store[id].currentValues.length === this.store[id].values.length) {
      this.store[id].labelNode.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS);
      removeCallback(id);
    } else {
      this.store[id].labelNode.classList.add(ACTIVE_CLASS);
      this.store[id].labelNode.classList.remove(INDETERMINATE_CLASS);
      addCallback(id);
    }

    this._updatePlaceholderNodeStyle();
  };

  _proto._onPlaceholderChange = function _onPlaceholderChange(addCallback, removeCallback) {
    if (this.count.currentValues > 0) {
      for (var key in this.store) {
        if (Object.prototype.hasOwnProperty.call(this.store, key)) {
          this.store[key].currentValues = [];

          this._updateGroupNodeStyle(key);

          removeCallback(key);
        }
      }

      this.count.currentValues = 0;
    } else {
      for (var _key in this.store) {
        if (Object.prototype.hasOwnProperty.call(this.store, _key)) {
          this.store[_key].currentValues = this.store[_key].values;

          this._updateGroupNodeStyle(_key);

          addCallback(_key);
        }
      }

      this.count.currentValues = this.count.values;
    }

    this._updatePlaceholderNodeStyle();
  };

  _proto._updatePlaceholderNodeStyle = function _updatePlaceholderNodeStyle() {
    if (this.count.currentValues > 0) {
      if (this.count.values === this.count.currentValues) {
        this.placeholder.classList.add(ACTIVE_CLASS);
        this.placeholder.classList.remove(INDETERMINATE_CLASS);
      } else {
        this.placeholder.classList.remove(ACTIVE_CLASS);
        this.placeholder.classList.add(INDETERMINATE_CLASS);
      }
    } else {
      this.placeholder.classList.remove(ACTIVE_CLASS, INDETERMINATE_CLASS);
    }
  };

  return SelectMultiple;
}();
//# sourceMappingURL=selectMultiple.js.map