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

    this.element = element;
    this.btn = element.querySelector('[data-role=btn]');
    this.toggle = element.querySelector('[data-role=select-toggle');
    this.collapses = element.querySelectorAll('[data-role=collapse');
    this.data = {};
    this.input = element.querySelector('[data-role=input]');
    this.selectedOptions = this._getSelectedOptions(this.input);
    this.placeholder = element.querySelector('[data-role=placeholder]');
    var groups = element.querySelectorAll('[data-role=group]');

    this._addEventListeners();

    groups.forEach(function (group) {
      var groupId = group.dataset.id;
      var values = group.querySelectorAll('[data-role=value]');
      _this.data[groupId] = {
        label: group.querySelector('[data-role=counter]'),
        currentValues: [],
        values: [],
        valuesNode: values,
        max: values.length
      };

      _this.data[groupId].label.addEventListener('click', function () {
        _this._handleChangeGroupState(groupId);
      });

      values.forEach(function (value) {
        _this.data[groupId].values.push(value.dataset.target);

        _this._handleDefaultOptionState(value, groupId);

        value.addEventListener('click', function () {
          _this._handleChangeOptionState(value, groupId);
        });
      });

      _this._updatePlaceholder();

      _this._handleGroupState(groupId);
    });
    this.placeholder.addEventListener('click', function (event) {
      console.log('click');
      event.stopPropagation();

      _this._handleChangePlaceholder();
    });
  } // Private


  var _proto = SelectMultiple.prototype;

  _proto._addEventListeners = function _addEventListeners() {
    var _this2 = this;

    this.toggle.addEventListener('click', function (event) {
      event.stopPropagation();

      _this2.element.classList.toggle('active');

      _this2.btn.classList.toggle('active');
    });
    this.collapses.forEach(function (item) {
      item.addEventListener('click', function (event) {
        event.target.classList.toggle('active'); // bootstrap jQuery collapse

        $(event.target.dataset.target).collapse('toggle');
      });
    });
    this.element.addEventListener('click', function (event) {
      event.stopPropagation();
    });
    document.addEventListener('click', function () {
      _this2.element.classList.remove('active');

      _this2.btn.classList.remove('active');
    });
  };

  _proto._getSelectedOptions = function _getSelectedOptions(element) {
    // validate element
    if (!element || !element.options) {
      // or null?
      return [];
    } // return HTML5 implementation of selectedOptions instead.


    if (element.selectedOptions) {
      return element.selectedOptions;
    } // you are here because your browser doesn't have the HTML5 selectedOptions


    var opts = element.options;
    var selectedOptions = [];

    for (var i = 0; i < opts.length; i++) {
      if (opts[i].selected) {
        selectedOptions.push(opts[i]);
      }
    }

    return selectedOptions;
  };

  _proto._handleDefaultOptionState = function _handleDefaultOptionState(value, groupId) {
    if (groupId === void 0) {
      groupId = 0;
    }

    var valueId = value.dataset.target;
    var isSelected = findIndex(this.selectedOptions, function (o) {
      return o.dataset.id === valueId;
    });

    this._toggleValue(value, groupId, isSelected >= 0 ? false : true);
  };

  _proto._handleChangeOptionState = function _handleChangeOptionState(value, groupId) {
    if (groupId === void 0) {
      groupId = 0;
    }

    var valueId = value.dataset.target;
    var isSelected = includes(this.data[groupId].currentValues, valueId);

    this._toggleValue(value, groupId, isSelected);
  };

  _proto._toggleValue = function _toggleValue(value, groupId, isSelected) {
    var valueId = value.dataset.target;

    if (!isSelected) {
      this.data[groupId].currentValues.push(valueId);
      value.classList.add('active');
    } else {
      pull(this.data[groupId].currentValues, valueId);
      value.classList.remove('active');
    }

    this._updatePlaceholder();

    this._handleGroupState(groupId);
  };

  _proto._handleGroupState = function _handleGroupState(groupId) {
    if (groupId === void 0) {
      groupId = 0;
    }

    var counter = this.data[groupId].label;
    var length = this.data[groupId].currentValues.length;

    if (length > 0) {
      if (length === this.data[groupId].max) {
        counter.classList.add('active');
        counter.classList.remove('indeterminate');
      } else {
        counter.classList.remove('active');
        counter.classList.add('indeterminate');
      }
    } else {
      counter.classList.remove('active');
      counter.classList.remove('indeterminate');
    }
  };

  _proto._handleChangeGroupState = function _handleChangeGroupState(groupId) {
    if (this.data[groupId].currentValues.length === this.data[groupId].values.length) {
      this.data[groupId].label.classList.remove('active');
      this.data[groupId].label.classList.remove('indeterminate');

      this._removeValues(groupId);
    } else {
      this.data[groupId].label.classList.add('active');
      this.data[groupId].label.classList.remove('indeterminate');

      this._addValues(groupId);
    }

    this._updatePlaceholder();
  };

  _proto._addValues = function _addValues(groupId) {
    var _this3 = this;

    this.data[groupId].currentValues = this.data[groupId].values;
    this.data[groupId].valuesNode.forEach(function (value) {
      value.classList.add('active');
      value.classList.remove('indeterminate');
      _this3.input[value.dataset.target].selected = true;
    });
  };

  _proto._removeValues = function _removeValues(groupId) {
    var _this4 = this;

    this.data[groupId].currentValues = [];
    this.data[groupId].valuesNode.forEach(function (value) {
      value.classList.remove('active');
      value.classList.remove('indeterminate');
      _this4.input[value.dataset.target].selected = false;
    });
  };

  _proto._handleChangePlaceholder = function _handleChangePlaceholder() {
    var totalCurrentValues = null;
    var totalValues = null;

    for (var key in this.data) {
      totalCurrentValues += this.data[key].currentValues.length;
      totalValues += this.data[key].values.length;
    }

    console.log('totalCurrentValues: ', totalCurrentValues);
    console.log('totalValues: ', totalValues);

    if (totalCurrentValues > 0) {
      for (var _key in this.data) {
        this.data[_key].currentValues = [];

        this._handleGroupState(_key);

        this._removeValues(_key);
      }
    } else {
      for (var _key2 in this.data) {
        this.data[_key2].currentValues = this.data[_key2].values;

        this._handleGroupState(_key2);

        this._addValues(_key2);
      }
    }

    this._updatePlaceholder();
  };

  _proto._updatePlaceholder = function _updatePlaceholder() {
    var totalCurrentValues = null;
    var totalValues = null;

    for (var key in this.data) {
      totalCurrentValues += this.data[key].currentValues.length;
      totalValues += this.data[key].values.length;
    }

    if (totalCurrentValues > 0) {
      if (totalValues === totalCurrentValues) {
        this.placeholder.classList.add('active');
        this.placeholder.classList.remove('indeterminate');
      } else {
        this.placeholder.classList.remove('active');
        this.placeholder.classList.add('indeterminate');
      }
    } else {
      this.placeholder.classList.remove('active');
      this.placeholder.classList.remove('indeterminate');
    }
  };

  return SelectMultiple;
}();
//# sourceMappingURL=selectMultiple.js.map