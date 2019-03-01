---
layout: docs
title: Input group
description: Examples and usage guidelines for checkboxes and radios styles.
group: components
toc: true
permalink: /docs/4.0/components/input-group/
---

## Select radios addons

Menu buttons (select radio add-ons) are used to define a search type.

{% example html %}
<div class="input-group">
  <div class="input-group-prepend">
    <div class="btn-group dropdown" data-component="select-radios">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="actionsgroup">
        <span data-role="placeholder">Tous ces mots</span>
        <i class="icons-arrow-down" aria-hidden="true"></i>
      </button>
      <div class="dropdown-menu dropdown-menu-right" id="actionsgroup">
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch1" id="action1" class="sr-only"/>
        <label class="dropdown-item" for="action1">Action</label>
        <hr class="dropdown-divider"/>
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch2" id="action2" class="sr-only"/>
        <label class="dropdown-item" for="action2">Another action</label>
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch3" id="action3" class="sr-only"/>
        <label class="dropdown-item" for="action3">Something else here</label>
      </div>
    </div>
  </div>
  <div class="form-control-container">
    <label for="entertext" class="sr-only">Saisir les termes à rechercher</label>
    <input id="entertext" type="text" class="form-control" placeholder="Enter text">
    <span class="form-control-state"></span>
  </div>
</div>
{% endexample %}

## Button addons

{% example html %}
<div class="input-group">
  <div class="form-control-container">
    <label for="entertext2">Saisir les termes à rechercher</label>
    <input id="entertext2" type="text" class="form-control" placeholder="Enter text">
    <span class="form-control-state"></span>
  </div>
  <div class="input-group-append">
    <button type="button" class="btn btn-primary btn-only-icon">
      <i class="icons-search" aria-hidden="true"></i>
      <span class="sr-only">Rechercher sur le site</span>
    </button>
  </div>
</div>
{% endexample %}

## Button and select addons

{% example html %}
<label for="entertext3">Saisir les termes à rechercher</label>
<div class="input-group">
  <div class="input-group-prepend">
    <div class="btn-group dropdown" data-component="select-radios">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="actionsgroup2">
        <span data-role="placeholder">Tout</span>
        <i class="icons-arrow-down" aria-hidden="true"></i>
      </button>
      <div id="actionsgroup2" class="dropdown-menu dropdown-menu-right">
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch1" id="action11" class="sr-only"/>
        <label class="dropdown-item" for="action11">Action</label>
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch2" id="action12" class="sr-only"/>
        <label class="dropdown-item" for="action12">Another action</label>
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch3" id="action13" class="sr-only"/>
        <label class="dropdown-item" for="action13">Something else here</label>
      </div>
    </div>
  </div>
  <div class="form-control-container">
    <input id="entertext3" type="text" class="form-control text-right" placeholder="Recherche avancée">
    <span class="form-control-state"></span>
  </div>
  <div class="input-group-append">
    <button type="button" class="btn btn-primary btn-only-icon">
      <i class="icons-search" aria-hidden="true"></i>
      <span class="sr-only">Rechercher sur le site</span>
    </button>
  </div>
</div>
{% endexample %}

## Advanced search

{% example html %}
<label class="font-weight-medium mb-2" for="entertext4">Saisir les termes à rechercher</label>
<div class="advanced-search active">
  <div class="advanced-search-control">
    <div class="input-group">
      <div class="form-control-container">
        <input id="entertext4" type="text" class="form-control" placeholder="Enter text">
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon active">
          <span class="sr-only">Rechercher sur le site</span>
          <i class="icons-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div class="advanced-search-menu" data-role="menu">
      <div class="advanced-search-menu-item advanced-search-menu-title">
        <span>Recherche enregistrée</span>
      </div>
      <ul class="list-unstyled">
        <li class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Sem Inceptos Tellus</button>
          <button type="button" class="btn btn-link"><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Sollicitudin Adipiscing Mattis</button>
          <button type="button" class="btn btn-link"><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li class="advanced-search-menu-item advanced-search-menu-title">
          <span>Recherche récentes</span>
          <button type="button" class="btn btn-link">Tout effacer</button>
        </li>
        <li class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Amet Porta</button>
          <button type="button" class="btn btn-link"><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Pharetra Fusce Venenatis</button>
          <button type="button" class="btn btn-link"><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}
