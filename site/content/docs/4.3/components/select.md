---
layout: docs
title: Select
description: Examples and usage guidelines for select.
group: components
toc: true
---

## Standard, native component

While it doesn't precisely reflects SNCF's design, it seems to be pertinent to propose a _best-effort_ native version of select component, without any functional or javascript dependancy.

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

For most of cases, it can save your life, saving you from implement all markup needed by the more ambitious and complete version of this component.

You want more functionnalities ? please keep reading below !

## Default

Drop-down lists let readers choose one or more options in a pre-defined list, using single selection or multiple selection. We recommend replacing radio buttons (single select) and check boxes (multiple select) with drop-down lists when there are many items to choose from. Items must appear in a logical order for readers (e.g., alphabetical or numerical order).

Custom `<select>` menus need a custom class and data attribute, `.select-improved` to trigger the custom styles and `data-component="select-exclusive"` to trigger the custom javascript. Given the complexity and the different versions of the menu (simple, groups, input, etc), this one must be built in the markup.

{{% example html %}}
<label for="select1">Example select</label>
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

### Select menu with additional input

Users can be offered the option of adding a new item to the list, but we suggest this be used sparingly, as it risks making the list longer with similar or even double entries.

{{< example html >}}
<label for="select2">Additional input</label>
<div class="select-improved" data-component="select-exclusive" id="select">
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

### Select with search field

When a list is very long and scrolling through all the options becomes fussy, a search bar can be added to allow users to search for a specific item or eliminate some options.

{{% example html %}}
<label for="select3">Search</label>
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
          <input type="" class="form-control form-control-sm" id="inputIcon3" placeholder="Example for auto-completion" >
          <span class="form-control-state"></span>
          <span class="form-control-icon"><i class="icons-search" aria-hidden="true"></i></span>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

### Select with search field and additional input

{{% example html %}}
<label for="select4">Search</label>
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
          <input type="" class="form-control" id="inputIcon4" placeholder="Example for auto-completion" >
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

### Select with default select value

{{% example html %}}
<label for="select5">Option selected by default</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <p class="form-control is-placeholder  d-flex align-items-center" data-role="placeholder" data-selected-prefix="Sélection actuelle">Lorem ipsum</p>
      <select class="sr-only" id="select5" data-role="input" tabindex="-1" aria-hidden="true">
        <option  data-role="default-hidden-option" disabled hidden>Lorem ipsum</option>
        <option data-id="1" >Sem Inceptos Tellus</option>
        <option data-id="2" selected>Sollicitudin Adipiscing Mattis</option>
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

## By group

When the list contains very different items, it may be a good idea to group them by category.

{{% example html %}}
<label for="exampleFormControlSelect1">Example select</label>
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

{{% example html %}}
<label for="exampleFormControlSelect2">Example select</label>
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

Multi-select drop-down lists let users choose multiple options.

{{% example html %}}
<label for="exampleFormControlMultiSelect1">Multi select</label>
<div class="select-improved" data-component="select-multiple" id="test">
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

### With groups

{{% example html %}}
<label for="exampleFormControlMultiSelect3">Multi select</label>
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
            <button type="button" data-role="counter" class="custom-control-label font-weight-medium w-100 text-left text-uppercase">Unité 1</button>
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

## Use with JavaScript
Not working with select by group.

{{% highlight html %}}
<div class="select-improved" data-component="select-<choose-your-mode>" id="my-select">
  ...
</div>
{{% /highlight %}}

Access to your component instance : `document.querySelector('#my-select').select`

### Select methods

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>.getCurrentValue()</code></td>
      <td>Access to the current value.</td>
    </tr>
    <tr>
      <td><code>.setOption('my-option-1', true)</code></td>
      <td>Add a selected option.</td>
    </tr>
    <tr>
      <td><code>.setOptions(['my-option-1', 'my-option-2'])</code></td>
      <td>Add options.</td>
    </tr>
    <tr>
      <td><code>.replaceOptions(['my-option-1', 'my-option-2'])</code></td>
      <td>Replace all options.</td>
    </tr>
  </tbody>
</table>

### Multiple methods

<table class="table">
  <thead>
    <tr>
      <th>Method</th>
      <th>Description</th>
      <th>Example</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>values</code></td>
      <td>Access to the current values.</td>
      <td><code>instance.values</code></td>
    </tr>
  </tbody>
</table>
