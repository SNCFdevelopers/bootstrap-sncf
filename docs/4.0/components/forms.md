---
layout: docs
title: Forms
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
group: components
toc: true
---

## Overview

Bootstrap's form controls expand on [our Rebooted form styles]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

## Inputs

Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

{% example html %}
<form>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="exampleInputEmail1">Email address</label>
    <div class="form-control-container">
      <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
      <span class="form-control-state"></span>
    </div>
  </div>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="exampleFormControlTextarea1">Example textarea</label>
    <div class="form-control-container">
      <textarea class="form-control" id="exampleFormControlTextarea1" rows="6" placeholder="Comment"></textarea>
      <span class="form-control-state"></span>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

### With icon

{% example html %}
<form>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="exampleInputEmail1">Left icon</label>
    <div class="form-control-container">
      <input type="text" class="form-control has-left-icon" id="exampleLeftIcon" aria-describedby="emailHelp" placeholder="Enter text">
      <span class="form-control-state"></span>
      <span class="form-control-icon left">
        <i class="icons-search"></i>
      </span>
    </div>
  </div>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="exampleInputEmail1">Right icon</label>
    <div class="form-control-container">
      <input type="text" class="form-control has-right-icon" id="exampleRightIcon" aria-describedby="emailHelp" placeholder="Enter text">
      <span class="form-control-state"></span>
      <span class="form-control-icon right">
        <i class="icons-search"></i>
      </span>
    </div>
  </div>
</form>
{% endexample %}

### Readonly

Add the `readonly` boolean attribute on an input to prevent modification of the input's value. Read-only inputs appear lighter (just like disabled inputs), but retain the standard cursor.

{% example html %}
<div class="form-control-container">
  <input class="form-control" type="text" placeholder="Readonly input here…" readonly>
  <span class="form-control-state"></span>
</div>
{% endexample %}

## Checkboxes and radios

Each checkbox and radio is wrapped in a `<div>` with a sibling `<span>` to create our custom control and a `<label>` for the accompanying text. Structurally, this is the same approach as our default `.form-check`.

