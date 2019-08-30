---
layout: docs
title: Espacement
slug: espacement
description: Boostrap inclut une large gamme de raccourcis de marges intérieures et extérieurs, adaptatifs, pour modifier l'apparence d'un élément.
group: utilities
toc: true
---

## Fonctionnement

Assignez des valeurs adaptatives pour les valeurs `margin` et `padding`d'un élément ou un sous-ensemble de ses côtés avec des classes de sténographie. La prise en charge est incluse pour les propriétés individuelles, toutes les propriétés, les propriétés verticales, les propriétés horizontales. Les classes sont construites à partir d'une définition SASS par défaut allant de `.25rem` à` 3rem`.

## Nomenclature

Les utilitaires d'espacement qui s'appliquent à tous les breakpoints, de `xs` à `xl`, ne possèdent pas d'abbréviation dans leur nom. Ceci car ces classes sont appliqués depuis `min-width: 0` et plus, bien qu'elles ne soient pas encadrées par une requête média (_media query_). Les breakpoints restants, eux, incluent une abbréviation.

Les classes sont nommées suivant le format `{property}{sides}-{size}` pour `xs` et `{property}{sides}-{breakpoint}-{size}` pour `sm`, `md`, `lg`, et `xl`.

Où *property* peut être :

* `m` - pour les classes qui définissent `margin`
* `p` - pour les classes qui définissent `padding`

Où *sides* peut être :

* `t` - pour les classes qui définissent `margin-top` ou `padding-top`
* `b` - pour les classes qui définissent `margin-bottom` ou `padding-bottom`
* `l` - pour les classes qui définissent `margin-left` ou `padding-left`
* `r` - pour les classes qui définissent `margin-right` ou `padding-right`
* `x` - pour les classes qui définissent `*-left` et `*-right`
* `y` - pour les classes qui définissent `*-top` et `*-bottom`
* rien - pour les classes qui définissent `margin` ou `padding` on all 4 sides of the element

Où *size* peut être :

* `0` - pour les classes qui éliminent `margin` ou `padding` en le réglant à `0`
* `1` - (par défaut) pour les classes qui définissent `margin` ou `padding` jusqu'à `$spacer * .25`
* `2` - (par défaut) pour les classes qui définissent `margin` ou `padding` jusqu'à `$spacer * .5`
* `3` - (par défaut) pour les classes qui définissent `margin` ou `padding` jusqu'à `$spacer`
* `4` - (par défaut) pour les classes qui définissent `margin` ou `padding` jusqu'à `$spacer * 1.5`
* `5` - (par défaut) pour les classes qui définissent `margin` ou `padding` jusqu'à `$spacer * 3`
* `auto` - pour les classes qui définissent `margin` à auto

(Vous pouvez ajouter plus de tailles en ajoutant des entrées à la variable SASS `$spacers`)

## Exemples

Quelques représentations de ces classes :

{{< highlight scss >}}
.mt-0 {
  margin-top: 0 !important;
}

.ml-1 {
  margin-left: ($spacer * .25) !important;
}

.px-2 {
  padding-left: ($spacer * .5) !important;
  padding-right: ($spacer * .5) !important;
}

.p-3 {
  padding: $spacer !important;
}
{{< /highlight >}}

### Centrage horizontale

De plus, Bootstrap propose une classe `.mx-auto` pour horizontalement centrer le content de niveau block à largeur fixe — qui est un contenu possédant la propriété `display: block` et une largeur `width` définie — en plaçant la marge horizontale sur `auto`.

<div class="bd-example">
  <div class="mx-auto" style="width: 200px; background-color: rgba(86,61,124,.15);">
    Élément centré
  </div>
</div>

{{< highlight html >}}
<div class="mx-auto" style="width: 200px;">
  Élément centré
</div>
{{< /highlight >}}

### Marge négative

En CSS, les propriétés de marge `margin` peuvent prendre des valeurs négatives (alors que `padding` ne peut pas). Depuis la version 4.2, nous avons ajouté des classes utilitaires de marge à valeur négative pour tout entier différent de zéro listé ci dessus (par exemple : `1`, `2`, `3`, `4`, `5`). Ces classes sont idéales pour adapter les gouttières de colonnes de la grille suivant les différents breakpoints.

La syntaxe est presque la même que les classes utilitaires de marge positive, avec l'addition d'un `n` avant la taille requise. Voici un exemple de classe qui serait l'opposé de `.mt-1`:

{{< highlight scss >}}
.mt-n1 {
  margin-top: -0.25rem !important;
}
{{< /highlight >}}

Voici un exemple d'une grille Bootstrap modifiée pour le breakpoint moyen (`md`) et plus haut. Nous avons augmenté le padding de `.col` avec `.px-md-5` et ensuite compensé cela vec `.mx-md-n5` sur la ligne `.row` parente.

{{< example >}}
<div class="row mx-md-n5">
  <div class="col py-3 px-md-5 border bg-light">Padding de colonne modifié</div>
  <div class="col py-3 px-md-5 border bg-light">Padding de colonne modifié</div>
</div>
{{< /example >}}
