---
layout: docs
title: Vue d'ensemble
slug: vue-d-ensemble
description: Composants et options pour mettre en page votre projet avec Bootstrap SNCF, notamment l'encapsulage de containers, le puissant système de grille et les utilitaires de classes adaptatives (_responsive_).
group: layout
aliases: "/docs/4.3/layout/"
toc: true
---

## Containers

Les conteneurs sont les éléments de présentation les plus élémentaires de Bootstrap et sont **obligatoires pour l’utilisation de notre système de grille par défaut**. Bien que les conteneurs _puissent_ être imbriqués, la plupart des mises en page ne nécessitent pas de conteneur imbriqué.

### « Tout en un »

Notre classe par défaut `.container` est un container adaptatif, à largeur fixe, ce qui signifie que sa largeur maximale varie à chaque point d'arrêt.

<div class="bd-example">
  <div class="example-container-element col-6 p-3 mx-auto">
    .container
  </div>
</div>

{{< highlight html >}}
<div class="container">
  <!-- Contenu ici -->
</div>
{{< /highlight >}}

### Fluide

Utilisez `.container-fluid` pour un container qui prenne toute la largeur de la vue ou de l'écran.

<div class="bd-example">
  <div class="example-container-element p-3">
    .container-fluid
  </div>
</div>

{{< highlight html >}}
<div class="container-fluid">
  ...
</div>
{{< /highlight >}}

### Adaptatif (_responsive_)

Les conteneurs réactifs sont nouveaux dans Bootstrap v4. Ils vous permettent de spécifier une classe pleine largeur jusqu'à ce qu'un point d'arrêt particulier soit atteint et qu'une `max-width` soit appliquée. Par exemple, `.container-sm` a une largeur de 100% pour commencer, jusqu'à ce que le point d'arrêt de `sm` soit atteint, où il restera jusqu'aux points d'arrêt les plus élevés.

<div class="bd-example">
  <div class="example-container-element p-3 mb-3">
    .container-sm (100% wide until breakpoint)
  </div>
  <div class="example-container-element col-6 p-3 mx-auto">
    .container-sm (With max-width at breakpoint)
  </div>
</div>

{{< highlight html >}}
<div class="container-sm">100% wide until small breakpoint</div>
<div class="container-md">100% wide until medium breakpoint</div>
<div class="container-lg">100% wide until large breakpoint</div>
<div class="container-xl">100% wide until extra large breakpoint</div>
{{< /highlight >}}

## Points d'arrêts adaptatifs

Depuis que Bootstrap est développé pour être d'abord mobile, nous utilisons quelques [requêtes média (_media queries_)](https://developer.mozilla.org/en-US/docs/Web/CSS/Media_Queries/Using_media_queries) pour créer des points de rupture sensibles pour nos mises en page. et interfaces. Ces points d'arrêt sont principalement basés sur les largeurs minimales de la fenêtre d'affichage et nous permettent de redimensionner des éléments lorsque la fenêtre d'affichage change.

