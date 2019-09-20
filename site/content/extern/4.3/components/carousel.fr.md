---
layout: docs
title: Carrousel
description: Un composant diaporama permettant de parcourir des éléments, images ou diapositives de texte, comme un carrousel.
group: components
toc: true
url: /fr/docs/4.3/components/carousel/
---

## Carrousel

Le carrousel propose un diaporama d'actualités ou nouvelles sur une page d'accueil. Ils doivent toujours apparaître au sommet de la page.

Il est possible d'y présenter plusieurs types de contenu : illustrations, _packshots_, et photos produites par SNCF.

{{< example html >}}
<div class="swiper carousel" data-component="carousel">
  <div class="swiper-container" data-role="container">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      {{< carousel.inline >}}
      {{- range (seq 5) -}}
      <div class="swiper-slide">
        <div class="row bg-carousel">
          <div class="col-12 col-md-6">
            <img alt="" class="w-100" src="https://dummyimage.com/640x383/000/fff" />
          </div>
          <div class="col-12 col-md-6">
            <div class="carousel-item-content">
              <h2 class="carousel-item-headtext">PITCHS STARTUPS AU MEETUP DEUTSCHE BAHN - SNCF</h2>
              <h3 class="text-sm font-weight-medium text-primary text-uppercase">Transformation Digitale, Événement, Open Innovation</h3>
              <p class="mb-2">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
              <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
      {{- end -}}
      {{< /carousel.inline >}}
    </div>
  </div>
  <div class="carousel-controls" aria-hidden="true">
    <div class="row">
    <div class="col-12 col-md-6"></div>
    <div class="col-12 col-md-6 d-md-flex align-items-md-end justify-content-center justify-content-md-between">
      <div class="swiper-buttons d-none d-md-flex">
        <button type="button" class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75" aria-hidden="true"></i></button>
        <button type="button" class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75" aria-hidden="true"></i></button>
      </div>
      <div class="gr-md-5">
        <div class="swiper-pagination" data-role="pagination"></div>
      </div>
    </div>
    </div>
  </div>
</div>
{{< /example >}}

## Notes de bas de page

### Description

Les notes de bas de page du carrousel sur les pages de texte offrent un contenu supplémentaire intéressant pour les utilisateurs en fonction de la page actuellement consultée. Ils facilitent la navigation sur un site Web.
Il est possible également d'y présenter plusieurs types de contenu : illustrations, _packshots_, et photos produites par SNCF.

{{% example html %}}
<div class="bg-carousel">
  <div class="container gt-8 gb-5">
    <h2 class="h1 mb-5">À découvrir également</h2>
    <div class="swiper multi-slideshow" data-component="multi-slideshow">
      <div class="swiper-container" data-role="container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <h3 class="h2 mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h3>
                <p class="carousel-item-headtext text-sm text-uppercase mb-2">05/01/2017 - La plaine Saint-Denis</p>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <h3 class="h2 mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h3>
                <p class="carousel-item-headtext text-sm text-uppercase mb-2">05/01/2017 - La plaine Saint-Denis</p>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <h3 class="h2 mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h3>
                <p class="carousel-item-headtext text-sm text-uppercase text-primary font-weight-medium mb-2">Internet industriel</p>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div>
              <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
              <div>
                <h3 class="h2 mb-3">ATELIER 574 : LA CONQUÊTE DE L'ESPACE</h3>
                <p class="carousel-item-headtext text-sm text-uppercase mb-2">05/01/2017 - La plaine Saint-Denis</p>
                <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination gt-5" data-role="pagination" aria-hidden="true"></div>
      <div class="swiper-buttons" aria-hidden="true">
        <button type="button" class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75" aria-hidden="true"></i></button>
        <button type="button" class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75" aria-hidden="true"></i></button>
      </div>
    </div>
  </div>
</div>
{{% /example %}}
