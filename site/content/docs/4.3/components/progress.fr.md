---
layout: docs
title: Barres de progression
description: Documentation et exemples des indicateurs d'étapes, barres de progression avec la gestion des labels.
group: components
toc: true
permalink: /docs/4.3/components/progress/
---

## Présentation

Les barres de progression affichent le progrés d'une opération, comme par exemple la récupération de données.
Il y a deux types de barres de progression :

- Les indicateurs déterminés qui montrent la durée d'une opération et peuvent afficher le pourcentage qui montre cette progression.
- Les indicateurs indéterminés qui montrent une durée d'attente non spécifiée.

## Fonctionnement des barres de progression

Ce composant est construit avec deux éléments HTML, un peu de CSS pour spécifier la largeur et quelques attributs. Nous n'utilisons pas [l'élément HTML5 `<progress>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), de façon à garantir la possibilité d'empiler les barres de progression, les animer et placer du texte par dessus.

- On utilise la classe `.progress` comme _wrapper_ pour indiquer la valeur maximale de la barre de progression.
- On utilise la classe secondaire `.progress-bar` pour indiquer le progrès réalisé.
- La classe `.progress-bar` nécessite un style _inline_, une classe utilitaire ou du CSS dédié pour définir sa largeur.
- La classe `.progress-bar` nécessite également quelques attributs `role` et `aria` pour la rendre accessible.

Mettez tout cela ensemble, et vous avez les exemples suivant :

{{% example html %}}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{% /example %}}

Bootstrap propose un set d'[outils très pratiques pour régler la largeur]({{< docsref "/utilities/sizing" >}}).
Ils peuvent vous aider à rapidement configurer les barres de progression suivant vos besoins.

{{% example html %}}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{% /example %}}

## Labels

Ajoutez des labels à votre barre de progression en plaçant le texte à l'intérieur de `.progress-bar`, et ajoutez la classe `has-label` à `progress`.

{{% example html %}}
<div class="progress has-label">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="progress-label">25<sup>%</sup></span></div>
</div>
{{% /example %}}

{{% example html %}}
<div class="progress has-label">
  <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"><span class="progress-label">99<sup>%</sup></span></div>
</div>
{{% /example %}}

{{% example html %}}
<div class="progress has-label">
  <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span class="progress-label">100<sup>%</sup></span></div>
</div>
{{% /example %}}

## Version réduite

{{% example html %}}
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 50%" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{{% /example %}}

## Barre de progression circulaire

### Sans label
{{% example html %}}
<div class="progress-circle" data-component="radial-progress">
    <svg class="progress-circle-figure" data-role="figure" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <circle class="progress-circle-meter" cx="60" cy="60" r="54" stroke-width="12" />
      <circle class="progress-circle-value" cx="60" cy="60" r="54" stroke-width="12" />
    </svg>
    <input data-role="control" class="sr-only" type="progressbar" value="20" />
</div>
{{% /example %}}

### Avec label
{{% example html %}}
<div class="progress-circle" data-component="radial-progress">
    <svg class="progress-circle-figure" data-role="figure" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <circle class="progress-circle-meter" cx="60" cy="60" r="54" stroke-width="12" />
      <circle class="progress-circle-value" cx="60" cy="60" r="54" stroke-width="12" />
    </svg>
    <div class="progress-circle-label" data-role="label"><span><span data-role="labelvalue">0</span><sup>%</sup></span></div>
    <input data-role="control" class="sr-only" type="progressbar" value="60" />
</div>
{{% /example %}}

## Indicateurs d'étapes

{{% callout info %}}
Si vous cherchez de quoi afficher un fil d'ariane (ou _breadcrumbs_), il existe un [composant dédié]({{< docsref "/components/breadcrumb" >}}).
{{% /callout %}}

Les indicateurs d'étapes montrent la progression d'étapes au sein d'un processus. Les étapes réalisées restent actives, ce qui signifie que les utilisateurs peuvent revenir à une étape antérieure.
L'étape en cours est mise en lumière et les étapes non réalisées doivent rester inactives.

{{% callout warning %}}
La logique de ce composant nécessite que **seules les étapes précédant l'étape en cours** soient des liens ou boutons.
{{% /callout %}}

{{% example html %}}
<nav role="navigation" aria-label="Vous êtes : ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Step 1</a></li>
    <li class="breadcrumb-item"><a href="#">Step 2</a></li>
    <li class="breadcrumb-item active" aria-current="step">Step 3 <span class="sr-only">actif</span></li>
    <li class="breadcrumb-item">Step 4</li>
    <li class="breadcrumb-item">Step 5</li>
  </ol>
</nav>
{{% /example %}}
