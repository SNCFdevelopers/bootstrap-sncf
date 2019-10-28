---
layout: docs
title: Navigation, onglets
group: layout
toc: true
url: /fr/docs/4.3/layout/navs/
---

Les barres d'en-tête de section sont affichées sous l'en-tête et indiquent l'en-tête de section et, en fonction de l'utilisation, les sous-menus sous forme d'onglets, modes d'affichage, recherche de contexte et autres actions (édition, suppression, filtrage, etc.).

Pour les mobiles, une flèche à gauche de la section ramène le lecteur à la page précédente. Le _fil d'ariane_ pour les tablettes et les ordinateurs de bureau (voir la section [fil d'ariane]({{< docsref "/components/breadcrumb" "" >}})) devrait se placer au-dessus de l'en-tête de la section. Les onglets sont eux placés sous l'en-tête de la section afin que les utilisateurs puissent naviguer dans les sous-sections.

Vous pouvez également ajouter un ensemble d'étapes lorsque l'utilisateur doit exécuter une série de tâches sur plusieurs pages (pour indiquer la progression de chaque étape, voir [les indicateurs d'étapes]({{< docsref "/components/progress" "#steps-indicator" >}})).

## Barre d'action simple

{{% example html %}}
<div class="actionbar">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre page</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-pencil icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-list icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icons-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
</div>
{{% /example %}}

## Onglets

{{% example html %}}
<div class="actionbar">
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active" title="Titre onglet actif">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
{{% /example %}}

## Barre d'action avec onglets

{{% example html %}}
<div class="actionbar has-tabs">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre page</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-pencil icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item toolbar-item-spacing">
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol-actionbar1">
            <span>Primary</span>
            <i class="icons-arrow-down"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" id="mycontrol-actionbar1">
            <ul>
              <li class="dropdown-item"><a href="#">Action</a></li>
              <li class="dropdown-item"><a href="#">Another action</a></li>
              <li class="dropdown-item"><a href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-list icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Filters</span>
          <i class="icons-filters icons-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active" title="Titre onglet actif">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
{{% /example %}}

## Section de titre

{{% example html %}}
<div class="actionbar">
  <div class="actionbar-head">
    <h1 class="mb-0"><a href="#"><i class="icons-arrow-prev icons-size-x75 mr-2"></i>Section de titre</a></h1>
  </div>
</div>
{{% /example %}}

## Fil d'ariane

{{% example html %}}
<div class="actionbar">
  <div class="actionbar-head">
    <nav role="navigation" aria-label="Vous êtes : ">
      <ol class="breadcrumb breadcrumb-lg mb-0 p-0">
        <li class="breadcrumb-item"><a href="#">Accueil</a></li>
        <li class="breadcrumb-item active" aria-current="page">Contenu</li>
      </ol>
    </nav>
  </div>
</div>
{{% /example %}}

## Titre de section avec indicateur d'étapes

{{% example html %}}
<div class="actionbar has-tabs">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre section</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edition</span>
          <i class="icons-pencil icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item toolbar-item-spacing">
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol-actionbar2">
            <span>Primary</span>
            <i class="icons-arrow-down"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" id="mycontrol-actionbar2">
            <ul>
              <li class="dropdown-item"><a href="#">Action</a></li>
              <li class="dropdown-item"><a href="#">Une autre action</a></li>
              <li class="dropdown-item"><a href="#">Encore une autre action</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Liste</span>
          <i class="icons-list icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Recherche</span>
          <i class="icons-search icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Filtres</span>
          <i class="icons-filters icons-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
  <nav role="navigation" aria-label="Étapes" class="d-none d-md-flex">
    <ol class="breadcrumb mt-2 mb-0">
      <li class="breadcrumb-item"><a href="#">Étape 1</a></li>
      <li class="breadcrumb-item active" aria-current="step">Étape 2</li>
      <li class="breadcrumb-item disabled"><a href="#">Étape 3</a></li>
      <li class="breadcrumb-item disabled"><a href="#">Étape 4</a></li>
    </ol>
  </nav>
</div>
{{% /example %}}

## Section de titre avec champ de recherche

{{% example html %}}
<div class="actionbar">
  <div class="actionbar-head d-none d-md-flex">
    <h1 class="mb-0">Section de titre</h1>
    <div class="d-flex align-items-center">
      <label for="rechercheveille" class="font-weight-medium text-nowrap pr-3 mb-0">Sélectionner un plan de veille</label>
      <div class="input-group align-items-center">
        <div class="form-control-container" data-component="control" data-clear-option="true">
          <input id="rechercheveille" type="search" class="form-control clear-option" data-role="input" data-placeholder="Rechercher" />
          <span class="form-control-state"></span>
          <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
            <span class="sr-only">Clear text</span>
            <i class="icons-close"></i>
          </button>
        </div>
        <div class="input-group-append input-group-last">
          <button type="button" class="btn btn-primary btn-only-icon">
            <span class="sr-only">Rechercher un plan</span>
            <i class="icons-search"></i>
          </button>
        </div>
        <button type="button" class="btn btn-only-icon btn-white d-block d-md-none" data-role="close">
          <span class="sr-only">Fermer la recherche</span>
          <i class="icons-close icons-size-1x25"></i>
        </button>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

## Menu contextuel

{{% callout info %}}
Le menu contextuel utilise le composant menu déroulant [présenté ici]({{< docsref "/components/dropdowns" >}}).
{{% /callout %}}

{{% example html %}}
<div class="btn-group dropdown">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol-contextmenu">
    <span class="sr-only">Nom du menu</span>
    <i class="pl-1 icons-options icons-size-1x75"></i>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="mycontrol-contextmenu">
    <ul>
      <li class="dropdown-item"><a href="#">Modifier la liste</a></li>
      <li class="dropdown-item"><a href="#">Dupliquer la liste</a></li>
      <li class="dropdown-item"><a href="#">Supprimer la liste</a></li>
    </ul>
  </div>
</div>
{{% /example %}}

### Avec icones

{{% example html %}}
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="mycontrol-icons">
    <ul>
      <li class="dropdown-item"><a href="#"><i class="icons-pencil mr-3 icons-size-x75"></i> Modifier la liste</a></li>
      <li class="dropdown-item"><a href="#"><i class="icons-add mr-3 icons-size-x75"></i> Dupliquer la liste</a></li>
      <li class="dropdown-item"><a href="#"><i class="icons-close mr-3 icons-size-x75"></i> Supprimer la liste</a></li>
    </ul>
  </div>
{{% /example %}}

## Modes d'afficage

### Par défaut

{{% example html %}}
<i class="icons-list"></i>
{{% /example %}}

### Au clic/tapotage

{{% example html %}}
<i class="icons-mosaic"></i>
{{% /example %}}

## Pagination

Consultez le [sujet dédié]({{< docsref "/components/pagination" >}}) à ce composant.

## Comportement des onglets avec javascript

Les interfaces dynamiques d'onglets, comme décrites dans le document [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), nécessite `role="tablist"`, `role="tab"`, `role="tabpanel"`, et un attribut additionnel `aria-` de façon à correctement transmettre leur structure, leurs fonctionnalités et leur état courant aux utilisateurs de technologies d'assistance (comme les lecteurs d'écrans).

Veuillez noter que les interfaces dynamiques d'onglets **ne proposent pas de menus déroulants** car cela cause des problèmes d'accessibilité et d'usabilité. D'un point de vue usuel, le fait que l'élément déclencheur de l'onglet actuellement affiché ne soit pas immédiatement visible (comme il se trouve dans le menu déroulant fermé) peut être source de confusion. Du point de vue de l'accessibilité, il n'existe actuellement aucun moyen judicieux de _mapper_ ce type de construction sur un modèle WAI ARIA standard, ce qui signifie qu'il est difficile de le rendre compréhensible pour les utilisateurs de technologies d'assistance.

{{% callout warning %}}
### Accessibilité
Ce composant ne permet pas de naviguer avec les flèches du clavier, vous devez utiliser <kbd>TAB</kbd> ou <kbd>SHIFT</kbd> + <kbd>TAB</kbd>, puis <kbd>ENTER</kbd> pour sélectionner un onglet.
{{% /callout %}}

<div class="bd-example">
<div class="actionbar">
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav nav navtabs mb-0 dragscroll" role="tablist" id="listeTitreOnglets">
      <li class="navtabs-item pr-4">
        <a href="#onglet1" class="active" id="titreonglet1" data-toggle="tab" role="tab" aria-controls="onglet1" aria-selected="true">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet2" id="titreonglet2" data-toggle="tab" role="tab" aria-controls="onglet2" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet3" id="titreonglet3" data-toggle="tab" role="tab" aria-controls="onglet3" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet4" id="titreonglet4" data-toggle="tab" role="tab" aria-controls="onglet4" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet5" id="titreonglet5" data-toggle="tab" role="tab" aria-controls="onglet5" aria-selected="false">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
<div class="tab-content mt-5" id="myTabContent">
  <div class="tab-pane fade show active" id="onglet1" role="tabpanel" aria-labelledby="titreonglet1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor diam, blandit non tincidunt non, dignissim vitae lorem. Ut bibendum laoreet ligula ultrices maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a tortor et sem volutpat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sagittis id urna ut blandit. In finibus vel elit quis rhoncus. Aliquam non auctor quam. Etiam semper in nisi at mollis. Suspendisse potenti. Maecenas sollicitudin, lectus eu fringilla facilisis, justo erat rutrum justo, et vehicula dui nibh quis magna. Praesent sed dui id ante suscipit cursus. Proin congue vel risus id consectetur. Quisque id placerat odio.
  </div>
  <div class="tab-pane fade" id="onglet2" role="tabpanel" aria-labelledby="titreonglet2">
     Sed blandit tempor neque vel blandit. Vestibulum dapibus iaculis diam, ut egestas nisl rutrum et. Cras sed metus in justo vestibulum dignissim. Etiam nunc odio, congue consectetur metus vel, pellentesque laoreet ex. In non odio suscipit, blandit purus sed, dictum urna. Aenean iaculis laoreet purus, sagittis commodo nunc mattis a. Nulla mollis nunc sed ultricies tempor. Donec in enim non tortor pellentesque ullamcorper. Fusce mollis cursus turpis, vitae hendrerit libero tincidunt sed. Praesent eget elit imperdiet, cursus quam id, bibendum neque. In posuere sem arcu, vel egestas quam ultricies non.
  </div>
  <div class="tab-pane fade" id="onglet3" role="tabpanel" aria-labelledby="titreonglet3">
     Sed felis eros, finibus eu porttitor convallis, dignissim ut sem. Nulla vulputate mattis dolor, non posuere mauris luctus eu. Nunc quis lorem varius quam condimentum viverra sit amet sit amet nunc. Morbi viverra augue et accumsan maximus. Vivamus eleifend quis dui eu consectetur. Vivamus ut placerat augue. Ut pellentesque feugiat convallis. Vestibulum ullamcorper diam urna, vitae finibus sapien suscipit sed. Pellentesque euismod, elit non rhoncus tempus, purus sem rutrum ex, sit amet vulputate velit augue quis leo.
  </div>
  <div class="tab-pane fade" id="onglet4" role="tabpanel" aria-labelledby="titreonglet4">
     Pellentesque ut ligula sed neque vehicula sollicitudin. Nulla facilisi. Sed dictum nibh non risus laoreet dignissim. Pellentesque pretium scelerisque mauris sit amet finibus. Proin venenatis dui vel dui consequat interdum. Nunc mi sapien, suscipit vel tortor vel, pulvinar blandit tortor. Aenean id pulvinar mauris. Nulla facilisi. Donec ac lacus tincidunt, luctus justo a, hendrerit turpis. Sed dignissim faucibus viverra. Sed ac magna diam. Sed a augue eu diam consequat finibus. Suspendisse pharetra erat diam, quis lacinia dolor venenatis at. Nulla vel porttitor nisi, sit amet volutpat neque. Phasellus feugiat purus orci, sed vehicula justo ultricies sed.
  </div>
  <div class="tab-pane fade" id="onglet5" role="tabpanel" aria-labelledby="titreonglet5">
     Curabitur dapibus ipsum vitae consequat bibendum. Nulla commodo vel turpis sit amet venenatis. Proin faucibus quam massa, tristique vulputate massa porttitor a. Suspendisse gravida libero vel lacus tristique, tristique lacinia ligula iaculis. Etiam cursus odio vel pellentesque dictum. Vivamus in velit gravida purus fermentum tincidunt et a ligula. Pellentesque est metus, faucibus at eros eget, tempus varius massa. Nulla facilisi. Nulla ut dolor eu justo consequat suscipit ac sed arcu. In sed euismod enim, id dignissim neque. Aliquam malesuada fringilla nunc id varius. Phasellus ultricies placerat nulla eget sagittis. Ut felis libero, fringilla id elit non, ullamcorper cursus neque. Suspendisse quis leo eu sapien malesuada tincidunt. Suspendisse porta rhoncus ipsum id vestibulum.
  </div>
</div>
</div>

{{% highlight html %}}
<div class="actionbar">
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav nav navtabs mb-0 dragscroll" role="tablist" id="listeTitreOnglets">
      <li class="navtabs-item pr-4">
        <a href="#onglet1" class="active" id="titreonglet1" data-toggle="tab" role="tab" aria-controls="onglet1" aria-selected="true">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet2" id="titreonglet2" data-toggle="tab" role="tab" aria-controls="onglet2" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet3" id="titreonglet3" data-toggle="tab" role="tab" aria-controls="onglet3" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet4" id="titreonglet4" data-toggle="tab" role="tab" aria-controls="onglet4" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet5" id="titreonglet5" data-toggle="tab" role="tab" aria-controls="onglet5" aria-selected="false">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="onglet1" role="tabpanel" aria-labelledby="titreonglet1">...</div>
  <div class="tab-pane fade" id="onglet2" role="tabpanel" aria-labelledby="titreonglet2">...</div>
  <div class="tab-pane fade" id="onglet3" role="tabpanel" aria-labelledby="titreonglet3">...</div>
  <div class="tab-pane fade" id="onglet4" role="tabpanel" aria-labelledby="titreonglet4">...</div>
  <div class="tab-pane fade" id="onglet5" role="tabpanel" aria-labelledby="titreonglet5">...</div>
</div>
{{% /highlight %}}

### En JavaScript

Activer les onglets via JavaScript (chaque onglet doit être activé individuellement) :

{{% highlight js %}}
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{{% /highlight %}}

Vous pouvez activer des onglets individuels de plusieurs manières:

{{% highlight js %}}
$('#myTab a[href="#profile"]').tab('show') // Sélectionner l'onglet par son nom
$('#myTab li:first-child a').tab('show') // Sélectionner le premier onglet
$('#myTab li:last-child a').tab('show') // Sélectionner le dernier onglet
$('#myTab li:nth-child(3) a').tab('show') // Sélectionner le troisième onglet
{{% /highlight %}}

### Effet de fondu

Pour rendre un effet de fondu sur les onglets, ajoutez `.fade` à chaque `.tab-pane`. Le premier volet d'onglet doit également contenir `.show` pour rendre le contenu initial visible.

{{% highlight html %}}
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="accueil">...</div>
  <div class="tab-pane fade" id="profil" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane fade" id="parametres" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>
{{% /highlight %}}

### Methodes

{{% callout danger %}}
{{% partial "callout-danger-async-methods.fr.md" %}}
{{% /callout %}}

#### $().tab

Active un onglet et un conteneur de contenu. L'onglet devrait avoir un `data-target` ou un` href` ciblant un nœud de conteneur dans le DOM.

{{% highlight html %}}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="accueil-tab" data-toggle="tab" href="#home" role="tab" aria-controls="accueil" aria-selected="true">Accueil</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profil-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profil</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="parametres-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="parametres" aria-selected="false">Paramètres</a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="accueil" role="tabpanel" aria-labelledby="accueil-tab">...</div>
  <div class="tab-pane" id="profil" role="tabpanel" aria-labelledby="profil-tab">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane" id="parametres" role="tabpanel" aria-labelledby="parametres-tab">...</div>
</div>

<script>
  $(function () {
    $('#myTab li:last-child a').tab('show')
  })
</script>
{{% /highlight %}}

#### .tab('show')

Sélectionne l'onglet donné et affiche le volet associé. Tout autre onglet précédemment sélectionné devient désélectionné et son volet associé est masqué. **Le retour de la fonction se fait avant que le volet d'onglet ne soit réellement affiché** (c'est-à-dire avant l'événement `shown.bs.tab`).

{{% highlight js %}}
$('#someTab').tab('show')
{{% /highlight %}}

#### .tab('dispose')

Détruit un composant d'onglets.

### Évènements

Lorsqu'on change d'onglet, cet évènement se déclenche dans l'ordre suivant :

1. `hide.bs.tab` (sur l'onglet actif)
2. `show.bs.tab` (sur l'onglet à afficher)
3. `hidden.bs.tab` (sur l'onglet précédemment actif, celui concerné par l'évènement `hide.bs.tab`)
4. `shown.bs.tab` (sur l'onglet nouvellement actif, celui concerné par l'évènement `show.bs.tab`)

Si aucun onglet n'était déjà actif, alors les évènements `hide.bs.tab` et `hidden.bs.tab` ne seront pas déclenchés.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 150px;">Type d'évènement</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.tab</td>
      <td>Cet évènement se déclenche à la visualisation d'un onglet, mais avant qu'il soit visible. Utilisez <code>event.target</code> et <code>event.relatedTarget</code> pour cibler respectivement l'onglet actif et l'onglet précédemment actif (si disponible).</td>
    </tr>
    <tr>
      <td>shown.bs.tab</td>
      <td>Cet évènement se déclenche à la visualisation d'un onglet, une fois qu'il ait été rendu visible. Utilisez <code>event.target</code> et <code>event.relatedTarget</code> pour cibler respectivement l'onglet actif et l'onglet précédemment actif (si disponible).</td>
    </tr>
    <tr>
      <td>hide.bs.tab</td>
      <td>Cet évènement se déclenche à la visualisation d'un nouvel onglet et qu'un onglet précédemment actif va être masqué. Utilisez <code>event.target</code> et <code>event.relatedTarget</code> pour cibler respectivement l'onglet actif et l'onglet qui sera bientôt actif.</td>
    </tr>
    <tr>
      <td>hidden.bs.tab</td>
      <td>Cet évènement se déclenche après qu'un nouvel onglet ait été rendu visible, et qu'un onglet précédemment actif soit masqué. Utilisez <code>event.target</code> et <code>event.relatedTarget</code> pour cibler respectivement l'onglet précédemment actif et l'onglet nouvellement actif.</td>
    </tr>
  </tbody>
</table>

{{% highlight js %}}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // Onglet nouvellement actif
  e.relatedTarget // Onglet précdemment actif
})
{{% /highlight %}}
