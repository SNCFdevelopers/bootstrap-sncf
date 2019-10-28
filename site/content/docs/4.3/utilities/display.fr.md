---
layout: docs
title: Propriétés d'affichage
description: Basculez rapidement et de manière adaptative l'affichage des composants, et plus encore, avec nos utilitaires d'affichage. Ils prennent en charge certaines des valeurs les plus courantes, et quelques extras permettant de contrôler l’affichage lors de l’impression.
group: utilities
toc: true
---

## Comment ça marche

Changez la valeur de la [propriété `display`](https://developer.mozilla.org/en-US/docs/Web/CSS/display) avec nos classes utilitaires consacrées à l'affichage. Dans ce but, nous n'avons prévu qu'une partie de toutes les valeurs de `display`. Ces classes peuvent être combinées suivant vos différents besoins.


## Nomenclature

Les classes utilitaires d'affichage qui s'appliquent à tous les [breakpoints]({{< docsref "/layout/overview" "#responsive-breakpoints" >}}), de `xs` à `xl`, ne contiennent pas d'abbreviation type _breakpoint_ dans leur nom car elles s'appliquent depuis `min-width: 0;` et au-delà, et ne sont pas contraintes par une requête média (_media query_). Les _breakpoint_ restant incluent néanmoins une abbréviation dédiée.

Ainsi les classes sont nommées suivant le format :

* `.d-{value}` pour `xs`
* `.d-{breakpoint}-{value}` pour `sm`, `md`, `lg`, et `xl`.

Où `value` est l'une de :

* `none`
* `inline`
* `inline-block`
* `block`
* `table`
* `table-cell`
* `table-row`
* `flex`
* `inline-flex`

Les valeurs d'affichage peuvent être altérée en modifiant la variable `$displays` et en recompilant le SCSS.

Les requêtes média agissent selon les largeurs d'écran avec le _breakpoint_ donné ou *plus large*. Par exemple, `.d-lg-none` définit `display: none;` sur écrans `lg` et `xl`.

## Exemples

{{< example >}}
<div class="d-inline p-2 bg-primary text-white">d-inline</div>
<div class="d-inline p-2 bg-dark text-white">d-inline</div>
{{< /example >}}

{{< example >}}
<span class="d-block p-2 bg-primary text-white">d-block</span>
<span class="d-block p-2 bg-dark text-white">d-block</span>
{{< /example >}}

## Masquer des éléments

Pour un développement plus rapide et convivial pour les mobiles, utilisez des classes d’affichage adaptatives (_responsive_) pour afficher et masquer des éléments par appareil. Évitez de créer des versions entièrement différentes du même site, mais masquez les éléments suivant les besoins de chaque taille d'écran.

Pour masquer un élément, utilisez simplement la classe `.d-none` ou l'une des classes `.d-{sm,md,lg,xl}-none` pour chaque variante de taille d'écran (_breakpoint_).

Pour afficher un élément seulement sur un intervalle de tailles d'écran, vous pouvez combiner la classe `.d-*-none` avec une classe `.d-*-*`, par exemple `.d-none .d-md-block .d-xl-none` va masquer l'éléments pour toutes les tailles d'écran, sauf sur celles de taille moyen (_medium_) et large.

<table class="table">
  <thead>
    <tr>
      <th>Taille d'écran</th>
      <th>Classes</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>Masqué pour tous</td>
      <td><code>.d-none</code></td>
    </tr>
    <tr>
      <td>Masqué seulement sur xs</td>
      <td><code>.d-none .d-sm-block</code></td>
    </tr>
    <tr>
      <td>Masqué seulement sur  sm</td>
      <td><code>.d-sm-none .d-md-block</code></td>
    </tr>
    <tr>
      <td>Masqué seulement sur  md</td>
      <td><code>.d-md-none .d-lg-block</code></td>
    </tr>
    <tr>
      <td>Masqué seulement sur  lg</td>
      <td><code>.d-lg-none .d-xl-block</code></td>
    </tr>
    <tr>
      <td>Masqué seulement sur  xl</td>
      <td><code>.d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible sur tous</td>
      <td><code>.d-block</code></td>
    </tr>
    <tr>
      <td>Visible seulement sur xs</td>
      <td><code>.d-block .d-sm-none</code></td>
    </tr>
    <tr>
      <td>Visible seulement sur sm</td>
      <td><code>.d-none .d-sm-block .d-md-none</code></td>
    </tr>
    <tr>
      <td>Visible seulement sur md</td>
      <td><code>.d-none .d-md-block .d-lg-none</code></td>
    </tr>
    <tr>
      <td>Visible seulement sur lg</td>
      <td><code>.d-none .d-lg-block .d-xl-none</code></td>
    </tr>
    <tr>
      <td>Visible seulement sur xl</td>
      <td><code>.d-none .d-xl-block</code></td>
    </tr>
  </tbody>
</table>

{{< example >}}
<div class="d-lg-none">Masqué sur lg et les écrans plus larges</div>
<div class="d-none d-lg-block">Masqué sur les écrans moins larges que lg</div>
{{< /example >}}

## Affichage à l'impression

Changez la valeur de `display` des éléments à l'impression avec nos classes utilitaires d'affichage dédiées à l'impression. Elles incluent le support des mêmes valeurs que nos classes utilitaires adaptatives `.d-*`.

- `.d-print-none`
- `.d-print-inline`
- `.d-print-inline-block`
- `.d-print-block`
- `.d-print-table`
- `.d-print-table-row`
- `.d-print-table-cell`
- `.d-print-flex`
- `.d-print-inline-flex`

Les classes d'affichage et d'impression peuvent être combinées.

{{< example >}}
<div class="d-print-none">Écran seulement (sera masqué à l'impression)</div>
<div class="d-none d-print-block">Impression seulement (sera masqué sur un écran)</div>
<div class="d-none d-lg-block d-print-block">Masqué sur écran large, mais toujours visible à l'impression</div>
{{< /example >}}
