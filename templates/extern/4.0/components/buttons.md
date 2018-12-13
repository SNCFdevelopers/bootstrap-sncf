---
layout: docs
title: Buttons
description: Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
permalink: /docs/4.0/components/buttons
---

## Example

{% example html %}
<button type="button" class="btn btn-primary">btn-primary</button>
{% endexample %}

{% capture callout-include %}{% include callout-where-are-the-colors.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Button tags

These are call-to-action buttons. They are always blue and look like a real button. The action written on the button must be short and be a command. Example: “Confirm your registration”. We prefer links for less important actions. Buttons indicate the main action. Do not overuse. 

Call-to-action buttons are left-aligned, except for mobile devices and for certain forms where they may occupy the screen's full usable width.

The `.btn` classes are designed to be used with the `<button>` element. However, you can also use these classes on `<a>` or `<input>` elements (though some browsers may apply a slightly different rendering).

When using button classes on `<a>` elements that are used to trigger in-page functionality (like collapsing content), rather than linking to new pages or sections within the current page, these links should be given a `role="button"` to appropriately convey their purpose to assistive technologies such as screen readers.

{% example html %}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endexample %}

## Button link

TODO : description

<a href="#" class="btn btn-link mb-4"><span>Internal link</span> <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
<br>
<a href="#" class="btn btn-link mb-4"><span>Share link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></a>
<br>
<a href="#" class="btn btn-link mb-4"><span>Download link</span> <i class="icons-download icons-size-x75 ml-2" aria-hidden="true"></i></a>
<br>
<a href="#" class="btn btn-link mb-4"><span>External link</span> <i class="icons-external-link icons-size-x75 ml-2" aria-hidden="true"></i></a>

{% highlight html %}
<a href="#" class="btn btn-link"><span>Internal link</span> <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>Share link</span> <i class="icons-share icons-size-x5 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>Download link</span> <i class="icons-download icons-size-x5 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>External link</span> <i class="icons-external-link icons-size-x5 ml-2" aria-hidden="true"></i></a>
{% endhighlight %}

## Button icon

TODO : description

{% example html %}
<button type="button" class="btn btn-only-icon btn-primary">
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
<button type="button" class="btn btn-only-icon btn-primary" disabled>
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
<button type="button" class="btn btn-only-icon btn-white">
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
<button type="button" class="btn btn-only-icon btn-white" disabled>
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
{% endexample %}

TODO : description

{% example html %}
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><i class="icons-arrow-up" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><i class="icons-arrow-next" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><i class="icons-arrow-down" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><i class="icons-arrow-prev" aria-hidden="true"></i></button>
{% endexample %}

{% example html %}
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><i class="icons-arrow-up" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><i class="icons-arrow-next" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><i class="icons-arrow-down" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><i class="icons-arrow-prev" aria-hidden="true"></i></button>
{% endexample %}

{% example html %}
<button type="button" class="btn-rounded btn-rounded-primary"><i class="icons-share" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-facebook"><i class="icons-facebook" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-twitter"><i class="icons-twitter" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-linkedin"><i class="icons-circle-linkedin" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-youtube"><i class="icons-youtube" aria-hidden="true"></i></button>
{% endexample %}

{% example html %}
<button type="button" class="btn-rounded btn-rounded-gray">9</button>
<button type="button" class="btn-rounded btn-rounded-gray">99</button>
<button type="button" class="btn-rounded btn-rounded-gray">999</button>
{% endexample %}

## Block level button

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

{% example html %}
<button type="button" class="btn btn-primary btn-block">Block level button</button>
{% endexample %}

