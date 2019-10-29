---
layout: docs
title: Système de grille
description: Utilisez notre grille flexbox puissante et pensée pour le mobile en premier, de façon à construire des mises en pages pour toutes les formes et toutes les tailles grâce à un système divisant la page en 12 colonnes, 5 niveaux d'adaptation, des variables SASS et des mixins, et de nombreuses classes prédéfinies.
group: layout
toc: true
---

## Fonctionnement

Le système de grille de Bootstrap utilise une série de containers, lignes, et colonnes pour mettre en page et aligner du contenu. Il est construit avec [flexbox](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Flexible_Box_Layout/Basic_Concepts_of_Flexbox) et est totalement _responsive_. Voici un exemple de mise en pratique avec le détail sur ce fonctionnement.

**Vous découvrez ou n'êtes pas familier de flexbox ?** [Consultez cette excellente documentation par CSS Tricks](https://css-tricks.com/snippets/css/a-guide-to-flexbox/#flexbox-background) pour plus d'informations sur le contexte, la terminologie, les principes de fonctionnement et quelques morceaux de code.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-sm">
      Une colonne sur trois
    </div>
    <div class="col-sm">
      Une colonne sur trois
    </div>
    <div class="col-sm">
      Une colonne sur trois
    </div>
  </div>
</div>
{{< /example >}}
</div>

L'exemple ci-dessus crée trois colonnes de même largeur sur des périphériques petits, moyens, grands et très grands à l'aide de nos classes de grille prédéfinies. Ces colonnes sont centrées dans la page avec le parent `.container`.

Voici comment cela fonctionne:

