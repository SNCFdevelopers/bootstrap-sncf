---
layout: docs
title: Sami
group: components
toc: true
permalink: /docs/4.0/components/sami
---

There are several performance indicators. The most common is: 
- Satisfactory
- Meets expectations
- Improvement needed
- Unsatisfactory.
You can also use emoticons (to indicate satisfaction, quality, etc.). These components can be either clickable (if data must be entered) or unclickable if they are for display only.

{% example html %}
<span class="pr-3">Click me!</span>
<input type="checkbox" class="sr-only" id="samiblue">
<label for="samiblue" class="sami sami-checkbox-blue">S</label>
<input type="checkbox" class="sr-only" id="samired">
<label for="samired" class="sami sami-checkbox-red">A</label>
<input type="checkbox" class="sr-only" id="samiyellow">
<label for="samiyellow" class="sami sami-checkbox-yellow">M</label>
<input type="checkbox" class="sr-only" id="samigreen">
<label for="samigreen" class="sami sami-checkbox-green">I</label>
<input type="checkbox" class="sr-only" id="samigray">
<label for="samigray" class="sami sami-checkbox-gray">NC</label>
{% endexample %}

{% example html %}
<span class="pr-3">Click me!</span>
{% for color in site.data.sami %}
{% if color.icon %}
  <input type="checkbox" class="sr-only" id="smileys{{ color.name }}">
  <label for="smileys{{ color.name }}" class="sami sami-checkbox-{{ color.name }}">
    <span class="sr-only">{{ color.icon }}</span>
    <i class="icons-sami-{{ color.icon }} icons-size-3x"></i>
  </label>
{% endif %}
{% endfor %}
{% endexample %}
