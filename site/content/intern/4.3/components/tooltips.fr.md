---
layout: docs
title: Info-bulles
description: Documentation et exemples pour ajouter des info-bulles Bootstrap en CSS et JavaScript, avec CSS3 pour les animations, et des attributs `data-` pour le stockage local du titre.
group: components
toc: true
url: /fr/docs/4.3/components/tooltips/
---

## Vue d'ensemble

Les info-bulles servent à fournir des informations supplémentaires sur les fonctionnalités disponibles sur le site Web. Ceux-ci peuvent améliorer l'expérience utilisateur ou simplement afficher des informations supplémentaires. Les info-bulles apparaissent lorsque l'utilisateur survole ou clique dessus (pour un contenu plus long).

Ce qu'il faut savoir pour utiliser les info-bulles :

Une info-bulle est utile pour fournir des informations additionnelles sur des éléments disponibles sur un site web. Elles peuvent améliorer l'expérience utilisateur ou simplement montrer une information supplémentaire. Les info-bulles apparaissent généralement au survol d'un objet voire au clic (pour des contenus plus longs).

Deux trois choises à savoir si vous utilisez les info-bulles :

- Elles dépendent de la librairie [Popper.js](https://popper.js.org/) pour le positionnement. La librairie est déjà incluse dans la distribution `bootstrap-sncf.min.js`.
- Elles ne sont pas initialisées par défauit, **vous devez le faire vous-même**.
- Des info-bulles avec un titre vide ne seront pas affichées.
- Spécifiez `container: 'body'` pour éviter des problèmes de rendus dans des composants plus complexes tels que les groupes d'entrées, de boutons, etc.
- Déclencher une info-bulle sur un élément masqué ne fonctionnera pas.
- Les info-bulles sur des éléments `.disabled` ou `disabled` doivent être liés sur un élément enveloppant.
- Quand déclenché depuis des ancres qui enveloppent plusieurs lignes, les info-bulles seront centrées. Utilisez `white-space: nowrap;` sur les balises `<a>` pour empêcher ce comportement.
- Les info-bulles doivent être masquées avant que leurs éléments correspondants aient été supprimés du DOM.

Tout est ok ? Super ! Maintenant, quelques exemples.

## Exemple : Activer les info-bulles sur toute la page

Une manière d'initialiser toutes les info-bulles sur une page est de les sélectionner à travers leur attribut `data-toggle` :

{{% highlight js %}}
$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})
{{% /highlight %}}

## Exemples

Survolez les liens ci-dessous pour voir les info-bulles :

<div class="bd-example tooltip-demo">
  <p class="muted">Tight pants next level keffiyeh <a href="#" data-toggle="tooltip" title="Default tooltip">you probably</a> haven't heard of them. Photo booth beard raw denim letterpress vegan messenger bag stumptown. Farm-to-table seitan, mcsweeney's fixie sustainable quinoa 8-bit american apparel <a href="#" data-toggle="tooltip" title="Another tooltip">have a</a> terry richardson vinyl chambray. Beard stumptown, cardigans banh mi lomo thundercats. Tofu biodiesel williamsburg marfa, four loko mcsweeney's cleanse vegan chambray. A really ironic artisan <a href="#" data-toggle="tooltip" title="Another one here too">whatever keytar</a>, scenester farm-to-table banksy Austin <a href="#" data-toggle="tooltip" title="The last tip!">twitter handle</a> freegan cred raw denim single-origin coffee viral.
  </p>
</div>

Survolez les boutons ci-dessous pour découvrir les quatres directions possibles pour une info-bulle : `top`, `right`, `bottom`, et `left`.

<div class="bd-example tooltip-demo">
  <div class="bd-example-tooltips">
    <button type="button" class="btn btn-secondary mb-1" data-toggle="tooltip" data-placement="top" title="Info-bulle en haut">Info-bulle en haut</button>
    <button type="button" class="btn btn-secondary mb-1" data-toggle="tooltip" data-placement="right" title="Info-bulle à droite">Info-bulle à droite</button>
    <button type="button" class="btn btn-secondary mb-1" data-toggle="tooltip" data-placement="bottom" title="Info-bulle en bas">Info-bulle en bas</button>
    <button type="button" class="btn btn-secondary mb-1" data-toggle="tooltip" data-placement="left" title="Info-bulle à gauche">Info-bulle à gauche</button>
    <button type="button" class="btn btn-secondary mb-1" data-toggle="tooltip" data-html="true" title="<em>Info-bulle</em> <u>avec</u> <b>de l'HTML</b>">Info-bulle avec de l'HTML</button>
  </div>
