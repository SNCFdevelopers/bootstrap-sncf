---
layout: docs
title: Typographie
description: Documentation et exemples pour la typographie de Bootstrap, en incluant les paramètres globaux pour les en-têtes, titres, texte, listes, etc.
group: content
toc: true
url: /fr/docs/4.3/content/typography/
---

## Titres

Seuls les titres HTML `<h1>`, `<h2>` et `<h3>` sont disponibles chez SNCF.

<div class="table-wrapper">
  <div class="table-scroller dragscroll">
    <table class="table table-bordered">
      <thead>
        <tr>
          <th scope="col"><div class="cell-inner">Heading</div></th>
          <th scope="col"><div class="cell-inner">Example</div></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><div class="cell-inner">
            {{% markdown %}}`<h1></h1>`{{% /markdown %}}
          </div></td>
          <td><div class="cell-inner"><span class="h1" role="heading" aria-level="1">h1. Titre bootstrap SNCF</span></div></td>
        </tr>
        <tr>
          <td><div class="cell-inner">
            {{% markdown %}}`<h2></h2>`{{% /markdown %}}
          </div></td>
          <td><div class="cell-inner"><span class="h2" role="heading" aria-level="2">h2. Titre bootstrap SNCF</span></div></td>
        </tr>
        <tr>
          <td><div class="cell-inner">
            {{% markdown %}}`<h3></h3>`{{% /markdown %}}
          </div></td>
          <td><div class="cell-inner"><span class="h3" role="heading" aria-level="3">h3. Titre bootstrap SNCF</span></div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

{{% highlight html %}}
<h1>h1. Titre bootstrap SNCF</h1>
<h2>h2. Titre bootstrap SNCF</h2>
<h3>h3. Titre bootstrap SNCF</h2>
{{% /highlight %}}


Les classes `.h1`, `h2` et `.h3` sont également disponibles, si vous aviez besoin de coller à la taille et au style d'un titre, sans pouvoir utiliser le composant HTML associé.

{{% example html %}}
<p class="h1" role="heading" aria-level="1">h1. Titre bootstrap SNCF</p>
<p class="h2" role="heading" aria-level="2">h2. Titre bootstrap SNCF</p>
<p class="h3" role="heading" aria-level="3">h3. Titre bootstrap SNCF</p>
{{% /example %}}

## Titres colorés

Les couleurs des titres et sous-titres d'articles peuvent être ajustées :

- si l'en-tête de site Web est d'une couleur vive, les titres de la section de contenu doivent reproduire cette couleur. Utilisez la même couleur pour toutes les pages de contenu du site Web.
- si le titre du site Web est en noir ou en gris, le contributeur doit pouvoir choisir une couleur pour le titre et les sous-titres de la section de texte tant que les consignes d’accessibilité sont respectées (veillez à un contraste suffisant). Cela signifie que les couleurs du titre peuvent changer d'une page de contenu à une autre, ce qui peut également aider à distinguer les sujets/catégories.

<div class="row">
  <div class="col-sm-6">
    <span class="h2 text-primary">Magnifique titre coloré</span>
  </div>
  <div class="col-sm-6">
    <span class="h2 text-info">Magnifique titre coloré</span>
  </div>
  <div class="col-sm-6">
    <span class="h2 text-pink">Magnifique titre coloré</span>
  </div>
  <div class="col-sm-6">
    <span class="h2 text-danger">Magnifique titre coloré</span>
  </div>
  <div class="col-sm-6">
    <span class="h2 text-warning">Magnifique titre coloré</span>
  </div>
  <div class="col-sm-6">
    <span class="h2 text-purple">Magnifique titre coloré</span>
  </div>
</div>

{{% highlight html %}}
<h2 class="text-primary">Magnifique titre coloré</h2>
<h2 class="text-info">Magnifique titre coloré</h2>
<h2 class="text-pink">Magnifique titre coloré</h2>
<h2 class="text-danger">Magnifique titre coloré</h2>
<h2 class="text-warning">Magnifique titre coloré</h2>
<h2 class="text-purple">Magnifique titre coloré</h2>
{{% /highlight %}}


