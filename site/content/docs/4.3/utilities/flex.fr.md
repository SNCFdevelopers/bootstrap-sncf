---
layout: docs
title: Flex
description: Gérez facilement la disposition, l'alignement et le dimensionnement des colonnes de la grille, de la navigation, des composants, etc., avec une suite complète de classes utilitaires flexbox adaptatives. Pour des implémentations plus complexes, un CSS personnalisé peut être nécessaire.
group: utilities
toc: true
---

## Activement le comportement flexible

Appliquez les utilitaires dédiés à l'affichage `display` pour créer un container _flexbox_ et transformer les **éléments enfants directs** en éléments flexibles. Les container _flex_ et leurs éléments peuvent ensuite être modifiés avec des propriétés _flex_ additionnelles.

{{< example >}}
<div class="d-flex p-2 bd-highlight">Je suis un container flexbox !</div>
{{< /example >}}

{{< example >}}
<div class="d-inline-flex p-2 bd-highlight">Je suis un container flexbox dans une ligne !</div>
{{< /example >}}

Des variantes adaptatives existent également pour `.d-flex` et `.d-inline-flex`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.d{{ .abbr }}-flex`
- `.d{{ .abbr }}-inline-flex`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Sens (_direction_)

Ajustez le sens (_direction_) des éléments flexibles d'un container avec les utilitaires dédiées. Dans la plupart des cas, vous pouvez omettre la classe horizontale ici car la valeur par défaut du navigateur est `row`. Néanmoins, vous pourriez rencontrer des situations où vous il sera nécessaire de renseigner explicitement cette valeur (comme les dispositions adaptatives).

Utilisez `.flex-row` pour définir un sens horizontal (la valeur du navigateur par défaut) ou `.flex-row-reverse` pour un sens horizontal inverse (le début commence à l'extrémité opposée).

{{< example >}}
<div class="d-flex flex-row bd-highlight mb-3">
  <div class="p-2 bd-highlight">Élément flex 1</div>
  <div class="p-2 bd-highlight">Élément flex 2</div>
  <div class="p-2 bd-highlight">Élément flex 3</div>
</div>
<div class="d-flex flex-row-reverse bd-highlight">
  <div class="p-2 bd-highlight">Élément flex 1</div>
  <div class="p-2 bd-highlight">Élément flex 2</div>
  <div class="p-2 bd-highlight">Élément flex 3</div>
</div>
{{< /example >}}

Utilisez `.flex-column` pour définir un sens vertical ou `.flex-column-reverse` pour un sens vertical inverse (le début commence à l'extrémité opposée).

{{< example >}}
<div class="d-flex flex-column bd-highlight mb-3">
  <div class="p-2 bd-highlight">Élément flex 1</div>
  <div class="p-2 bd-highlight">Élément flex 2</div>
  <div class="p-2 bd-highlight">Élément flex 3</div>
</div>
<div class="d-flex flex-column-reverse bd-highlight">
  <div class="p-2 bd-highlight">Élément flex 1</div>
  <div class="p-2 bd-highlight">Élément flex 2</div>
  <div class="p-2 bd-highlight">Élément flex 3</div>
</div>
{{< /example >}}

Des variantes adaptatives existent également pour `flex-direction`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-row`
- `.flex{{ .abbr }}-row-reverse`
- `.flex{{ .abbr }}-column`
- `.flex{{ .abbr }}-column-reverse`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Contenu justifié

Utilisez les classes utilitaires `justify-content` sur les containers flexbox pour changer l'alignement des éléments flexibles sur l'axe principal (en abscisse pour commencer, puis en ordonnée si `flex-direction: column`). Choisissez une valeur entre `start` (valeur par défaut du navigateur), `end`, `center`, `between`, ou `around`.

<div class="bd-example">
  <div class="d-flex justify-content-start bd-highlight mb-3">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex justify-content-end bd-highlight mb-3">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex justify-content-center bd-highlight mb-3">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex justify-content-between bd-highlight mb-3">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex justify-content-around bd-highlight">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex justify-content-start">...</div>
<div class="d-flex justify-content-end">...</div>
<div class="d-flex justify-content-center">...</div>
<div class="d-flex justify-content-between">...</div>
<div class="d-flex justify-content-around">...</div>
{{< /highlight >}}

