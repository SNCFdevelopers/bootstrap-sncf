---
layout: docs
title: Médias
description: Les pages de contenu peuvent utiliser différents formats d'image. Les contributeurs peuvent opter pour des illustrations, packshots ou photos produite SNCF.
group: components
toc: true
url: /fr/docs/4.3/components/medias/
---

## Images

{{% example html %}}
<p class="text-center">13/5</p>
<img class="w-100 rounded" src="https://dummyimage.com/656x253/333/fff" />
{{% /example %}}

### Images 100%

Ce format d'image a les bords arrondis et porte ce nom car il couvre l'ensemble de la largeur de la grille de contenu, et ce sur tous les périphériques : ordinateurs de bureau, tablettes en mode portrait et mobiles. L'image prend toujours 100% du contenu.

{{% example html %}}
<img class="img-fluid rounded" src="https://dummyimage.com/1920x1080/333/fff" />
{{% /example %}}

### Images 50%

Ce format d'image a les bords arrondis et porte ce nom car il couvre « presque » la moitié de la largeur de la grille de contenu, et ce sur ordinateurs de bureau et tablettes en mode portrait. Il peut être utilisé dans les blocs de paragraphes à 50%.

Sur mobile, la taille d'image correspond au contenu de la grille — les images 100% et 50% ont donc la même taille sur mobile.

{{% example html %}}
<div class="row">
  <div class="col-sm-6">
    <img class="img-fluid rounded" src="https://dummyimage.com/1920x1080/333/fff" />
  </div>
</div>
{{% /example %}}

{{% callout info %}}
Notez l'utilisation de `w-xxx` où xxx est le pourcentage de la largeur de l'image pour tout périphérique. L'utilisation de la grille avec `row` et `col-sm-6` combiné avec la classe `img-fluid` est expliqué [ici](broken link) pour les vues adaptatives.
{{% /callout %}}


## Diaporama

{{< example html >}}
<div class="swiper slideshow" data-component="slideshow">
  <div class="swiper-container" data-role="container">
    <!-- Balise encapsulante supplémentaire nécessaire -->
    <div class="swiper-wrapper">
      {{< slideshow.inline >}}
      {{- range (seq 5) -}}
      <div class="swiper-slide">
        <figure role="group">
          <img class="w-100 mb-4 rounded" src="https://dummyimage.com/656x394/333/fff" alt="image {{ . }}" />
          <figcaption>
            <span class="sr-only">image {{ . }}</span>
            <p class="mb-2">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
            <p class="mb-0 text-xs">Crédits : Arnaud Février</p>
          </figcaption>
        </figure>
      </div>
      {{- end -}}     
      {{< /slideshow.inline >}}
    </div>
  </div>
  <div class="swiper-pagination mt-3 mt-md-4 text-primary" data-role="pagination"></div>
  <div class="swiper-buttons">
    <div class="swiper-button-prev" data-role="button-prev"><i class="icons-arrow-prev icons-size-x75" aria-hidden="true"></i></div>
    <div class="swiper-button-next" data-role="button-next"><i class="icons-arrow-next icons-size-x75" aria-hidden="true"></i></div>
  </div>
</div>
{{< /example >}}
