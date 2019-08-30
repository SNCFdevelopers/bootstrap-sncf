---
layout: docs
title: Remplacement d'image
slug: remplacement-d-image
description: Remplacer le texte d'un élément avec une images de fond grâce à la classe utilitaire dédiée.
group: utilities
toc: true
---

Utilisez la classe `.text-hide` ou une mixin pour remplacer le contenu d'un élément de text par une image de fond.

{{% highlight html %}}
<h1 class="text-hide">Titre à masquer</h1>
{{% /highlight %}}

{{% highlight scss %}}
// Utilisation comme une mixin
.heading {
  @include text-hide;
}
{{% /highlight %}}

Utilisez la classe `.text-hide` si vous désirez mettre une image de fond `background-image` à la place d'un texte, mais conserver l'accessibilité et le bénéfice du référencement.

{{% example html %}}
<h1 class="text-hide" style="background-image: url('/assets/img/brand/sncf-logo.png'); width: 129px; height: 66px;">Bootstrap</h1>
{{% /example %}}
