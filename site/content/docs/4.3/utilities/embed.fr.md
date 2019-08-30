---
layout: docs
title: Éléments incorporés
slug: elements-incorpores
description: Incorporez des vidéos et diaporamas de manière adaptative en créant un ratio intrinsèque qui s'adapte à chaque périphérique, en fonction de la largeur de son élément parent.
group: utilities
toc: true
---

## À propos

Les règles sont directement applicables aux éléments `<iframe>`, `<embed>`, `<video>`, et `<object>` ; si vous vouliez atteindre le style pour d'autres attributs, vous pouvez éventuellement utiliser une classe descendante explicite comme `.embed-responsive-item`.

**Pro-Tip !** Vous n'avez pas besoin d'inclure `frameborder="0"` dans l'`<iframe>`, Bootstrap l'a fait pour vous.

## Exemple

Encapsulés chaque élément à incorporer dans un `<iframe>` lui-même dans un élément parent possédant la classe `.embed-responsive` et un ratio d'aspect. La classe `.embed-responsive-item` n'est pas obligatoire mais nous vous encourageons à l'utiliser.

{{% example html %}}
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen></iframe>
</div>
{{% /example %}}

## Ratios d'aspect

Les ratios d'aspect peuvent être adaptés avec des classes adéquates.

{{% highlight html %}}
<!-- 21:9 aspect ratio -->
<div class="embed-responsive embed-responsive-21by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 16:9 aspect ratio -->
<div class="embed-responsive embed-responsive-16by9">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 4:3 aspect ratio -->
<div class="embed-responsive embed-responsive-4by3">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>

<!-- 1:1 aspect ratio -->
<div class="embed-responsive embed-responsive-1by1">
  <iframe class="embed-responsive-item" src="..."></iframe>
</div>
{{% /highlight %}}
