---
layout: docs
title: Listes déroulantes
description: Exemples et guide d'utilisation des listes déroulantes (select)
group: components
toc: true
---

## Composant Select natif & standard

Bien qu'il ne reflète pas exactement le design prévu par SNCF, il nous a semblé pertinent de proposer une version arrangée _au mieux_ du composant Select, sans dépendances fonctionnelles ou javascript.

{{% example html %}}
<label for="select0">Example select</label>
<select id="select0">
  <option selected data-role="default-hidden-option" disabled hidden>Lorem ipsum</option>
  <option data-id="1" >Sem Inceptos Tellus</option>
  <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
  <option data-id="3" >Amet Porta</option>
  <option data-id="4" >Pharetra Fusce Venenatis</option>
</select>
{{% /example %}}

Pour la plupart des usages normaux, cette version pourra vous sauver la vie en vous évitant d'implémenter tout le markup nécessaire à la version plus ambitieuse et plus complète de ce composant.

Vous voulez plus de fonctionnalités et de paillettes ? Continuez alors ci-dessous.

## Utilisation par défaut

Les listes déroulantes permettent aux lecteurs de choisir une ou plusieurs options dans une liste d'éléments pré-définis, utilisant la sélection individuelle ou multiple. Nous recommandons de remplacer les boutons radios (sélection simple) ou cases à cocher (sélections multiples) avec des listes déroulantes lorsqu'il y a beaucoup d'éléments dans lesquels choisir.
Ces éléments doivent apparaître dans un ordre logique pour le lecteur (par exemple, alphabétique, numérique, etc.).

Les listes déroulantes personnalisées `<select>` nécessitent des classes et attributs également personnalisés, `.select-improved` pour déclencher les styles personnalisés et `data-component="select-exclusive"` pour déclencher le code JavaScript personnalisé.
Étant donnée la complexité entre les différentes versions d'une liste (simple, groupée, entrée, etc.), celle-ci doit être construite dans le code HTML.

{{% example html %}}
<label for="select1">Liste déroulante d'exemple</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <p class="form-control is-placeholder  d-flex align-items-center" data-role="placeholder" data-selected-prefix="Sélection actuelle">Lorem ipsum</p>
      <select class="sr-only" id="select1" data-role="input" tabindex="-1" aria-hidden="true">
        <option selected data-role="default-hidden-option" disabled hidden>Lorem ipsum</option>
        <option data-id="1" >Sem Inceptos Tellus</option>
        <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
        <option data-id="3" >Amet Porta</option>
        <option data-id="4" >Pharetra Fusce Venenatis</option>

      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon " data-role="btn" type="button" aria-expanded="false" aria-controls="selecttoggle">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
          <span class="sr-only">Sélectionner</span>
        </button>
      </div>
    </div>
    <div class="select-menu" id="-selecttoggle">
      <div class="d-flex flex-column">
        <div class="flex-fluid overflow-y" role="list" data-role="menu">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>

        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

### Liste déroulante avec champ d'entrée supplémentaire

Il est possible d’offrir aux utilisateurs la possibilité d’ajouter un nouvel élément à la liste, mais nous suggérons de l’utiliser avec parcimonie, car cela risquerait d’allonger la liste avec des entrées similaires, voire doubles.

