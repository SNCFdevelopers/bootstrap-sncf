---
layout: standalone
title: Navigation
description: Navigation template.
permalink: /docs/4.0/pages/navigation
---

<div class="actionbar">
  <div class="container">
    <h2 class="mb-0">#Digitalsncf</h2>
    <div class="actionbar-overlay">
      <div class="container">
        <ul class="actionbar-nav" data-component="mainnav">
          {% for item in site.data.nav-fixtures %}
          <li class="actionbar-nav-item">
            <button type="button" class="actionbar-nav-link" data-link data-target="#{{ item.name | slugify }}">{{ item.name }} <i class="icons-arrow-next icon-size-x5 ml-2"></i></button>
            <div id="{{ item.name | slugify }}" class="actionbar-menu">
              <div class="container">
                <div class="actionbar-menu-inner">
                  <div class="actionbar-menu-primary">
                    <div class="actionbar-menu-head">
                      <div class="actionbar">
                        <div class="container">
                          <h3 class="mb-0"><i class="icons-arrow-prev icon-size-x75 mr-2"></i> {{ item.name }}</h3>
                        </div>
                      </div>
                    </div>
                    <div class="actionbar-menu-content">
                      <div class="actionbar-menu-lead">
                        <div class="h3 mb-4 text-white font-weight-medium">{{ item.name }}</div>
                        <p>{{ item.description }}</p>
                      </div>
                      <ul class="actionbar-menu-list">
                        {% for category in item.categories %}
                        <li class="actionbar-menu-item"><button type="button" class="actionbar-menu-link" data-link data-target="#{{ category.name | slugify }}">{{ category.name }} <i class="icons-arrow-next icon-size-x5 ml-2"></i></button></li>
                        {% endfor %}
                      </ul>
                    </div>
                  </div>
                  {% for category in item.categories %}
                  <div id="{{ category.name | slugify }}" class="actionbar-menu-secondary">
                    <div class="actionbar-menu-head">
                    </div>
                    <div class="actionbar-menu-content">
                      <ul class="actionbar-menu-list">
                        {% for subcategory in category.subcategories %}
                        <li class="actionbar-menu-item"><button type="button" class="actionbar-menu-link">{{ subcategory.name }} <i class="icons-arrow-next icon-size-x5 ml-2"></i></button></li>
                        {% endfor %}
                      </ul>
                    </div>
                  </div>
                  {% endfor %}
                </div>
              </div>
            </div>
          </li>
          {% endfor %}
        </ul>
      </div>
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