## Titre pour l'affichage

Les éléments de titre traditionnels sont designés pour fonctionner au mieux dans le contenu de votre page. Si vous avez besoin d'un titre qui se démarque, envisagez d'utiliser **display heading**, un style de titre plus grand et légèrement plus marqué.

<div class="bd-example bd-example-type">
  <table class="table">
    <tbody>
      <tr>
        <td><span class="display-1 text-primary">Display 1</span></td>
      </tr>
      <tr>
        <td><span class="display-2">Display 2</span></td>
      </tr>
      <tr>
        <td><span class="display-3 text-primary">Display 3</span></td>
      </tr>
    </tbody>
  </table>
</div>

{{% highlight html %}}
<h1 class="display-1 text-primary">Display 1</h1>
<h1 class="display-2">Display 2</h1>
<h1 class="display-3 text-primary">Display 3</h1>
{{% /highlight %}}

## Classe `Lead`

Mettez un paragraphe en exergue en ajoutant la classe `.lead`.

{{% example html %}}
<p class="lead">
  Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Duis mollis, est non commodo luctus.
</p>
{{% /example %}}

## Inline text elements

## Éléments de style sur une ligne (_inline_)

Styles pour les éléments communs à mettre sur une ligne en HTML5 (_inline_).

{{% example html %}}
<p>Vous pouvez utiliser la balise <code>mark</code> pour <mark>mettre en lumière</mark> du texte.</p>
<p><del><span class="sr-only">début de contenu supprimé</span>Cette ligne de texte est présentée de façon à montrer qu'il s'agît de texte supprimé.<span class="sr-only">fin de contenu supprimé</span></del></p>
<p><ins><span class="sr-only">Ce contenu est un ajout au document</span>Cette ligne de texte est présentée comme un ajout au document.</ins></p>
<p><u>Cette ligne de texte sera représentée soulignée.</u></p>
<p><small>Cette ligne de texte est représentée plus petite..</small></p>
<p><strong>Cette ligne est en texte gras..</strong></p>
<p><em>Cette ligne comporte du texte en italiques.</em></p>
{{% /example %}}

Les classes `.mark` et `.small` sont aussi disponibles de façon à appliquer le même style que les balises éponymes tout en évitant les implications sémantiques imposées par ces balises.

Bien que non présenté, vous pouvez tout à fait utiliser les balises `<b>` et `<i>` en HTML5. `<b>` est destiné à mettre en valeur des mots ou des phrases sans donner d’importance supplémentaire alors que `<i>` est principalement utilisé pour la voix, les termes techniques, etc.


## Utilitaires de texte

Transformez ou changez l'alignement, le style, la graisse, la couleur du texte avec nos [utilitaires de texte]({{< docsref "/utilities/text" >}}) et [utilitaires de couleurs]({{< docsref "/utilities/colors" >}}).

## Abbréviations

Une implémentation stylisée de l'élément HTML `<abbr>` pour les abbréviations et acronymes a été intégrée pour montrer la version étendue au survol. Les abbréviations on un soulignement par défaut et bénéficie d'un curseur de type « aide » pour fournir du contexte additionnel au survol, mais aussi pour les utilisateurs de technologies d'assistance.

Ajoutez `.initialism` pour obtenir une abbréviation avec une taille de police légèrement plus faible.

{{% example html %}}
<p><abbr title="attribute">attr</abbr></p>
<p><abbr title="HyperText Markup Language" class="initialism">HTML</abbr></p>
{{% /example %}}

## Citations

Pour faire des citations d'une autre source dans votre document, encapsulez votre texte dans `<blockquote class="blockquote">`.

{{% example html %}}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{{% /example %}}

### Nommer une source

Ajoutez `<footer class="blockquote-footer">` pour identifier une source. Englobez le nom de la source dans `<cite>`.

{{% example html %}}
<blockquote class="blockquote">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Quelqu'un de connu dans <cite title="Titre de la source">Titre de la source</cite></footer>
</blockquote>
{{% /example %}}

### Alignment

Utilisez les utilitaires de texte suivant votre besoin pour changer l'alignement d'une citation.

