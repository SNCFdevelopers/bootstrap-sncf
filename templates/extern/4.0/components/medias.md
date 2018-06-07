---
layout: docs
title: Medias
description: Medias.
group: components
toc: true
permalink: /docs/4.0/components/medias
---

## Slideshow

{% example html %}
<div class="swiper slideshow" data-component="slideshow">
  <div class="swiper-container" data-role="container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      {% for i in (1..5) %}
      <div class="swiper-slide">
        <img class="w-100 mb-4 rounded" src="https://dummyimage.com/656x394/000/fff" />
        <p class="mb-2">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
        <p class="mb-0 text-xs">Crédits : Arnaud Février</p>
      </div>
      {% endfor %}     
    </div>
  </div>
  <div class="swiper-pagination mt-3 mt-md-4 text-primary" data-role="pagination"></div>
  <div class="swiper-buttons">
    <div class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75"></i></div>
    <div class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75"></i></div>
  </div>
</div>
{% endexample %}