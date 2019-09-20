---
layout: docs
title: Barres de navigation
group: layout
toc: true
url: /fr/docs/4.3/layout/navbars/
---

## Barre galactique

Par défaut, la page comporte un en-tête, une barre de navigation principale, une en-tête de section et une zone de contenu. L’en-tête contient le logo du site Web, une fonction de recherche, des notifications et un menu de compte d’utilisateur. Le menu du compte utilisateur permet à l'utilisateur de gérer les paramètres du compte et/ou les préférences, et de se déconnecter.

{{< example html >}}
{{< includenav.inline >}}
{{ partial "darkmode-intern-navbar-example.html" }}
{{< /includenav.inline >}}
{{< /example >}}

### Utiliser les logos des signatures "métier"

{{% callout warning %}}
Le logo SNCF doit être utilisé par défaut pour toutes les applications « métier », notamment pour _SNCF Mobilités_.
{{% /callout %}}

Vous pouvez utiliser le logo SNCF avec la signature « métier ». Dans ce cas, merci de préférer les versions monochromes pour des raisons d'accessibilité — la couleur de police des signatures est le violet ce qui le rend difficilement lisible sur le fond _carbon_.

Pour référence, vous pouvez consulter toutes les règles concernant les logos [sur cette page du site de l'identité SNCF](https://www.sncf.com/fr/groupe/marques/sncf/logo-sncf), et [ici](https://www.sncf.com/fr/groupe/marques/sncf/signatures-metiers) pour les signatures « métier ».

Les logos des signatures métier sont intégrées dans Bootstrap SNCF de façon à parfaitement s'intégrer dans la balise `mastheader` de la barre de navigation :

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

## Barre de navigation verticale

Il est possible d'utiliser une barre principale de navigation — un menu latéral gauche — pour naviguer entre les sections principales d'une application. Nous recommandons l'usage du mode paysage pour les tablettes lorsque la navigation se fait dans une arborescence complexe.

{{% callout info %}}
Pro-tip : réduisez la taille de la fenêtre de votre navigateur ou utilisez les vues « mobiles » (<kbd>CTRL</kbd> + <kbd>MAJ</kbd> + <kbd>M</kbd> sur Firefox) pour vous rendre compte de l'état horizontal de cette barre de navigation verticale lorsque la largeur est réduite, ou vision mobile.
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
