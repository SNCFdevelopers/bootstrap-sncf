---
layout: docs
title: Dropdowns
description: Toggle contextual overlays for displaying lists of links and more with the Bootstrap dropdown plugin.
group: components
toc: true
permalink: /docs/4.0/components/dropdowns/
---

## Overview

Dropdowns are toggleable, contextual overlays for displaying lists of links and more. They're made interactive with the included Bootstrap dropdown JavaScript plugin. They're toggled by clicking, not by hovering; this is [an intentional design decision.](http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)

Dropdowns are built on a third party library, [Popper.js](https://popper.js.org/), which provides dynamic positioning and viewport detection. Be sure to include [popper.min.js]({{ site.cdn.popper }}) before Bootstrap's JavaScript or use `bootstrap.bundle.min.js` / `bootstrap.bundle.js` which contains Popper.js. Popper.js isn't used to position dropdowns in navbars though as dynamic positioning isn't required.

If you're building our JavaScript from source, it [requires `util.js`]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/javascript/#util).

## Accessibility

Bootstrap's dropdowns, on the other hand, are designed to be generic and applicable to a variety of situations and markup structures. For instance, it is possible to create dropdowns that contain additional inputs and form controls, such as search fields or login forms.

However, Bootstrap does add built-in support for most standard keyboard menu interactions, such as the ability to move through individual `.dropdown-item` elements using the cursor keys and close the menu with the <kbd>ESC</kbd> key.

## Examples

Drop-down menu buttons are used when you want to offer several actions in a limited area.

Wrap the dropdown's toggle (your button or link) and the dropdown menu within `.dropdown`, or another element that declares `position: relative;`. Dropdowns can be triggered from `<button>` elements to better fit your potential needs.

### Single button dropdowns

Any single `.btn` can be turned into a dropdown toggle with some markup changes. Here's how you can put them to work with either `<button>` elements:

{% example html %}
<div class="btn-group dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol1">
    <span>Dropdown button</span>
    <i class="icons-arrow-down"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1" id="mycontrol1">
    <ul>
      <li class="dropdown-item"><a href="#">Action</a></li>
      <li class="dropdown-item"><a href="#">Another action</a></li>
      <li class="dropdown-item"><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{% endexample %}

We recommend usage of `dropdown-menu-right` **only**, although by default dropdown's menus are left aligned (CSS code conserved for compatibility reasons), to follow SNCF's design guidelines.

{% capture callout-include %}{% include callout-where-are-the-colors.md %}{% endcapture %}
{{ callout-include | markdownify }}

### Disabled state

{% example html %}
<div class="btn-group dropdown">
  <button class="btn btn-primary dropdown-toggle disabled" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol2">
    <span>Dropdown button</span>
    <i class="icons-arrow-down"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2" id="mycontrol2">
    <ul>
      <li class="dropdown-item"><a href="#">Action</a></li>
      <li class="dropdown-item"><a href="#">Another action</a></li>
      <li class="dropdown-item"><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{% endexample %}

## Menu items

Historically dropdown menu contents *had* to be links, but that's no longer the case with v4. Now you can optionally use `<button>` elements in your dropdowns instead of just `<a>`s.

{% example html %}
<div class="btn-group dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol3">
    <span>Dropdown</span>
    <i class="icons-arrow-down"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2" id="mycontrol3">
    <ul>
      <li class="dropdown-item"><a href="#">Action</a></li>
      <li class="dropdown-item"><a href="#">Another action</a></li>
      <li class="dropdown-item"><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{% endexample %}

## Menu headers

Add a header to label sections of actions in any dropdown menu.

{% example html %}
<div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item"><a href="#">Another action</a></li>
  </ul>
</div>
{% endexample %}

## Menu dividers

Separate groups of related menu items with a divider.

{% example html %}
<div class="dropdown-menu">
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item"><a href="#">Another action</a></li>
    <li class="dropdown-item"><a href="#">Something else here</a></li>
  </ul>
  <div class="dropdown-divider"></div>
  <ul>
    <li class="dropdown-item"><a href="#">Separated link</a></li>
  </ul>
</div>
{% endexample %}

## Menu forms

Put a form within a dropdown menu, or make it into a dropdown menu, and use [margin or padding utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) to give it the negative space you require.

{% example html %}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" title="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="custom-control custom-checkbox mb-4">
      <input type="checkbox" name="exampleCheckbox1" class="custom-control-input" id="exampleCheckbox1" >
      <label class="custom-control-label" for="exampleCheckbox1">Remember me</label>
    </div>
    <button type="submit" class="btn btn-block btn-primary">Sign in</button>
  </form>
  <a class="btn btn-link dropdown-item d-inline-flex align-items-center text-primary" href="#">Forgotten password ?<i class="ml-1 icons-arrow-next icons-size-x5" aria-hidden="true"></i></a>
</div>
{% endexample %}

## Active menu items

Add `.active` to items in the dropdown to **style them as active**.

{% example html %}
<div class="dropdown-menu">
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item active"><a href="#" title="Active link actif">Active action</a></li>
    <li class="dropdown-item"><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

## Disabled menu items

Add `.disabled` to items in the dropdown to **style them as disabled**.

{% example html %}
<div class="dropdown-menu">
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item disabled">Disabled action</li>
    <li class="dropdown-item"><a href="#">Something else here</a></li>
  </ul>
</div>
{% endexample %}

## Usage

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent list item. The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

{% callout info %}
On touch-enabled devices, opening a dropdown adds empty (`$.noop`) `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.
{% endcallout %}

### Via data attributes

Add `data-toggle="dropdown"` to a button to toggle a dropdown.

{% highlight html %}
<div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownDataAttributes">
    Dropdown trigger
  </button>
  <div class="dropdown-menu" aria-labelledby="dLabel" id="dropdownDataAttributes">
    ...
  </div>
</div>
{% endhighlight %}

### Via JavaScript

Call the dropdowns via JavaScript:

{% highlight js %}
$('.dropdown-toggle').dropdown()
{% endhighlight %}

{% callout info %}
##### `data-toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element.
{% endcallout %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset=""`.

<div class="table-wrapper">
  <div class="table-scroller dragscroll">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col" style="width: 100px;">Name</th>
          <th scope="col" style="width: 100px;">Type</th>
          <th scope="col" style="width: 50px;">Default</th>
          <th scope="col">Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>offset</td>
          <td>number | string | function</td>
          <td>0</td>
          <td>Offset of the dropdown relative to its target. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">offset docs</a>.</td>
        </tr>
        <tr>
          <td>flip</td>
          <td>boolean</td>
          <td>true</td>
          <td>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">flip docs</a>.</td>
        </tr>
        <tr>
          <td>boundary</td>
          <td>string | element</td>
          <td>'scrollParent'</td>
          <td>Overflow constraint boundary of the dropdown menu. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Note when `boundary` is set to any value other than `'scrollParent'`, the style `position: static` is applied to the `.dropdown` container.

### Methods

| Method | Description |
| --- | --- |
| `$().dropdown('toggle')` | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| `$().dropdown('update')` | Updates the position of an element's dropdown. |
| `$().dropdown('dispose')` | Destroys an element's dropdown. |

### Events

All dropdown events are fired at the `.dropdown-menu`'s parent element and have a `relatedTarget` property, whose value is the toggling anchor element.

| Event | Description |
| --- | --- |
| `show.bs.dropdown` | This event fires immediately when the show instance method is called. |
| `shown.bs.dropdown` | This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete). |
| `hide.bs.dropdown` | This event is fired immediately when the hide instance method has been called. |
| `hidden.bs.dropdown`| This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete). |

{% highlight js %}
$('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
})
{% endhighlight %}
