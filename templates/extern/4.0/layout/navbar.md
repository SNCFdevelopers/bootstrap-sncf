---
layout: docs
title: Navbar
description: Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: layout
toc: true
permalink: /docs/4.0/layout/navbar/
---

{% example html %}
<div class="mastheader">
  <div class="container">
    <header role="banner" class="d-flex align-items-center">
      <div class="mastheader-logo">
        <a href="/docs" class="d-block">
          <img alt="" class="d-block" src="{{ site.baseurl }}/assets/img/brand/sncf-logo.png" width="34" />
        </a>
      </div>
      <h1 class="mastheader-title flex-fluid text-white">Les trains en Ile-de-France de SNCF</h1>
    </header>
    <ul class="mastheader-toolbar mb-0 d-none d-md-flex">
      <li class="mastheader-toolbar-item">
        <button type="button" aria-expanded="false">Accessibilité <i class="icons-arrow-down icons-size-x5 ml-2" aria-hidden="true"></i></button>
      </li>
      <li class="mastheader-toolbar-item">
        <button type="button" aria-expanded="false">Langue : Fr <i class="icons-arrow-down icons-size-x5 ml-2" aria-hidden="true"></i></button>
      </li>
      <li class="mastheader-toolbar-item mastheader-toolbar-item-lg align-self-stretch">
        <button type="button" aria-expanded="false">Tout sncf <i class="icons-options ml-3" aria-hidden="true"></i></button>
      </li>
    </ul>
  </div>
</div>
{% endexample %}
