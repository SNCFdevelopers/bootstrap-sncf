---
layout: docs
title: Reboot
description: Reboot, c'est une collection de changements spécifiques aux éléments CSS dans un seul fichier, ce qui permet à Bootstrap de fournir une base de travail simple, élégante et consistente.
group: content
aliases: "/docs/4.3/content/"
toc: true
---

## Approche

_Reboot_ (remise à plat) est construit sur _Normalize_, fournissant de nombreux éléments HTML avec des styles quelque peu opinionés en utilisant uniquement des sélecteurs d’éléments. Le style supplémentaire est fait uniquement avec les classes. Par exemple, certains styles `<table>` sont remis à plat pour une référence plus simple, puis nous fournissons `.table`, `.table-bordered`, et plus encore.

Voici nos instructions et les raisons de choisir les éléments à remplacer lors de la remise à plat :

- Mettre à jour certaines valeurs par défaut du navigateur pour utiliser des `rem`s au lieu des `em` pour l'espacement des composants évolutifs.
- Eviter `margin-top`. Les marges verticales peuvent s’effondrer et produire des résultats inattendus. Plus important encore, une seule direction de la `marge` est un modèle mental plus simple.
- Pour faciliter la mise à l'échelle des tailles de périphériques, les éléments de bloc doivent utiliser des `rem` pour les `margin`.
- Garder les déclarations de propriétés liées à `font` au minimum, en utilisant `inherit` autant que possible.

## Défauts pour la page

Les éléments `<html>` et `<body>` sont mis à jour pour fournir de meilleurs paramètres par défaut pour l'ensemble de la page. Plus précisement :

- La `box-sizing` est définie globalement sur chaque élément — y compris `*::before` et `*::after` jusqu'à` border-box`. Cela garantit que la largeur déclarée de l'élément n'est jamais dépassée en raison d'un remplissage ou d'une bordure.
- Aucune base `font-size` n'est déclarée dans `<html>`, mais `16px` est prise en compte (valeur par défaut du navigateur). `font-size: 1rem` est appliqué sur `<body>` pour faciliter la mise à l'échelle sensible des caractères via les requêtes multimédia, tout en respectant les préférences de l'utilisateur et en garantissant une approche plus accessible.
- Le `<corps>` définit également une famille de polices, une police de caractères, une taille de ligne et une couleur globales. Ceci est hérité plus tard par certains éléments de formulaire pour éviter les incohérences de polices.
- Pour des raisons de sécurité, le `<corps>` a une couleur de fond déclarée, qui est par défaut `#fff`.

## Police de caractères

La fonte par défaut est `Avenir`, celle-ci **n'est pas couverte par la licence MIT** et reste propriétaire. Son utilisation est soumise à autorisation.
Elle est définie dans `<body>` et automatiquement héritée globalement dans Bootstrap.

## En-têtes et paragraphes

Tous les éléments d'en-têtes — balises `<h1>` — balises `<p>` sont remis à plat pour enlever leur propriété `margin-top`. Les en-têtes ont néanmoins `margin-bottom: .5rem` et les paragraphes `margin-bottom: 1rem` pour un espacement simplifié.

<table class="table">
  <thead>
    <tr>
      <th>Heading</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>
        {{< markdown >}}`<h1></h1>`{{< /markdown >}}
      </td>
      <td><span class="h1">h1. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h2></h2>`{{< /markdown >}}
      </td>
      <td><span class="h2">h2. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h3></h3>`{{< /markdown >}}
      </td>
      <td><span class="h3">h3. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h4></h4>`{{< /markdown >}}
      </td>
      <td><span class="h4">h4. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h5></h5>`{{< /markdown >}}
      </td>
      <td><span class="h5">h5. Bootstrap heading</span></td>
    </tr>
    <tr>
      <td>
        {{< markdown >}}`<h6></h6>`{{< /markdown >}}
      </td>
      <td><span class="h6">h6. Bootstrap heading</span></td>
    </tr>
  </tbody>
</table>

## Listes

Nous avons enlevé `margin-top` mais ajouté `margin-bottom: 1rem` à toutes les listes `<ul>`, `<ol>`, et `<dl>`. Les sous-listes n'ont plus de `margin-bottom`. Nous avons également réinitialisé le `padding-left` pour les éléments `<ul>` et `<ol>`.

<div class="bd-example">
{{< markdown >}}
* Lorem ipsum dolor sit amet
* Consectetur adipiscing elit
* Integer molestie lorem at massa
* Facilisis in pretium nisl aliquet
* Nulla volutpat aliquam velit
  * Phasellus iaculis neque
  * Purus sodales ultricies
  * Vestibulum laoreet porttitor sem
  * Ac tristique libero volutpat at
