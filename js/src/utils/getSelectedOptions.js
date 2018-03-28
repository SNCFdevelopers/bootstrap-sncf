export default function _getSelectedOptions(element) {
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
