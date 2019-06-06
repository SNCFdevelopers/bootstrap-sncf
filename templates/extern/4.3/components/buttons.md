---
layout: docs
title: Buttons
description: Use Bootstrap's custom button styles for actions in forms, dialogs, and more with support for multiple sizes, states, and more.
group: components
toc: true
permalink: /docs/4.0/components/buttons/
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
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{% endexample %}

## Button links

These buttons are used for very minor actions.

<p><a href="#" class="btn btn-link"><span>Internal link</span> <i class="icons-arrow-next icons-size-x75 ml-2" aria-hidden="true"></i></a></p>
<p><a href="#" class="btn btn-link"><span>Share link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></a></p>
<p><a href="#" class="btn btn-link"><span>Download link</span> <i class="icons-download icons-size-x75 ml-2" aria-hidden="true"></i></a></p>
<p><a href="#" class="btn btn-link"><span>External link</span> <i class="icons-external-link icons-size-x75 ml-2" aria-hidden="true"></i></a></p>

{% highlight html %}
<a href="#" class="btn btn-link"><span>Internal link</span> <i class="icons-arrow-next icons-size-x75 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>Share link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>Download link</span> <i class="icons-download icons-size-x75 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>External link</span> <i class="icons-external-link icons-size-x75 ml-2" aria-hidden="true"></i></a>
{% endhighlight %}

### Disabled state
{% example html %}
<p><span class="btn btn-link disabled"><span>Disabled link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></span></p>
{% endexample %}

## Button icon

These buttons are used for a series of buttons placed next to each other; they allow a more compact design.

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

These buttons are used to move between different views or anchor points on a screen.

{% example html %}
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Haut</span><i class="icons-arrow-up" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Suivant</span><i class="icons-arrow-next" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Bas</span><i class="icons-arrow-down" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Précédent</span><i class="icons-arrow-prev" aria-hidden="true"></i></button>
{% endexample %}

{% example html %}
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Haut</span><i class="icons-arrow-up" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Suivant</span><i class="icons-arrow-next" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Bas</span><i class="icons-arrow-down" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Précédent</span><i class="icons-arrow-prev" aria-hidden="true"></i></button>
{% endexample %}

## Social Media Share Icon Button

These buttons are used to share a given page on social networks.

{% example html %}
<button type="button" class="btn-rounded btn-rounded-primary"><span class="sr-only">Partager</span><i class="icons-share" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-facebook"><span class="sr-only">Facebook</span><i class="icons-facebook" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-twitter"><span class="sr-only">Twitter</span><i class="icons-twitter" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-linkedin"><span class="sr-only">Linkedin</span><i class="icons-linkedin" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-instagram"><span class="sr-only">YouTube</span><i class="icons-instagram" aria-hidden="true"></i></button>
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

