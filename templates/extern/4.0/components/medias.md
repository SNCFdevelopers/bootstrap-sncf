---
layout: docs
title: Medias
description: Content pages can use different image formats. Content editors can choose from the following options > illustrations, packshots and photo essays produced by SNCF.
group: components
toc: true
permalink: /docs/4.0/components/medias
---

## Pictures

{% example html %}
<p class="text-center">13/5</p>
<img class="w-100 rounded" src="https://dummyimage.com/656x253/000/fff" />
{% endexample %}

### 100% picture

This image format has rounded edges and gets its name because it covers the entire content grid (width). This is true for all devices: computers, tablets in portrait mode, and mobiles. The image always takes up 100% of the content grid.

{% example html %}
<img class="img-fluid rounded" src="https://dummyimage.com/1920x1080/000/fff" />
{% endexample %}

### 50% picture

This image format has rounded edges and gets it name because it covers “almost” half of the content grid on computers and tablets in portrait mode. It is used in “50% paragraph” blocks.

In the mobile version, image size corresponds to the content grid (meaning 100% and 50% images are the same size).

{% example html %}
<div class="row">
  <div class="col-sm-6">
    <img class="img-fluid rounded" src="https://dummyimage.com/1920x1080/000/fff" />
  </div>
</div>
{% endexample %}

{% callout info %}
Note the usage of `w-xxx` where xxx is the percentage of width for image, for all devices, and the usage of grid with `row` and `col-sm-6` combined with `img-fluid` class explained [here](broken link) for adaptative view.
{% endcallout %}


## Slideshow

{% example html %}
<div class="swiper slideshow" data-component="slideshow">
  <div class="swiper-container" data-role="container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      {% for i in (1..5) %}
      <div class="swiper-slide">
        <figure role="group">
          <img class="w-100 mb-4 rounded" src="https://dummyimage.com/656x394/000/fff" alt="image {{ forloop.index }}" />
          <figcaption>
            <p class="mb-2">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
            <p class="mb-0 text-xs">Crédits : Arnaud Février</p>
          </figcaption>
        </figure>
      </div>
      {% endfor %}     
    </div>
  </div>
  <div class="swiper-pagination mt-3 mt-md-4 text-primary" data-role="pagination"></div>
  <div class="swiper-buttons">
    <div class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75" aria-hidden="true"></i></div>
    <div class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75" aria-hidden="true"></i></div>
  </div>
</div>
{% endexample %}
