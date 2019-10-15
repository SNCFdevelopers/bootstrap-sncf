---
layout: docs
title: Select
description: Examples and usage guidelines for select.
group: components
toc: true
default:
  - name: Sem Inceptos Tellus
  - name: Sollicitudin Adipiscing Mattis
  - name: Amet Porta
  - name: Pharetra Fusce Venenatis
selected:
  - name: Sem Inceptos Tellus
  - name: Sollicitudin Adipiscing Mattis
    attr: selected
  - name: Amet Porta
  - name: Pharetra Fusce Venenatis
permalink: /docs/4.3/components/select/
---

## Standard

{% example html %}
<label for="select0">Example select</label>
{% include components/select-default.html id="select0" placeholder="Lorem ipsum" iconsize="icons-size-x75" placeholderAttr="selected" items=page.default %}
{% endexample %}

## Default

A drop-down is a list of options for users to choose from. Such menus are often used in forms or for functional purposes.
Two criteria determine the length of drop-down menus: the longest possible wording and respecting the grid.

Custom `<select>` menus need a custom class and data attribute, `.select-improved` to trigger the custom styles and `data-component="select-exclusive"` to trigger the custom javascript. Given the complexity and the different versions of the menu (simple, groups, input, etc), this one must be built in the markup.

{% example html %}
<label for="select1">Example select</label>
{% include components/select-exclusive.html id="select1" placeholder="Lorem ipsum" iconsize="icons-size-x75" placeholderAttr="selected" items=page.default %}
{% endexample %}

### Select menu with additional input

{% capture input_add %}
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
{% endcapture %}
{% example html %}
<label for="select2">Additional input</label>
{% include components/select-exclusive.html id="select2" placeholder="Lorem ipsum" iconsize="icons-size-x75" placeholderAttr="selected" items=page.default content=input_add %}
{% endexample %}

### Select with default select value

{% example html %}
<label for="select3">Option selected by default</label>
{% include components/select-exclusive.html id="select3" placeholder="Lorem ipsum" iconsize="icons-size-x75" items=page.selected %}
{% endexample %}

## By group

When the list contains very different items, it may be a good idea to group them by category.

{% example html %}
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
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="0">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
        </div>
      </div>
      <div role="listitem" class="select-group">
        <div class="select-group-head">
          <span class="select-group-title text-uppercase">Unité 2</span>
        </div>
        <div class="select-group-content" role="list">
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
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
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="0">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="1">Sem Inceptos Tellus</button></span>
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button></span>
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
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="3">Amet Porta</button></span>
          <span class="select-menu-item" role="listitem"><button data-role="value" data-target="4">Pharetra Fusce Venenatis</button></span>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Multiple

Multi-select drop-down lists let users choose multiple options.

{% example html %}
<label for="exampleFormControlMultiSelect1">Multi select</label>
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
            <button data-role="value" data-target="0" role="checkbox" aria-checked="false" tabindex="0" class="custom-control-label w-100 text-left font-weight-medium">Sem Inceptos Tellus</button>
          </div>
        </div>
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button data-role="value" data-target="1" role="checkbox" aria-checked="false" tabindex="0" class="custom-control-label w-100 text-left font-weight-medium">Sollicitudin Adipiscing Mattis</button>
          </div>
        </div>
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button data-role="value" data-target="2" role="checkbox" aria-checked="false" tabindex="0" class="custom-control-label w-100 text-left font-weight-medium">Amet Porta</button>
          </div>
        </div>
        <div class="select-menu-item" role="listitem">
          <div class="custom-control custom-checkbox">
            <button data-role="value" data-target="3" role="checkbox" aria-checked="false" tabindex="0" class="custom-control-label w-100 text-left font-weight-medium">Pharetra Fusce Venenatis</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}
