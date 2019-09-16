---
layout: docs
title: Languettes
slug: languettes
group: components
toc: true
url: /docs/4.3/components/languettes/
---

Les languettes indiquent des informations urgentes liées à une offre, à une actualité ou à un nouveau développement. Exemples: « depuis novembre », « du 12 au 22 janvier », « à venir » ou « nouveau ». Ils peuvent être utilisés pour les composants suivants de la page d'accueil :

- les carrousels
- les vignettes de mise en évidence d'événements
- les vignettes classiques.

{{% callout info %}}
Le choix de la couleur du texte (noir ou blanc) n'est pas arbitraire mais résulte d'études sur l'accesibilité quant aux constrates. C'est pourquoi nous n'affichons seulement les combinaisons qui garantissent le respect des normes d'accessibilité.
{{% /callout %}}

## Avec le texte en blanc
<div class="row">
  <div class="col-sm-6 mb-3">
    <div class="tongue">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-info">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-danger">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-orange">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-pink">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-purple">Du 2 janvier au 28 février</div>
  </div>
</div>

{{% highlight html %}}
<div class="tongue">Du 2 janvier au 28 février</div>
<div class="tongue bg-info">Du 2 janvier au 28 février</div>
<div class="tongue bg-danger">Du 2 janvier au 28 février</div>
<div class="tongue bg-orange">Du 2 janvier au 28 février</div>
<div class="tongue bg-pink">Du 2 janvier au 28 février</div>
<div class="tongue bg-purple">Du 2 janvier au 28 février</div>
{{% /highlight %}}

## Avec le texte en noir

<div class="row">
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-green text-dark">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-teal text-dark">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-yellow text-dark">Du 2 janvier au 28 février</div>
  </div>
</div>

{{% highlight html %}}
<div class="tongue bg-green text-dark">Du 2 janvier au 28 février</div>
<div class="tongue bg-teal text-dark">Du 2 janvier au 28 février</div>
<div class="tongue bg-yellow text-dark">Du 2 janvier au 28 février</div>
{{% /highlight %}}
