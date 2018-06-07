---
layout: docs
title: Sami
description: TODO
group: components
toc: true
---

## Examples

Bootstrap includes several predefined button styles, each serving its own semantic purpose, with a few extras thrown in for more control.

{% example html %}
{% for color in site.data.sami %}
<span class="sami sami-{{ color.name }} font-weight-medium">NC</span>
{% endfor %}
{% endexample %}

{% example html %}
{% for color in site.data.sami %}
{% if color.icon %}
<input type="checkbox" class="sr-only" id="sami{{ color.name }}">
<label for="sami{{ color.name }}" class="sami sami-checkbox-{{ color.name }}">
    <span class="sr-only">{{ color.icon }}</span>
    <i class="icons-sami-{{ color.icon }} icons-size-3x"></i>
</label>
{% endif %}
{% endfor %}
{% endexample %}