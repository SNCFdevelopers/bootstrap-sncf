---
layout: docs
title: Navs
description: Documentation and examples for how to use Bootstrap's included navigation components.
group: components
toc: true
permalink: /docs/4.0/components/navs
---

## Navs

{% example html %}
<div class="actionbar">
  <div class="container">
    <h2 class="h1">#Digitalsncf</h2>
    <ul class="actionbar-nav">
      <li class="actionbar-nav-item">
        <button type="button" class="actionbar-nav-link">Programme <i class="icons-arrow-right ml-1"></i></button>
        <div class="actionbar-menu">
          <div class="actionbar-menu-primary">
            <div class="actionbar-menu-head">
            </div>
          </div>
          <div class="actionbar-menu-secondary">
            <div class="actionbar-menu-head">
            </div>
          </div>
        </div>
      </li>
    </ul>
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
{% endexample %}