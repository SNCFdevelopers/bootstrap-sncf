---
layout: docs
title: Navbars
description: Documentation and examples for Bootstrap's powerful, responsive navigation header, the navbar. Includes support for branding, navigation, and more, including support for our collapse plugin.
group: layout
toc: true
url: /docs/4.3/layout/navbars/
---

## Galactic bar

By default, the page has a header, a main navbar, a section header and a content area. The header contains the website’s logo, a search function, notifications and a user account menu. The user account menu lets the user manage account settings and/or preferences and log out.

{{< example html >}}
{{< includenav.inline >}}
{{ partial "darkmode-intern-navbar-example.html" }}
{{< /includenav.inline >}}
{{< /example >}}

### Use "métier" signature logos

{{% callout warning %}}
SNCF's logo should be used by default for all "métier" applications, especially for _SNCF Mobilités_.
{{% /callout %}}

You could use SNCF's logos with "métier" signature. In this case, please use monochromatic logo versions for accessibility reasons. Indeed, "métier" signature is violet colored and will not be visible on carbon background.

For reference, you can consult all the rules about using logos [on this page](https://www.sncf.com/fr/groupe/marques/sncf/logo-sncf), and [here](https://www.sncf.com/fr/groupe/marques/sncf/signatures-metiers) for "métier" signatures.

We've added "métier" signatures logos to perfectly fit into `mastheader` navbar :

<div class="bd-example">
  <div class="row">
    <div class="col-md-4 col-sm-6 mb-2">
      <label for="mastheader-immobilier">SNCF Immobilier</label>
      <div class="mastheader" id="mastheader-immobilier">
        <div class="mastheader-logo">
          <a href="/docs">
            <img alt="SNCF" src="/assets/img/brand/sncf-immobilier-logo.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-2">
      <label for="mastheader-logistics">SNCF Logistics</label>
      <div class="mastheader" id="mastheader-logistics">
        <div class="mastheader-logo">
          <a href="/docs">
            <img alt="SNCF" src="/assets/img/brand/sncf-logistics-logo.png" />
          </a>
        </div>
      </div>
    </div>
    <div class="col-md-4 col-sm-6 mb-2">
      <label for="mastheader-reseau">SNCF Réseau</label>
      <div class="mastheader" id="mastheader-reseau">
        <div class="mastheader-logo">
          <a href="/docs">
            <img alt="SNCF" src="/assets/img/brand/sncf-reseau-logo.png" />
          </a>
        </div>
      </div>
    </div>
  </div>
</div>
{{% highlight html %}}
<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="/assets/img/brand/sncf-immobilier-logo.png" />
    </a>
  </div>
  ...
</div>

<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="/assets/img/brand/sncf-logistics-logo.png" />
    </a>
  </div>
  ...
</div>

<div class="mastheader">
  <div class="mastheader-logo">
    <a href="/docs">
      <img alt="SNCF" src="/assets/img/brand/sncf-reseau-logo.png" />
    </a>
  </div>
  ...
</div>
{{% /highlight %}}

## Vertical Nav

Readers can use the main navbar—a menu on the left-hand side of the website—to navigate to the main sections of the application. We recommend blocking landscape mode for tablets when site navigation is complex due to a deep tree structure.

{{% callout info %}}
Pro-tip : reduce your browser's size or use mobile utilities to see the horizontal state of _vertical nav_ in mobile mode.
{{% /callout %}}

{{% example html %}}
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
{{% /example %}}

