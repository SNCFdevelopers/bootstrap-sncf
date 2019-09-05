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

Les cartes sont construites avec le moins de balises et de styles possibles, mais parviennent tou de même à fournir une tonne de contrôle et de personnalisation. Construits avec flexbox, ils offrent un alignement facile et se marient bien avec les autres composants Bootstrap. . Ils n'ont pas de `margin` par défaut, utilisez donc [spacing utilities]({{< docsref "/utilities/spacing" >}}) selon vos besoins.

Vous trouverez ci-dessous un exemple de carte de base à contenu mixte et à largeur fixe. Les cartes n'ayant pas de largeur fixe au début, elles rempliront donc naturellement toute la largeur de son élément parent. Ceci est facilement personnalisable avec nos différentes [options de dimensionnement](#sizing).

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
