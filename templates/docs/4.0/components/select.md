---
layout: docs
title: Select
description: Examples and usage guidelines for select.
group: components
toc: true
---

## Default

TODO : description

{% example html %}
<label class="font-weight-medium mb-2" for="exampleFormControlSelect1">Example select</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder">
        Sélectionner un secteur
      </div>
      <select class="sr-only" id="exampleFormControlSelect1" data-role="input">
        <option data-id="0">Sem Inceptos Tellus</option>
        <option data-id="1">Sem Inceptos Tellus</option>
        <option data-id="2">Sollicitudin Adipiscing Mattis</option>
        <option data-id="3">Amet Porta</option>
        <option data-id="4">Pharetra Fusce Venenatis</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow icon-size-x75 icon-rotate-90"></i>
        </button>
      </div>
    </div>
    <div class="select-menu" data-role="menu">
      <button class="select-menu-item" data-role="value" data-target="0">Sem Inceptos Tellus</button>
      <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
      <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
      <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
      <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
    </div>
  </div>
</div>
{% endexample %}

## By group

TODO : description

{% example html %}
<label class="font-weight-medium mb-2" for="exampleFormControlSelect1">Example select</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder">
        Sélectionner un secteur
      </div>
      <select class="sr-only" id="exampleFormControlSelect1" data-role="input">
        <option data-id="0">Sem Inceptos Tellus</option>
        <option data-id="1">Sem Inceptos Tellus</option>
        <option data-id="2">Sollicitudin Adipiscing Mattis</option>
        <option data-id="3">Amet Porta</option>
        <option data-id="4">Pharetra Fusce Venenatis</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow icon-size-x75 icon-rotate-90"></i>
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
<label class="font-weight-medium mb-2" for="exampleFormControlSelect1">Example select</label>
<div class="select-improved" data-component="select-exclusive">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control" data-role="placeholder">
        Sélectionner un secteur
      </div>
      <select class="sr-only" id="exampleFormControlSelect1" data-role="input">
        <option data-id="0">Sem Inceptos Tellus</option>
        <option data-id="1">Sem Inceptos Tellus</option>
        <option data-id="2">Sollicitudin Adipiscing Mattis</option>
        <option data-id="3">Amet Porta</option>
        <option data-id="4">Pharetra Fusce Venenatis</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow icon-size-x75 icon-rotate-90"></i>
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
            <i class="icons-arrow icon-size-x75"></i>
          </div>
        </div>
        <div id="collapseExample" class="collapse select-group-content">
          <button class="select-menu-item" data-role="value" data-target="0">Sem Inceptos Tellus</button>
          <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
          <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
        </div>
      </div>
      <div class="select-group select-group-expand">
        <div class="select-group-head" data-toggle="buttons">
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

## Multiple

TODO : description

{% example html %}
<label class="font-weight-medium mb-2" for="exampleFormControlSelect1">Multi select</label>
<div class="select-improved active" data-component="select-multiple">
  <div class="select-control">
    <div class="input-group" data-role="select-toggle">
      <div class="form-control">
        <div class="custom-control custom-checkbox">
          <label data-role="placeholder" class="custom-control-label font-weight-medium active">Tous les secteurs</label>
        </div>
      </div>
      <select class="sr-only" id="exampleFormControlMultiSelect" data-role="input" multiple>
        <option data-id="0" selected>Sem Inceptos Tellus</option>
        <option data-id="1" selected>Sem Inceptos Tellus</option>
        <option data-id="2" selected>Sollicitudin Adipiscing Mattis</option>
        <option data-id="3" selected>Amet Porta</option>
      </select>
      <div class="input-group-append input-group-last">
        <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
          <i class="icons-arrow icon-size-x75 icon-rotate-90"></i>
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
          <div class="custom-control custom-checkbox">
            <label data-role="value" data-target="0" class="custom-control-label font-weight-medium">Sem Inceptos Tellus</label>
          </div>
          <div class="custom-control custom-checkbox">
            <label data-role="value" data-target="1" class="custom-control-label font-weight-medium">Sollicitudin Adipiscing Mattis</label>
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
          <div class="custom-control custom-checkbox">
            <label data-role="value" data-target="2" class="custom-control-label font-weight-medium">Amet Porta</label>
          </div>
          <div class="custom-control custom-checkbox">
            <label data-role="value" data-target="3" class="custom-control-label font-weight-medium">Pharetra Fusce Venenatis</label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}