</div>

{{% highlight html %}}
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="top" title="Info-bulle en haut">
  Info-bulle en haut
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="right" title="Info-bulle à droite">
  Info-bulle à droite
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="bottom" title="Info-bulle en bas">
  Info-bulle en bas
</button>
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-placement="left" title="Info-bulle à gauche">I
  nfo-bulle à gauche
</button>
{{% /highlight %}}

Avec du code HTML dans le contenu :

{{% highlight html %}}
<button type="button" class="btn btn-secondary" data-toggle="tooltip" data-html="true" title="<em>Info-bulle</em> <u>avec</u> <b>de l'HTML">
  Info-bulle avec de l'HTML
</button>
{{% /highlight %}}

## Utilisation

Le composant info-bulles génère le contenu et code HTML à la demande, et place par défaut celui-ci juste après l'élément qui l'a déclenché.

Pour appeler une info-bulle avec JavaScript :

{{% highlight js %}}
$('#example').tooltip(options)
{{% /highlight %}}

### Code HTML

Le code requis pour une info-bulle consiste en un simple attribut `data` et un `title` renseigné sur l'élément HTML auquel vous voudriez attacher une info-bulle. Le code HTML ainsi généré est plutôt simple, il peut nécessiter une information de position (en haut `top` par défaut).

{{% callout warning %}}
##### Faire fonctionner une info-bulle avec la navigation au clavier et les technologies d'assistance aux utilisateurs

Vous ne devriez ajouter des info-bulles qu'aux éléments HTML qui sont traditionnellement capable d'être _focus_ via le clavier et interactifs (comme par exemple les liens ou contrôles de formulaires). Bien que des éléments HTML arbitraires peuvent être _focus_ avec le clavier (comme un `<span>`) en ajoutant l'attribut `tabindex="0"`, cela peut potentiellement ajouter des césures dans la navigation avec <kbd>TAB</kbd> pouvant s'avérer pénibles ou source de confusion pour des éléments non interactifs.
De plus, la plupart des technologies d'assistance n'annoncent pas, encore actuellement, une info-bulle dans cette situation.

Enfin, ne vous fiez pas uniquement à `hover` pour déclencher votre info-bulle, cela la rendrait impossible à déclencher pour la navigation au clavier.
{{% /callout %}}

{{% highlight html %}}
<!-- HTML to write -->
<a href="#" data-toggle="tooltip" title="Some tooltip text!">Hover over me</a>

<!-- Generated markup by the plugin -->
<div class="tooltip bs-tooltip-top" role="tooltip">
  <div class="arrow"></div>
  <div class="tooltip-inner">
    Some tooltip text!
  </div>
</div>
{{% /highlight %}}

### Éléments inactifs

Les éléments avec l'attribut `disabled` ne sont pas interactifs, ce qui signifie que les utilisateurs ne peuvent pas survoler, obtenir le focus, ou cliquer sur ceux-ci pour déclencher une info-bulle ou bulle contextuelle. Pour contourner ce problème, vous pourriez vouloir déclencher l'info-bulle depuis une encapsulation par une balise `<div>` ou `<span>`, idéalement lui permettre d'obtenir le focus au clavier avec `tabindex="0"`, et passer outre `pointer-events` sur l'élément inactif.

<div class="tooltip-demo">
{{% example html %}}
<span class="d-inline-block" tabindex="0" data-toggle="tooltip" title="Disabled tooltip">
  <button class="btn btn-primary" style="pointer-events: none;" type="button" disabled>Disabled button</button>
</span>
{{% /example %}}
</div>

### Options

