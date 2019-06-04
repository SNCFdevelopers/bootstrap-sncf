---
layout: docs
title: Form
description: Form layout examples.
group: layout
toc: true
---

## Layout

Since Bootstrap applies `display: block` and `width: 100%` to almost all our form controls, forms will by default stack vertically. Additional classes can be used to vary this layout on a per-form basis.

### Form groups

The `.form-group` class is the easiest way to add some structure to forms. It provides a flexible class that encourages proper grouping of labels, controls, optional help text, and form validation messaging. By default it only applies `margin-bottom`, but it picks up additional styles in `.form-inline` as needed. Use it with `<fieldset>`s, `<div>`s, or nearly any other element.

{% example html %}
<form>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="formGroupExampleInput">Example label</label>
    <div class="form-control-container">
      <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input">
      <span class="form-control-state"></span>
    </div>
  </div>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="formGroupExampleInput2">Another label</label>
    <div class="form-control-container">
      <input type="text" class="form-control" id="formGroupExampleInput2" placeholder="Another input">
      <span class="form-control-state"></span>
    </div>
  </div>
</form>
{% endexample %}

### Form grid

More complex forms can be built using our grid classes. Use these for form layouts that require multiple columns, varied widths, and additional alignment options.

{% example html %}
<form>
  <div class="row">
    <div class="col">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="firstname">Firstname</label>
        <div class="form-control-container">
          <input type="text" id="firstname" class="form-control" placeholder="Example Firstname">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="lastname">Last name</label>
        <div class="form-control-container">
          <input type="text" id="lastname" class="form-control" placeholder="Example Lastname">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample %}

#### Form row

You may also swap `.row` for `.form-row`, a variation of our standard grid row that overrides the default column gutters for tighter and more compact layouts.

{% example html %}
<form>
  <div class="form-row">
    <div class="col">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="firstname1">Firstname</label>
        <div class="form-control-container">
          <input type="text" id="firstname1" class="form-control" placeholder="Example Firstname">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="lastname1">Last name</label>
        <div class="form-control-container">
          <input type="text" id="lastname1" class="form-control" placeholder="Example Lastname">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample %}

More complex layouts can also be created with the grid system.

{% example html %}
<form>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label class="font-weight-medium mb-2" for="inputEmail4">Email</label>
      <div class="form-control-container">
        <input type="email" class="form-control" id="inputEmail4" placeholder="Example email">
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="form-group col-md-6">
      <label class="font-weight-medium mb-2" for="inputPassword4">Password</label>
      <div class="form-control-container">
        <input type="password" class="form-control" id="inputPassword4" placeholder="Example password">
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="inputAddress">Address</label>
    <div class="form-control-container">
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
      <span class="form-control-state"></span>
    </div>
  </div>
  <div class="form-group">
    <label class="font-weight-medium mb-2" for="inputAddress2">Address 2</label>
    <div class="form-control-container">
      <input type="text" class="form-control" id="inputAddress2" placeholder="Apartment, studio, or floor">
      <span class="form-control-state"></span>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label class="font-weight-medium mb-2" for="inputCity">City</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="inputCity" placeholder="Example city">
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="form-group col-md-4">
      <label class="font-weight-medium mb-2" for="inputState">State</label>
      <select id="inputState" class="form-control">
        <option selected>Choose...</option>
        <option>...</option>
      </select>
    </div>
    <div class="form-group col-md-2">
      <label class="font-weight-medium mb-2" for="inputZip">Zip</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="inputZip" placeholder="Example zip">
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox">
      <input type="checkbox" class="custom-control-input" id="gridCheck">
      <label class="custom-control-label font-weight-medium" for="gridCheck">Check me out</label>
    </div>
  </div>
  <button type="submit" class="btn btn-primary">Sign in</button>
</form>
{% endexample %}

#### Horizontal form

Create horizontal forms with the grid by adding the `.row` class to form groups and using the `.col-*-*` classes to specify the width of your labels and controls. Be sure to add `.col-form-label` to your `<label>`s as well so they're vertically centered with their associated form controls.

At times, you maybe need to use margin or padding utilities to create that perfect alignment you need. For example, we've removed the `padding-top` on our stacked radio inputs label to better align the text baseline.

