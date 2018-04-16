---
layout: docs
title: Navs
description: Documentation and examples for how to use Bootstrap's included navigation components.
group: components
toc: true
permalink: /docs/4.0/components/navs
---

## Nav

{% example html %}
<div class="actionbar">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre section</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-edit icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-liste icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icon-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="actionbar actionbar-lg">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre section</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-edit icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item toolbar-item-spacing">
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>Primary</span>
            <i class="icons-arrow-down"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-liste icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Filters</span>
          <i class="icons-filters icon-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
  <nav class="position-relative mt-2">
    <ul class="navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active">Titre onglet</a>
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
{% endexample %}

{% example html %}
<div class="actionbar">
  <div class="actionbar-head">
    <h1 class="mb-0"><a href="#"><i class="icons-arrow-prev icon-size-x75 mr-2"></i>Titre section</a></h1>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="actionbar">
  <div class="actionbar-head">
    <nav aria-label="breadcrumb">
      <ol class="breadcrumb breadcrumb-lg mb-0 p-0">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="actionbar actionbar-lg">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre section</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-edit icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item toolbar-item-spacing">
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span>Primary</span>
            <i class="icons-arrow-down"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <a class="dropdown-item" href="#">Action</a>
            <a class="dropdown-item" href="#">Another action</a>
            <a class="dropdown-item" href="#">Something else here</a>
          </div>
        </div>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-liste icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icon-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Filters</span>
          <i class="icons-filters icon-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
  <nav aria-label="breadcrumb" class="d-none d-md-flex">
    <ol class="breadcrumb mt-2 mb-0">
      <li class="breadcrumb-item"><a href="#">Home</a></li>
      <li class="breadcrumb-item active" aria-current="page">Library</li>
      <li class="breadcrumb-item"><a href="#">Others</a></li>
    </ol>
  </nav>
</div>
{% endexample %}

{% example html %}
<div class="actionbar">
  <div class="actionbar-head d-none d-md-flex">
    <h1 class="mb-0">Titre section</h1>
    <div class="d-flex align-items-center">
      <label class="font-weight-medium text-nowrap pr-3 mb-0">Sélectionner un plan de veille</label>
      <div class="input-group align-items-center">
        <div class="form-control-container" data-component="control" data-clear-option="true">
          <input type="text" class="form-control clear-option" data-role="input" data-placeholder="Rechercher" />
          <span class="form-control-state"></span>
          <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
            <span class="sr-only">Clear text</span>
            <i class="icons-close"></i>
          </button>
        </div>
        <div class="input-group-append input-group-last">
          <button type="button" class="btn btn-primary btn-only-icon">
            <i class="icons-search"></i>
          </button>
        </div>
        <button type="button" class="btn btn-only-icon btn-white d-block d-md-none" data-role="close"><i class="icons-close icon-size-1x25"></i></button>
      </div>
    </div>
  </div>
</div>
{% endexample %}