Des variantes adaptatives existent également pour `justify-content`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.justify-content{{ .abbr }}-start`
- `.justify-content{{ .abbr }}-end`
- `.justify-content{{ .abbr }}-center`
- `.justify-content{{ .abbr }}-between`
- `.justify-content{{ .abbr }}-around`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Aligner des éléments

Utilisez les classes utilitaires `align-items` sur les containers flexbox pour changer l'alignement des éléments flexibles sur l'axe principal (en abscisse pour commencer, puis en ordonnée si `flex-direction: column`). Choisissez une valeur entre `start`, `end`, `center`, `baseline`, ou `stretch` (valeur par défaut du navigateur).

<div class="bd-example">
  <div class="d-flex align-items-start bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex align-items-end bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex align-items-center bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex align-items-baseline bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex align-items-stretch bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-items-start">...</div>
<div class="d-flex align-items-end">...</div>
<div class="d-flex align-items-center">...</div>
<div class="d-flex align-items-baseline">...</div>
<div class="d-flex align-items-stretch">...</div>
{{< /highlight >}}

Des variantes adaptatives existent également pour `align-items`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-items{{ .abbr }}-start`
- `.align-items{{ .abbr }}-end`
- `.align-items{{ .abbr }}-center`
- `.align-items{{ .abbr }}-baseline`
- `.align-items{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Alignement `align-self`

Utilisez les classes utilitaires `align-self` sur les éléments flexbox pour individuellement changer leur alignement sur un axe (l'ordonnée pour commencer, l'abscisse si `flex-direction: column`). Définissez les mêmes options que `align-items`: `start`, `end`, `center`, `baseline`, ou `stretch` (valeur par défaut du navigateur).

<div class="bd-example">
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="align-self-start p-2 bd-highlight">Élément flex aligné</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="align-self-end p-2 bd-highlight">Élément flex aligné</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="align-self-center p-2 bd-highlight">Élément flex aligné</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex bd-highlight mb-3" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="align-self-baseline p-2 bd-highlight">Élément flex aligné</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
  <div class="d-flex bd-highlight" style="height: 100px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="align-self-stretch p-2 bd-highlight">Élément flex aligné</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="align-self-start">Élément flex aligné</div>
<div class="align-self-end">Élément flex aligné</div>
<div class="align-self-center">Élément flex aligné</div>
<div class="align-self-baseline">Élément flex aligné</div>
<div class="align-self-stretch">Élément flex aligné</div>
{{< /highlight >}}

Des variantes adaptatives existent également pour `align-self`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-self{{ .abbr }}-start`
- `.align-self{{ .abbr }}-end`
- `.align-self{{ .abbr }}-center`
- `.align-self{{ .abbr }}-baseline`
- `.align-self{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Remplissage

Utilisez les classes utilitaires `.flex-fill` sur une série d'éléments jumeaux pour les forcer à utiliser des largeurs égales à leur contenu (ou largeurs égales entre elles si leur contenu ne dépasse pas leur champ de bordure) en occupant tout l'espace horizontal disponible.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-fill bd-highlight">Élément flex avec énormément de contenu, vraiment beaucoup trop.</div>
  <div class="p-2 flex-fill bd-highlight">Élément flex</div>
  <div class="p-2 flex-fill bd-highlight">Élément flex</div>
</div>
{{< /example >}}

Des variantes adaptatives existent également pour `flex-fill`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-fill`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Agrandir, rétrécir (_grow_ et _shrink_)

Utilisez les classes utilitaires `.flex-grow-*` pour définir la capacité d'un élément flex à grandir et remplir l'espace disponible. Dans l'exemple plus bas, l'élément `.flex-grow-1` utilise toute la place qu'il peut, tout en permettant aux deux éléments restant de prendre la place dont ils ont besoin.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 flex-grow-1 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Troisième élément flex</div>
</div>
{{< /example >}}

Utilisez les classes utilitaires `.flex-shrink-*` pour définir la capacité d'un élément flex à rétrécir si nécessaire. Dans l'exemple suivant, le second élément flexible avec `.flex-shrink-1` est forcé de passer son texte sur deux lignes, car rétrécis pour allouer plus de place à l'élément flexible précédent qui comporte `.w-100`.

{{< example >}}
<div class="d-flex bd-highlight">
  <div class="p-2 w-100 bd-highlight">Élément flex</div>
  <div class="p-2 flex-shrink-1 bd-highlight">Élément flex</div>
</div>
{{< /example >}}