{% example html %}
<form>
  <div class="form-group row">
    <label for="inputEmail3" class="col-sm-2 col-form-label font-weight-medium">Email</label>
    <div class="col-sm-10">
      <div class="form-control-container">
        <input type="email" class="form-control" id="inputEmail3" placeholder="Email">
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <label for="inputPassword3" class="col-sm-2 col-form-label font-weight-medium">Password</label>
    <div class="col-sm-10">
      <div class="form-control-container">
        <input type="password" class="form-control" id="inputPassword3" placeholder="Password">
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <fieldset class="form-group">
    <div class="row">
      <legend class="col-form-label col-sm-2 pt-0 font-weight-medium">Radios</legend>
      <div class="col-sm-10">
        <div class="custom-control custom-radio">
          <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios1" value="option1">
          <label class="custom-control-label font-weight-medium" for="gridRadios1">First radio</label>
        </div>
        <div class="custom-control custom-radio">
          <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="custom-control-label font-weight-medium" for="gridRadios2">Second radio</label>
        </div>
        <div class="custom-control custom-radio">
          <input class="custom-control-input" type="radio" name="gridRadios" id="gridRadios3" value="option3" disabled>
          <label class="custom-control-label font-weight-medium" for="gridRadios3">Third disabled radio</label>
        </div>
      </div>
    </div>
  </fieldset>
  <div class="form-group row">
    <div class="col-sm-2 font-weight-medium">Checkbox</div>
    <div class="col-sm-10">
      <div class="custom-control custom-checkbox">
        <input class="custom-control-input" type="checkbox" id="gridCheck1" value="option3">
        <label class="custom-control-label font-weight-medium" for="gridCheck1">Example checkbox</label>
      </div>
    </div>
  </div>
  <div class="form-group row">
    <div class="col-sm-10">
      <button type="submit" class="btn btn-primary">Sign in</button>
    </div>
  </div>
</form>
{% endexample %}

#### Column sizing

As shown in the previous examples, our grid system allows you to place any number of `.col`s within a `.row` or `.form-row`. They'll split the available width equally between them. You may also pick a subset of your columns to take up more or less space, while the remaining `.col`s equally split the rest, with specific column classes like `.col-7`.

{% example html %}
<form>
  <div class="form-row">
    <div class="col-7">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="city">City</label>
        <div class="form-control-container">
          <input type="text" id="city" class="form-control" placeholder="Example city">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="state">State</label>
        <div class="form-control-container">
          <input type="text" id="state" class="form-control" placeholder="Example state">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label class="font-weight-medium mb-2" for="zip">Zip</label>
        <div class="form-control-container">
          <input type="text" id="zip" class="form-control" placeholder="Example zip">
          <span class="form-control-state"></span>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample html %}

#### Auto-sizing

The example below uses a flexbox utility to vertically center the contents and changes `.col` to `.col-auto` so that your columns only take up as much space as needed. Put another way, the column sizes itself based on the contents.

{% example html %}
<form>
  <div class="form-row align-items-center">
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInput">Name</label>
      <div class="form-control-container mb-2">
        <input type="text" class="form-control" id="inlineFormInput" placeholder="Jane Doe">
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-auto">
      <label class="sr-only" for="inlineFormInputGroup">Username</label>
      <div class="form-control-container mb-2">
        <input type="text" class="form-control" id="inlineFormInputGroup" placeholder="Username">
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-auto">
      <div class="custom-control custom-checkbox mb-2">
        <input class="custom-control-input" type="checkbox" id="autoSizingCheck">
        <label class="custom-control-label font-weight-medium" for="autoSizingCheck">Remember me</label>
      </div>
    </div>
    <div class="col-auto">
      <button type="submit" class="btn btn-primary mb-2">Submit</button>
    </div>
  </div>
</form>
{% endexample %}

### Inline forms

Use the `.form-inline` class to display a series of labels, form controls, and buttons on a single horizontal row. Form controls within inline forms vary slightly from their default states.

- Controls are `display: flex`, collapsing any HTML white space and allowing you to provide alignment control with [spacing]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) and [flexbox]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/) utilities.
- Controls and input groups receive `width: auto` to override the Bootstrap default `width: 100%`.
- Controls **only appear inline in viewports that are at least 576px wide** to account for narrow viewports on mobile devices.

You may need to manually address the width and alignment of individual form controls with [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) (as shown below). Lastly, be sure to always include a `<label>` with each form control, even if you need to hide it from non-screenreader visitors with `.sr-only`.

{% example html %}
<form class="form-inline">
  <label class="sr-only" for="inlineFormInputName2">Name</label>
  <div class="form-control-container mb-2 mr-sm-2">
    <input type="text" class="form-control" id="inlineFormInputName2" placeholder="Jane Doe">
    <span class="form-control-state"></span>
  </div>
  <label class="sr-only" for="inlineFormInputGroupUsername2">Username</label>
  <div class="form-control-container mb-2 mr-sm-2">
    <input type="text" class="form-control" id="inlineFormInputGroupUsername2" placeholder="Username">
    <span class="form-control-state"></span>
  </div>
  <div class="custom-control custom-checkbox mb-2 mr-sm-2">
    <input class="custom-control-input" type="checkbox" id="inlineFormCheck">
    <label class="custom-control-label font-weight-medium" for="inlineFormCheck">Remember me</label>
  </div>
  <button type="submit" class="btn btn-primary mb-2">Submit</button>
</form>
{% endexample %}
