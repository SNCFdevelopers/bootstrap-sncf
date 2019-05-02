---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---

## Color

{% example html %}
{% for color in site.data.theme-colors %}
<p class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">.text-{{ color.name }}</p>{% endfor %}
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{% endexample %}

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no link styling.**

{% example html %}
{% for color in site.data.colors %}
<p><a href="#" class="text-{{ color.name }}{% if color.name == "light" %} bg-dark{% endif %}">{{ color.name | capitalize }} link</a></p>{% endfor %}
<p><a href="#" class="text-muted">Muted link</a></p>
<p><a href="#" class="text-white bg-dark">White link</a></p>
{% endexample %}

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` utilities.

{% example html %}
{% for color in site.data.colors %}
<div class="p-3 mb-2 bg-{{ color.name }} {% if color.name == "light" or color.name == "warning" %}text-dark{% else %}text-white{% endif %}">.bg-{{ color.name }}</div>{% endfor %}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
<br>
<div class="p-3 mb-2 bg-purple text-white">.bg-purple</div>
<div class="p-3 mb-2 bg-pink text-white">.bg-pink</div>
<div class="p-3 mb-2 bg-orange text-white">.bg-orange</div>
<div class="p-3 mb-2 bg-red text-white">.bg-red</div>
<div class="p-3 mb-2 bg-cyan text-white">.bg-cyan</div>
<div class="p-3 mb-2 bg-blue text-white">.bg-blue</div>
<div class="p-3 mb-2 bg-teal text-dark">.bg-teal</div>
<div class="p-3 mb-2 bg-green text-dark">.bg-green</div>
<div class="p-3 mb-2 bg-yellow text-dark">.bg-yellow</div>
{% endexample %}
