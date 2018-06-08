---
layout: docs
title: Navigation
description: Navigation
toc: true
permalink: /docs/4.0/components/navigation
---

{% example html %}
<nav class="mastnav">
  <div class="mastnav-top">
    <a href="#" class="mastnav-item active">
      <i class="icons-bookmark icons-size-1x5"></i>
      <span class="font-weight-medium">Favoris</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-file icons-size-1x5"></i>
      <span class="font-weight-medium">Collections</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-document icons-size-1x5"></i>
      <span class="font-weight-medium">Ma base documentaire</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-distribution icons-size-1x5"></i>
      <span class="font-weight-medium">Distribution</span>
    </a>
    <a href="#" class="mastnav-item d-none d-lg-flex">
      <i class="icons-admin icons-size-1x5"></i>
      <span class="font-weight-medium">Admin</span>
    </a>
    <a href="#" class="mastnav-item d-lg-none options-menu-btn" data-component="state" data-state="active, active" data-behaviour="toggle, toggle" data-target=".options-menu-btn, .options-menu">
      <i class="icons-options icons-size-1x5"></i>
      <span class="font-weight-medium">Plus</span>
    </a>
  </div>
  <div class="mastnav-bottom d-none d-lg-block">
    <a href="#" class="mastnav-item mastnav-item-horizontal">
      <i class="icons-support icons-size-1x5"></i>
      <span class="font-weight-medium">Support</span>
    </a>
  </div>
</nav>
{% endexample %}