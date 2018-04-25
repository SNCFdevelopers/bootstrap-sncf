---
layout: docs
title: Carousel
description: A slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
toc: true
permalink: /docs/4.0/components/carousel
---

## Carousel

{% example html %}
<div class="swiper carousel" data-component="carousel">
  <div class="swiper-container" data-role="container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      {% for i in (1..5) %}
      <div class="swiper-slide">
        <div class="row background-light">
          <div class="col-12 col-md-6">
            <img class="w-100" src="https://dummyimage.com/640x383/000/fff" />
          </div>
          <div class="col-12 col-md-6">
            <div class="carousel-item-content">
              <h3 class="text-sm font-weight-medium text-primary text-uppercase">Transformation Digitale, Événement, Open Innovation</h3>
              <h2>PITCHS STARTUPS AU MEETUP DEUTSCHE BAHN - SNCF</h2>
              <p class="mb-2">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
              <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icon-size-x5 ml-2"></i></a>
            </div>
          </div>
        </div>
      </div>
      {% endfor %}     
    </div>
  </div>
  <div class="carousel-controls">
    <div class="row">
    <div class="col-12 col-md-6"></div>
    <div class="col-12 col-md-6 d-md-flex align-items-md-end justify-content-center justify-content-md-between">
      <div class="swiper-buttons d-none d-md-flex">
        <div class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icon-size-x75"></i></div>
        <div class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icon-size-x75"></i></div>
      </div>
      <div class="gr-md-5">
        <div class="swiper-pagination" data-role="pagination"></div>
      </div>
    </div>
  </div>
</div>
{% endexample %}