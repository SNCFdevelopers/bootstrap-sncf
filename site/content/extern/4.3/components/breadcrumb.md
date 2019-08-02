---
layout: docs
title: Breadcrumb
description: Indicate the current page's location within a navigational hierarchy that automatically adds separators via CSS.
group: components
url: /docs/4.3/components/breadcrumb/
---

## Overview

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

The breadcrumbs should not be used in mobile interfaces.

{{% example html %}}

<nav aria-label="Vous êtes : " role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Menu</a></li>
    <li class="breadcrumb-item"><a href="#">Offres voyageurs</a></li>
    <li class="breadcrumb-item active" aria-current="page">Voyager à petits prix</li>
  </ol>
</nav>
{{% /example %}}

## Accessibility

Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="Vous êtes : "` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
