---
layout: docs
title: Checkboxes and radios
description: Examples and usage guidelines for checkboxes and radios styles.
group: components
toc: true
permalink: /docs/4.0/components/checkboxes-and-radios
---

## Checkboxes and radios

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.

In the checked states, we use **base64 embedded SVG icons** from [Open Iconic](https://useiconic.com/open). This provides us the best control for styling and positioning across browsers and devices.

### Checkboxes

Check boxes are often used for forms or for other functions that let users select options from a multiple-choice format. With check boxes, users can choose several criteria or options, which is not possible with radio buttons. 

There are three selection states—deselected, selected, and undefined. The undefined state appears when a group of sub-selections contains deselected and selected states.

{% example html %}
{% include components/checkbox.html name="exampleCheckbox1" id="exampleCheckbox1" label="Custom checkbox" %}
{% endexample %}

Custom checkboxes can also utilize the `:indeterminate` pseudo class and `aria-checked="mixed` for screen reader, when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Check this custom checkbox</label>
  </div>
</div>

If you're using jQuery, something like this should suffice:

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
$('.your-checkbox').attr('aria-checked', 'mixed');
{% endhighlight %}

### Radios

Radio buttons are often used in forms or for other functions that let users select only one option from a list. With radio buttons, users cannot make multiple selections from options suggested (as they can with check boxes).

{% example html %}
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadio1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadio2">Or toggle this other custom radio</label>
</div>
{% endexample %}

### Switch

Switches turn a feature or option on or off. Labels can be applied when necessary.

{% example html %}
<label for="switch1" class="switch-control">
  <span class="sr-only">On/Off switch</span>
  <input id="switch1" type="checkbox" class="sr-only">
  <span class="switch-control-slider"></span>
</label>

<label for="switch2" class="switch-control">
  <span class="sr-only">On/Off switch</span>
  <input id="switch2" type="checkbox" class="sr-only" checked>
  <span class="switch-control-slider"></span>
</label>
{% endexample %}

### Options

{% example html %}
<div class="options-control">
  <div class="options-item">
    <input type="radio" name="optionsRadio" id="optionsRadio1" class="sr-only" checked/>
    <label class="options-btn font-weight-medium" for="optionsRadio1">Option 1</label>
  </div>
  <div class="options-item">
    <input type="radio" name="optionsRadio" id="optionsRadio2" class="sr-only"/>
    <label class="options-btn font-weight-medium" for="optionsRadio2">Option 2</label>
  </div>
</div>
{% endexample %}

### Inline

{% example html %}
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadioInline1">Toggle this custom radio</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadioInline2">Or toggle this other custom radio</label>
</div>
{% endexample %}

### Disabled

Custom checkboxes and radios can also be disabled. Add the `disabled` boolean attribute to the `<input>` and the custom indicator and label description will be automatically styled.

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled>
  <label class="custom-control-label font-weight-medium" for="customCheckDisabled1">Check this custom checkbox</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckCheckedDisabled2" disabled checked>
  <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled2">Check this custom checkbox</label>
</div>

<div class="bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheckCheckedDisabled3" disabled>
    <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled3">Check this custom checkbox</label>
  </div>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="radio3" name="radioDisabled" id="customCheckCheckedDisabled4" class="custom-control-input" disabled>
  <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled4">Toggle this custom radio</label>
</div>

<div class="mt-2">
  <label class="switch-control">
    <input type="checkbox" class="sr-only" disabled>
    <span class="switch-control-slider"></span>
  </label>
</div>

<div class="mt-2">
  <label class="switch-control">
    <input type="checkbox" class="sr-only" checked disabled>
    <span class="switch-control-slider"></span>
  </label>
</div>

<div class="options-control disabled mt-2">
  <div class="options-item">
    <input type="radio" name="optionsRadioDisabled" id="optionsRadio3" class="sr-only" checked disabled/>
    <label class="options-btn font-weight-medium" for="optionsRadio3">Option 1</label>
  </div>
  <div class="options-item">
    <input type="radio" name="optionsRadioDisabled" id="optionsRadio4" class="sr-only" disabled/>
    <label class="options-btn font-weight-medium" for="optionsRadio4">Option 2</label>
  </div>
</div>
