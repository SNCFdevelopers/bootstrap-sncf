---
layout: docs
title: Dimensions
description: Modifier facilement les dimensions d'un élément grâce à nos utilitaires pour la largeur et la hauteur.
group: utilities
toc: true
---

## Relatif au parent

Les utilitaires de largeur et hauteur sont générés à partir de la map Sass `$sizes` dans `_variables.scss`. Cela inclut le support pour les tailles `25%`, `50%`, `75%`, `100%`, et `auto` par défaut. Modifiez ces valeurs selon vos besoins.

{{< example >}}
<div class="w-25 p-3" style="background-color: #eee;">Largeur de 25%</div>
<div class="w-50 p-3" style="background-color: #eee;">Largeur de 50%</div>
<div class="w-75 p-3" style="background-color: #eee;">Largeur de 75%</div>
<div class="w-100 p-3" style="background-color: #eee;">Largeur de 100%</div>
<div class="w-auto p-3" style="background-color: #eee;">Largeur auto</div>
{{< /example >}}

{{< example >}}
<div style="height: 100px; background-color: rgba(255,0,0,0.1);">
  <div class="h-25 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Hauteur de 25%</div>
  <div class="h-50 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Hauteur de 50%</div>
  <div class="h-75 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Hauteur de 75%</div>
  <div class="h-100 d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Hauteur de 100%</div>
  <div class="h-auto d-inline-block" style="width: 120px; background-color: rgba(0,0,255,.1)">Hauteur auto</div>
</div>
{{< /example >}}

Vous pouvez aussi utiliser `max-width: 100%;` et `max-height: 100%;` si nécessaire.

{{< example >}}
{{< placeholder width="100%" height="100" class="mw-100" text="Largeur maximale de 100%" >}}
{{< /example >}}

{{< example >}}
<div style="height: 100px; background-color: rgba(255,0,0,.1);">
  <div class="mh-100" style="width: 100px; height: 200px; background-color: rgba(0,0,255,.1);">Hauteur maximale de 100%</div>
</div>
{{< /example >}}

## Relatif au _viewport_

Vous pouvez aussi utiliser ces classes pour définir la largeur et la hauteur relatives à la vue (_viewport_)

{{< highlight html >}}
<div class="min-vw-100">Largeur minimale 100vw</div>
<div class="min-vh-100">Hauteur minimale 100vh</div>
<div class="vw-100">Largeur 100vw</div>
<div class="vh-100">Hauteur 100vh</div>
{{< /highlight >}}
