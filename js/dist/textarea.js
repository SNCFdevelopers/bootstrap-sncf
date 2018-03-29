/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
var Textarea =
/*#__PURE__*/
function () {
  function Textarea(element) {
    var _this = this;

    this.element = element;
    var inputNode = element.querySelector('[data-role=input]');
    var counterNode = element.querySelector('[data-role=counter]');

    if (counterNode) {
      var counterValueNode = element.querySelector('[data-role=counter-value]');
      var maxLimit = counterNode.getAttribute('data-limit');

      this._toggleInvalidClass(inputNode.value.length, maxLimit);

      counterValueNode.innerHTML = inputNode.value.length;
      inputNode.addEventListener('input', function (event) {
        _this._toggleInvalidClass(event.target.value.length, maxLimit);

        counterValueNode.innerHTML = event.target.value.length;
      });
    }
  }

  var _proto = Textarea.prototype;

  _proto._toggleInvalidClass = function _toggleInvalidClass(currentValueLength, maxLimit) {
    if (currentValueLength > maxLimit) {
      this.element.classList.add('invalid');
    } else {
      this.element.classList.remove('invalid');
    }
  };

  return Textarea;
}();
//# sourceMappingURL=textarea.js.map