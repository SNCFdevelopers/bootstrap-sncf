---
layout: docs
title: Texte
slug: texte
description: Documentation et exemples pour les classes utilitaires courantes pour les textes, afin de contrôler l'alignement, la graisse, le wrapping, etc.
group: utilities
toc: true
---

## Alignement du texte

Réalignez facilement du texte aux composants avec les classes d'alignement.

{{< example >}}
<p class="text-justify">Ambitioni dedisse scripsisse iudicaretur. Cras mattis iudicium purus sit amet fermentum. Donec sed odio operae, eu vulputate felis rhoncus. Praeterea iter est quasdam res quas ex communi. At nos hinc posthac, sitientis piros Afros. Petierunt uti sibi concilium totius Galliae in diem certam indicere. Cras mattis iudicium purus sit amet fermentum.</p>
{{< /example >}}

Pour l'alignement à gauche, à droite, et centré, des classes adpatatives sont disponibles et utilisent les mêmes largeurs d'écran que les breakpoints du système de grille.

{{< example >}}
<p class="text-left">Texte aligné à gauche sur toutes les tailles d'écran.</p>
<p class="text-center">Texte centré sur toutes les tailles d'écran.</p>
<p class="text-right">Texte aligné à droite sur toutes les tailles d'écran.</p>

<p class="text-sm-left">Texte aligné à gauche pour la taille SM (petit) ou plus large.</p>
<p class="text-md-left">Texte aligné à gauche pour la taille MD (moyen) ou plus large.</p>
<p class="text-lg-left">Texte aligné à gauche pour la taille LG (large) ou plus large.</p>
<p class="text-xl-left">Texte aligné à gauche pour la taille XL (extra-large) ou plus large.</p>
{{< /example >}}

## Retour à la ligne (_Wrapping_) et débordement (_overflow_)

Gérez le retour à la ligne de textes plus longs que la largeur de l'élément parent avec `.text-wrap`.

{{< example >}}
<div class="badge badge-primary text-wrap" style="width: 6rem;">
  Ce texte va à la ligne.
</div>
{{< /example >}}

Empêchez un texte d'aller à la ligne avec la classe `.text-nowrap`.

{{< example >}}
<div class="text-nowrap bd-highlight" style="width: 8rem;">
  Ce texte va déborder du parent.
</div>
{{< /example >}}

## Césure des mots

Empêchez de longues chaînes de texte de perturber la présentation de vos composants en utilisant la classe `.text-break` qui définit `overflow-wrap: break-word` (et `word-break: break-word` pour la compatibilité IE et Edge).

{{< example >}}
<p class="text-break">mmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmmm</p>
{{< /example >}}

## Transformation de texte

Transformer le texte de vos composants avec les classes qui définissent la casse.

{{< example >}}
<p class="text-lowercase">Texte en minuscules.</p>
<p class="text-uppercase">Texte en majuscules.</p>
<p class="text-capitalize">TeXte capiTaliZé.</p>
{{< /example >}}

Notez comme `.text-capitalize` modifie seulement la première lettre de chaque mot, laissant la casse des autres lettres non affectée.

## Graisse et italiques

Modifiez facilement la graisse (_weight_) du texte, ou passez-le en italiques.
Quickly change the weight (boldness) of text or italicize text.

{{< example >}}
<p class="font-weight-bold">Texte en gras _bold_.</p>
<p class="font-weight-bolder">Texte en gras _bold_ (relatif à l'élément parent).</p>
<p class="font-weight-normal">Texte à la graisse normale.</p>
<p class="font-weight-light">Texte à la graisse légère _light_.</p>
<p class="font-weight-lighter">Texte à la graisse légère _lighter_ (relatif à l'élément parent).</p>
<p class="font-italic">Texte en italiques.</p>
{{< /example >}}

## Écartement fixe, _monospace_

Passez du texte sur une police de caractère à écartement fixe avec la classe `.text-monospace`.

{{< example >}}
<p class="text-monospace">Ce texte est à écartement fixe</p>
{{< /example >}}

## Réinitialiser la couleur

Réinitilisez la couleur d'un texte ou d'un lien avec la classe `.text-reset`, ainsi il héritera de la couleur de son parent.

{{< example >}}
<p class="text-muted">
  Texte muté avec un <a href="#" class="text-reset">lien réinitialisé</a>.
</p>
{{< /example >}}

## Décoration du texte

Supprimez la décoration du texte avec la classe `.text-decoration-none`.

{{< example >}}
<a href="#" class="text-decoration-none">Lien non-souligné</a>
{{< /example >}}