Bootstrap utilise principalement les plages de requête média suivantes (ou points d'arrêt) dans nos fichiers Sass source pour notre structure, notre système de grille et nos composants.

{{< highlight scss >}}
// Ecrans très petits (téléphones en mode portrait, moins de 576px)
// Pas de requêtes media (_media query_) pour `xs` puisque c'est la taille par défaut dans Bootstrap

// Petits écrans (téléphones en mode paysage, 576px et au delà)
@media (min-width: 576px) { ... }

// Écrans de taille moyenne (tablettes, 768px et au delà)
@media (min-width: 768px) { ... }

// Écrans larges (ordinateurs de bureau, 1024px et au delà)
@media (min-width: 1024px) { ... }

// Écrans très larges (1280px and up)
@media (min-width: 1280px) { ... }
{{< /highlight >}}

Comme nous écrivons notre code source CSS en Sass, toutes nos requêtes média sont disponibles depuis des mixins Sass :

{{< highlight scss >}}
// Pas de requêtes média nécessaires pour le point de rupture `xs`, puisqu'il s'agît effectivement de `@media (min-width: 0) { ... }`
@include media-breakpoint-up(sm) { ... }
@include media-breakpoint-up(md) { ... }
@include media-breakpoint-up(lg) { ... }
@include media-breakpoint-up(xl) { ... }

// Exemple : Masquer dès `min-width: 0`, et ensuite afficher au point de rupture `sm`
.custom-class {
  display: none;
}
@include media-breakpoint-up(sm) {
  .custom-class {
    display: block;
  }
}
{{< /highlight >}}

Occasionnellement nous utilisons des requêtes media qui vont dans une autre direction (taille d'écran donnée _ou plus petite_) :

{{< highlight scss >}}
// Ecrans très petits (téléphones en mode portrait, moins de 576px)
@media (max-width: 575.98px) { ... }

// Petits écrans (téléphones en mode paysage, moins de 768px)
@media (max-width: 767.98px) { ... }

// Écrans de taille moyenne (tablettes, moins de 1024px)
@media (max-width: 1023.98px) { ... }

// Écrans larges (ordinateurs de bureau, moins de 1280px)
@media (max-width: 1279.98px) { ... }

// Écrans très larges
// Pas de requêtes media puisque le point de rupture extra-large n'a pas de limite à sa largeur
{{< /highlight >}}

{{< callout info >}}
{{< partial "callout-info-mediaqueries-breakpoints.fr.md" >}}
{{< /callout >}}

Une fois encore, ces requêtes média sont aussi disponibles avec des mixins Sass :

{{< highlight scss >}}
@include media-breakpoint-down(xs) { ... }
@include media-breakpoint-down(sm) { ... }
@include media-breakpoint-down(md) { ... }
@include media-breakpoint-down(lg) { ... }
// Pas de requête média nécessaire pour les points de rupture `xl` n'ayant pas de limite de largeur

// Exemple : Style appliqué depuis le point de rupture moyen `md` et en dessous
@include media-breakpoint-down(md) {
  .custom-class {
    display: block;
  }
}
{{< /highlight >}}

Il existe également des requêtes médias et mixins pour cibler un segment simple de tailles d'écrans en utilisant des largeurs minimales et maximales comme point de rupture.

// Ecrans très petits (téléphones en mode portrait, moins de 576px)
// Petits écrans (téléphones en mode paysage, 576px et au delà)
// Écrans de taille moyenne (tablettes, 768px et au delà)
// Écrans larges (ordinateurs de bureau, 1024px et au delà)
// Écrans très larges (1280px and up)


{{< highlight scss >}}
// Ecrans très petits (téléphones en mode portrait, moins de 576px)
@media (max-width: 575.98px) { ... }

// Petits écrans (téléphones en mode paysage, 576px et au delà)
@media (min-width: 576px) and (max-width: 767.98px) { ... }

// Écrans de taille moyenne (tablettes, 768px et au delà)
@media (min-width: 768px) and (max-width: 991.98px) { ... }

// Écrans larges (ordinateurs de bureau, 1024px et au delà)
@media (min-width: 1024px) and (max-width: 1023.98px) { ... }

// Écrans très larges (1280px and up)
@media (min-width: 1280px) { ... }
{{< /highlight >}}

Requêtes média aussi disponibles avec des mixins Sass :

{{< highlight scss >}}
@include media-breakpoint-only(xs) { ... }
@include media-breakpoint-only(sm) { ... }
@include media-breakpoint-only(md) { ... }
@include media-breakpoint-only(lg) { ... }
@include media-breakpoint-only(xl) { ... }
{{< /highlight >}}

De la même manière les requêtes média peuvent couvrir plusieurs largeurs de points de rupture :

{{< highlight scss >}}
// Exemple
// Appliquer les styles depuis des écrans de taille moyenne jusqu'à extra-large
@media (min-width: 768px) and (max-width: 1199.98px) { ... }
{{< /highlight >}}

La mixin Sass pour cibler la même amplitude de tailles d'écran serait :

{{< highlight scss >}}
@include media-breakpoint-between(md, xl) { ... }
{{< /highlight >}}

## Z-index

Plusieurs composants Bootstrap utilisent `z-index`, la propriété CSS qui permet de contrôler la mise en page en fournissant un troisième axe pour organiser le contenu. Dans Bootstrap, nous utilisons une échelle d'`index-z` conçue par défaut  pour superposer correctement la navigation, les info-bulles et les bulles contextuelles, fenêtres modales, etc.

Les valeurs les plus élevées commencent par un nombre arbitraire, élevé et suffisamment spécifique pour éviter idéalement les conflits. Nous avons besoin d'un ensemble standard de ces composants dans nos composants en couches (info-bulles, bulles contextuelles, fenêtres modales, barres de navigation, menus déroulants) pour que nous puissions être raisonnablement cohérents dans les comportements. Il n'y a aucune raison pour laquelle nous n'aurions pas pu utiliser `100` ou `500` par exemple.

Nous n'encourageons pas la personnalisation de ces valeurs individuelles : **si vous en changez un, vous devrez probablement les changer tous**.

{{< highlight scss >}}
$zindex-dropdown:          1000 !default;
$zindex-sticky:            1020 !default;
$zindex-fixed:             1030 !default;
$zindex-modal-backdrop:    1040 !default;
$zindex-modal:             1050 !default;
$zindex-popover:           1060 !default;
$zindex-tooltip:           1070 !default;
{{< /highlight >}}

Pour gérer les bordures qui se chevauchent dans les composants (par exemple, les boutons et les champs dans les groupes d'entrées), nous utilisons des valeurs `z-index` à un seul chiffre de `1`, `2` et `3` pour les états par défaut, survolé et actif. En survol/focus/actif, nous mettons au premier plan un élément particulier avec une valeur `z-index` supérieure pour afficher sa bordure sur les éléments frères.
