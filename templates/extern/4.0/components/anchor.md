---
layout: docs
title: Anchor
description: Anchor links make vertical navigation easier by taking users directly to a specific location on a text page.
group: components
toc: true
permalink: /docs/4.0/components/anchor
---

Anchors are located to the left of the text/content at the top of the page. Anchor links remain frozen when the user scrolls down the page. A position indicator tells readers where they are on the page. 

{% callout danger %}
This feature does not appear on tablets in portrait mode or on mobile devices.
{% endcallout %}

### Mid-term state

{% example html %}
<div class="anchor">
  <a href="#" class="anchor-item">Nos solutions</a>
  <a href="#" class="anchor-item">En régions</a>
  <a href="#" class="anchor-item current">En île-de-France</a>
  <a href="#" class="anchor-item">Notre réseau en île de france</a>
  <a href="#" class="anchor-item">Paris-Orléans</a>
</div>
{% endexample %}

### Beginning state

{% example html %}
<div class="anchor">
  <a href="#" class="anchor-item current">Nos solutions</a>
  <a href="#" class="anchor-item">En régions</a>
  <a href="#" class="anchor-item">En île-de-France</a>
  <a href="#" class="anchor-item">Notre réseau en île de france</a>
  <a href="#" class="anchor-item">Paris-Orléans</a>
</div>
{% endexample %}

### Ending state

{% example html %}
<div class="anchor">
  <a href="#" class="anchor-item">Nos solutions</a>
  <a href="#" class="anchor-item">En régions</a>
  <a href="#" class="anchor-item">En île-de-France</a>
  <a href="#" class="anchor-item">Notre réseau en île de france</a>
  <a href="#" class="anchor-item current">Paris-Orléans</a>
</div>
{% endexample %}
