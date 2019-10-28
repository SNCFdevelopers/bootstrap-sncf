---
layout: docs
title: Fil d'ariane
description: Le fil d'Ariane indique le chemin emprunté par l'utilisateur dans une section et peut le ramener à une page de niveau supérieur. Il indique donc l'emplacement de l'utilisateur dans la hiérarchie du site. Le fil d'Ariane est nécessaire sur les interfaces comportant des arborescences profondes.
group: components
toc: true
---

## Vue d'ensemble

Les séparateurs sont automatiquement ajoutés en CSS via [`::before`](https://developer.mozilla.org/en-US/docs/Web/CSS/::before) et [`content`](https://developer.mozilla.org/en-US/docs/Web/CSS/content).

Le fil d'Ariane ne doit pas être utilisé sur les interfaces mobiles.

{{% example html %}}
<nav aria-label="Vous êtes : " role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item active" aria-current="page">Library</li>
  </ol>
</nav>

<nav aria-label="Vous êtes : " role="navigation">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Home</a></li>
    <li class="breadcrumb-item"><a href="#">Library</a></li>
    <li class="breadcrumb-item"><a href="#">Books</a></li>
    <li class="breadcrumb-item active" aria-current="page">Data</li>
  </ol>
</nav>
{{% /example %}}

{{% callout info %}}
Vous trouverez l'indicateur d'étapes dans [progress components]({{< docsref "/components/progress#steps-indicator" >}}).
{{% /callout %}}

## Accessibilité

Comme le fil d'Ariane montre une navigation, c'est une bonne idée d'ajouter une étiquette significative telle que `aria-label="Vous êtes : "` pour décrire le type de navigation fourni dans le `<nav>` élément, ainsi que l'application d'un `aria-current="page"` au dernier élément de l'ensemble pour indiquer qu'il représente la page en cours.

Pour plus d'information, consultez [WAI-ARIA Authoring Practices for the breadcrumb pattern](https://www.w3.org/TR/wai-aria-practices/#breadcrumb).
