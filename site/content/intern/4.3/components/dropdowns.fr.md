---
layout: docs
title: Menus déroulants
description: Utilisez les menus déroulants permettant l'affichage d'une liste de liens contextuels avec le plugin Bootstrap.
group: components
toc: true
url: /fr/docs/4.3/components/dropdowns/
---

## Vue d'ensemble

Les menus déroulants sont des superpositions contextuelles permettant d'afficher des listes de liens et plus encore. Ils sont rendus interactifs avec le plugin JavaScript Bootstrap. Ils sont activés au clic, pas au survol (rollover), il s'agit d'une [décision de conception intentionnelle] (http://markdotto.com/2012/02/27/bootstrap-explained-dropdowns/)

Les listes déroulantes reposent sur une bibliothèque tierce, [Popper.js](https://popper.js.org/), qui fournit un positionnement dynamique et une détection de viewport. Il est déjà livré dans le kit standard Bootstrap SNCF.

## Accessibilité

Les menus déroulants de Bootstrap, quant à eux, sont conçus pour être génériques et applicables à une variété de situations et de structures de balisage. Par exemple, il est possible de créer des listes déroulantes contenant des entrées et des contrôles de formulaires supplémentaires, tels que des champs de recherche ou des formulaires de connexion.

Cependant, Bootstrap ajoute une prise en charge intégrée pour la plupart des interactions clavier standards sur le menu, telles que la possibilité de se déplacer dans les éléments individuels `.dropdown-item` à l'aide des touches de direction et de fermer le menu à l'aide de la touche <kbd>ESC</kbd>.

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

## Éléments de menus

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

## Éléments de menus actifs

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

## Éléments de menus inactifs

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

## Utilisation

Grâce aux attributs `data-` ou JavaScript, le menu déroulant alterne la visibilité du contenu (le menu _dropdown_) en basculant la classe `.show` sur les éléments de liste parents.
L'attribut `data-toggle="dropdown"` est lié à la fermeture du menu déroulant au niveau applicatif, donc c'est toujours une bonne idée de toujours l'utiliser.

{{% callout info %}}
Sur des périphériques tactiles, ouvrir un menu déroulant ajoute des gestionnaires vides (`$.noop`) `mouseover` aux enfants immédiats de l'élément  `<body>`. Ce hack, assumé comme affreux (!) est nécessaire pour contourner une [délégation d'évènements sur iOS](https://www.quirksmode.org/blog/archives/2014/02/mouse_event_bub.html), qui empêcherait sinon la possibilité de fermer le menu déroulant en tapotant ailleurs que sur celui-ci. Une fois le menu déroulant fermé, ces gestionnaires vides `mouseover` supplémentaires sont supprimés.
{{% /callout %}}

### Avec les  _data attributes_

Ajouter `data-toggle="dropdown"` à un bouton pour définir un menu déroulant.

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

### Avec JavaScript

Appeler les menus déroulants avec JavaScript:

{{% highlight js %}}
$('.dropdown-toggle').dropdown()
{{% /highlight %}}

{{% callout info %}}
##### `data-toggle="dropdown"` est toujours nécessaire
Peu importe le moyen avec lequel vous déclarez/appelez vos menus déroulants (JavaScript ou via l'api `data-`), `data-toggle="dropdown"` est toujours nécessaire sur l'élément _trigger_.
{{% /callout %}}

### Options

Les options peuvent être définies par des attributs `data-` — pour ces derniers, ajoutez le nom de l'option à `data-`, par exemple : `data-offset=""`.

<div class="table-wrapper">
  <div class="table-scroller dragscroll">
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
          <td>offset</td>
          <td>number | string | function</td>
          <td>0</td>
          <td>Décalage de la liste déroulante par rapport à sa cible. Pour plus d'informations, consultez <a href="https://popper.js.org/popper-documentation.html#modifiers..offset.offset">la documentation de popper.js</a>.</td>
        </tr>
        <tr>
          <td>flip</td>
          <td>boolean</td>
          <td>true</td>
          <td>Autorisez la liste déroulante à basculer en cas de chevauchement sur l'élément de référence. Pour plus d'informations, consultez <a href="https://popper.js.org/popper-documentation.html#modifiers..flip.enabled">la documentation de popper.js sur ce thème</a>.</td>
        </tr>
        <tr>
          <td>boundary</td>
          <td>string | element</td>
          <td>'scrollParent'</td>
          <td>Limite la capacité du menu déroulant à dépasser le cadre. La valeurs acceptées sont <code>'viewport'</code>, <code>'window'</code>, <code>'scrollParent'</code>, ou une référence HTMLElement (seulement JavaScript). Pour plus d'informations, consultez <a href="https://popper.js.org/popper-documentation.html#modifiers..preventOverflow.boundariesElement">la documentation de popper.js sur ce thème</a>.</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>

Notez que lorsque que `boundary` est défini à toute autre valeur que `'scrollParent'`, le style `position: static` est appliqué au container `.dropdown`.

### Méthodes

| Méthode | Description |
| --- | --- |
| `$().dropdown('toggle')` | Alterne l'ouverture du menu déroulant sur une barre de navigation ou d'onglets. |
| `$().dropdown('update')` | Met à jour la position de l'élément d'un menu déroulant. |
| `$().dropdown('dispose')` | Détruit un élément `dropdown`. |

### Évènements

Tous les évènements de menus déroulants sont déclenchés au niveau de l'élément parent de `.dropdown-menu`' et possèdent une propriété `relatedTarget`, dont la valeur est celle de l'élément appelant.

| Évènement | Description |
| --- | --- |
| `show.bs.dropdown` | Cet évènement est déclenché immédiatement quand la méthode d'instance `show` est appelée. |
| `shown.bs.dropdown` | Cet évènement est déclenché quand le menu déroulant a été rendu visible à l'utilisateur, transitions CSS terminées. |
| `hide.bs.dropdown` | Cet évènement est déclenché immédiatement quand la méthode d'instance `hide` est appelée. |
| `hidden.bs.dropdown`| Cet évènement est déclenché quand le menu déroulant a été masqué à l'utilisateur, transitions CSS terminées. |

{{% highlight js %}}
$('#myDropdown').on('show.bs.dropdown', function () {
  // Faire quelque chose…
})
{{% /highlight %}}
