---
layout: docs
title: Breadcrumb
description: Breadcrumbs show the path a reader has taken in a section and can return the reader to a higher-level page. It thus shows the reader's location within the website's hierarchy. Only websites with deep tree structures need breadcrumbs.
group: components
---

## Overview

Separators are automatically added in CSS through [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) and [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

The breadcrumbs should not be used in mobile interfaces.

{{% example html %}}
<nav aria-label="Vous êtes : " role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="Vous êtes : " role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item"><a href="#">Books</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{{% /example %}}

{{% callout info %}}
You will find steps indicator in the [progress components]({{< docsref "/components/progress#steps-indicator" >}}).
{{% /callout %}}

## Accessibility

Since breadcrumbs provide a navigation, it's a good idea to add a meaningful label such as `aria-label="Vous êtes : "` to describe the type of navigation provided in the `<nav>` element, as well as applying an `aria-current="page"` to the last item of the set to indicate that it represents the current page.

For more information, see the [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
