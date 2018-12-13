---
layout: docs
title: Overview
description: Components and options for laying out your SNCF project, including wrapping containers, a powerful grid system, a flexible media object, and responsive utility classes.
group: layout
redirect_from: "/docs/4.0/layout/"
toc: true
permalink: /docs/4.0/layout/overview
---

## Containers

Layout with actionbar.

{% highlight html %}
<nav role="navigation" class="mastnav">...</nav>
<header role="banner" class="mastheader">...</header>
<div class="actionbar"></div>
<main role="main" class="mastcontainer">
  <!-- Content here -->
</main>
{% endhighlight %}

Layout with actionbar and tabs.

{% highlight html %}
<nav role="navigation" class="mastnav">...</nav>
<header role="banner" class="mastheader">...</header>
<div class="actionbar has-tabs"></div>
<main role="main" class="mastcontainer">
  <!-- Content here -->
</main>
{% endhighlight %}

Layout with a actionbar and controlbar.

{% highlight html %}
<nav role="navigation" class="mastnav">...</nav>
<header role="banner" class="mastheader">...</header>
<div class="actionbar">...</div>
<div class="controlbar">...</div>
<main role="main" class="mastcontainer">
  <!-- Content here -->
</main>
{% endhighlight %}

{% highlight html %}
<nav role="navigation" class="mastnav">...</nav>
<header role="banner" class="mastheader">...</header>
<div class="actionbar has-tabs"></div>
<div class="controlbar">...</div>
<main role="main" class="mastcontainer">
  <!-- Content here -->
</main>
{% endhighlight %}

## Responsive breakpoints

Since Bootstrap is developed to be mobile first, we use a handful of [media queries](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) to create sensible breakpoints for our layouts and interfaces. These breakpoints are mostly based on minimum viewport widths and allow us to scale up elements as the viewport changes.

Bootstrap primarily uses the following media query ranges—or breakpoints—in our source Sass files for our layout, grid system, and components.

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
// No media query since this is the default in Bootstrap

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) { ... }

// Large devices (desktops, 1024px and up)
@media (min-width: 1024px) { ... }

// Extra large devices (large desktops, 1280px and up)
@media (min-width: 1280px) { ... }
{% endhighlight %}

Since we write our source CSS in Sass, all our media queries are available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-up(xs) { ... }
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Example usage:
@include media-breakpoint-up(sm) {
  .some-class {
    display: block;
  }
}
{% endhighlight %}

We occasionally use media queries that go in the other direction (the given screen size *or smaller*):

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, less than 768px)
@media (max-width: 767.98px) { ... }

// Medium devices (tablets, less than 1024px)
@media (max-width: 1023.98px) { ... }

// Large devices (desktops, less than 1280px)
@media (max-width: 1279.98px) { ... }

// Extra large devices (large desktops)
// No media query since the extra-large breakpoint has no upper bound on its width
{% endhighlight %}

{% capture callout-include %}{% include callout-info-mediaqueries-breakpoints.md %}{% endcapture %}
{{ callout-include | markdownify }}

Once again, these media queries are also available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
{% endhighlight %}

There are also media queries and mixins for targeting a single segment of screen sizes using the minimum and maximum breakpoint widths.

{% highlight scss %}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) { ... }

// Small devices (landscape phones, 576px and up)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Medium devices (tablets, 768px and up)
@media (min-width: 768px) and (max-width: 1023.98px) { ... }

// Large devices (desktops, 1024px and up)
@media (min-width: 1024px) and (max-width: 1279.98px) { ... }

// Extra large devices (large desktops, 1280px and up)
@media (max-width: 1279.98px) { ... }
{% endhighlight %}

These media queries are also available via Sass mixins:

{% highlight scss %}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{% endhighlight %}

Similarly, media queries may span multiple breakpoint widths:

{% highlight scss %}
// Example
// Apply styles starting from medium devices and up to extra large devices
@media (min-width: 768px) and (max-width: 1279.98px) { ... }
{% endhighlight %}

The Sass mixin for targeting the same screen size range would be:

{% highlight scss %}
@include media-breakpoint-between(md, xl) { ... }
{% endhighlight %}

## Z-index

Several Bootstrap components utilize `z-index`, the CSS property that helps control layout by providing a third axis to arrange content. We utilize a default z-index scale in Bootstrap that's been designed to properly layer navigation, tooltips and popovers, modals, and more.

These higher values start at an arbitrary number, high and specific enough to ideally avoid conflicts. We need a standard set of these across our layered components—tooltips, popovers, navbars, dropdowns, modals—so we can be reasonably consistent in the behaviors. There's no reason we couldn't have used `100`+ or `500`+.

We don't encourage customization of these individual values; should you change one, you likely need to change them all.

{% highlight scss %}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1020 !default;
$zindex-fixed:             1030 !default;
$zindex-modal-backdrop:    1040 !default;
$zindex-modal:             1050 !default;
$zindex-popover:           1060 !default;
$zindex-tooltip:           1070 !default;
{% endhighlight %}

To handle overlapping borders within components (e.g., buttons and inputs in input groups), we use low single digit `z-index` values of `1`, `2`, and `3` for default, hover, and active states. On hover/focus/active, we bring a particular element to the forefront with a higher `z-index` value to show their border over the sibling elements.
