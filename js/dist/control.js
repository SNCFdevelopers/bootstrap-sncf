/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
var Control =
/*#__PURE__*/
function () {
  function Control(element) {
    var _this = this;

    this.element = element;
    var inputNode = element.querySelector('[data-role=input]');
    var counterNode = element.parentNode.querySelector('[data-role=counter]');

    if (counterNode) {
      var counterValueNode = counterNode.querySelector('[data-role=counter-value]');
      var maxLimit = counterNode.getAttribute('data-limit');

      this._toggleInvalidClass(inputNode.value.length, maxLimit);

      counterValueNode.innerHTML = inputNode.value.length;
      inputNode.addEventListener('input', function (event) {
        _this._toggleInvalidClass(event.target.value.length, maxLimit);

        counterValueNode.innerHTML = event.target.value.length;
      });
    }

    if (element.getAttribute('data-clear-option') === 'true') {
      var btnClearNode = element.querySelector('[data-btn=clear]');
      inputNode.addEventListener('inputNode', function () {
        if (inputNode.value.length > 0) {
          btnClearNode.classList.remove('d-none');
        } else {
          btnClearNode.classList.add('d-none');
        }
      });
      btnClearNode.addEventListener('click', function () {
        inputNode.value = '';
        btnClearNode.classList.add('d-none');
      });
    }
  }

  var _proto = Control.prototype;

  _proto._toggleInvalidClass = function _toggleInvalidClass(currentValueLength, maxLimit) {
    if (currentValueLength > maxLimit) {
      this.element.classList.add('is-invalid');
    } else {
      this.element.classList.remove('is-invalid');
    }
  };

  return Control;
}();
//# sourceMappingURL=control.js.map