{{< example html >}}
<label for="select2">Entrée additionnelle</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <p class="form-control is-placeholder  d-flex align-items-center" data-role="placeholder" data-selected-prefix="Sélection actuelle">Lorem ipsum</p>
      <select class="sr-only" id="select2" data-role="input" tabindex="-1" aria-hidden="true">
        <option selected data-role="default-hidden-option" disabled hidden>Lorem ipsum</option>
        <option data-id="1" >Sem Inceptos Tellus</option>
        <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
        <option data-id="3" >Amet Porta</option>
        <option data-id="4" >Pharetra Fusce Venenatis</option>

      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon " data-role="btn" type="button" aria-expanded="false" aria-controls="selecttoggle">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
          <span class="sr-only">Sélectionner</span>
        </button>
      </div>
    </div>
    <div class="select-menu" id="-selecttoggle">
      <div class="d-flex flex-column">
        <div class="flex-fluid overflow-y" role="list" data-role="menu">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>

        </div>
      <div class="d-flex pt-4 flex-column flex-sm-row" data-role="add">
        <div class="form-control-container w-100">
          <label for="addagent" class="sr-only">Saisir le nom d’un agent à ajouter</label>
          <input id="addagent" type="text" class="form-control form-control-sm" data-role="add-input" placeholder="Ajouter un agent" value="John Doe">
          <span class="form-control-state"></span>
        </div>
        <div class="pt-2 pt-sm-0 pl-sm-2">
          <button type="button" class="btn btn-primary btn-sm btn-block d-sm-inline-block" data-role="add-btn" title="Ajouter cet agent">Ajouter</button>
        </div>
      </div>

      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Liste déroulante avec champ de recherche

Lorsqu'une liste est très longue et que le défilement de toutes les options devient difficile, une barre de recherche peut être ajoutée pour permettre aux utilisateurs de rechercher un élément spécifique ou d'éliminer certaines options.

{{% example html %}}
<label for="select3">Recherche</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control is-placeholder  d-flex align-items-center" data-role="placeholder">Lorem ipsum</div>
      <select class="sr-only" id="select3" data-role="input" tabindex="-1" aria-hidden="true">
        <option selected disabled hidden>Lorem ipsum</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon " data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <div class="d-flex flex-column flex-sm-row" data-role="add">
        <div class="form-control-container w-100 has-left-icon">
          <input type="" class="form-control form-control-sm" id="inputIcon3" placeholder="Exemple d'auto-remplissage" >
          <span class="form-control-state"></span>
          <span class="form-control-icon"><i class="icons-search" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

### Liste déroulante avec champ d'entrée supplémentaire et champ de recherche

{{% example html %}}
<label for="select4">Recherche</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control is-placeholder  d-flex align-items-center" data-role="placeholder">Lorem ipsum</div>
      <select class="sr-only" id="select4" data-role="input" tabindex="-1" aria-hidden="true">
        <option selected disabled hidden>Lorem ipsum</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon " data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <div class="d-flex flex-column flex-sm-row mb-2" data-role="add">
        <div class="form-control-container w-100 has-left-icon">
          <input type="" class="form-control" id="inputIcon4" placeholder="Exemple d'auto-remplissage" >
          <span class="form-control-state"></span>
          <span class="form-control-icon"><i class="icons-search" aria-hidden="true"></i></span>
        </div>
      </div>
      <div class="d-flex flex-column flex-sm-row" data-role="add">
        <div class="form-control-container w-100 has-left-icon">
          <button type="button" class="btn btn-primary btn-block">Ajouter un nouvel agent</button>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

### Liste déroulante avec valeur sélectionnée par défaut

{{% example html %}}
<label for="select5">Option sélectionnée par défaut</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <p class="form-control is-placeholder  d-flex align-items-center" data-role="placeholder" data-selected-prefix="Sélection actuelle">Lorem ipsum</p>
      <select class="sr-only" id="select5" data-role="input" tabindex="-1" aria-hidden="true">
        <option data-role="default-hidden-option" disabled hidden>Lorem ipsum</option>
        <option data-id="1">Sem Inceptos Tellus</option>
        <option data-id="2" selected>Sollicitudin Adipiscing Mattis</option>
        <option data-id="3">Amet Porta</option>
        <option data-id="4">Pharetra Fusce Venenatis</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon " data-role="btn" type="button" aria-expanded="false" aria-controls="selecttoggle">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
          <span class="sr-only">Sélectionner</span>
        </button>
      </div>
    </div>
    <div class="select-menu" id="-selecttoggle">
      <div class="d-flex flex-column">
        <div class="flex-fluid overflow-y" role="list" data-role="menu">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

