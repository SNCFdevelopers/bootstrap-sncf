---
layout: docs
title: Cards
slug: Cartes
description: Les cartes peuvent être utilisées lorsque les images permettent de mieux identifier le contenu (sous forme de liste mosaique d'éléments reconnaissables visuellement par exemple).
group: components
toc: true
url: /docs/4.3/components/card/
---

## A propos

Une **carte** est un conteneur flexible et extensible. Il comprend des options pour les en-têtes et et les pieds de page, une grande variété de contenu, des couleurs d'arrière-plan contextuelles et de puissantes options d'affichage. Si vous connaissez bien Bootstrap 3, les cartes remplacent les anciens "panels", "wells" and "thumbnails". Des fonctionnalités similaires à ces composants sont disponibles en tant que classes de modification pour les cartes.

## Exemple

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no `margin` by default, so use [spacing utilities]({{< docsref "/utilities/spacing" >}}) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

{{% example html %}}
<div class="row">
  <div class="col-md-4">
    <a href="#" class="card overflow-hidden">
      <img class="card-img-top" alt="" src="https://placekitten.com/267/128" />
      <div class="card-body text-center">
        <h5 class="card-title mb-0 text-base font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
      </div>
    </a>
  </div>
  <div class="col-md-4">
    <a href="#" class="card overflow-hidden">
      <img class="card-img-top" alt="" src="http://placekitten.com/267/128" />
      <div class="card-body text-center">
        <h5 class="card-title mb-0 text-base font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
      </div>
    </a>
  </div>
  <div class="col-md-4">
    <a href="#" class="card overflow-hidden">
      <img class="card-img-top" alt="" src="http://placekitten.com/267/128" />
      <div class="card-body text-center">
        <h5 class="card-title mb-0 text-base font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
      </div>
    </a>
  </div>
</div>
{{% /example %}}
