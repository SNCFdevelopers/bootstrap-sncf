---
layout: docs
title: Lecteurs d'écran
slug: lecteurs-d-ecran
description: Utilisez les classes utilitaires dédiées aux lecteurs d'écran pour masquer des éléments sur tous les périphériques, sauf les lecteurs d'écran.
group: utilities
toc: true
---

Masquez un élément pour tous les périphériques **sauf les lecteurs d'écran** avec `.sr-only`. Combinez `.sr-only` avec `.sr-only-focusable` pour afficher l'élément à nouveau s'il devient `focus` (par exemple par un utilisateur qui n'utilise que le clavier). Ceci peut aussi être utilisé comme une mixin.

{{% callout info %}}
Nécessaire si vous suivez [les bonnes pratiques d'accessibilité]({{< docsref "/getting-started/accessibility" >}}).
{{% /callout %}}

{{% highlight html %}}
<a class="sr-only sr-only-focusable" href="#content">Passer au contenu principal</a>
{{% /highlight %}}

{{% highlight scss %}}
// Utilisation comme une mixin
.skip-navigation {
  @include sr-only;
  @include sr-only-focusable;
}
{{% /highlight %}}