## Par groupe

Lorsque la liste contient des éléments très différents, il peut s'avérer être une bonne idée de les ranger par catégories par exemple.

{{% example html %}}
<label for="exampleFormControlSelect1">Liste déroulante avec groupes</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder" data-selected-prefix="Sélection actuelle">
        Sélectionner un secteur
      </div>
      <select class="sr-only" id="exampleFormControlSelect1" data-role="input" tabindex="-1" aria-hidden="true">
        <option data-id="0">Sem Inceptos Tellus</option>
        <option data-id="1">Sem Inceptos Tellus</option>
        <option data-id="2">Sollicitudin Adipiscing Mattis</option>
        <option data-id="3">Amet Porta</option>
        <option data-id="4">Pharetra Fusce Venenatis</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button" aria-expanded="false" aria-controls="selectgrouptoggle">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" role="list" data-role="menu" id="selectgrouptoggle">
      <div role="listitem" class="select-group">
        <div class="select-group-head">
          <span class="select-group-title text-uppercase">Unité 1</span>
        </div>
        <div class="select-group-content" role="list">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="0">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
        </div>
      </div>
      <div role="listitem" class="select-group">
        <div class="select-group-head">
          <span class="select-group-title text-uppercase">Unité 2</span>
        </div>
        <div class="select-group-content" role="list">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

Une version avec les groupes repliés pour exemple également.

{{% example html %}}
<label for="exampleFormControlSelect2">Liste déroulante avec groupes repliés</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder" data-selected-prefix="Sélection actuelle">
        Sélectionner un secteur
      </div>
      <select class="sr-only" id="exampleFormControlSelect2" data-role="input" tabindex="-1" aria-hidden="true">
        <option data-id="0">Sem Inceptos Tellus</option>
        <option data-id="1">Sem Inceptos Tellus</option>
        <option data-id="2">Sollicitudin Adipiscing Mattis</option>
        <option data-id="3">Amet Porta</option>
        <option data-id="4">Pharetra Fusce Venenatis</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button" aria-expanded="false" aria-controls="selectgroup2toggle">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div id="selectgroup2toggle" class="select-menu" role="list" data-role="menu">
      <div class="select-group select-group-expand" role="listitem">
        <button class="select-group-head" data-role="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
          <div class="select-group-title text-uppercase">Unité 1</div>
          <div class="select-group-toggle text-primary">
            <span class="select-group-close font-weight-medium mr-2">Fermer</span>
            <span class="select-group-show font-weight-medium mr-2">Ouvrir</span>
            <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
          </div>
        </button>
        <div id="collapseExample" role="list" class="collapse select-group-content">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="0">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
        </div>
      </div>
      <div class="select-group select-group-expand" role="listitem">
        <button class="select-group-head" data-role="collapse" data-target="#collapseExample1" aria-expanded="false" aria-controls="collapseExample1">
          <div class="select-group-title text-uppercase">Unité 2</div>
          <div class="select-group-toggle text-primary">
            <span class="select-group-close font-weight-medium mr-2">Fermer</span>
            <span class="select-group-show font-weight-medium mr-2">Ouvrir</span>
            <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
          </div>
        </button>
        <div id="collapseExample1" role="list" class="collapse select-group-content">
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button type="button" data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

## Multiple

Liste déroulante avec choix multiples.