* Faucibus porta lacus fringilla vel
* Aenean sit amet erat nunc
* Eget porttitor lorem

1. Lorem ipsum dolor sit amet
2. Consectetur adipiscing elit
3. Integer molestie lorem at massa
4. Facilisis in pretium nisl aliquet
5. Nulla volutpat aliquam velit
6. Faucibus porta lacus fringilla vel
7. Aenean sit amet erat nunc
8. Eget porttitor lorem
{{< /markdown >}}
</div>

Pour simplifier le style, permettre une hiérarchie plus limpide et de meilleurs espacements, les listes de descriptions ont vu leurs `margin` mises à jour.
Celles des `<dd>` ont une `margin-left` à `0` et `margin-bottom: .5rem`. Les champos `<dt>` sont **mis en gras**.

<div class="bd-example">
  <dl>
    <dt>Description lists</dt>
    <dd>Une liste des description est parfaite pour définir des items.</dd>
    <dt>Euismod</dt>
    <dd>Vestibulum id ligula porta felis euismod semper eget lacinia odio sem.</dd>
    <dd>Donec id elit non mi porta gravida at eget metus.</dd>
    <dt>Malesuada porta</dt>
    <dd>Etiam porta sem malesuada magna mollis euismod.</dd>
  </dl>
</div>

## Autres éléments

### Adresses

L'élément `<address>` est mis à plat notamment pour passer de la valeur de `font-style` de `italic` à `normal`. `line-height` est également héritée et  `margin-bottom: 1rem` a été ajouté. Les champs `<address>` servent pour présenter des informations de contact pour l'élement parent le plus proche (ou tout le corps de l'objet de travail). Préservez le formatage des lignes avec les retours chariots `<br>`.

<div class="bd-example">
  <address>
    <strong>SNCF</strong><br>
    Pôle Stratégie de Marque SNCF<br>
    2, place aux Étoiles – CS 70001<br>
    93633 LA PLAINE ST DENIS CEDEX<br>
    <abbr title="Téléphone">T:</abbr> 3635
  </address>

  <address>
    <strong>Prenom Nom</strong><br>
    <a href="mailto:prenom.nom@example.com">prenom.nom@example.com</a>
  </address>
</div>

### Bloc de citation

La `margin` par défaut est de `1em 40px`, que nous avons réinitialisé à `0 0 1rem` de façon à rendre cet élément plus consistent avec les autres.

<div class="bd-example">
  <blockquote class="blockquote">
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
    <footer>Quelqu'un de connu dans <cite title="Source Title">Titre de la source</cite></footer>
  </blockquote>
</div>

### Élements dans une ligne

L'élément d'abbréviation `<abbr>` permet une décoration basique de façon à le faire ressortir au sein d'un paragraphe.

<div class="bd-example">
  Nulla <abbr title="attribut">attr</abbr> vitae elit libero, a pharetra augue.
</div>

### L'élement _summary_

Le `cursor` par défaut sur l'élément `<summary>` est `text`, que nous avons réinitialisé à `pointer` pour indiquer que cet élément peut provoquer une interaction en cliquant dessus.

<div class="bd-example">
  <details>
    <summary>Quelques détails</summary>
    <p>Plus d'infos sur les détails.</p>
  </details>

  <details open>
    <summary>Encore plus de détails</summary>
    <p>Ici, encore plus de détails à propos des détails.</p>
  </details>
</div>

## Attribut HTML5 `[hidden]`

HTML5 a ajouté [un nouvel attribut global nommé `[hidden]`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/hidden), qui correspond à `display: none` par défaut. En empruntant une idée à [PureCSS](https://purecss.io/), nous avons amélioré ce paramètre par défaut en rendant `[hidden] {display: none! Important; }` pour éviter que son `display` ne soit accidentellement remplacé. Bien que `[hidden]` ne soit pas supporté nativement par IE10, la déclaration explicite dans notre CSS résout ce problème.

{{< highlight html >}}
<input type="text" hidden>
{{< /highlight >}}

{{< callout warning >}}
##### Incompatibilité avec jQuery

`[hidden]` n'est pas compatible avec les méthodes jQuery `$(...).hide()` et `$(...).show()`. De plus, nous n'encourageons pas forcément `[hidden]` comme technique de gestion des éléments `display` d'affichage.
{{< /callout >}}

Pour définir le statut de visibilité d'un élément, à savoir faire en sorte que `display` ne soit pas modifié afin que l'élément affecte toujours le flux du document, veuillez plutôt utiliser [la classe `.invisible`]({{< docsref "/utilities/visibility" >}}).
