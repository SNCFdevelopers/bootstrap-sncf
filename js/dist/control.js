/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
var Control = function Control(element) {
  var input = element.querySelector('[data-role=input]');

  if (element.getAttribute('data-clear-option') === "true") {
    var btnClear = element.querySelector('[data-btn=clear]');
    input.addEventListener('input', function (event) {
      if (input.value.length > 0) {
        btnClear.classList.remove('d-none');
      } else {
        btnClear.classList.add('d-none');
      }
    });
    btnClear.addEventListener('click', function () {
      input.value = "";
      btnClear.classList.add('d-none');
    });
  }
};
//# sourceMappingURL=control.js.map