Des variantes adaptatives existent également pour `flex-grow` and `flex-shrink`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-{grow|shrink}-0`
- `.flex{{ .abbr }}-{grow|shrink}-1`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Marges automatiques

Flexbox peut faire des choses plutôt intéressante lorsque vous mélangez les alignements _flex_ avec les marges automatiques. Ci-dessous vous trouverez trois exemples pour contrôler les éléments flexibles via les marges automatiques :

- par défaut (pas de marge automatique)
- pousser deux éléments vers la droite (`.mr-auto`)
- pousser deux éléments vers la gauche (`.ml-auto`).

**Malheureusement, IE10 et IE11 ne supportent pas correctement les marges automatiques sur les éléments _flex_ dont le parent n'a pas la valeur `justify-content`** [Cf cette réponse sur StackOverflow](https://stackoverflow.com/a/37535548) pour plus de détails.

{{< example >}}
<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="mr-auto p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
</div>

<div class="d-flex bd-highlight mb-3">
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="ml-auto p-2 bd-highlight">Élément flex</div>
</div>
{{< /example >}}

### Avec `align-items`

Déplacez verticalement un élément flexible vers le haut ou le bas d'un container en mélangeant `align-items`, `flex-direction: column`, et `margin-top: auto` ou `margin-bottom: auto`.

{{< example >}}
<div class="d-flex align-items-start flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="mb-auto p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
</div>

<div class="d-flex align-items-end flex-column bd-highlight mb-3" style="height: 200px;">
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="p-2 bd-highlight">Élément flex</div>
  <div class="mt-auto p-2 bd-highlight">Élément flex</div>
</div>
{{< /example >}}

## Wrap

Modifiez la manière dont les éléments flexibles sont contraints à être disposés sur une seule ligne ou non dans un container _flex_. Vous avez le choix entre aucun _wrapping_ (valeur par défaut du navigateur) avec `.flex-nowrap`, du _wrapping_ avec `.flex-wrap`, inversé avec `.flex-wrap-reverse`.

<div class="bd-example">
  <div class="d-flex flex-nowrap bd-highlight" style="width: 8rem;">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex flex-nowrap">
  ...
</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex flex-wrap bd-highlight">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex flex-wrap">
  ...
</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex flex-wrap-reverse bd-highlight">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex flex-wrap-reverse">
  ...
</div>
{{< /highlight >}}


Des variantes adaptatives existent également pour `flex-wrap`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.flex{{ .abbr }}-nowrap`
- `.flex{{ .abbr }}-wrap`
- `.flex{{ .abbr }}-wrap-reverse`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Ordre

Changez l'ordre _visuel_ d'élément flexibles spécifiques avec des classes utilitaires dédiées type `order`. Nous fournissions seulement les options pour définir un élément comme premier ou dernier, ou réinitialiser l'ordre du DOM. Comme `order` peut prendre n'importe quelle valeur entre 0 et 5, ajoutez du CSS adapté pour toute valeur additionnelle.

{{< example >}}
<div class="d-flex flex-nowrap bd-highlight">
  <div class="order-3 p-2 bd-highlight">Premier élément flexible</div>
  <div class="order-2 p-2 bd-highlight">Second  élément flexible</div>
  <div class="order-1 p-2 bd-highlight">Troisième élément flexible</div>
</div>
{{< /example >}}

Des variantes adaptatives existent également pour `order`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range $i, $num := seq 0 5 }}
- `.order{{ $bp.abbr }}-{{ $i }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

De plus, existent également les classes adaptatives `.order-first` et `.order-last` qui modifient l'ordre `order` d'un élément en y ajoutant `order: -1` et `order: 6`, respectivement.

{{< markdown >}}
{{< flex.inline >}}
{{- range $bp := $.Site.Data.breakpoints -}}
{{- range $i := slice "first" "last" }}
- `.order{{ $bp.abbr }}-{{ $i }}`
{{- end -}}
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}

## Alignement du contenu

Utilisez les classes utilitaires `align-content` sur des containers flexbox pour aligner les éléments flexibles *ensemble* sur un axe. Choisissez entre `start` (valeur par défaut du navigateur), `end`, `center`, `between`, `around`, ou `stretch`. Pour présenter ces classes utilitaires, nous avons forcé `flex-wrap: wrap` et augmenté le nombre d'éléments flexibles.

**Attention !** Cette propriété n'a aucun effet sur une ligne unique d'éléments flexibles.

<div class="bd-example">
  <div class="d-flex align-content-start flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-content-start flex-wrap">
  ...
</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex align-content-end flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-content-end flex-wrap">...</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex align-content-center flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-content-center flex-wrap">...</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex align-content-between flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-content-between flex-wrap">...</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex align-content-around flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-content-around flex-wrap">...</div>
{{< /highlight >}}

<div class="bd-example">
  <div class="d-flex align-content-stretch flex-wrap bd-highlight mb-3" style="height: 200px">
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
    <div class="p-2 bd-highlight">Élément flex</div>
  </div>
</div>

{{< highlight html >}}
<div class="d-flex align-content-stretch flex-wrap">...</div>
{{< /highlight >}}

Des variantes adaptatives existent également pour `align-content`.

{{< markdown >}}
{{< flex.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.align-content{{ .abbr }}-start`
- `.align-content{{ .abbr }}-end`
- `.align-content{{ .abbr }}-center`
- `.align-content{{ .abbr }}-around`
- `.align-content{{ .abbr }}-stretch`
{{- end -}}
{{< /flex.inline >}}
{{< /markdown >}}
