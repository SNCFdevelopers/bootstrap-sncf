---
layout: standalone
title: Navigation
description: Navigation template.
permalink: /docs/4.0/pages/navigation
---

<header class="mastheader" data-component="mastheader">
  <div class="container">
    <div class="d-flex align-items-center">
      <div class="mastheader-logo">
        <a href="/docs" class="d-block">
          <span class="sr-only">SNCF</span>
          <img alt="SNCF" class="d-block" src="{{ site.baseurl }}/assets/img/brand/sncf-logo.png" width="34" />
        </a>
      </div>
      <h1 class="mastheader-title">Les trains en Ile-de-France de SNCF</h1>
    </div>
    <ul class="mastheader-toolbar mb-0 d-none d-md-flex">
      <li class="mastheader-toolbar-item dropdown">
        <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accessibilité <i class="icons-arrow-down icon-size-x5 ml-2"></i></button>
        <div class="dropdown-menu dropdown-menu-right">
          <i class="dropdown-close icons-close icon-size-x75"></i>
          <div data-role="stop-propagation">
            <div class="mb-3">
              <label class="w-100 text-white font-weight-medium mb-2">Police (dyslexie)</label>
              <div class="options-control options-control-lg">
                <div class="options-item">
                  <input type="radio" name="typography" id="typography-default" class="sr-only" checked/>
                  <label class="options-btn font-weight-medium" for="typography-default">Défaut</label>
                </div>
                <div class="options-item">
                  <input type="radio" name="typography" id="typography-adapted" class="sr-only"/>
                  <label class="options-btn font-weight-medium" for="typography-adapted">Adaptée</label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="w-100 text-white font-weight-medium mb-2">Contrastes</label>
              <div class="options-control options-control-lg">
                <div class="options-item">
                  <input type="radio" name="contrast" id="contrast-default" class="sr-only" checked/>
                  <label class="options-btn font-weight-medium" for="contrast-default">Défaut</label>
                </div>
                <div class="options-item">
                  <input type="radio" name="contrast" id="contrast-strong" class="sr-only"/>
                  <label class="options-btn font-weight-medium" for="contrast-strong">Renforcés</label>
                </div>
                <div class="options-item">
                  <input type="radio" name="contrast" id="contrast-inverted" class="sr-only"/>
                  <label class="options-btn font-weight-medium" for="contrast-inverted">Inversés</label>
                </div>
              </div>
            </div>
            <div class="mb-3">
              <label class="w-100 text-white font-weight-medium mb-2">Interlignage</label>
              <div class="options-control options-control-lg">
                <div class="options-item">
                  <input type="radio" name="lineheight" id="lineheight-default" class="sr-only" checked/>
                  <label class="options-btn font-weight-medium" for="lineheight-default">Défaut</label>
                </div>
                <div class="options-item">
                  <input type="radio" name="lineheight" id="lineheight-increases" class="sr-only"/>
                  <label class="options-btn font-weight-medium" for="lineheight-increases">Augmenté</label>
                </div>
              </div>
            </div>
            <div>
              <label class="w-100 text-white font-weight-medium mb-2">Animations</label>
              <div class="options-control options-control-lg">
                <div class="options-item">
                  <input type="radio" name="animations" id="enabled" class="sr-only" checked/>
                  <label class="options-btn font-weight-medium" for="enabled">Option 1</label>
                </div>
                <div class="options-item">
                  <input type="radio" name="animations" id="disabled" class="sr-only"/>
                  <label class="options-btn font-weight-medium" for="disabled">Option 2</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="mastheader-toolbar-item dropdown">
        <button type="button" class="dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Langue : Fr <i class="icons-arrow-down icon-size-x5 ml-2"></i></button>
        <div class="dropdown-menu dropdown-menu-right">
          <i class="dropdown-close icons-close icon-size-x75"></i>
          <div data-role="stop-propagation">
            <div class="mb-3">
              <label class="w-100 text-white font-weight-medium mb-2">Interlignage</label>
              <div class="options-control options-control-lg">
                <div class="options-item">
                  <input type="radio" name="lineheight" id="lineheight-default" class="sr-only" checked/>
                  <label class="options-btn font-weight-medium" for="lineheight-default">Défaut</label>
                </div>
                <div class="options-item">
                  <input type="radio" name="lineheight" id="lineheight-increases" class="sr-only"/>
                  <label class="options-btn font-weight-medium" for="lineheight-increases">Augmenté</label>
                </div>
              </div>
            </div>
          </div>
        </div>
      </li>
      <li class="mastheader-toolbar-item mastheader-toolbar-item-lg">
        <button type="button">Tout sncf <i class="icons-options ml-3"></i></button>
      </li>
    </ul>
  </div>
</header>
<div class="mastnav" data-component="mastnav">
  <div class="actionbar">
    <div class="container">
      <h2 class="mb-0">#Digitalsncf</h2>
      <div class="actionbar-menu">
        <nav class="nav">
          {% for item in site.data.nav-fixtures %}
            <button type="button" class="nav-item" data-role="main-toggle" data-target="#{{ item.name | slugify }}">
              {{ item.name }}
              <i class="icons-arrow-next icon-size-x5 ml-2"></i>
            </button>
          {% endfor %}
        </nav>
      </div>
      <ul class="toolbar mb-0">
        <li class="toolbar-item">
          <a href="#" class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
            <span class="sr-only">search</span>
            <i class="icons-search icon-size-1x25"></i>
          </a>
        </li>
        <li class="toolbar-item">
          <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
            <span class="sr-only">Account</span>
            <i class="icons-account-offline icon-size-1x50"></i>
          </button>
        </li>
      </ul>
    </div>
  </div>

  <div class="menu" data-role="menu">
    <div class="container">
      {% for item in site.data.nav-fixtures %}
        <div id="{{ item.name | slugify }}" class="menu-item panel primary-panel">
          <div class="panel-inner">
            <div class="panel-head">
              <h3 class="h3 mb-0" data-role="prev">
                <i class="icons-arrow-prev icon-size-1x mr-3"></i>
                {{ item.name }}
              </h3>
              <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                <i class="icons-close icon-size-1x" aria-hidden="true"></i>
              </a>
            </div>
            <div class="panel-content">
              <div class="panel-lead">
                <div class="h3 mb-4 text-white font-weight-medium">{{ item.name }}</div>
                <p>{{ item.description }}</p>
              </div>
              <nav class="subnav">
                {% for category in item.categories %}
                  <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#{{ category.name | slugify }}">
                    {{ category.name }}
                    <i class="icons-arrow-next icon-size-x5 ml-2"></i>
                  </button>
                {% endfor %}
              </nav>
            </div>
          </div>
        </div>

      {% for category in item.categories %}
        <div id="{{ category.name | slugify }}" class="menu-item panel secondary-panel">
          <div class="panel-inner">
            <div class="panel-head">
              <h3 class="h3 mb-0" data-role="prev">
                <i class="icons-arrow-prev icon-size-1x mr-3"></i>
                {{ category.name }}
              </h3>
              <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                <i class="icons-close icon-size-1x" aria-hidden="true"></i>
              </a>
            </div>
            <div class="panel-content">
              <nav class="subnav">
                  {% for subcategory in category.subcategories %}
                    <button type="button" class="subnav-item">
                      {{ subcategory.name }}
                      <i class="icons-arrow-next icon-size-x5 ml-2"></i>
                    </button>
                  {% endfor %}
              </nav>
            </div>
          </div>
        </div>
      {% endfor %}
      {% endfor %}
    </div>
  </div>
</div>