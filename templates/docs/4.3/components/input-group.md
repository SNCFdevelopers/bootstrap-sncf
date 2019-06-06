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
    <input id="entertext" type="text" class="form-control" title="Enter text" placeholder="Enter text">
    <span class="form-control-state"></span>
  </div>
</div>
{% endexample %}

## Button addons

{% example html %}
<div class="input-group">
  <div class="form-control-container">
    <input id="entertext2" type="text" class="form-control" title="Enter text" placeholder="Enter text">
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

### Addons & clear option

{% example html %}
<div class="input-group">
  <div class="form-control-container" data-component="control" data-clear-option="true">
    <label for="entertext21" class="sr-only">Saisir les termes à rechercher</label>
    <input id="entertext21" class="form-control clear-option" id="readonly2" placeholder="Search..." value="This text can be erased" data-role="input">
    <span class="form-control-state"></span>
    <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
      <span class="sr-only">Clear text</span>
      <i class="icons-close" aria-hidden="true"></i>
    </button>
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
    <input id="entertext3" type="text" class="form-control" placeholder="Recherche avancée">
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

Previous search history can be displayed by default when users click on the input field. Saved searches (favourite searches) can also be displayed.

{% capture callout-include %}{% include callout-functionnal-warning.md %}{% endcapture %}
{{ callout-include | markdownify }}

{% example html %}
<label class="font-weight-medium mb-2" for="entertext4">Saisir les termes à rechercher</label>
<div class="advanced-search active">
  <div class="advanced-search-control">
    <div class="input-group">
      <div class="form-control-container">
        <input id="entertext4" type="text" class="form-control" placeholder="Enter text" value="Gestionnaire">
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon active">
          <span class="sr-only">Rechercher sur le site</span>
          <i class="icons-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div role="list" class="advanced-search-menu" data-role="menu">
      <ul class="list-unstyled mb-0">
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link"><span class="text-primary">Gestionnaire</span>&#160;de portefeuille</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link"><span class="text-primary">Gestionnaire</span>&#160;de commande</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link"><span class="text-primary">Gestionnaire</span>&#160;de bureau</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

### Variations

{% example html %}
<label class="font-weight-medium mb-2" for="entertext41">Saisir les termes à rechercher</label>
<div class="advanced-search active">
  <div class="advanced-search-control">
    <div class="input-group">
      <div class="form-control-container">
        <input id="entertext41" type="text" class="form-control" placeholder="Enter text">
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon active">
          <span class="sr-only">Rechercher sur le site</span>
          <i class="icons-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div role="list" class="advanced-search-menu" data-role="menu">
      <ul class="list-unstyled mb-0">
        <li role="listitem" class="advanced-search-menu-item advanced-search-menu-title">
          <span>Recherches récentes</span>
          <button type="button" class="btn btn-link">Tout effacer</button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Amet Porta</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Pharetra Fusce Venenatis</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Essaincehef Digital</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

{% example html %}
<label class="font-weight-medium mb-2" for="entertext5">Saisir les termes à rechercher</label>
<div class="advanced-search active">
  <div class="advanced-search-control">
    <div class="input-group">
      <div class="form-control-container">
        <input id="entertext5" type="text" class="form-control" placeholder="Enter text">
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon active">
          <span class="sr-only">Rechercher sur le site</span>
          <i class="icons-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div role="list" class="advanced-search-menu" data-role="menu">
      <ul class="list-unstyled mb-0">
        <li role="listitem" class="advanced-search-menu-item advanced-search-menu-title">
          <span>Recherches enregistrées</span>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Sem Inceptos Tellus</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Sollicitudin Adipiscing Mattis</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Fabdesignus Lupus Maxima</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}

### Mixed

{% example html %}
<label class="font-weight-medium mb-2" for="entertext6">Saisir les termes à rechercher</label>
<div class="advanced-search active">
  <div class="advanced-search-control">
    <div class="input-group">
      <div class="form-control-container">
        <input id="entertext6" type="text" class="form-control" placeholder="Enter text">
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon active">
          <i class="icons-search" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <div role="list" class="advanced-search-menu" data-role="menu">
      <ul class="list-unstyled mb-0">
        <li role="listitem" class="advanced-search-menu-item advanced-search-menu-title">
          <span>Recherches enregistrées</span>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Sem Inceptos Tellus</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Sollicitudin Adipiscing Mattis</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item advanced-search-menu-title">
          <span>Recherches récentes</span>
          <button type="button" class="btn btn-link">Tout effacer</button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Amet Porta</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
        <li role="listitem" class="advanced-search-menu-item">
          <button type="button" class="btn btn-link">Pharetra Fusce Venenatis</button>
          <button type="button" class="btn btn-link"><span class="sr-only">Supprimer</span><i class="icons-close-circle" aria-hidden="true"></i></button>
        </li>
      </ul>
    </div>
  </div>
</div>
{% endexample %}