{{% example html %}}
<blockquote class="blockquote text-center">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Quelqu'un de connu dans <cite title="Titre de la source">Titre de la source</cite></footer>
</blockquote>
{{% /example %}}

{{% example html %}}
<blockquote class="blockquote text-right">
  <p class="mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Quelqu'un de connu dans <cite title="Titre de la source">Titre de la source</cite></footer>
</blockquote>
{{% /example %}}

## Listes

### Sans style

Supprimez le style par défaut `list-style` et la marge gauche sur les éléments de liste (enfants immédiats seulement). **Ceci s'applique seulement aux éléments de listes enfants les plus proches**, ce qui signifie que vous devrez ajouter la classe pour chaque liste imbriquée.

{{% example html %}}
<ul class="list-unstyled">
  <li>Lorem ipsum dolor sit amet</li>
  <li>Consectetur adipiscing elit</li>
  <li>Integer molestie lorem at massa</li>
  <li>Facilisis in pretium nisl aliquet</li>
  <li>Nulla volutpat aliquam velit
    <ul>
      <li>Phasellus iaculis neque</li>
      <li>Purus sodales ultricies</li>
      <li>Vestibulum laoreet porttitor sem</li>
      <li>Ac tristique libero volutpat at</li>
    </ul>
  </li>
  <li>Faucibus porta lacus fringilla vel</li>
  <li>Aenean sit amet erat nunc</li>
  <li>Eget porttitor lorem</li>
</ul>
{{% /example %}}

### Sur une ligne

Enlevez les puces d'une liste et appliquez une légère marge `margin` avec une combinaison de deux classes : `.list-inline` et `.list-inline-item`.

{{% example html %}}
<ul class="list-inline">
  <li class="list-inline-item">Lorem ipsum</li>
  <li class="list-inline-item">Phasellus iaculis</li>
  <li class="list-inline-item">Nulla volutpat</li>
</ul>
{{% /example %}}

### Alignement de listes descriptives

Alignez les intitulés et descriptions horizontalement en utilisant nos classes prédéfinies du système de grille (ou mixins sémantiques). Pour des intitulés plus long, vous pouvez ajouter une classe `.text-truncate` optionnelle pour tronquer le texte avec des points de suspension.

{{% example html %}}
<dl class="row">
  <dt class="col-sm-3">Description lists</dt>
  <dd class="col-sm-9">A description list is perfect for defining terms.</dd>

  <dt class="col-sm-3">Euismod</dt>
  <dd class="col-sm-9">
    <p>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem nec elit.</p>
    <p>Donec id elit non mi porta gravida at eget metus.</p>
  </dd>

  <dt class="col-sm-3">Malesuada porta</dt>
  <dd class="col-sm-9">Etiam porta sem malesuada magna mollis euismod.</dd>

  <dt class="col-sm-3 text-truncate">Truncated term is truncated</dt>
  <dd class="col-sm-9">Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</dd>

  <dt class="col-sm-3">Nesting</dt>
  <dd class="col-sm-9">
    <dl class="row">
      <dt class="col-sm-4">Nested definition list</dt>
      <dd class="col-sm-8">Aenean posuere, tortor sed cursus feugiat, nunc augue blandit nunc.</dd>
    </dl>
  </dd>
</dl>
{{% /example %}}

## Typographie _responsive_

La _typographie responsive_ fait référence à la mise à l'échelle du texte et des composants en ajustant simplement l'élément `font-size` de l'élément racine dans une série de requêtes multimédia. Bootstrap ne le fait pas pour vous, mais il est assez facile de l'ajouter si vous en avez besoin.

En voici un exemple concret. Choisissez les requêtes média et tailles de police que vous souhaitez.

{{% highlight scss %}}
html {
  font-size: 1rem;
}

@include media-breakpoint-up(sm) {
  html {
    font-size: 1.2rem;
  }
}

@include media-breakpoint-up(md) {
  html {
    font-size: 1.4rem;
  }
}

@include media-breakpoint-up(lg) {
  html {
    font-size: 1.6rem;
  }
}
{{% /highlight %}}
