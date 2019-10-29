---
layout: docs
title: Bulles contextuelles
description: Les bulles contextuelles, ou _popovers_ proposent une information additionnelle sur des fonctionnalités disponibles sur un site pour améliorer l'expérience utilisateur ou simplement afficher plus de détails. L'information apparaît lorsque l'utilisateur déroule ou clique sur un élément.
group: components
toc: true
url: /fr/docs/4.3/components/popovers/
---

## Vue d'ensemble

Choses à savoir pour utiliser ce composant :

- Il dépend d'une librairie tierce [Popper.js](https://popper.js.org/) pour le positionnement. Vous devez inclure [popper.min.js]({{ site.cdn.popper }}) avant bootstrap-sncf.js ou utiliser le fichier minifié `bootstrap.bundle.min.js` / `bootstrap.bundle.js` qui contient déjà cette librairie pour que les bulles contextuelles fonctionnent.
- Il nécessite le composant [tooltip]({{< docsref "/components/tooltips" >}}) comme dépendance.
- Les _popovers_ ne sont pas activés par défaut pour des raisons de performances, par conséquent **vous devez les initialiser vous-même**.
- Des valeurs vides de `title` et `content` n'afficheront jamais de bulles contextuelles.
- Spécifiez `container: 'body'` pour éviter des problèmes de rendu dans des composants plus complexes (comme des groupes d'entrées ou de boutons par exemple).
- Déclencher des bulles contextuelles sur des éléments masqués ne fonctionnera pas.
- Les bulles contextuelles sur des éléments `.disabled` ou `disabled` doivent être liés sur un élément parent.
- Quand déclenché depuis des ancres qui encapsulent plusieurs lignes, les bulles contextuelles seront centrées entres ces ancres suivant leur largeur totale. Utilisez `white-space: nowrap;` sur les balises `<a>` pour empêcher ce comportement.
- Les bulles contextuelles doivent être masquées avant que leurs éléments correspondants aient été supprimés du DOM.

Voyons maintenant comment les bulles contextuelles fonctionnent à travers plusieurs exemples.

## Exemple : Activer les bulles contextuelles sur toute la page

Une manière d'initialiser toutes les bulles contextuelles sur une page est de les sélectionner à travers leur attribut `data-toggle` :

{{% highlight js %}}
$(function () {
  $('[data-toggle="popover"]').popover()
})
{{% /highlight %}}

## Example : Utiliser l'option `container`

Lorsque vous avez quelques styles sur un élément parent qui interfèrent avec une bulle contextuelle, vous aimerez sûrement spéicifier un `container` maison de façon à ce que le code HTML de la bulle contextuelle apparaisse attachée à cet élément à la place.

{{% highlight js %}}
$(function () {
  $('.example-popover').popover({
    container: 'body'
  })
})
{{% /highlight %}}

## Exemple

{{% callout danger %}}
#### L'implémentation des bulles contextuelles SNCF nécessite une disparition au prochain clic

Pour tous les exemples proposés, du [code HTML spécifique](#dismiss-on-next-clik) est proposé, la croix placée en haut à droite n'étant pas un bouton à proporement parler. Suivant la charte SNCF, les bulles contextuelles doivent disparaître au clic suivant.
{{% /callout %}}

{{% example html %}}
<button type="button" tabindex="0" class="btn btn-lg btn-primary" data-toggle="popover" data-trigger="focus" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">Click to toggle popover</button>
{{% /example %}}

{{% example html %}}
<button class="btn btn-link" tabindex="0" data-toggle="popover" data-trigger="focus" title="Popover title" data-content="And here's some amazing content. It's very engaging. Right?">
  <span class="sr-only">Click to toggle popover</span>
  <i class="icons-circle-tooltip"></i>
</button>
{{% /example %}}

### Quatre directions

Quatre options sont disponibles : alignement en haut, à droite, en bas, et à gauche.

<div class="bd-example popover-demo">
  <div class="bd-example-popovers">
    <button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Bulle contextuelle en haut
    </button>
    <button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Bulle contextuelle à droite
    </button>
    <button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Bulle contextuelle en bas
    </button>
    <button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
      Bulle contextuelle à gauche
    </button>
  </div>
</div>

{{% highlight html %}}
<button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="top" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Bulle contextuelle en haut
</button>

<button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="right" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Bulle contextuelle à droite
</button>

<button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="bottom" data-content="Vivamus
sagittis lacus vel augue laoreet rutrum faucibus.">
  Bulle contextuelle en bas
</button>

<button type="button" tabindex="0" data-trigger="focus" class="btn btn-secondary" data-container="body" data-toggle="popover" data-placement="left" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">
  Bulle contextuelle à gauche
</button>
{{% /highlight %}}

### Alignées sur une icône

Utilisez `data-placement` pour définir une direction d'ouverture avec comme valeurs top, right, bottom ou left.

{{% example html %}}
<div class="row">
  <div class="col-sm-6 text-right pt-5 pb-5">
    <button class="btn btn-link" type="button" data-trigger="focus" data-toggle="popover" data-placement="top" title="Bulle contextuelle en haut" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="sr-only">Cliquez pour activer la bulle contextuelle</span><i class="text-primary icons-circle-tooltip"></i></button>
  </div>
  <div class="col-sm-6 pt-5 pb-5">
    <button class="btn btn-link" type="button" data-trigger="focus" data-toggle="popover" data-placement="right" title="Bulle contextuelle à droite" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="sr-only">Cliquez pour activer la bulle contextuelle</span><i class="text-primary icons-circle-tooltip"></i></button>
  </div>
</div>
<div class="row">
  <div class="col-sm-6 text-right pt-5 pb-5">
    <button class="btn btn-link" type="button" data-trigger="focus" data-toggle="popover" data-placement="left" title="Bulle contextuelle en haut" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="sr-only">Cliquez pour activer la bulle contextuelle</span><i class="text-primary icons-pencil"></i></button>
  </div>
  <div class="col-sm-6 pt-5 pb-5">
    <button class="btn btn-link" type="button" data-trigger="focus" data-toggle="popover" data-placement="bottom" title="Bulle contextuelle à droite" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus."><span class="sr-only">Cliquez pour activer la bulle contextuelle</span><i class="text-primary icons-pencil"></i></button>
  </div>
</div>
{{% /example %}}


### Fermer au prochain clic

Utilisez l'élément `focus` pour fermer la bulle contextuelle au prochain clic de l'utilisateur.

{{% callout danger %}}
#### Du code HTML spécifique est nécessaire !

Pour un fonctionnement interopérable entre les navigateurs et systèmes, vous devez utiliser une balise `<a>` _et non pas_ la balise `<button>`. Vous devez également inclure un attribut [`tabindex`](https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex).
{{% /callout %}}

{{% example html %}}
<button type="button" tabindex="0" class="btn btn-lg btn-secondary" data-toggle="popover" data-trigger="focus" title="Bulle contextuelle se fermant au prochain clic" data-content="Vivamus sagittis lacus vel augue laoreet rutrum faucibus.">Bulle contextuelle à cliquer</button>
{{% /example %}}

{{% highlight js %}}
$('.popover-dismiss').popover({
  trigger: 'focus'
})
{{% /highlight %}}

### Éléments inactifs

Les éléments avec l'attribut `disabled` ne sont pas interactifs, ce qui signifie que les utilisateurs ne pourront pas survoler ou cliquer sur ce composant pour déclencher une bulle contextuelle (ou une infobulle). Pour contourner ce comportement, utilisez un container encapsulant auquel lier le déclencheur, en écrasant l'élément `pointer-events` sur l'élément inactif.

Pour les déclencheurs inactifs de bulles contextuelles, vous pourriez préférer `data-trigger="hover"` de façon à ce que la bulle apparaisse comme un retour visuel immédiat à vos utilisateurs, comme ils ne s'attendront pas à devoir cliquer sur un élément inactif.

{{% example html %}}
<span tabindex="0" class="d-inline-block" data-toggle="popover" data-content="Bulle contextuelle inactive">
  <button class="btn btn-primary disabled" style="pointer-events: none;" type="button" disabled>Bouton inactif</button>
</span>
{{% /example %}}

## Utilisation

Activer les bulles contextuelles en JavaScript :

{{% highlight js %}}$('#example').popover(options){{% /highlight %}}

### Options

Les options peuvent être renseignées via les attributs `data-`. Pour ces derniers, ajoutez-y le nom de l'option, par exemple `data-animation=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 100px;">Nom</th>
      <th scope="col" style="width: 100px;">Type</th>
      <th scope="col" style="width: 50px;">Par défaut</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animation</td>
      <td>boolean</td>
      <td>true</td>
      <td>Ajoute une transition CSS de fondu</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | element | false</td>
      <td>false</td>
      <td>
        <p>Ajoute la bulle contextuelle à un élément spécifique. Par exemple : <code>container: 'body'</code>. Cette option est particulièrement utile car elle vous permet de placer la bulle contextuelle dans le flux du document près de l'élément déclencheur, ce qui l'empêchera de s'éloigner de l'élément déclencheur pendant le redimensionnement de la fenêtre.</p>
      </td>
    </tr>
    <tr>
      <td>content</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Valeur de contenu par défaut si l'attribut <code>data-content</code> n'est pas présent.</p>
        <p>Si une fonction est donnée, elle sera appelée avec la référence <code>this</code> à l'élément auquel la bulle contextuelle est attachée.</p>
      </td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number | object</td>
      <td>0</td>
      <td>
        <p>Délai d'apparition/disparition de la bulle contextuelle en ms — ne s'applique pas au déclenchement manuel.</p>
        <p>Si un nombre est fourni, le délai s'appliquera à l'apparition et la disparition.</p>
        <p>La structure de l'objet est : <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td>html</td>
      <td>boolean</td>
      <td>false</td>
      <td>Insérer du code HTML dans la bulle contextuelle. Si `false`, la méthode jQuery <code>text</code> sera utilisée pour insérer du contenu dans le DOM. Utilisez `text` si vous voulez vous prémunir des attaques XSS.</td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'right'</td>
      <td>
        <p>Comment positionner la bulle contextuelle — auto | top | bottom | left | right.<br>Quand <code>auto</code> est spécifié, la bulle contextuelle sera automatiquement réorientée.</p>
        <p>Si une fonction est utilisée pour déterminer le positionnement, elle sera appelée avec le nœud DOM de la bulle contextuelle en premier argument et l'élément déclencheur en second. L'élément contextuel <code>this</code> sera défini à l'instance de la bulle..</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string | false</td>
      <td>false</td>
      <td>Si un sélecteur est fourni, les objets « _bulle contextuelle_ » seront délégués aux destinations spécifiées. En pratique, cela est utilisé pour permettre du contenu dynamique en HTML dans la bulle. Consultez <a href="https://github.com/twbs/bootstrap/issues/4215">ceci</a> et <a href="https://jsbin.com/zopod/1/edit">cet exemple informatif</a>.</td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="popover" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;h3 class="popover-header"&gt;&lt;/h3&gt;&lt;div class="popover-body"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>
        <p>Code HTML de référence à utiliser quand vous créez une bulle contextuelle.</p>
        <p>Le titre de la bulle <code>title</code> sera injecté dans <code>.popover-header</code>.</p>
        <p>Le contenu <code>content</code> sera injecté dans <code>.popover-body</code>.</p>
        <p><code>.arrow</code> deviendra la flèche de la bulle contextuelle.</p>
        <p>L'élément le plus extérieur de la bulle doit avoir la classe <code>.popover</code>.</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Valeur de titre par défaut si l'attribut <code>title</code> est absent.</p>
        <p>Si une fonction est donnée, elle sera appelée avec la référence <code>this</code> à l'élément auquel la bulle contextuelle est attachée.</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'click'</td>
      <td>Manières de déclencher la bulle contextuelle : click | hover | focus | manual. Il est possible d'en choisir plusieurs, séparés par un espace, sauf pour `manual` qui ne peut être combiné avec une autre.</td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number | string</td>
      <td>0</td>
      <td>Décalage de la bulle contextuelle par rapport à sa cible. Pour plus d'informations, veuillez vous référer à <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">la documentation de popper.js sur le décalage</a>.</td>
    </tr>
    <tr>
      <td>fallbackPlacement</td>
      <td>string | array</td>
      <td>'flip'</td>
      <td>Permet de spécifier quelle position _Popper_ utilisera par défaut. Pour plus d'informations, veuillez consulter <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.behavior">la documentation de popper.js sur le comportement</a></td>
    </tr>
    <tr>
      <td>boundary</td>
      <td>string | element</td>
      <td>'scrollParent'</td>
      <td>Zone de contrainte de dépassement des bulles contextuelles. Accepte les valeurs <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, ou une référence HTMLElement (JavaScript seulement). Pour plus d'informations, veuillez vous référer à <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">la documentation de popper.js sur ce point</a>.</td>
    </tr>
  </tbody>
</table>

{{% callout info %}}
#### Attributs `data-` pour les bulles contextuelles individuelles

Les options pour les bulles contextuelles individuelles peuvent alternativement être spécifiées via des attributs `data-` comme expliqué plus haut.
{{% /callout %}}

### Methodes

{{% callout danger %}}
{{% partial "callout-danger-async-methods.fr.md" %}}
{{% /callout %}}

#### `$().popover(options)`

Initialise les bulles contextuelles pour une collection d'éléments.

#### `.popover('show')`

Affiche une bulle contextuelle. **Le retour à la fonction appelante se fait avant que la bulle ne soit visible** (par exemple, avant que l'évènement `shown.bs.popover` soit déclenché). Cela est considéré comme un déclenchement manuel — si le titre `title` et le contenu sont vides, la bulle n'est jamais affichée.

{{% highlight js %}}$('#element').popover('show'){{% /highlight %}}

#### `.popover('hide')`

Masque une bulle contextuelle. **Le retour à la fonction appelante se fait avant que la bulle ne soit masquée** (par exemple, avant que l'évènement `hidden.bs.popover` soit déclenché). Cela est considéré comme un déclenchement manuel.

{{% highlight js %}}$('#element').popover('hide'){{% /highlight %}}

#### `.popover('toggle')`

Alterne la visibilité d'une bulle contextuelle. **Le retour à la fonction appelante se fait avant que la bulle soit visible ou masquée** (par exemple, avant que l'évènement `shown.bs.popover` ou `hidden.bs.popover` soient déclenchés). Cela est considéré comme un déclenchement manuel.

{{% highlight js %}}$('#element').popover('toggle'){{% /highlight %}}

#### `.popover('dispose')`

Masque et détruit le composant bulle contextuelle. Ceux qui utilisent une délégation (créés avec [l'option `selector`](#options)) ne peuvent pas être individuellement détruit sur les éléments déclenchant descendant.

{{% highlight js %}}$('#element').popover('dispose'){{% /highlight %}}

#### `.popover('enable')`

Donne à une bulle contextuelle la capacité d'être affichée. **Les bulles contextuelles sont activées par défaut.**

{{% highlight js %}}$('#element').popover('enable'){{% /highlight %}}

#### `.popover('disable')`

Enlève la capacité à une bulle contextuelle d'être affichée. Il faudra l'activer à nouveau pour pouvoir être déclenchée.

{{% highlight js %}}$('#element').popover('disable'){{% /highlight %}}

#### `.popover('toggleEnabled')`

Alterne la possibilité d'une bulle contextuelle d'être affichée ou masquée.

{{% highlight js %}}$('#element').popover('toggleEnabled'){{% /highlight %}}

#### `.popover('update')`

Met à jour la position d'un élément de bulle contextuelle.

{{% highlight js %}}$('#element').popover('update'){{% /highlight %}}

### Évènements

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 150px;">Type d'évènement</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.popover</td>
      <td>Cet évènement se déclenche immédiatement quand la méthode d'instance <code>show</code> a été appelée.</td>
    </tr>
    <tr>
      <td>shown.bs.popover</td>
      <td>Cet évènement se déclenche quand la bulle contextuelle est devenue visible pour l'utilisateur, transitions CSS terminées.</td>
    </tr>
    <tr>
      <td>hide.bs.popover</td>
      <td>Cet évènement se déclenche immédiatement quand la méthode d'instance <code>hide</code> a été appelée.</td>
    </tr>
    <tr>
      <td>hidden.bs.popover</td>
      <td>Cet évènement se déclenche quand la bulle contextuelle est devenue masquiée pour l'utilisateur, transitions CSS terminées.</td>
    </tr>
    <tr>
      <td>inserted.bs.popover</td>
      <td>Cet évènement se déclenche après l'évènement <code>show.bs.popover</code>, quand le code HTML de la bulle contextuelle ait été ajouté au DOM.</td>
    </tr>
  </tbody>
</table>

{{% highlight js %}}
$('#myPopover').on('hidden.bs.popover', function () {
  // Fait quelque chose…
})
{{% /highlight %}}