We use the sibling selector (`~`) for all our `<input>` states—like `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

We hide the default `<input>` with `opacity` and use the `.custom-control-label` to build a new custom form indicator in its place with `::before` and `::after`. Unfortunately we can't build a custom one from just the `<input>` because CSS's `content` doesn't work on that element.

In the checked states, we use **base64 embedded SVG icons** from [Open Iconic](https://useiconic.com/open). This provides us the best control for styling and positioning across browsers and devices.

### Checkboxes

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheck1">
  <label class="custom-control-label font-weight-medium" for="customCheck1">Check this custom checkbox</label>
</div>
{% endexample %}

Custom checkboxes can also utilize the `:indeterminate` pseudo class when manually set via JavaScript (there is no available HTML attribute for specifying it).

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label font-weight-medium" for="customCheck2">Check this custom checkbox</label>
  </div>
</div>

If you're using jQuery, something like this should suffice:

{% highlight js %}
$('.your-checkbox').prop('indeterminate', true)
{% endhighlight %}

### Radios

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

{% example html %}
<label class="switch-control">
  <input type="checkbox" class="sr-only" >
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

{% example html %}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled" disabled>
  <label class="custom-control-label font-weight-medium" for="customCheckDisabled">Check this custom checkbox</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckCheckedDisabled" disabled checked>
  <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled">Check this custom checkbox</label>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="radio3" name="radioDisabled" id="customRadioDisabled" class="custom-control-input" disabled>
  <label class="custom-control-label font-weight-medium" for="customRadioDisabled">Toggle this custom radio</label>
</div>

<div class="mt-2">
  <label class="switch-control">
    <input type="checkbox" class="sr-only" disabled>
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
{% endexample %}

## Form group

{% example html %}
<div class="input-group mb-3">
  <div class="input-group-prepend">
    <div class="btn-group dropdown">
      <button type="button" class="btn btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span>Primary</span>
        <i class="icons-arrow"></i>
      </button>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Action</a>
        <a class="dropdown-item" href="#">Another action</a>
        <a class="dropdown-item" href="#">Something else here</a>
        <div class="dropdown-divider"></div>
        <a class="dropdown-item" href="#">Separated link</a>
      </div>
    </div>
  </div>
  <div class="form-control-container">
    <input type="text" class="form-control" placeholder="Enter text">
    <span class="form-control-state"></span>
  </div>
</div>
{% endexample %}

{% callout warning %}
##### Alternatives to hidden labels
Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{% endcallout %}

## Help text

Block-level help text in forms can be created using `.form-text` (previously known as `.help-block` in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

{% callout warning %}
##### Associating help text with form controls

Help text should be explicitly associated with the form control it relates to using the `aria-describedby` attribute. This will ensure that assistive technologies—such as screen readers—will announce this help text when the user focuses or enters the control.
{% endcallout %}

Help text below inputs can be styled with `.form-text`. This class includes `display: block` and adds some top margin for easy spacing from the inputs above.

{% example html %}
<label class="font-weight-medium mb-2" for="inputPassword5">Password</label>
<div class="form-control-container">
  <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
  <span class="form-control-state"></span>
</div>
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{% endexample %}

Inline text can use any typical inline HTML element (be it a `<small>`, `<span>`, or something else) with nothing more than a utility class.

{% example html %}
<form class="form-inline">
  <div class="form-group">
    <label class="font-weight-medium" for="inputPassword6">Password</label>
    <div class="form-control-container mx-sm-3">
      <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
      <span class="form-control-state"></span>
    </div>
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{% endexample %}

## Disabled forms

Add the `disabled` boolean attribute on an input to prevent user interactions and make it appear lighter.

{% highlight html %}
<input class="form-control" id="disabledInput" type="text" placeholder="Disabled input here..." disabled>
{% endhighlight %}

Add the `disabled` attribute to a `<fieldset>` to disable all the controls within.

{% example html %}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label class="font-weight-medium mb-2" for="disabledTextInput">Disabled input</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Disabled input">
    </div>
    <div class="form-group">
      <label class="font-weight-medium mb-2" for="disabledSelect">Disabled select menu</label>
      <select id="disabledSelect" class="form-control">
        <option>Disabled select</option>
      </select>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" id="disabledFieldsetCheck" disabled>
      <label class="font-weight-medium mb-2" class="form-check-label" for="disabledFieldsetCheck">
        Can't check this
      </label>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endexample %}

{% callout warning %}
##### Caveat with anchors

By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet Explorer 10, and won't prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
{% endcallout %}

{% callout danger %}
#### Cross-browser compatibility

While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcallout %}

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

{% callout warning %}
We **highly recommend** custom validation styles as native browser defaults are not announced to screen readers.
{% endcallout %}

### How it works

Here's how form validation works with Bootstrap:

- As a fallback, `.is-invalid` and `.is-valid` classes may be used instead of the pseudo-classes for [server side validation](#server-side). They do not require a `.was-validated` parent class.

### Server side

We recommend using client side validation, but in case you require server side, you can indicate invalid and valid form fields with `.is-invalid` and `.is-valid`. Note that `.invalid-feedback` is also supported with these classes.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2" for="validationCustom01">First name</label>
      <div class="form-control-container is-valid">
        <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
        <span class="form-control-state"></span>
      </div>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2" for="validationCustom02">Last name</label>
      <div class="form-control-container is-valid">
        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
        <span class="form-control-state"></span>
      </div>
      <div class="valid-feedback">
        Looks good!
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2" for="validationCustomUsername">Username</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2" for="validationCustom03">City</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustom03" placeholder="City" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback">
        Please provide a valid city.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}

### Browser defaults

Not interested in custom validation feedback messages or writing JavaScript to change form behaviors? All good, you can use the browser defaults. Try submitting the form below. Depending on your browser and OS, you'll see a slightly different style of feedback.

While these feedback styles cannot be styled with CSS, you can still customize the feedback text through JavaScript.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2" for="validationDefault01">First name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2" for="validationDefault02">Last name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2" for="validationDefaultUsername">Username</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2" for="validationDefault03">City</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label class="font-weight-medium mb-2" for="validationDefault04">State</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label class="font-weight-medium mb-2" for="validationDefault05">Zip</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox mb-2 mr-sm-2">
      <input class="custom-control-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="custom-control-label font-weight-medium" for="invalidCheck2">Agree to terms and conditions</label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{% endexample %}