---
layout: docs
title: Navbar
description: Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: components
toc: true
permalink: /docs/4.0/components/navbar
---

{% example html %}
<header class="mastheader">
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
      <li class="mastheader-toolbar-item">
        <button type="button">Accessibilité <i class="icons-arrow-down icons-size-x5 ml-2"></i></button>
      </li>
      <li class="mastheader-toolbar-item">
        <button type="button">Langue : Fr <i class="icons-arrow-down icons-size-x5 ml-2"></i></button>
      </li>
      <li class="mastheader-toolbar-item mastheader-toolbar-item-lg">
        <button type="button">Tout sncf <i class="icons-options ml-3"></i></button>
      </li>
    </ul>
  </div>
</header>
{% endexample %}
