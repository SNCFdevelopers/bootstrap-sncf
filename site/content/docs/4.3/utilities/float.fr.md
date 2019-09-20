---
layout: docs
title: Flottants (float)
description: Active l'attribut `float` sur un élément, via les breakpoints en utilisant des classes utilitaires dédiées.
group: utilities
toc: true
---

## Vue d'ensemble

Ces classe utilitaires font _flotter_ un élément à gauche ou à droite, ou désactivent complètement le flottement, le tout basé sur la taille courante d'écran en utilisant [la propriété CSS `float`](https://developer.mozilla.org/en-US/docs/Web/CSS/float). `!important` est ajouté pour éviter des problèmes spécifiques.\\
Ces classes utilisent les même breakpoint que le système de grille.\\
Enfin, pour rappel, ces classes n'ont aucun effet sur les [éléments flexibles]({{< docsref "/utilities/flex" >}}).

{{< example >}}
<div class="float-left">Flottant à gauche sur toutes les tailles d'écran</div><br>
<div class="float-right">Flottant à droite sur toutes les tailles d'écran</div><br>
<div class="float-none">Flottant désactivé sur toutes les tailles d'écran</div>
{{< /example >}}

## Adaptatif (_responsive_)

Des variantes adaptatives existent également pour chaque valeur de `float`.

{{< example >}}
<div class="float-sm-left">Flottant à gauche sur les tailles d'écran SM (petit) ou plus large</div><br>
<div class="float-md-left">Flottant à gauche sur les tailles d'écran MD (moyen) ou plus large</div><br>
<div class="float-lg-left">Flottant à gauche sur les tailles d'écran LG (large) ou plus large</div><br>
<div class="float-xl-left">Flottant à gauche sur les tailles d'écran XL (extra-large) ou plus large</div><br>
{{< /example >}}

Voici la liste de toutes les classes supportées :

{{< markdown >}}
{{< float.inline >}}
{{- range $.Site.Data.breakpoints }}
- `.float{{ .abbr }}-left`
- `.float{{ .abbr }}-right`
- `.float{{ .abbr }}-none`
{{- end -}}
{{< /float.inline >}}
{{< /markdown >}}
