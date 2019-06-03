---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---

## Color

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no link styling.**

<div class="row">
<div class="col-lg-6">
<p class="h3">By theme</p>
{% example html %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{% endexample %}
</div>
<div class="col-lg-6">
<p class="h3">By color name</p>
{% example html %}
{% for color in site.data.colors %}
<p class="text-{{ color.name }}{% if color.name == "white" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-muted">Muted link</p>
{% endexample %}
</div>
</div>

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` utilities.

<div class="row">
<div class="col-lg-6">
<p class="h3">By theme</p>
{% example html %}
{% for color in site.data.theme-colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "light" or color.name == "warning" %}text-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
{% endexample %}
</div>
<div class="col-lg-6">
<p class="h3">By color name</p>
{% example html %}
{% for color in site.data.colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "white" or color.name == "yellow" or color.name == "green" or color.name == "teal" %}text-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
{% endexample %}
</div>
</div>
