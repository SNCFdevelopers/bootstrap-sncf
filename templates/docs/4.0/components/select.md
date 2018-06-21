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
---

## Default

Custom `<select>` menus need a custom class and data attribute, `.select-improved` to trigger the custom styles and `data-component="select-exclusive"` to trigger the custom javascript. Given the complexity and the different versions of the menu (simple, groups, input, etc), this one must be built in the markup.

{% example html %}
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control is-placeholder d-flex align-items-center" data-role="placeholder">Lorem ipsum</div>
      <select class="sr-only" id="select1" data-role="input" tabindex="-1" aria-hidden="true">
        {% for item in page.default %}<option data-id="{{ forloop.index0 }}" {{ item.attr }}>{{ item.name }}</option>
        {% endfor %}
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75"></i>
        </button>
      </div>
    </div>
    <div class="select-menu">
      <div class="d-flex flex-column">
        <div class="flex-fluid overflow-y" data-role="menu">
          {% for item in page.default %}<button class="select-menu-item" data-role="value" data-target="{{ forloop.index0 }}">{{ item.name }}</button>
          {% endfor %}
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### With default placeholder option
{% example html %}
<label for="select1">Example select</label>
{% include components/select-exclusive.html id="select1" placeholder="Lorem ipsum" iconsize="icons-size-x75" placeholderAttr="selected" items=page.default %}
{% endexample %}

### Select menu with additional input

{% capture input_add %}
        <div class="d-flex pt-4 flex-column flex-sm-row flex-fixed" data-role="add">
          <div class="form-control-container w-100">
            <input type="text" class="form-control" data-role="add-input" placeholder="Ajouter un agent" value="John Doe">
            <span class="form-control-state"></span>
          </div>
          <div class="pt-2 pt-sm-0 pl-sm-2">
            <button type="button" class="btn btn-primary btn-block d-sm-inline-block" data-role="add-btn">Ajouter</button>
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

TODO : description

{% example html %}
<label for="exampleFormControlSelect1">Example select</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder">
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
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <div class="select-group">
        <div class="select-group-head">
          <button class="select-group-title text-uppercase">Unité 1</button>
        </div>
        <div class="select-group-content">
          <button class="select-menu-item" data-role="value" data-target="0">Sem Inceptos Tellus</button>
          <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
          <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
        </div>
      </div>
      <div class="select-group">
        <div class="select-group-head">
          <button class="select-group-title text-uppercase">Unité 2</button>
        </div>
        <div class="select-group-content">
          <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
          <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

TODO : description

{% example html %}
<label for="exampleFormControlSelect1">Example select</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder">
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
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <div class="select-group select-group-expand">
        <div class="select-group-head" data-role="collapse" data-target="#collapseExample">
          <div class="select-group-title text-uppercase">Unité 1</div>
          <div class="select-group-toggle text-primary">
            <span class="select-group-close mr-2">Fermer</span>
            <span class="select-group-show mr-2">Ouvrir</span>
            <i class="icons-arrow-down icons-size-x75"></i>
          </div>
        </div>
        <div id="collapseExample" class="collapse select-group-content">
          <button class="select-menu-item" data-role="value" data-target="0">Sem Inceptos Tellus</button>
          <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
          <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
        </div>
      </div>
      <div class="select-group select-group-expand">
        <div class="select-group-head" data-role="collapse" data-target="#collapseExample1">
          <button class="select-group-title text-uppercase">Unité 2</button>
          <div class="select-group-toggle text-primary">
            <span class="select-group-close mr-2">Fermer</span>
            <span class="select-group-show mr-2">Ouvrir</span>
            <i class="icons-arrow-down icons-size-x75"></i>
          </div>
        </div>
        <div id="collapseExample1" class="select-group-content">
          <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
          <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Multiple

{% example html %}
<label for="exampleFormControlSelect1">Multi select</label>
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
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <div class="select-group" data-role="group" data-id="0">
        <div class="select-menu-item">
          <div class="custom-control custom-checkbox">
            <label data-role="value" data-target="2" class="custom-control-label font-weight-medium">Amet Porta</label>
          </div>
        </div>
        <div class="select-menu-item">
          <div class="custom-control custom-checkbox">
            <label data-role="value" data-target="3" class="custom-control-label font-weight-medium">Pharetra Fusce Venenatis</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
<label for="exampleFormControlSelect2">Multi select</label>
<div class="select-improved" data-component="select-multiple">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control">
        <div class="custom-control custom-checkbox">
          <label data-role="placeholder" class="custom-control-label font-weight-medium">Tous les secteurs</label>
        </div>
      </div>
      <select class="sr-only" id="exampleFormControlMultiSelect2" data-role="input" tabindex="-1" aria-hidden="true" multiple>
        <option data-id="0" selected>Sem Inceptos Tellus</option>
        <option data-id="1" selected>Sem Inceptos Tellus</option>
        <option data-id="2" selected>Sollicitudin Adipiscing Mattis</option>
        <option data-id="3" selected>Amet Porta</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow-down icons-size-x75"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <div class="select-group" data-role="group" data-id="0">
        <div class="select-group-head">
          <div class="custom-control custom-checkbox">
            <label data-role="counter" class="custom-control-label font-weight-medium text-uppercase">Unité 1</label>
          </div>     
        </div>
        <div class="select-group-content">
          <div class="select-menu-item">
            <div class="custom-control custom-checkbox">
              <label data-role="value" data-target="0" class="custom-control-label font-weight-medium">Sem Inceptos Tellus</label>
            </div>
          </div>
          <div class="select-menu-item">
            <div class="custom-control custom-checkbox">
              <label data-role="value" data-target="1" class="custom-control-label font-weight-medium">Sollicitudin Adipiscing Mattis</label>
            </div>
          </div>
        </div>
      </div>
      <div class="select-group" data-role="group" data-id="1">
        <div class="select-group-head">
          <div class="custom-control custom-checkbox">
            <label data-role="counter" class="custom-control-label font-weight-medium text-uppercase">Unité 2</label>
          </div>     
        </div>
        <div class="select-group-content">
          <div class="select-menu-item">
            <div class="custom-control custom-checkbox">
              <label data-role="value" data-target="2" class="custom-control-label font-weight-medium">Amet Porta</label>
            </div>
          </div>
          <div class="select-menu-item">
            <div class="custom-control custom-checkbox">
              <label data-role="value" data-target="3" class="custom-control-label font-weight-medium">Pharetra Fusce Venenatis</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}