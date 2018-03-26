/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
var SelectRadios = function SelectRadios(element) {
  var placeholder = element.querySelector('[data-role=placeholder]');
  var values = element.querySelectorAll('[data-role=value]');
  values.forEach(function (value) {
    value.addEventListener('change', function (event) {
      var label = element.querySelector("[for=" + event.target.id + "]");
      placeholder.innerHTML = label.innerHTML;
    });
  });
};
//# sourceMappingURL=selectRadios.js.map