---
layout: docs
title: List group
description: List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
group: components
toc: true
---

## Basic example

The most basic list group is an unordered list with list items and the proper classes. Build upon it with the options that follow, or with your own CSS as needed.

{% example html %}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25"></i>
      </div>
      <div class="management-item-main">
        <h2>Titre lorem ipsum dolor sit amet</h2>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn btn-only-icon btn-favorite active d-none d-lg-block">
          <span class="sr-only">Ajouter aux favoris</span>
          <i class="icons-favorite-on icons-size-1x25"></i>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-options icons-size-1x75"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Rechercher dans la liste</button>
            <button class="dropdown-item" type="button">Filtrer la liste</button>
            <button class="dropdown-item" type="button">Trier la liste</button>
            <button class="dropdown-item" type="button">Modifier la liste</button>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample{{ i }}">
          <label class="custom-control-label" for="managementExample{{ i }}"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25"></i>
      </div>
      <div class="management-item-main">
        <h2>Titre lorem ipsum dolor sit amet</h2>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn btn-only-icon btn-favorite d-none d-lg-block">
          <span class="sr-only">Ajouter aux favoris</span>
          <i class="icons-favorite-on icons-size-1x25"></i>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-options icons-size-1x75"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Rechercher dans la liste</button>
            <button class="dropdown-item" type="button">Filtrer la liste</button>
            <button class="dropdown-item" type="button">Trier la liste</button>
            <button class="dropdown-item" type="button">Modifier la liste</button>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>
{% endexample %}

## Group example

{% example html %}
<ul class="list-group">
  {% include components/list-group-item.html %}
</ul>
{% endexample %}