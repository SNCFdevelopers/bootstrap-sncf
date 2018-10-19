---
layout: docs
title: Badges
description: Status indicators and counters are not interactive. They are visual components that communicate the status of a list that communicate, for example, the status of a list and the number of items found in it.
group: components
toc: true
permalink: /docs/4.0/components/badge
---

## Example

{% example html %}
<span class="badge badge-secondary">New</span>
{% endexample %}

## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

{% example html %}
{% for color in site.data.theme-colors %}
<span class="badge badge-{{ color.name }}">{{ color.name | capitalize }}</span>{% endfor %}
{% endexample %}

{% capture callout-include %}{% include callout-warning-color-assistive-technologies.md %}{% endcapture %}
{{ callout-include | markdownify }}
