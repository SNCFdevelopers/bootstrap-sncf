---
layout: docs
title: Dropdowns
slug: Listes déroulantes
description: Utilisez les listes déroulantes permettant l'affichage d'une liste de liens contextuels avec le plugin Bootstrap.
group: components
toc: true
url: /docs/4.3/components/dropdowns/
---

## Vue d'ensemble

Les menus déroulants sont des superpositions contextuelles permettant d'afficher des listes de liens et plus encore. Ils sont rendus interactifs avec le plugin JavaScript Bootstrap. Ils sont activés au clic, pas au survol (rollover), il s'agit d'une [décision de conception intentionnelle] (http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)

Les listes déroulantes reposent sur une bibliothèque tierce, [Popper.js](https://popper.js.org/), qui fournit un positionnement dynamique et une détection de viewport. Il est déjà livré dans le kit standard Bootstrap SNCF.

Si vous construisez notre code JavaScript à partir des sources, cela [requiert `util.js`]({{< docsref "/getting-started/javascript#util" >}}).

## Accessibilité

Les menus déroulants de Bootstrap, quant à eux, sont conçus pour être génériques et applicables à une variété de situations et de structures de balisage. Par exemple, il est possible de créer des listes déroulantes contenant des entrées et des contrôles de formulaires supplémentaires, tels que des champs de recherche ou des formulaires de connexion.

Cependant, Bootstrap ajoute une prise en charge intégrée pour la plupart des interactions clavier standards sur le menu, telles que la possibilité de se déplacer dans les éléments individuels '.dropdown-item` à l'aide des touches de direction et de fermer le menu à l'aide de la touche <kbd>ESC</kbd>.

## Exemples

Les boutons du menu déroulant sont utilisés lorsque vous souhaitez proposer plusieurs actions dans une zone limitée, ou que d'une action découle plusieurs possibilités.

Intégrez le toggle (bouton ou lien) et le menu déroulant en lui-même dans `.dropdown`, ou un autre élément déclarant `position: relative;`. Les listes déroulantes peuvent être déclenchées à partir d'éléments `<button>` pour mieux répondre à vos besoins potentiels.

### Bouton unique déroulant

Chaque élément bouton `.btn` peut être transformé en une liste déroulante avec quelques modifications de marquage. Voici comment les utiliser avec les éléments `<button>` :

{{% example html %}}
<div class="btn-group dropdown">
  <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownMenuButton1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol1">
    <span>Dropdown button</span>
    <i class="icons-arrow-down"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton1" id="mycontrol1">
    <ul>
      <li class="dropdown-item"><a href="#">Action</a></li>
      <li class="dropdown-item"><a href="#">Another action</a></li>
      <li class="dropdown-item"><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{{% /example %}}

Nous recommandons l'utilisation de `dropdown-menu-right` **seulement**, bien que par défaut les menus déroulants soient alignés à gauche (code CSS conservé pour des raisons de compatibilité), afin de respecter les guidelines SNCF.

{{% callout info%}}{{% partial "callout-where-are-the-colors.md" %}}{{% /callout %}}

### Etat désactivé

{{% example html %}}
<div class="btn-group dropdown">
  <button class="btn btn-primary dropdown-toggle disabled" type="button" id="dropdownMenuButton2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol2">
    <span>Dropdown button</span>
    <i class="icons-arrow-down"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton2" id="mycontrol2">
    <ul>
      <li class="dropdown-item"><a href="#">Action</a></li>
      <li class="dropdown-item"><a href="#">Another action</a></li>
      <li class="dropdown-item"><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{{% /example %}}

## Menu items

Historiquement, le contenu des menu déroulants *devait* être des liens, mais ce n'est plus le cas dans la v4. Maintenant, vous pouvez éventuellement utiliser des éléments `<button>` dans vos listes déroulantes au lieu de simplement `<a>`s.

{{% example html %}}
<div class="btn-group dropdown">
  <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenu2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol3">
    <span>Dropdown</span>
    <i class="icons-arrow-down"></i>
  </button>
  <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenu2" id="mycontrol3">
    <ul>
      <li class="dropdown-item"><a href="#">Action</a></li>
      <li class="dropdown-item"><a href="#">Another action</a></li>
      <li class="dropdown-item"><a href="#">Something else here</a></li>
    </ul>
  </div>
</div>
{{% /example %}}

## En-tête de menus

Ajoutez un en-tête pour étiqueter les différentes sections d'actions dans n'importe quel menu déroulant.

{{% example html %}}
<div class="dropdown-menu">
  <h6 class="dropdown-header">Dropdown header</h6>
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item"><a href="#">Another action</a></li>
  </ul>
</div>
{{% /example %}}

## Séparateurs de menus

Séparez les groupes d'éléments de menu associés avec un séparateur. 
Par exemple, le lien de déconnexion des autres items liés au compte dans un menu déroulant "Mon compte".

{{% example html %}}
<div class="dropdown-menu">
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item"><a href="#">Another action</a></li>
    <li class="dropdown-item"><a href="#">Something else here</a></li>
  </ul>
  <div class="dropdown-divider"></div>
  <ul>
    <li class="dropdown-item"><a href="#">Separated link</a></li>
  </ul>
</div>
{{% /example %}}

## Formulaires en menus déroulants

Placez un formulaire dans un menu déroulant, et utilisez [utilitaires de marges et d'espacements]({{< docsref "/utilities/spacing" >}}) pour lui donner l'espace requis.

{{% example html %}}
<div class="dropdown-menu">
  <form class="px-4 py-3">
    <div class="form-group">
      <label for="exampleDropdownFormEmail1">Email address</label>
      <input type="email" class="form-control" id="exampleDropdownFormEmail1" placeholder="email@example.com" title="email@example.com">
    </div>
    <div class="form-group">
      <label for="exampleDropdownFormPassword1">Password</label>
      <input type="password" class="form-control" id="exampleDropdownFormPassword1" placeholder="Password">
    </div>
    <div class="custom-control custom-checkbox mb-4">
      <input type="checkbox" name="exampleCheckbox1" class="custom-control-input" id="exampleCheckbox1" >
      <label class="custom-control-label" for="exampleCheckbox1">Remember me</label>
    </div>
    <button type="submit" class="btn btn-block btn-primary">Sign in</button>
  </form>
  <a class="btn btn-link dropdown-item d-inline-flex align-items-center text-primary" href="#">Forgotten password ?<i class="ml-1 icons-arrow-next icons-size-x5" aria-hidden="true"></i></a>
</div>
{{% /example %}}

## Éléments activés de menus

Ajoutez `.active` aux éléments du menu déroulant pour les  **qualifier d'actifs**.

{{% example html %}}
<div class="dropdown-menu">
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item active"><a href="#" title="Active link actif">Active action</a></li>
    <li class="dropdown-item"><a href="#">Something else here</a></li>
  </ul>
</div>
{{% /example %}}

## Éléments désactivés de menus

Ajoutez `.disabled` aux éléments du menu déroulant pour les **qualifier d'inactifs**.

{{% example html %}}
<div class="dropdown-menu">
  <ul>
    <li class="dropdown-item"><a href="#">Action</a></li>
    <li class="dropdown-item disabled">Disabled action</li>
    <li class="dropdown-item"><a href="#">Something else here</a></li>
  </ul>
</div>
{{% /example %}}

## Usage

Via data attributes or JavaScript, the dropdown plugin toggles hidden content (dropdown menus) by toggling the `.show` class on the parent list item. The `data-toggle="dropdown"` attribute is relied on for closing dropdown menus at an application level, so it's a good idea to always use it.

{{% callout info %}}
On touch-enabled devices, opening a dropdown adds empty (`$.noop`) `mouseover` handlers to the immediate children of the `<body>` element. This admittedly ugly hack is necessary to work around a [quirk in iOS' event delegation](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), which would otherwise prevent a tap anywhere outside of the dropdown from triggering the code that closes the dropdown. Once the dropdown is closed, these additional empty `mouseover` handlers are removed.
{{% /callout %}}

### Via data attributes

Add `data-toggle="dropdown"` to a button to toggle a dropdown.

{{% highlight html %}}
<div class="dropdown">
  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownDataAttributes">
    Dropdown trigger
  </button>
  <div class="dropdown-menu" aria-labelledby="dLabel" id="dropdownDataAttributes">
    ...
  </div>
</div>
{{% /highlight %}}

### Via JavaScript

Call the dropdowns via JavaScript:

{{% highlight js %}}
$('.dropdown-toggle').dropdown()
{{% /highlight %}}

{{% callout info %}}
##### `data-toggle="dropdown"` still required

Regardless of whether you call your dropdown via JavaScript or instead use the data-api, `data-toggle="dropdown"` is always required to be present on the dropdown's trigger element.
{{% /callout %}}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-offset=""`.

<div class="table-wrapper">
  <div class="table-scroller dragscroll">
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
          <td>offset</td>
          <td>number | string | function</td>
          <td>0</td>
          <td>Offset of the dropdown relative to its target. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">offset docs</a>.</td>
        </tr>
        <tr>
          <td>flip</td>
          <td>boolean</td>
          <td>true</td>
          <td>Allow Dropdown to flip in case of an overlapping on the reference element. For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">flip docs</a>.</td>
        </tr>
        <tr>
          <td>boundary</td>
          <td>string | element</td>
          <td>'scrollParent'</td>
          <td>Overflow constraint boundary of the dropdown menu. Accepts the values of <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, or an HTMLElement reference (JavaScript only). For more information refer to Popper.js's <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">preventOverflow docs</a>.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Note when `boundary` is set to any value other than `'scrollParent'`, the style `position: static` is applied to the `.dropdown` container.

### Methods

| Method | Description |
| --- | --- |
| `$().dropdown('toggle')` | Toggles the dropdown menu of a given navbar or tabbed navigation. |
| `$().dropdown('update')` | Updates the position of an element's dropdown. |
| `$().dropdown('dispose')` | Destroys an element's dropdown. |

### Events

All dropdown events are fired at the `.dropdown-menu`'s parent element and have a `relatedTarget` property, whose value is the toggling anchor element.

| Event | Description |
| --- | --- |
| `show.bs.dropdown` | This event fires immediately when the show instance method is called. |
| `shown.bs.dropdown` | This event is fired when the dropdown has been made visible to the user (will wait for CSS transitions, to complete). |
| `hide.bs.dropdown` | This event is fired immediately when the hide instance method has been called. |
| `hidden.bs.dropdown`| This event is fired when the dropdown has finished being hidden from the user (will wait for CSS transitions, to complete). |

{{% highlight js %}}
$('#myDropdown').on('show.bs.dropdown', function () {
  // do something…
})
{{% /highlight %}}
