import $ from 'jquery'
/* eslint-disable no-unused-vars */
import ionRangeSlider from 'ion-rangeslider'
/* eslint-enable no-unused-vars */

/**
 * ------------------------------------------------------------------------
 * Class Definition
 * ------------------------------------------------------------------------
 */

class RangeSlider {
  constructor() {
    $('#range_01').ionRangeSlider({
      /* eslint-disable camelcase */
      hide_min_max: true
      // hide_from_to: true
      /* eslint-enable camelcase */
    })
  }
}

export default RangeSlider
