---
layout: docs
title: Clearfix
description: Supprimez rapidement et facilement le contenu flottant dans un conteneur en ajoutant un utilitaire clearfix.
group: utilities
toc: true
---

Effacez simplement les flottants `float` en ajoutant la classe `.clearfix` **à l'élément parent**. Cela peut également être utilisé comme une _mixin_.

{{% highlight html %}}
<div class="clearfix">...</div>
{{% /highlight %}}

{{% highlight scss %}}
// Mixin itself
@mixin clearfix() {
  &::after {
    display: block;
    content: "";
    clear: both;
  }
}

// Usage as a mixin
.element {
  @include clearfix;
}
{{% /highlight %}}

L'exemple suivant montre comment le _clearfix_ peut être utilisé. Sans celui-ci, la `div` encapsulant ne serait pas étendue jusqu'aux boutons ce qui casserait la mise en page.

{{% example html %}}
<div class="bg-info clearfix">
  <button type="button" class="btn btn-secondary float-left">Example Button floated left</button>
  <button type="button" class="btn btn-secondary float-right">Example Button floated right</button>
</div>
{{% /example %}}
