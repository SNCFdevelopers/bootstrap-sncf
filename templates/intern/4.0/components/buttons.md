---
layout: docs
title: Buttons
description: Buttons have multiple uses—they can let a user trigger an action, respond to a question asked by a chatbot, activate or deactivate a state, increase or decrease a numerical value, etc. Note that menu buttons are shown in the “Drop-down” section.
group: components
toc: true
permalink: /docs/4.0/components/buttons
---

## Examples
Primary buttons are used for the main call to action. Secondary buttons are used for less important actions.

{% example html %}
<button type="button" class="btn btn-primary">btn-primary</button>
<button type="button" class="btn btn-secondary">btn-secondary</button>
{% endexample %}

{% capture callout-include %}{% include callout-where-are-the-colors.md %}{% endcapture %}
{{ callout-include | markdownify }}

## Button tags

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

These buttons are used for very minor actions.

{% example html %}
<a href="#" class="btn btn-link"><span>Link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></a>
<span class="btn btn-link disabled"><span>Disabled link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></span>
{% endexample %}

## Icon Button

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

## Navigation Icon Button

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
<button type="button" class="btn-rounded btn-rounded-linkedin"><span class="sr-only">Linkedin</span><i class="icons-circle-linkedin" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-youtube"><span class="sr-only">YouTube</span><i class="icons-youtube" aria-hidden="true"></i></button>
{% endexample %}

{% example html %}
<button type="button" class="btn-rounded btn-rounded-gray">9</button>
<button type="button" class="btn-rounded btn-rounded-gray">99</button>
<button type="button" class="btn-rounded btn-rounded-gray">999</button>
{% endexample %}

## Sizes

Small buttons are used when space is limited—in a table, for instance.

Fancy smaller buttons? Add `.btn-sm` for additional sizes.

{% example html %}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{% endexample %}

Create block level buttons—those that span the full width of a parent—by adding `.btn-block`.

{% example html %}
<button type="button" class="btn btn-primary btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-block">Block level button</button>
{% endexample %}

## Active state

Buttons will appear pressed (with a darker background, darker border, and inset shadow) when active. **There's no need to add a class to `<button>`s as they use a pseudo-class**. However, you can still force the same active appearance with `.active` (and include the <code>aria-pressed="true"</code> attribute) should you need to replicate the state programmatically.

{% example html %}
<button type="button" class="btn btn-primary active" aria-pressed="true">Primary link</button>
<a href="#" class="btn btn-secondary active" role="button" aria-pressed="true">Link</a>
{% endexample %}

## Disabled state

Make buttons look inactive by adding the `disabled` boolean attribute to any `<button>` element.

{% example html %}
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<a href="#" class="btn btn-secondary disabled">Button</a>
{% endexample %}

Disabled buttons using the `<a>` element behave a bit different:

- `<a>`s don't support the `disabled` attribute, so you must add the `.disabled` class to make it visually appear disabled.
- Some future-friendly styles are included to disable all `pointer-events` on anchor buttons. In browsers which support that property, you won't see the disabled cursor at all.
- Disabled buttons should include the `aria-disabled="true"` attribute to indicate the state of the element to assistive technologies.

{% example html %}
<a href="#" class="btn btn-primary disabled" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary disabled" aria-disabled="true">Link</a>
{% endexample %}

{% callout warning %}
##### Link functionality caveat

The `.disabled` class uses `pointer-events: none` to try to disable the link functionality of `<a>`s, but that CSS property is not yet standardized. In addition, even in browsers that do support `pointer-events: none`, keyboard navigation remains unaffected, meaning that sighted keyboard users and users of assistive technologies will still be able to activate these links. So to be safe, add a `tabindex="-1"` attribute on these links (to prevent them from receiving keyboard focus) and use custom JavaScript to disable their functionality.
{% endcallout %}

## Large picture button

Large picture buttons are used when the options the buttons offer need a picture for greater clarity.

{% example html %}
<button type="button" class="btn btn-card">
  <i class="icons-large-france icons-size-90px" aria-hidden="true"></i>
  <span>Carte</span>
</button>
<button type="button" class="btn btn-card active" title="Carte actif">
  <i class="icons-large-france icons-size-90px" aria-hidden="true"></i>
  <span>Carte</span>
</button>
<button type="button" class="btn btn-card" disabled>
  <i class="icons-large-france icons-size-90px" aria-hidden="true"></i>
  <span>Carte</span>
</button>
{% endexample %}
