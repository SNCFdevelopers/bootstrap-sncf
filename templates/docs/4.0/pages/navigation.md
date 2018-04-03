---
layout: standalone
title: Navigation
description: Navigation template.
---

<header class="mastheader">
  <div class="mastheader-logo">
    <span class="sr-only">SNCF</span>
    <img alt="SNCF" />
  </div>
  <h1 class="mastheader-title d-none d-xl-block text-uppercase text-white mb-0">Nom application</h1>
  <div class="mastheader-search pr-md-4 pl-md-4 d-none d-lg-block">
    <div class="input-group align-items-center">
      <label class="font-weight-medium text-white pr-3 mb-0">Rechercher</label>
      <div class="form-control-container" data-component="control" data-clear-option="true">
        <input type="text" class="form-control clear-option" placeholder="Rechercher" data-role="input" />
        <span class="form-control-state"></span>
        <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
          <span class="sr-only">Clear text</span>
          <i class="icons-close"></i>
        </button>
      </div>
      <div class="input-group-append input-group-last">
        <button type="button" class="btn btn-primary btn-only-icon">
          <i class="icons-search"></i>
        </button>
      </div>
      <button type="button" class="btn btn-only-icon btn-white d-block d-md-none"><i class="icons-close icon-size-1x25"></i></button>
    </div>
  </div>
  <ul class="mastheader-toolbar toolbar mb-0">
    <li class="toolbar-item">
      <a href="#" class="btn btn-only-icon btn-notif">
        <span class="sr-only">Alert</span>
        <i class="icons-alerte-underline icon-size-1x75"></i>
        <span class="notif">1</span>
      </a>
    </li>
    <li class="toolbar-item">
      <a href="#" class="btn btn-only-icon">
        <span class="sr-only">Account</span>
        <i class="icons-account-offline icon-size-1x75"></i>
      </a>
    </li>
  </ul>
</header>
<nav class="mastnav">
  <div class="mastnav-top">
    <a href="#" class="mastnav-item active">
      <i class="icons-favorite-on icon-size-1x50"></i>
      <span class="font-weight-medium">Favoris</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-collection icon-size-1x50"></i>
      <span class="font-weight-medium">Collection</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-document icon-size-1x50"></i>
      <span class="font-weight-medium">Ma base documentaire</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-distribution icon-size-1x50"></i>
      <span class="font-weight-medium">Distribution</span>
    </a>
    <a href="#" class="mastnav-item">
      <i class="icons-admin icon-size-1x50"></i>
      <span class="font-weight-medium">Admin</span>
    </a>
  </div>
  <div class="mastnav-bottom d-none d-lg-block">
    <a href="#" class="mastnav-item mastnav-item-horizontal">
      <i class="icons-support icon-size-1x50"></i>
      <span class="font-weight-medium">Support</span>
    </a>
  </div>
</nav>
<div class="actionbar">
  <div class="actionbar-head">
    <h1>Titre section</h1>
    <ul class="toolbar mb-0">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-secondary">Action</button>
      </li>
    </ul>
  </div>
  <ul class="navtabs mb-0">
    <li class="navtabs-item pr-4">
      <a href="#" class="active pt-1 pb-3">Titre onglet</a>
    </li>
    <li class="navtabs-item pr-4">
      <a href="#" class="pt-1 pb-3">Titre onglet</a>
    </li>
    <li class="navtabs-item pr-4">
      <a href="#" class="pt-1 pb-3">Titre onglet</a>
    </li>
  </ul>
</div>
<main div class="mastcontainer">
  <p>Content</p>
</main>
