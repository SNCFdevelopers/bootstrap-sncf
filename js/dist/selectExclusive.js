/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */
var SelectExclusive =
/*#__PURE__*/
function () {
  function SelectExclusive(element) {
    this.element = element;
    this.btn = element.querySelector('[data-role=btn]');
    this.toggle = element.querySelector('[data-role=select-toggle');
    this.collapses = element.querySelectorAll('[data-role=collapse');
    var input = element.querySelector('[data-role=input]');
    var placeholder = element.querySelector('[data-role=placeholder]');
    var values = element.querySelectorAll('[data-role=value]');

    this._addEventListeners();

    values.forEach(function (value) {
      value.addEventListener('click', function (event) {
        event.stopPropagation();
        input.selectedIndex = event.target.dataset.id;
        placeholder.innerHTML = event.target.innerHTML;
      });
    });
  } // Private


  var _proto = SelectExclusive.prototype;

  _proto._addEventListeners = function _addEventListeners() {
    var _this = this;

    this.toggle.addEventListener('click', function (event) {
      event.stopPropagation();

      _this.element.classList.toggle('active');

      _this.btn.classList.toggle('active');
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
    document.addEventListener('click', function (event) {
      _this.element.classList.remove('active');

      _this.btn.classList.remove('active');
    });
  };

  return SelectExclusive;
}();
//# sourceMappingURL=selectExclusive.js.map