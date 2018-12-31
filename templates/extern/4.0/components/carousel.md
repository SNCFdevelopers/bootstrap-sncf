---
layout: docs
title: Carousel
description: A slideshow component for cycling through elements—images or slides of text—like a carousel.
group: components
toc: true
permalink: /docs/4.0/components/carousel
---

## Carousel

Carousels offer a slideshow of trending news on a homepage. They always appear at the top of the page.

Content editors can choose from the following options: illustrations, packshots and photo essays produced by SNCF.

{% example html %}
<div class="swiper carousel" data-component="carousel">
  <div class="swiper-container" data-role="container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      {% for i in (1..5) %}
      <div class="swiper-slide">
        <div class="row bg-light">
          <div class="col-12 col-md-6">
            <img class="w-100" src="https://dummyimage.com/640x383/000/fff" />
          </div>
          <div class="col-12 col-md-6">
            <div class="carousel-item-content">
              <h3 class="text-sm font-weight-medium text-primary text-uppercase">Transformation Digitale, Événement, Open Innovation</h3>
              <h2>PITCHS STARTUPS AU MEETUP DEUTSCHE BAHN - SNCF</h2>
              <p class="mb-2">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
              <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
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
        <div class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75" aria-hidden="true"></i></div>
        <div class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75" aria-hidden="true"></i></div>
      </div>
      <div class="gr-md-5">
        <div class="swiper-pagination" data-role="pagination"></div>
      </div>
    </div>
    </div>
  </div>
</div>
{% endexample %}

## Footer-pushes

### Description

Carousel footer pushes on text pages offer additional content of interest to users based on the page they are currently browsing. They make navigating a website easier. Content editors can choose from the following options: illustrations, packshots and photo essays.

{% example html %}
<div class="bg-light">
  <div class="container gt-8 gb-5">
    <h2 class="h1 mb-5">À découvrir également</h2>
    <div class="swiper multi-slideshow" data-component="multi-slideshow">
      <div class="swiper-container" data-role="container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <div class="text-sm text-uppercase mb-2">05/01/2017 - La plaine Saint-Denis</div>
                <h2 class="mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h2>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <div class="text-sm text-uppercase mb-2">05/01/2017 - La plaine Saint-Denis</div>
                <h2 class="mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h2>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <div class="text-sm text-uppercase text-primary font-weight-medium mb-2">Internet industriel</div>
                <h2 class="mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h2>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <div class="text-sm text-uppercase mb-2">05/01/2017 - La plaine Saint-Denis</div>
                <h2 class="mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h2>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination gt-5" data-role="pagination"></div>
      <div class="swiper-buttons">
        <div class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75" aria-hidden="true"></i></div>
        <div class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75" aria-hidden="true"></i></div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

