---
layout: docs
title: Navbars
description: Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: layout
toc: true
permalink: /docs/4.0/layout/navbars/
---

## Galactic bar

By default, the page has a header, a main navbar, a section header and a content area. The header contains the website’s logo, a search function, notifications and a user account menu. The user account menu lets the user manage account settings and/or preferences and log out.

{% example html %}
<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-logo.png" />
    </a>
  </div>
  <header role="banner" class="mastheader-title d-none d-xl-block">
    <h1 class="text-uppercase text-white pt-2 pl-3 mb-0">Nom application</h1>
  </header>
  <div class="mastheader-search pr-md-4 pl-md-4" data-component="searchbar">
    <label for="galacticbar-search-input" class="font-weight-medium text-white pr-3 mb-0">Rechercher</label>
    <div class="input-group align-items-center">
      <div class="form-control-container" data-component="control" data-clear-option="true" role="search">
        <input id="galacticbar-search-input" type="search" class="form-control clear-option" data-role="input" data-placeholder="Rechercher" />
        <span class="form-control-state"></span>
        <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
          <span class="sr-only">Clear text</span>
          <i class="icons-close" aria-hidden="true"></i>
        </button>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon">
          <span class="sr-only">Rechercher</span>
          <i class="icons-search" aria-hidden="true"></i>
        </button>
      </div>
      <button type="button" class="btn btn-only-icon btn-white d-block d-md-none" data-role="close">
        <span class="sr-only">Close search</span>
        <i class="icons-close icons-size-1x25" aria-hidden="true"></i>
      </button>
    </div>
  </div>
  <ul class="mastheader-toolbar toolbar mb-0">
    <li class="toolbar-item separator-gray-500 d-none d-md-flex">
      <a href="#" class="btn btn-only-icon btn-notif toolbar-item-spacing">
        <span class="sr-only">Alert</span>
        <i class="icons-alert-notification icons-size-1x25 icons-md-size-1x5" aria-hidden="true"></i>
        <span class="notif">1</span>
      </a>
    </li>
    <li class="toolbar-item separator-gray-500 no-separator d-flex d-md-none">
      <button type="button" class="btn btn-only-icon toolbar-item-spacing" data-component="searchbar-toggle">
        <span class="sr-only">Open search</span>
        <i class="icons-search icons-size-1x25 icons-md-size-1x5" aria-hidden="true"></i>
      </button>
    </li>
    <li class="toolbar-item separator-gray-500">
      <div class="btn-group dropdown">
        <button class="btn btn-transparent dropdown-toggle toolbar-item-spacing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol">
          <i class="icons-menu-account icons-size-1x25 icons-md-size-1x5 mr-xl-2" aria-hidden="true"></i>
          <span class="d-none d-xl-block">Pierre Dumont</span>
          <i class="icons-arrow-down d-none d-xl-block" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right dropdown-menu-mastheader" aria-labelledby="dropdownMenuButton" id="mycontrol">
          <ul>
            <li class="dropdown-item"><a href="#">Paramètre du compte</a></li>
            <li class="dropdown-item"><a href="#">Préférences</a></li>
            <li id="darkmode-btn" class="dropdown-item darkmode-btn"><a href="#">Mode sombre/clair</a></li>
            <li class="dropdown-item"><a href="#">Se déconnecter</a></li>
          </ul>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endexample %}

### Use "métier" signature logos

{% callout warning %}
SNCF's logo should be used by default for all "métier" applications, especially for _SNCF Mobilités_.
{% endcallout %}

You could use SNCF's logos with "métier" signature. In this case, please use monochromatic logo versions for accessibility reasons. Indeed, "métier" signature is violet colored and will not be visible on carbon background.

For reference, you can consult all the rules about logos [on this site](https://www.sncf.com/fr/groupe/marques/sncf/logo-sncf), and [here](https://www.sncf.com/fr/groupe/marques/sncf/signatures-metiers) for "métier" signatures.

We've added "métier" signatures logos to perfectly fit into `mastheader` navbar :

<div class="bd-example">
  <div class="row">
    <div class="col-md-4 col-sm-6 mb-2">
      <label for="mastheader-immobilier">SNCF Immobilier</label>
      <div class="mastheader" id="mastheader-immobilier">
        <div class="mastheader-logo">
          <a href="/docs">
            <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-immobilier-logo.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-2">
      <label for="mastheader-logistics">SNCF Logistics</label>
      <div class="mastheader" id="mastheader-logistics">
        <div class="mastheader-logo">
          <a href="/docs">
            <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-logistics-logo.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-2">
      <label for="mastheader-reseau">SNCF Réseau</label>
      <div class="mastheader" id="mastheader-reseau">
        <div class="mastheader-logo">
          <a href="/docs">
            <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-reseau-logo.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{% highlight html %}
<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-immobilier-logo.png" />
    </a>
  </div>
  ...
</div>

<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-logistics-logo.png" />
    </a>
  </div>
  ...
</div>

<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-reseau-logo.png" />
    </a>
  </div>
  ...
</div>
{% endhighlight %}

## Vertical Nav

Readers can use the main navbar—a menu on the left-hand side of the website—to navigate to the main sections of the application. We recommend blocking landscape mode for tablets when site navigation is complex due to a deep tree structure.

{% callout info %}
Pro-tip : reduce your browser's size or use mobile utilities to see the horizontal state of _vertical nav_ in mobile mode.
{% endcallout %}

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

