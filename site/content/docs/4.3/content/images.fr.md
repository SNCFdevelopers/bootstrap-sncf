---
layout: docs
title: Images
description: Documentation et exemples pour permettre aux images d'avoir un comportement adaptatif (_responsive_) pour notamment ne pas être plus grandes que leur élément parent, et ajouter des styles légers via les classes.
group: content
toc: true
---

{{% callout info %}}
### Note de traduction
Nous avons traduit _responsive_ par _adaptatif_ dans l'ensemble du document. \\
Plus d'informations sur la [page wikipédia qui en parle](https://fr.wikipedia.org/wiki/Site_web_adaptatif).
{{% /callout %}}

## Images adaptatives

Les images dans Bootstrap sont rendues adaptatives avec les classes `.img-fluid`. `max-width: 100%;` et `height: auto;` et ajouté à l'image de façon à ce qu'elle se mette à l'échelle avec l'élément parent.

<div class="bd-example">
  <img src="http://placebeard.it/1000/250" class="img-fluid" alt="">
</div>

{{% highlight html %}}
<img src="..." class="img-fluid" alt="">
{{% /highlight %}}

{{% callout warning %}}
##### Images SVG et IE 10

Dans Internet Explorer 10, les images SVG avec `.img-fluid` sont dimensionnées de manière disproportionnée. Pour corriger cela, ajoutez `width: 100% \9;` quand nécessaire. Cette correction déforme les tailles d'images d'autres format, c'est pourquoi Bootstrap ne l'applique pas automatiquement.
{{% /callout %}}

## Miniatures (_thumbnails_)

Vous pouvez utiliser `.img-thumbnail` pour donner à votre image une bordure arrondie d'1px.

<div class="bd-example bd-example-images">
  <img src="http://placebeard.it/200/200" class="img-thumbnail" alt="">
</div>

{{% highlight html %}}
<img src="..." alt="">
{{% /highlight %}}

## Aligner les images

Alignez les images avec les [classes flottantes]({{< docsref "/utilities/float" >}}) ou les [classes d'alignement de texte]({{< docsref "/utilities/text#text-alignment" >}}). Les images de type `block` peuvent être centrées en utilisant la [classe utilitaire de marge `.mx-auto` ]({{< docsref "/utilities/spacing#horizontal-centering" >}}).

<div class="bd-example bd-example-images">
  <img src="http://placebeard.it/200/200" class="rounded float-left" alt="">
  <img src="http://placebeard.it/200/200" class="rounded float-right" alt="">
</div>

{{% highlight html %}}
<img src="..." class="rounded float-left" alt="">
<img src="..." class="rounded float-right" alt="">
{{% /highlight %}}

<div class="bd-example bd-example-images">
  <img src="http://placebeard.it/200/200" class="rounded mx-auto d-block" alt="">
</div>

{{% highlight html %}}
<img src="..." class="rounded mx-auto d-block" alt="">
{{% /highlight %}}

<div class="bd-example bd-example-images">
  <div class="text-center">
    <img src="http://placebeard.it/200/200" class="rounded" alt="">
  </div>
</div>

{{% highlight html %}}
<div class="text-center">
  <img src="..." class="rounded" alt="">
</div>
{{% /highlight %}}


## Balise `<picture>`

Si vous utilisez la balise `<picture>` pour spécifier plusieurs élements `<source>` d'une balise `<img>` spécifique, pensez bien à ajouter la classe `.img-*` à la balise `<img>` et non pas la balise `<picture>`.

{{% highlight html %}}
<picture>
  <source srcset="..." type="image/svg+xml">
  <img src="..." class="img-fluid img-thumbnail" alt="">
</picture>
{{% /highlight %}}