- Les conteneurs offrent un moyen de centrer et de remplir horizontalement le contenu de votre site. Utilisez `.container` pour une largeur de pixel _responsive_ ou` .container-fluid` pour `width: 100%` sur toutes les tailles de fenêtres et de périphériques.
- Les lignes encapsulent les colonnes. Chaque colonne a un `padding` horizontal (appelé _gouttière_) pour contrôler l’espace entre elles. Ce `padding` est ensuite neutralisé sur les lignes avec des marges négatives. De cette manière, tout le contenu de vos colonnes est aligné visuellement sur le côté gauche.
- Dans une mise en page avec la grille, le contenu doit être placé dans des colonnes et les lignes ne peuvent avoir que des colonnes en enfants immédiats.
- Grâce à flexbox, les colonnes de la grille sans « largeur » ​​spécifiée auront une largeur égale. Par exemple, quatre instances de `.col-sm` auront chacune 25% de largeur à partir du _breakpoint_ `sm` et au-delà. Consultez la section sur les [mises en forme automatiques de colonne](#auto-layout-columns) pour plus d'exemples.
- Les classes de colonnes indiquent le nombre de colonnes que vous souhaitez utiliser sur les 12 possibles par ligne. Donc, si vous voulez trois colonnes de largeur égale, vous pouvez utiliser `.col-4`.
- Les largeurs de colonne `width` sont définies en pourcentage, ainsi elles sont donc toujours fluides et dimensionnées par rapport à leur élément parent.
- Les colonnes ont un `padding` horizontal pour créer les gouttières entre les colonnes individuelles; toutefois, vous pouvez supprimer la `margin` des lignes et le `padding` des colonnes avec `.no-gutters` sur le `.row`.
- Pour rendre la grille _responsive_, il existe cinq _breakpoints_, un pour chaque [_responsive breakpoints_]({{< docsref "/layout/overview" "#responsive-breakpoints" >}}) : tous les _breakpoints_ (très petits), petits, moyens, grand et extra large.
- Les _breakpoints_ de la grille sont basés sur des requêtes média de largeur minimale, ce qui signifie **qu'ils s'appliquent à ce breakpoint et à tous ceux qui le précèdent** (par exemple, `.col-sm-4` s'applique aux écrans de petite, moyenne, grande et très grande taille, mais pas au premier point d’arrêt `xs`).
- Vous pouvez utiliser des classes de grille prédéfinies (comme `.col-4`) ou [des mixins SASS](# sass-mixins) pour un HTML plus sémantique.

Soyez attentitfs aux limites et [bugs de Flexbox](https://github.com/philipwalton/flexbugs), comme [l'impossibilité d'utiliser certains éléments HTML en tant que containers flex](https://github.com/philipwalton/flexbugs#flexbug-9).

## Options de grille

Bien que Bootstrap utilise `em` ou `rem` pour définir la plupart des tailles, les `px` sont utilisés pour les _breakpoints_ de la grille et les largeurs de conteneur. En effet, la largeur de la fenêtre d'affichage est en pixels et ne change pas avec la [taille de la police](https://drafts.csswg.org/mediaqueries-3/#units).

Découvrez comment certains aspects du système de grille Bootstrap fonctionnent sur plusieurs périphériques grâce à ce tableau pratique :

<div class="table-wrapper">
  <div class="table-scroller dragscroll">
    <table class="table table-bordered table-striped">
      <thead>
        <tr>
          <th scope="col"></th>
          <th class="text-center"><div class="cell-inner">
            Très petit<br>
            <small>&lt;576px</small></div>
          </th>
          <th class="text-center"><div class="cell-inner">
            Petit<br>
            <small>≥576px</small></div>
          </th>
          <th class="text-center"><div class="cell-inner">
            Moyen<br>
            <small>≥768px</small></div>
          </th>
          <th class="text-center"><div class="cell-inner">
            Grand<br>
            <small>≥1024px</small></div>
          </th>
          <th class="text-center"><div class="cell-inner">
            Très grand<br>
            <small>≥1280px</small></div>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th class="text-nowrap" scope="row"><div class="cell-inner">Préfixe de classe</div></th>
          <td><div class="cell-inner"><code>.col-</code></div></td>
          <td><div class="cell-inner"><code>.col-sm-</code></div></td>
          <td><div class="cell-inner"><code>.col-md-</code></div></td>
          <td><div class="cell-inner"><code>.col-lg-</code></div></td>
          <td><div class="cell-inner"><code>.col-xl-</code></div></td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row"><div class="cell-inner">Nombre de colonnes</div></th>
          <td colspan="5"><div class="cell-inner">12</div></td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row"><div class="cell-inner">Largeur de gouttière</div></th>
          <td colspan="5"><div class="cell-inner">20px (10px sur chaque côté latéral de colonne)</div></td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row"><div class="cell-inner">Encapsulable</div></th>
          <td colspan="5"><div class="cell-inner">Oui</div></td>
        </tr>
        <tr>
          <th class="text-nowrap" scope="row"><div class="cell-inner">Ordonner des colonnes</div></th>
          <td colspan="5"><div class="cell-inner">Oui</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

## Colonnes de taille automatique

Utilisez des classes de colonnes spécifiques aux _breakpoints_ pour faciliter le dimensionnement des colonnes sans classe numérotée explicite comme `.col-sm-6`.

### Largeur égale

Par exemple, voici deux dispositions de grille qui s'appliquent à chaque périphérique et à chaque fenêtre d'affichage, de `xs` à `xl`. Ajoutez un nombre quelconque de classes sans unité pour chaque breakpoint dont vous avez besoin et chaque colonne aura la même largeur.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col">
      1 sur 2
    </div>
    <div class="col">
      2 sur 2
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 sur 3
    </div>
    <div class="col">
      2 sur 3
    </div>
    <div class="col">
      3 sur 3
    </div>
  </div>
</div>
{{< /example >}}
</div>

### Largeur égale sur plusieurs lignes

Créez des colonnes de largeur égale qui s'étendent sur plusieurs lignes en insérant un `.w-100` à l'endroit où vous souhaitez que les colonnes se transforment en une nouvelle ligne. Rendez les pauses responsive en mélangeant `.w-100` avec des [utilitaires d'affichage réactif]({{< docsref "/utilities/display" >}}).

Un [bug sur Safari lié à flexbox](https://github.com/philipwalton/flexbugs#flexbug-11) empêchait que cela fonctionne sans  `flex-base` ou « bordure » explicite. Il existe des solutions de contournement pour les anciennes versions de navigateur, mais elles ne devraient pas être nécessaires si vos navigateurs cibles font pas partie des versions buggées.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="w-100"></div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
</div>
{{< /example >}}
</div>

### Définir une largeur de colonne

La mise en page automatique pour les colonnes de grille Flexbox signifie également que vous pouvez définir la largeur d'une colonne et redimensionner automatiquement les colonnes sœurs. Vous pouvez utiliser des classes de grille prédéfinies (comme indiqué ci-dessous), des mixins de grille ou des largeurs en ligne. Notez que les autres colonnes seront redimensionnées quelle que soit la largeur de la colonne centrale.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col">
      1 sur 3
    </div>
    <div class="col-6">
      2 sur 3 (wider)
    </div>
    <div class="col">
      3 sur 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 sur 3
    </div>
    <div class="col-5">
      2 sur 3 (wider)
    </div>
    <div class="col">
      3 sur 3
    </div>
  </div>
</div>
{{< /example >}}
</div>

### Largeur variable basée sur le contenu

Utilisez les classes `col-{breakpoint}-auto` basée sur la taille de leur contenu.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row justify-content-md-center">
    <div class="col col-lg-2">
      1 sur 3
    </div>
    <div class="col-md-auto">
      Contenu à largeur variable
    </div>
    <div class="col col-lg-2">
      3 sur 3
    </div>
  </div>
  <div class="row">
    <div class="col">
      1 sur 3
    </div>
    <div class="col-md-auto">
      Contenu à largeur variable
    </div>
    <div class="col col-lg-2">
      3 sur 3
    </div>
  </div>
</div>
{{< /example >}}
</div>

## Classes _responsives_

La grille de Bootstrap comprend cinq niveaux de classes prédéfinies pour la création de dispositions complexes sensibles. Personnalisez la taille de vos colonnes sur des périphériques de taille très petite, petite, moyenne, grande ou très grande, comme bon vous semble.

### Liste de tous les _breakpoints_

Pour les grilles identiques des plus petits aux plus grands, utilisez les classes `.col` et `.col-*`. Spécifiez une classe numérotée lorsque vous avez besoin d'une colonne de taille particulière. sinon, n'hésitez pas à vous en tenir à `.col`.


<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
    <div class="col">col</div>
  </div>
  <div class="row">
    <div class="col-8">col-8</div>
    <div class="col-4">col-4</div>
  </div>
</div>
{{< /example >}}
</div>

### Empilement

En utilisant un seul ensemble de classes `.col-sm- *`, vous pouvez créer un système de grille de base qui commence empilé et finit horizontal au petit point d'arrêt (`sm`).

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-sm-8">col-sm-8</div>
    <div class="col-sm-4">col-sm-4</div>
  </div>
  <div class="row">
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
    <div class="col-sm">col-sm</div>
  </div>
</div>
{{< /example >}}
</div>

### Mélanger, affecter

Vous ne voulez pas que vos colonnes s'empilent simplement dans des niveaux de grille ? Utilisez une combinaison de différentes classes pour chaque niveau si nécessaire. Voir l'exemple ci-dessous pour une meilleure idée de ce fonctionnement :

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <!-- Empiler les tcolones sur mobile avec une colonne pleine largeur, et l'autre de moitié -->
  <div class="row">
    <div class="col-md-8">.col-md-8</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- La colonne commence à 50% de largeur sur mobile, et va jusqu'à 33,3% sur ordinateur -->
  <div class="row">
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
    <div class="col-6 col-md-4">.col-6 .col-md-4</div>
  </div>

  <!-- Les colonnes prennent toujours 50% de la largeur, sur mobile et ordinateur -->
  <div class="row">
    <div class="col-6">.col-6</div>
    <div class="col-6">.col-6</div>
  </div>
</div>
{{< /example >}}
</div>

### Gouttières

Les gouttières peuvent être ajustées en fonction des classes de remplissage et des marges négatives spécifiques aux _breakpoints_. Pour changer les gouttières d’une ligne donnée, associez un utilitaire de marge négative sur le `.row` et un utilitaire de remplissage correspondant sur le `.col`. Les parents `.container` ou `.container-fluid` doivent également être ajustés pour éviter les débordements indésirables, en utilisant à nouveau l’utilitaire de remplissage correspondant.

Voici un exemple de personnalisation de la grille Bootstrap au niveau du grand point d'arrêt (`lg`) et au-dessus. Nous avons augmenté le padding `.col` avec `.px-lg-5`, compensé cela avec `.mx-lg-n5` sur le parent `.row`, puis ajusté l'encapsuleur `.container` avec `.px-lg-5`.

{{< example >}}
<div class="container px-lg-5">
  <div class="row mx-lg-n5">
    <div class="col py-3 px-lg-5 border bg-light">Padding modifié pour la colonne</div>
    <div class="col py-3 px-lg-5 border bg-light">Padding modifié pour la colonne</div>
  </div>
</div>
{{< /example >}}

## Alignement

Utilisez les utilitaires d'alignement de _flexbox_ pour aligner les colonnes verticalement et horizontalement. **Internet Explorer 10-11 ne prennent pas en charge l'alignement vertical des éléments _flex_ lorsque le conteneur _flex_ a une hauteur minimale, comme indiqué ci-dessous.** [Voir Flexbugs n°3 pour plus de détails.](https://github.com/philipwalton/flexbugs#flexbug-3)


### Alignement vertical

<div class="bd-example-row bd-example-row-flex-cols">
{{< example >}}
<div class="container">
  <div class="row align-items-start">
    <div class="col">
      Une colonne sur trois
    </div>
    <div class="col">
      Une colonne sur trois
    </div>
    <div class="col">
      Une colonne sur trois
    </div>
  </div>
  <div class="row align-items-center">
    <div class="col">
      Une colonne sur trois
    </div>
    <div class="col">
      Une colonne sur trois
    </div>
    <div class="col">
      Une colonne sur trois
    </div>
  </div>
  <div class="row align-items-end">
    <div class="col">
      Une colonne sur trois
    </div>
    <div class="col">
      Une colonne sur trois
    </div>
    <div class="col">
      Une colonne sur trois
    </div>
  </div>
</div>
{{< /example >}}
</div>

<div class="bd-example-row bd-example-row-flex-cols">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col align-self-start">
      Une colonne sur trois
    </div>
    <div class="col align-self-center">
      Une colonne sur trois
    </div>
    <div class="col align-self-end">
      Une colonne sur trois
    </div>
  </div>
</div>
{{< /example >}}
</div>

### Alignement horizontal

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row justify-content-start">
    <div class="col-4">
      Une colonne sur deux
    </div>
    <div class="col-4">
      Une colonne sur deux
    </div>
  </div>
  <div class="row justify-content-center">
    <div class="col-4">
      Une colonne sur deux
    </div>
    <div class="col-4">
      Une colonne sur deux
    </div>
  </div>
  <div class="row justify-content-end">
    <div class="col-4">
      Une colonne sur deux
    </div>
    <div class="col-4">
      Une colonne sur deux
    </div>
  </div>
  <div class="row justify-content-around">
    <div class="col-4">
      Une colonne sur deux
    </div>
    <div class="col-4">
      Une colonne sur deux
    </div>
  </div>
  <div class="row justify-content-between">
    <div class="col-4">
      Une colonne sur deux
    </div>
    <div class="col-4">
      Une colonne sur deux
    </div>
  </div>
</div>
{{< /example >}}
</div>

### Pas de gouttières

Les gouttières entre les colonnes de nos classes de grille prédéfinies peuvent être supprimées avec `.no-gutters`. Cela supprime les `margin` négatives de `.row` et les `padding` horizontaux de toutes les colonnes enfants immédiats.

Voici le code source pour créer ces styles. Notez que les remplacements de colonne ne concernent que les premières colonnes enfants et sont ciblés via [les sélecteurs d'attributs](https://developer.mozilla.org/en-US/docs/Web/CSS/Attribute_selectors). Bien que cela génère un sélecteur plus spécifique, le remplissage des colonnes peut toujours être personnalisé avec [les utilitaires d'espacement]({{< docsref "/utilities/spacing" >}}).

**Besoin d'une conception bord à bord ?** Supprimez le parent `.container` ou` .container-fluid`.
**Need an edge-to-edge design?** Drop the parent `.container` or `.container-fluid`.

{{< highlight scss >}}
.no-gutters {
  margin-right: 0;
  margin-left: 0;

  > .col,
  > [class*="col-"] {
    padding-right: 0;
    padding-left: 0;
  }
}
{{< /highlight >}}

En pratique, voici à quoi cela ressemble. Notez que vous pouvez continuer à l'utiliser avec toutes les autres classes de grille prédéfinies (y compris les largeurs de colonne, les niveaux _responsive_, les réordonnances, etc.).

<div class="bd-example-row">
{{< example >}}
<div class="row no-gutters">
  <div class="col-sm-6 col-md-8">.col-sm-6 .col-md-8</div>
  <div class="col-6 col-md-4">.col-6 .col-md-4</div>
</div>
{{< /example >}}
</div>

### Débordement de colonnes

Si plus de 12 colonnes sont placées à l'intérieur d'une simple ligne, chaque groupe de colonnes supplémentaires passera sur une nouvelle ligne, comme un nouveau groupe de 12 colonnes.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-9">.col-9</div>
    <div class="col-4">.col-4<br>Comme 9 + 4 = 13 &gt; 12, cette `div` de 4 colonnes ira sur une nouvelle ligne, comme une unité continue.</div>
    <div class="col-6">.col-6<br>Les colonnes qui suivront continueront sur la même nouvelle ligne.</div>
  </div>
</div>
{{< /example >}}
</div>

### Césures de colonnes

Diviser des colonnes pour aller à la ligne avec _flexbox_ nécessite un petit _hack_ : ajouter un élément avec `width: 100%` là où vous voulez diviser vos colonnes vers une nouvelle ligne. Normalement, ceci est accompli avec de multiples `.row` mais toutes les méthodes d'implémentation ne le permettent pas.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>

    <!-- Forcer les colonnes suivantes à passer à la ligne -->
    <div class="w-100"></div>

    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
    <div class="col-6 col-sm-3">.col-6 .col-sm-3</div>
  </div>
</div>
{{< /example >}}
</div>

Il est également possible d'appliquer cette césure à des _breakpoints_ spécifiques grâce à nos [utilitaires responsives]({{< docsref "/utilities/display" >}}).

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>

    <!-- Forcer les colonnes suivantes à passer à la ligne au breakpoint « md » et au delà -->
    <div class="w-100 d-none d-md-block"></div>

    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
    <div class="col-6 col-sm-4">.col-6 .col-sm-4</div>
  </div>
</div>
{{< /example >}}
</div>

## Réordonner

### Classes d'ordre

Utilisez les classes `.order-` pour contrôler l'**ordre visuel** de votre contenu. Ces classes sont _responsives_, ainsi vous pouvez définir l'ordre à chaque _breakpoint_ (par exemple `.order-1.order-md-2`). Le support est inclus de 1 à 5 sur les cinqs niveaux de grille.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col">
      En premier mais sans ordre.
      First, but unordered
    </div>
    <div class="col order-5">
      Second, mais mis en dernier.
    </div>
    <div class="col order-1">
      Troisième, mais visible en premier.
    </div>
  </div>
</div>
{{< /example >}}
</div>

Il existe également les classes _responsives_ `.order-first` et `.order-last` qui peuvent changer l'`order` d'un élément en appliquant `order: -1` et `order: 6`, respectivement. Ces classes peuvent également être mélangées avec les classes numérotées `.order-*` si nécessaire.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col order-last">
      En premier mais sans ordre.
    </div>
    <div class="col">
      Second, mais sans ordre.
    </div>
    <div class="col order-first">
      Troisième, mais visible en premier.
    </div>
  </div>
</div>
{{< /example >}}
</div>

### Décaler les colonnes

Vous pouvez décaler les colonnes de la grille de deux manières : avec les classes de grille `.offset-` _responsives_ et nos [classes utilitaires d'espacement]({{< docsref "/utilities/spacing">}}). Les classes de grille sont dimensionnées pour correspondre aux colonnes tandis que les marges sont plus utiles pour les présentations rapides où la largeur du décalage est variable.

#### Classes de décalage

Déplacez les colonnes vers la droite en utilisant les classes `.offset-md- *`. Ces classes augmentent la marge gauche d'une colonne par `*` colonnes. Par exemple, `.offset-md-4` déplace` .col-md-4` de quatre colonnes.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 offset-md-4">.col-md-4 .offset-md-4</div>
  </div>
  <div class="row">
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
    <div class="col-md-3 offset-md-3">.col-md-3 .offset-md-3</div>
  </div>
  <div class="row">
    <div class="col-md-6 offset-md-3">.col-md-6 .offset-md-3</div>
  </div>
</div>
{{< /example >}}
</div>

En plus de nettoyer les colonnes aux _breakpoints responsives_, vous pourriez devoir réinitialiser les décalages.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-sm-5 col-md-6">.col-sm-5 .col-md-6</div>
    <div class="col-sm-5 offset-sm-2 col-md-6 offset-md-0">.col-sm-5 .offset-sm-2 .col-md-6 .offset-md-0</div>
  </div>
  <div class="row">
    <div class="col-sm-6 col-md-5 col-lg-6">.col-sm-6 .col-md-5 .col-lg-6</div>
    <div class="col-sm-6 col-md-5 offset-md-2 col-lg-6 offset-lg-0">.col-sm-6 .col-md-5 .offset-md-2 .col-lg-6 .offset-lg-0</div>
  </div>
</div>
{{< /example >}}
</div>

#### Utilitaires de marge

Avec le passage à _flexbox_ dans v4, vous pouvez utiliser des utilitaires de marge tels que `.mr-auto` pour forcer les colonnes sœurs à s’éloigner les unes des autres.

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-md-4">.col-md-4</div>
    <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
  </div>
  <div class="row">
    <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
    <div class="col-md-3 ml-md-auto">.col-md-3 .ml-md-auto</div>
  </div>
  <div class="row">
    <div class="col-auto mr-auto">.col-auto .mr-auto</div>
    <div class="col-auto">.col-auto</div>
  </div>
</div>
{{< /example >}}
</div>

## Imbrication

Pour imbriquer votre contenu dans la grille par défaut, ajoutez une nouvelle colonne `.row` et un ensemble de colonnes `.col-sm-*`dans une colonne `.col-sm-*` existante. Les lignes imbriquées doivent inclure un ensemble de colonnes ne dépassant pas 12 (il n'est pas nécessaire d'utiliser les 12 colonnes disponibles).

<div class="bd-example-row">
{{< example >}}
<div class="container">
  <div class="row">
    <div class="col-sm-9">
      Level 1: .col-sm-9
      <div class="row">
        <div class="col-8 col-sm-6">
          Level 2: .col-8 .col-sm-6
        </div>
        <div class="col-4 col-sm-6">
          Level 2: .col-4 .col-sm-6
        </div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}
</div>

## Mixins SASS

Lorsque vous utilisez les fichiers SASS source de Bootstrap, vous pouvez utiliser des variables et des _mixins_ SASS pour créer des présentations de page personnalisées, sémantiques et _responsives_. Nos classes de grille prédéfinies utilisent ces mêmes variables et combinaisons pour fournir une suite complète de classes prêtes à l'emploi pour des présentations rapides et _responsives_.

### Variables

Les variables et _maps_ déterminent le nombre de colonnes, la largeur de la gouttière et le point d'interrogation du support auquel commencer les colonnes flottantes. Nous les utilisons pour générer les classes de grille prédéfinies décrites ci-dessus, ainsi que pour les mixins personnalisés répertoriés ci-dessous.

{{< highlight scss >}}
$grid-columns:      12;
$grid-gutter-width: 30px;

$grid-breakpoints: (
  // Écran très petit, téléphone
  xs: 0,
  // Petit écran, téléphone
  sm: 576px,
  // Écran moyen, tablette
  md: 768px,
  // Grand écran, ordinateur
  lg: 1024px,
  // Très grand écran, ordinateur
  xl: 1280px
);

$container-max-widths: (
  sm: 540px,
  md: 720px,
  lg: 960px,
  xl: 1140px
);
{{< /highlight >}}

### Mixins

Les mixins sont utilisées en conjonction avec les variables de grille pour générer du CSS sémantique, pour des colonnes de grille individuelles.

{{< highlight scss >}}
// Créer de quoi encapsuler une série de colonnes
@include make-row();

// Rend l'élément prêt pour être intégré dans une grille (tout s'applique sauf la largeur)
@include make-col-ready();
@include make-col($size, $columns: $grid-columns);

// Éclatez-vous en décalant ou changeant l'ordre de tri.
@include make-col-offset($size, $columns: $grid-columns);
{{< /highlight >}}

### Exemple d'utilisation

Vous pouvez modifier les variables selon vos propres valeurs personnalisées ou simplement utiliser les _mixins_ avec leurs valeurs par défaut. Voici un exemple d'utilisation des paramètres par défaut pour créer une mise en page à deux colonnes avec un espace entre les deux.

{{< highlight scss >}}
.example-container {
  width: 800px;
  @include make-container();
}

.example-row {
  @include make-row();
}

.example-content-main {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(8);
  }
}

.example-content-secondary {
  @include make-col-ready();

  @include media-breakpoint-up(sm) {
    @include make-col(6);
  }
  @include media-breakpoint-up(lg) {
    @include make-col(4);
  }
}
{{< /highlight >}}

{{< example >}}
<div class="example-container">
  <div class="example-row">
    <div class="example-content-main">Contenu principal</div>
    <div class="example-content-secondary">Contenu secondaire</div>
  </div>
</div>
{{< /example >}}

## Modifier/adapter la grille

En utilisant les _maps_ et variables Sass intégrées pour la grille, il est possible de personnaliser complètement les classes de grille prédéfinies. Modifiez le nombre de niveaux, les dimensions de la requête média et les largeurs de conteneur, puis recompilez.

### Colonnes et gouttières

Le nombre de colonnes de la grille peut être modifié via les variables Sass. `$grid-columns` est utilisé pour générer les largeurs (en pourcentage) de chaque colonne individuelle tandis que `$grid-gutter-width` définit la largeur des gouttières de colonne.

{{< highlight scss >}}
$grid-columns: 12 !default;
$grid-gutter-width: 30px !default;
{{< /highlight >}}

### Niveaux de grille

Au-delà des colonnes, vous pouvez également personnaliser le nombre de niveaux de grille. Si vous voulez seulement quatre niveaux de grille, mettez à jour les variables `$grid-breakpoints` et` $conteneur-max-widths` en quelque chose qui ressemblerait à ceci :

{{< highlight scss >}}
$grid-breakpoints: (
  xs: 0,
  sm: 480px,
  md: 768px,
  lg: 1024px
);

$container-max-widths: (
  sm: 420px,
  md: 720px,
  lg: 960px
);
{{< /highlight >}}

Lorsque vous apportez des modifications aux variables Sass ou aux _maps_, vous devez enregistrer vos modifications et recompiler. Cela générera un nouvel ensemble de classes de grille prédéfinies pour les largeurs de colonne, les décalages et le classement. Les utilitaires de visibilité _responsives_ seront également mis à jour pour utiliser les _breakpoints_ personnalisés. Assurez-vous de définir des valeurs de grille en pixels `px` (et non pas `rem`, `em` ou `%`).