{{% example html %}}
<label for="exampleFormControlMultiSelect1">Choisissez plusieurs options</label>
<div class="select-improved" data-component="select-multiple">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control">
        <div class="custom-control custom-checkbox">
          <label data-role="placeholder" class="custom-control-label font-weight-medium">Tous les secteurs</label>
        </div>
      </div>
      <select class="sr-only" id="exampleFormControlMultiSelect1" data-role="input" tabindex="-1" aria-hidden="true" multiple>
        <option data-id="0" selected>Sem Inceptos Tellus</option>
        <option data-id="1" selected>Sem Inceptos Tellus</option>
        <option data-id="2" selected>Sollicitudin Adipiscing Mattis</option>
        <option data-id="3" selected>Amet Porta</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button" aria-expanded="false" aria-controls="multiselecttoggle">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div id="multiselecttoggle" class="select-menu" data-role="menu">
      <div class="select-group" data-role="group" data-id="0" role="list">
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button type="button" data-role="value" data-target="0" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Sem Inceptos Tellus</button>
          </div>
        </div>
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button type="button" data-role="value" data-target="1" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Sollicitudin Adipiscing Mattis</button>
          </div>
        </div>
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button type="button" data-role="value" data-target="2" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Amet Porta</button>
          </div>
        </div>
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button type="button" data-role="value" data-target="3" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Pharetra Fusce Venenatis</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

### Par groupes

Liste déroulante avec choix multiples, par groupes.

{{% example html %}}
<label for="exampleFormControlMultiSelect3">Choisissez plusieurs options</label>
<div class="select-improved" data-component="select-multiple">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control">
        <div class="custom-control custom-checkbox">
          <label data-role="placeholder" class="custom-control-label font-weight-medium">Tous les secteurs</label>
        </div>
      </div>
      <select class="sr-only" id="exampleFormControlMultiSelect3" data-role="input" tabindex="-1" aria-hidden="true" multiple>
        <option data-id="0" selected>Sem Inceptos Tellus</option>
        <option data-id="1" selected>Sem Inceptos Tellus</option>
        <option data-id="2" selected>Sollicitudin Adipiscing Mattis</option>
        <option data-id="3" selected>Amet Porta</option>
        <option data-id="4" selected>En plus</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button" aria-expanded="false" aria-controls="multiselecttoggle2">
          <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div id="multiselecttoggle2" class="select-menu" data-role="menu" role="list">
      <div class="select-group" data-role="group" data-id="0" role="listitem">
        <div class="select-group-head">
          <div class="custom-control custom-checkbox w-100">
            <button data-role="counter" class="custom-control-label font-weight-medium w-100 text-left text-uppercase">Unité 1</button>
          </div>     
        </div>
        <div class="select-group-content" role="list">
          <div class="select-menu-item" role="listitem">
            <div class="custom-control custom-checkbox">
              <button type="button" data-role="value" data-target="0" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Sem Inceptos Tellus</button>
            </div>
          </div>
          <div class="select-menu-item" role="listitem">
            <div class="custom-control custom-checkbox">
              <button type="button" data-role="value" data-target="1" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Sollicitudin Adipiscing Mattis</button>
            </div>
          </div>
        </div>
      </div>
      <div class="select-group" data-role="group" data-id="1" role="listitem">
        <div class="select-group-head">
          <div class="custom-control custom-checkbox w-100">
            <button type="button" data-role="counter" class="custom-control-label font-weight-medium w-100 text-left text-uppercase">Unité 2</button>
          </div>     
        </div>
        <div class="select-group-content" role="list">
          <div class="select-menu-item" role="listitem">
            <div class="custom-control custom-checkbox">
              <button type="button" data-role="value" data-target="2" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Amet Porta</button>
            </div>
          </div>
          <div class="select-menu-item" role="listitem">
            <div class="custom-control custom-checkbox">
              <button type="button" data-role="value" data-target="3" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">Pharetra Fusce Venenatis</button>
            </div>
          </div>
        </div>
      </div>
      <div class="select-group" data-role="group" data-id="2" role="listitem">
        <div class="select-group-head">
          <div class="custom-control custom-checkbox w-100">
            <button type="button" data-role="counter" class="custom-control-label font-weight-medium w-100 text-left text-uppercase">Unité 3</button>
          </div>     
        </div>
        <div class="select-group-content" role="list">
          <div class="select-menu-item" role="listitem">
            <div class="custom-control custom-checkbox">
              <button type="button" data-role="value" data-target="4" role="checkbox" aria-checked="false" class="custom-control-label w-100 text-left font-weight-medium">En plus</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}
