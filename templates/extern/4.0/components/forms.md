---
layout: docs
title: Forms
description: Examples and usage guidelines for form control styles, layout options, and custom components for creating a wide variety of forms.
group: components
toc: true
permalink: /docs/4.0/components/forms
---

## Overview

Bootstrap's form controls expand on [our Rebooted form styles]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/reboot/#forms) with classes. Use these classes to opt into their customized displays for a more consistent rendering across browsers and devices.

Be sure to use an appropriate `type` attribute on all inputs (e.g., `email` for email address or `number` for numerical information) to take advantage of newer input controls like email verification, number selection, and more.

**LIEN A FAIRE AVEC SELECT QUELQUE PART**

## Inputs

Single-line text boxes are used in forms or for other functional purposes.

A label must indicate the information to be filled in (example: Enter a job title), as well as the required format. The field can be pre-filled with an example (example: 10 rue Saint-Exupéry or DD/MM).
Two criteria determine the length of fields: the longest possible wording and respecting the grid.

Textual form controls—like `<input>`s, `<select>`s, and `<textarea>`s—are styled with the `.form-control` class. Included are styles for general appearance, focus state, sizing, and more.

{% example html %}
<form>
  <div class="form-group">
    <label for="inputEmail1">Example label</label>
    {% include components/input.html type="email" id="inputEmail1" placeholder="Example input" %}
  </div>
  <div class="form-group">
    <label for="textarea1">Example textarea</label>
    {% include components/textarea.html id="textarea1" placeholder="Example textarea" %}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

### Inputs with icon

Use `.has-left-icon` or `.has-right-icon` class on `.form-control` element. Then use `.form-control-icon` element with an fonticon element inside.

{% capture control_icon %}
  <span class="form-control-icon"><i class="icons-search"></i></span>
{% endcapture %}

{% example html %}
<label for="inputIcon1">Left icon</label>
{% include components/input.html container="has-left-icon" id="inputIcon1" placeholder="Example input with left icon" content=control_icon %}
{% endexample %}

{% example html %}
<label for="inputIcon2">Right icon</label>
{% include components/input.html container="has-right-icon" id="inputIcon2" placeholder="Example input with right icon" content=control_icon %}
{% endexample %}

### Readonly inputs

Add the `readonly` boolean attribute on an input to prevent modification of the input's value.

{% example html %}
<label for="readonly1">Readonly input</label>
{% include components/input.html type="text" id="readonly1" placeholder="Readonly input here..." attr="readonly" %}
{% endexample %}

{% example html %}
<label for="readonly2">Readonly textarea</label>
{% include components/textarea.html id="readonly2" placeholder="Readonly textarea here..." attr="readonly" %}
{% endexample %}

### Required inputs

Add the `required` boolean attribute on an input.

{% example html %}
<label for="required1">Required input</label>
{% include components/input.html type="text" id="required1" placeholder="Required input here..." attr="required" %}
{% endexample %}

### Input with clear option

The clear text behavior is made of `javascript`. Use `data-component="control"` with `data-clear-option="true"` to enable it. Don't forget to add the `button` element.

{% example html %}
{% include components/input-clear-option.html type="text" id="readonly2" placeholder="Search..." %}
{% endexample %}

## Textarea options

### Auto sizing

Add a `stretchy` class on `textarea` element.

{% example html %}
<label for="stretchyTextarea1">Auto sizing textarea</label>
{% include components/textarea.html id="stretchyTextarea1" class="stretchy" placeholder="Auto sizing..." %}
{% endexample %}

### Textarea with counter

{% example html %}
{% include components/textarea-counter.html id="countTextarea1" placeholder="Character counter..." %}
{% endexample %}

### With toolbar

{% example html %}
<div class="form-group">
  <label for="exampleFormControlTextarea3">Example textarea</label>
  <div class="form-toolbar">
    <div class="form-toolbar-content">
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Bold</span>
        <i class="icons-toolbar-bold"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Italic</span>
        <i class="icons-toolbar-italic"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Underline</span>
        <i class="icons-toolbar-underline"></i>
      </button>
      <span class="form-toolbar-separator"></span>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Text align left</span>
        <i class="icons-toolbar-left icons-size-1x25"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Text align center</span>
        <i class="icons-toolbar-center icons-size-1x25"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">List</span>
        <i class="icons-toolbar-list icons-size-1x25"></i>
      </button>
    </div>
    <div class="form-toolbar-right">
      <div class="btn-group dropdown">
        <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icons-options icons-size-1x25"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">Option 1</button>
          <button class="dropdown-item" type="button">Option 2</button>
          <button class="dropdown-item" type="button">Option 3</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-control-container">
    <textarea class="form-control" placeholder="Comment"></textarea>
    <span class="form-control-state"></span>
  </div>
</div>
{% endexample %}

## Range slider

{% example html %}
<div class="range-slider" data-component="range-slider" data-target="#range_01">
  <i class="icons-interrogation icons-size-1x25 pr-2"></i>
  <div id="range_01" data-min="25" data-max="125" data-hide-from-to="true">
  </div>
  <i class="icons-interrogation icons-size-1x25 pl-2"></i>
