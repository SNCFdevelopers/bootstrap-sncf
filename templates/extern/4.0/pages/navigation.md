---
layout: standalone
title: Navigation
description: Navigation template.
permalink: /docs/4.0/pages/navigation
---

<div class="mainnav" data-component="mainnav">
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
          <a href="#" class="btn btn-sm btn-transparent toolbar-item-spacing">
            <span class="sr-only">search</span>
            <i class="icons-search icon-size-1x25"></i>
          </a>
        </li>
        <li class="toolbar-item">
          <button class="btn btn-sm btn-transparent toolbar-item-spacing">
            <span class="sr-only">Account</span>
            <i class="icons-account-offline icon-size-1x25"></i>
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
