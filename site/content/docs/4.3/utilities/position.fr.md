---
layout: docs
title: Positionnement
description: Utilisez ces raccourcis pour rapidement configurer la position d'un élément.
group: utilities
toc: true
---

## Valeurs communes

Des classes de positionnement rapides sont disponibles mais ne sont pas adaptatives.

{{% highlight html %}}
<div class="position-static">...</div>
<div class="position-relative">...</div>
<div class="position-absolute">...</div>
<div class="position-fixed">...</div>
<div class="position-sticky">...</div>
{{% /highlight %}}

## Fixé en haut (_fixed top_)

Positionnez un élément en haut de l'écran, d'un bord à l'autre. Assurez-vous de bien mesurer les conséquences d'une position fixe dans votre projet. Vous devrez peut-être ajouter du code CSS supplémentaire.

{{% highlight html %}}
<div class="fixed-top">...</div>
{{% /highlight %}}

## Fixé en bas (_fixed bottom_)

Positionnez un élément en bas de l'écran, d'un bord à l'autre. Assurez-vous de bien mesurer les conséquences d'une position fixe dans votre projet. Vous devrez peut-être ajouter du code CSS supplémentaire.

{{% highlight html %}}
<div class="fixed-bottom">...</div>
{{% /highlight %}}

## Collé en haut (_sticky top_)

Positionnez un élément en haut de l'écran, d'un bord à l'autre, mais seulement après avoir fait défiler. La classe utilitaire `.sticky-top` utilise le code CSS `position: sticky`, qui n'est pas totalement supporté par tous les navigateurs.

**IE11 et IE10 représentent `position: sticky` comme `position: relative`.** Ainsi, nous avons encapsulé les types dans une requête `@supports`, limitant cette propriété aux seuls navigateurs qui la supportent.

{{% highlight html %}}
<div class="sticky-top">...</div>
{{% /highlight %}}