</div>
{% endexample %}

{% example html %}
<div class="range-slider" data-component="range-slider" data-target="#range_02">
  <span class="d-inline-block pr-2">25</span>
  <div id="range_02" data-min="25" data-max="125" data-type="double" data-from="50" data-to="100">
  </div>
  <span class="d-inline-block pl-2">125</span>
</div>
{% endexample %}

{% example html %}
<div class="range-slider is-disabled" data-component="range-slider" data-target="#range_03">
  <span class="d-inline-block pr-2">25</span>
  <div id="range_03" data-min="25" data-max="125" data-type="double" data-from="50" data-to="100">
  </div>
  <span class="d-inline-block pl-2">125</span>
</div>
{% endexample %}

## Chips

{% example html %}
<div class="chips-group">
  <span class="chips chips-label">Mathéo Mercier</span>
  <button type="button" class="chips chips-btn chips-only-icon">
    <span class="sr-only">Remove</span>
    <i class="icons-close"></i>
  </button>
</div>
{% endexample %}

{% example html %}
<label class="font-weight-medium mb-2">Receivers</label>
<div class="form-control-container form-chips-container" data-component="chips">
  <input data-role="typewriter" type="text" class="chips-input stretchy" />
  <select class="sr-only" data-role="input" tabindex="-1" aria-hidden="true" multiple>
    <option selected>Sem Inceptos Tellus</option>
    <option>Amet Porta</option>
    <option selected>Pharetra Fusce Venenatis</option>
  </select>
</div>
{% endexample %}

{% example html %}
<label class="font-weight-medium mb-2">Receivers</label>
<div class="form-control-container form-chips-container" data-component="chips">
  <input data-role="typewriter" type="text" class="chips-input stretchy" />
  <select class="sr-only" data-role="input" tabindex="-1" aria-hidden="true" multiple>
  </select>
</div>
{% endexample %}

{% callout warning %}
### Alternatives to hidden labels
Assistive technologies such as screen readers will have trouble with your forms if you don't include a label for every input. For these inline forms, you can hide the labels using the `.sr-only` class. There are further alternative methods of providing a label for assistive technologies, such as the `aria-label`, `aria-labelledby` or `title` attribute. If none of these are present, assistive technologies may resort to using the `placeholder` attribute, if present, but note that use of `placeholder` as a replacement for other labelling methods is not advised.
{% endcallout %}

## Help text

Block-level help text in forms can be created using `.form-text` (previously known as `.help-block` in v3). Inline help text can be flexibly implemented using any inline HTML element and utility classes like `.text-muted`.

{% callout warning %}
#### Associating help text with form controls

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
    <button type="submit" class="btn btn-primary">Submit</button>
  </fieldset>
</form>
{% endexample %}

{% callout warning %}
### Caveat with anchors

By default, browsers will treat all native form controls (`<input>`, `<select>` and `<button>` elements) inside a `<fieldset disabled>` as disabled, preventing both keyboard and mouse interactions on them. However, if your form also includes `<a ... class="btn btn-*">` elements, these will only be given a style of `pointer-events: none`. As noted in the section about [disabled state for buttons]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/buttons/#disabled-state) (and specifically in the sub-section for anchor elements), this CSS property is not yet standardized and isn't fully supported in Opera 18 and below, or in Internet Explorer 10, and won't prevent keyboard users from being able to focus or activate these links. So to be safe, use custom JavaScript to disable such links.
{% endcallout %}

{% callout danger %}
### Cross-browser compatibility

While Bootstrap will apply these styles in all browsers, Internet Explorer 11 and below don't fully support the `disabled` attribute on a `<fieldset>`. Use custom JavaScript to disable the fieldset in these browsers.
{% endcallout %}

## Validation

Provide valuable, actionable feedback to your users with HTML5 form validation–[available in all our supported browsers](https://caniuse.com/#feat=form-validation). Choose from the browser default validation feedback, or implement custom messages with our built-in classes and starter JavaScript.

{% callout warning %}
We **highly recommend** custom validation styles as native browser defaults are not announced to screen readers.
{% endcallout %}

### Server side

We recommend using client side validation, but in case you require server side, you can indicate invalid form fields with `.is-invalid`. Note that `.invalid-feedback` is also supported with these classes.

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom01">First name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom02">Last name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustomUsername">Username</label>
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
      <label class="font-weight-medium mb-2 required" for="validationCustom03">City</label>
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

### Error message

{% example html %}
<form class="needs-validation" novalidate>
  <div class="form-error mb-3">
    <span class="h2 text-uppercase">Oouups ! Vous avez une erreur</span>
    <ul class="mt-1 mb-0">
      <li>Veuillez vérifier l'adresse email saisie</li>
    </ul>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom03">City</label>
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
      <label class="font-weight-medium mb-2 required" for="validationDefault01">First name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault02">Last name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefaultUsername">Username</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" aria-describedby="inputGroupPrepend2" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault03">City</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault04">State</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault05">Zip</label>
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
