---
layout: docs
title: Navigation
description: Navigation
group: layout 
toc: true
permalink: /docs/4.0/layout/navigation/
---

{% example html %}
<nav role="navigation" class="mastnav">
  <ul class="mastnav-top">
    <li>
      <a href="#" class="mastnav-item active">
        <i class="icons-bookmark icons-size-1x5" aria-hidden="true"></i>
        <span class="font-weight-medium">Favoris</span>
      </a>
    </li>
    <li>
      <a href="#" class="mastnav-item">
        <i class="icons-file icons-size-1x5" aria-hidden="true"></i>
        <span class="font-weight-medium">Collections</span>
      </a>
    </li>
    <li>
      <a href="#" class="mastnav-item">
        <i class="icons-document icons-size-1x5" aria-hidden="true"></i>
        <span class="font-weight-medium">Ma base documentaire</span>
      </a>
    </li>
    <li>
      <a href="#" class="mastnav-item">
        <i class="icons-distribution icons-size-1x5" aria-hidden="true"></i>
        <span class="font-weight-medium">Distribution</span>
      </a>
    </li>
    <li class="d-none d-lg-flex">
      <a href="#" class="mastnav-item">
        <i class="icons-admin icons-size-1x5" aria-hidden="true"></i>
        <span class="font-weight-medium">Admin</span>
      </a>
    </li>
    <li class="d-lg-none">
      <button type="button" class="mastnav-item options-menu-btn" data-component="state" data-state="active, active" data-behaviour="toggle, toggle" data-target=".options-menu-btn, .options-menu">
        <i class="icons-options icons-size-1x5" aria-hidden="true"></i>
        <span class="font-weight-medium">Plus</span>
      </button>
    </li>
  </ul>
  <div class="mastnav-bottom d-none d-lg-block">
    <a href="#" class="mastnav-item mastnav-item-horizontal">
      <i class="icons-support icons-size-1x5" aria-hidden="true"></i>
      <span class="font-weight-medium">Support</span>
    </a>
  </div>
</nav>
{% endexample %}