Les options peuvent être passées par des attributs `data-` ou en JavaScript. Pour les attributs, ajoutez simplement le nom de l'option à l'attribut `data-`, comme par exemple `data-animation=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 100px;">Name</th>
      <th scope="col" style="width: 100px;">Type</th>
      <th scope="col" style="width: 50px;">Default</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>animation</td>
      <td>boolean</td>
      <td>true</td>
      <td>Applique une transition de fondu à l'info-bulle</td>
    </tr>
    <tr>
      <td>container</td>
      <td>string | element | false</td>
      <td>false</td>
      <td>
        <p>Lie l'info-bulle à un élément spécifique. Par exemple : <code>container: 'body'</code>. Cette option est particulièrement pratique dans le sens où elle vous permet de positionner l'info-bulle dans le flux du document, proche de l'élément déclencheur — ce qui empêche celle-ci d'apparaître ailleurs ou loin de son origine désirée, notamment lors d'un redimmensionnement de fenêtre.</p>
      </td>
    </tr>
    <tr>
      <td>delay</td>
      <td>number | object</td>
      <td>0</td>
      <td>
        <p>Délai pour afficher/masquer l'info-bulle en ms — ne s'applique pas au déclenchement manuel.</p>
        <p>Si un chiffre est renseigné, le délai s'applique simultanément à l'apparition et la disparaition.</p>
        <p>La structure de l'objet est : <code>delay: { "show": 500, "hide": 100 }</code></p>
      </td>
    </tr>
    <tr>
      <td>html</td>
      <td>boolean</td>
      <td>false</td>
      <td>
        <p>Autoriser du code HTML dans l'info-bulle.</p>
        <p>Si `true`, le contenu HTML présent dans <code>title</code> sera interprété en HTML dans l'info-bulle. Si `false`, la méthode _jQuery_ <code>text</code> sera utilisée pour insérer du contenu dans le DOM.</p>
        <p>Utilisez <code>text</code> si vous craignez les attaques XSS.</p>
      </td>
    </tr>
    <tr>
      <td>placement</td>
      <td>string | function</td>
      <td>'top'</td>
      <td>
        <p>Comment positionner l'info-bulle : auto | top | bottom | left | right.<br>Si <code>auto</code> est spécifié, l'info-bulle sera dynamiquement orientée.</p>
        <p>Si une fonction est utilisée pour déterminer le positionnement, elle sera appelée par le nœud DOM de l'info-bulle comme premier argument, et l'élément déclencheur comme second argument. Le contexte <code>this</code> contiendra l'instance de l'info-bulle.</p>
      </td>
    </tr>
    <tr>
      <td>selector</td>
      <td>string | false</td>
      <td>false</td>
      <td>Si un sélecteur est fournir, l'objet de l'info-bulle sera délégué à une cible spécifiée. En pratique, cela est utilisé pour permettre l'ajout de bulles contextuelles à du contenu HTML dynamique. Consultez <a href="https://github.com/twbs/bootstrap/issues/4215">ceci</a> et <a href="https://jsbin.com/zopod/1/edit">cet exemple informatif</a>.</td>
    </tr>
    <tr>
      <td>template</td>
      <td>string</td>
      <td><code>'&lt;div class="tooltip" role="tooltip"&gt;&lt;div class="arrow"&gt;&lt;/div&gt;&lt;div class="tooltip-inner"&gt;&lt;/div&gt;&lt;/div&gt;'</code></td>
      <td>

        <p>Code HTML de référence à utiliser quand vous créez une info-bulle.</p>
        <p>Le titre de l'info-bulle <code>title</code> sera injecté dans <code>.tooltip-inner</code>.</p>
        <p><code>.arrow</code> deviendra la flèche de l'info-bulle.</p>
        <p>L'élément le plus extérieur de l'info-bulle doit avoir la classe <code>.tooltip</code> et l'attribut <code>role="tooltip"</code>.</p>
      </td>
    </tr>
    <tr>
      <td>title</td>
      <td>string | element | function</td>
      <td>''</td>
      <td>
        <p>Valeur de titre par défaut si l'attribut <code>title</code> n'est pas présent.</p>
        <p>Si une fonction est donnée, elle sera appelée avec <code>this</code> comme référence définie pour l'élement auquel l'info-bulle est attachée..</p>
      </td>
    </tr>
    <tr>
      <td>trigger</td>
      <td>string</td>
      <td>'hover focus'</td>
      <td>
        <td>Manières de déclencher l'info-bulle :click | hover | focus | manual. Il est possible d'en choisir plusieurs, séparés par un espace.</td>
        <p><code>'manual'</code> indique que l'info-bulle sera déclenchée de manière programmatique via les méthodes <code>.tooltip('show')</code>, <code>.tooltip('hide')</code> et <code>.tooltip('toggle')</code> ; cette valeur ne peut être combinée avec une autre.</p>
        <p><code>'hover'</code> sur une info-bulle la rendra non déclénchable au clavier et ne devrait être utilisée que si d'autres méthodes peuvent fournir la même information en navigation au clavier.</p>
      </td>
    </tr>
    <tr>
      <td>offset</td>
      <td>number | string</td>
      <td>0</td>
      <td>Décalage de l'info-bulle relative à sa cible. Pour plus d'informations, veuillez vous référer à <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">la documentation de popper.js sur le décalage</a>.</td>
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
      <td>Zone de contrainte de dépassement des info-bulles. Accepte les valeurs <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, ou une référence HTMLElement (JavaScript seulement). Pour plus d'informations, veuillez vous référer à <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">la documentation de popper.js sur ce point</a>.</td>
    </tr>
  </tbody>
</table>

{{% callout info %}}
#### Attributs `data-` pour les info-bulles individuelles

Les options pour les info-bulles individuelles peuvent alternativement être spécifiées via des attributs `data-` comme expliqué plus haut.
{{% /callout %}}

### Methodes

{{% callout danger %}}
{{% partial "callout-danger-async-methods.md" %}}
{{% /callout %}}

#### `$().tooltip(options)`

Initialise les info-bulles pour une collection d'éléments.

#### `.tooltip('show')`


Affiche une info-bulle. **Le retour à la fonction appelante se fait avant que l'info-bulle ne soit visible** (par exemple, avant que l'évènement `shown.bs.tooltip` soit déclenché). Cela est considéré comme un déclenchement manuel — si le titre `title` est vide, l'info-bulle n'est jamais affichée.

{{% highlight js %}}$('#element').tooltip('show'){{% /highlight %}}

#### `.tooltip('hide')`

Masque une info-bulle. **Le retour à la fonction appelante se fait avant que l'info-bulle ne soit masquée** (par exemple, avant que l'évènement `hidden.bs.tooltip` soit déclenché). Cela est considéré comme un déclenchement manuel.

{{% highlight js %}}$('#element').tooltip('hide'){{% /highlight %}}

#### `.tooltip('toggle')`

Alterne la visibilité d'une info-bulle. **Le retour à la fonction appelante se fait avant que l'info-bulle soit visible ou masquée** (par exemple, avant que l'évènement `shown.bs.tooltip` ou `hidden.bs.tooltip` soient déclenchés). Cela est considéré comme un déclenchement manuel.

{{% highlight js %}}$('#element').tooltip('toggle'){{% /highlight %}}

#### `.tooltip('dispose')`

Masque et détruit le composant info-bulle. Ceux qui utilisent une délégation (créés avec [l'option `selector`](#options)) ne peuvent pas être individuellement détruit sur les éléments déclenchant descendant.

{{% highlight js %}}$('#element').tooltip('dispose'){{% /highlight %}}

#### `.tooltip('enable')`

Donne à une info-bulle la capacité d'être affichée. **Les info-bulles sont activées par défaut.**

{{% highlight js %}}$('#element').tooltip('enable'){{% /highlight %}}

#### `.tooltip('disable')`

Enlève la capacité à une info-bulle d'être affichée. Il faudra l'activer à nouveau pour pouvoir être déclenchée.

{{% highlight js %}}$('#element').tooltip('disable'){{% /highlight %}}

#### `.tooltip('toggleEnabled')`

Alterne la possibilité d'une info-bulle d'être affichée ou masquée.

{{% highlight js %}}$('#element').tooltip('toggleEnabled'){{% /highlight %}}

#### `.tooltip('update')`

Met à jour la position d'un élément d'info-bulle.

{{% highlight js %}}$('#element').tooltip('update'){{% /highlight %}}

### Évènements

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 150px;">Event Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
  <tr>
      <td>show.bs.tooltip</td>
      <td>Cet évènement se déclenche immédiatement quand la méthode d'instance <code>show</code> a été appelée.</td>
    </tr>
    <tr>
      <td>shown.bs.tooltip</td>
      <td>Cet évènement se déclenche quand l'info-bulle est devenue visible pour l'utilisateur, transitions CSS terminées.</td>
    </tr>
    <tr>
      <td>hide.bs.tooltip</td>
      <td>Cet évènement se déclenche immédiatement quand la méthode d'instance <code>hide</code> a été appelée.</td>
    </tr>
    <tr>
      <td>hidden.bs.tooltip</td>
      <td>Cet évènement se déclenche uand l'info-bulle est devenue masquée pour l'utilisateur, transitions CSS terminées.</td>
    </tr>
    <tr>
      <td>inserted.bs.tooltip</td>
      <td>Cet évènement se déclenche après l'évènement <code>show.bs.tooltip</code>, quand le code HTML de l'info-bulle ait été ajouté au DOM.</td>
    </tr>
  </tbody>
</table>

{{% highlight js %}}
$('#myTooltip').on('hidden.bs.tooltip', function () {
  // Fait quelque chose…
})
{{% /highlight %}}
