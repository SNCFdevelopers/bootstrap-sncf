---
layout: docs
title: Versions, changelog
description: Liste des versions et changements specifiques au fork SNCF de Bootstrap.
group: about
toc: true
---

{{% callout info %}}
  Les numéros de versions suivent les versions originales de Bootstrap, suivies du numéro de révision SNCF liée à cette version.
  Par exemple, **v{{% param current_version %}} r{{% param sncf_version %}}** donne :

  - révision SNCF **n°{{% param sncf_version %}}**
  - de Bootstrap en version **v{{% param current_version %}}**

  À chaque changement de version de Bootstrap, la révision SNCF repasse à r0.
{{% /callout %}}

## v4.3.1

### Révision 4 _28/10/2019_
- Correction bug Select Additionnal input
- Correction bug positionnement des checkbox **MIGRATION NÉCESSAIRE** List-group, tables : il faut ajouter la classe `custom-checkbox-alone` au parent de `<input type="checkbox">`
- Ajout d'un sélecteur de mois/année dans le picker
- Mise à jour documentation analytics
- La documentation est générée avec HUGO désormais
- Traduction française

{{% callout info %}}
  La traduction française du changelog antérieur à celle de la documentation ne nous a pas semblé pertinente.
  Si jamais vous aviez néanmoins besoin que celle-ci soit réalisée, n'hésitez pas à nous en parler.
{{% /callout %}}

### Revision 3 _15/10/2019_
- Added Select Native (without javascript)

### Revision 2 _26/09/2019_
- Added style & main in package.json for NPM

### Revision 1 _18/07/2019_
- Added SNCF's guidelines on [Accessibility page](/fr/docs/{{% param docs_version %}}/getting-started/accessibility)
- Added SNCF's guidelines on [new Analytics page](/fr/docs/{{% param docs_version %}}/getting-started/analytics-tracking)
- Added unminified versions of CSS & JS in releases (zip, npm)
- Added "no external" version of JS bundle
- Corrected `.min.` filename for documentation's CSS & JS
- Some other minor corrections

### Revision 0 _08/07/2019_
- Added flags pictures (svg) for languages links (french, english & german)
- Added switches for hiding source code + global switch
- Added new settings menu for darkmode & hidesource
- Some very minors corrections & adjustements

### Bootstrap original patches
Major overhaul with original Bootstrap's patches. Here is a non-exhaustive list with major features/corrections, only thoses compatibles with SNCF's Design (although all code is always present for compatibility issues).

- Security fixes (see ship lists below for more details)
- Added new `.flex-fill`, `.flex-grow-*`, and `.flex-shrink-*` utilities.
- Added new `.text-monospace` utility.
- `.form-controls` now have a fixed height to compensate for differences in computed height across different types. This also fixes some IE alignment issues.
- Added new negative margin utility classes (e.g., `.mb-n3`). These rad new classes not only allow you more control over your general spacing needs, but also allow you to create responsive grid gutters at each breakpoint.
- Added `.modal-xl` modifier class for our modals.
- Added `.text-break` utility for applying `word-break: break-word`
- Added `.modal-dialog-scrollable` modifier class for scrolling content within a modal.
- img-retina, invisible, float, and size mixins are now deprecated and will be removed in v5.

**Original Bootstrap's incremental ship lists**

- [v4.3.1](https://github.com/twbs/bootstrap/issues/27893)
- [v4.2.0](https://github.com/twbs/bootstrap/issues/26952)
- [v4.1.3](https://github.com/twbs/bootstrap/issues/26867)
- [v4.1.2](https://github.com/twbs/bootstrap/issues/26423)
- [v4.1.1](https://github.com/twbs/bootstrap/issues/25971)
- [v4.1.0](https://github.com/twbs/bootstrap/issues/25375)


## v4.0.0

### Revision 6 _06/06/2019_
General

- Added [Métier's signatures]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/layout/navbars#use-metier-signature-logos) for navbar
- Added [icons-rotate](/fr/docs/{{% param docs_version %}}/components/icons#rotation) for correct alignement of sort icon in table heading
- Updated [colors page](/fr/docs/{{% param docs_version %}}/utilities/colors) with all variants
- Corrected lots of cursors issues


### Revision 5 _24/05/2019_
General

- Added [Dark mode](/fr/docs/{{% param docs_version %}}/layout/dark-mode)

Documentation

- Communication's Footer is in layout tab

#### Migration guide

{{% callout warning %}}

#### Please apply theses modifications in your project if you're coming from version prior to v4.0.0-r5
Some of markup has to be changed, to ensure your project will correctly be displayed in dark mode style, please follow thoses simples indications (we've essentially changed `bg-light` or `text-white` for some components to ensure that color will change with each of CSS files, so you won't have to change your HTML markup when going between light or dark modes)

- [input-group](/fr/docs/{{% param docs_version %}}/components/input-group) : remove `text-right` in _Button and select addons_ section
- [popover]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/popovers) : add `class="btn btn-link"`

**Design métier**

- [alert]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/alerts) : remove `text-white` from `<h2>`
- [charts]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/charts) : add `data-gridcolor="rgb(51,51,51,1)"` if you want to change grid color behind charts
- [list-double-columns]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/list-group) : replace `bg-light` by `list-group-double-panel-title`
- [list-group]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/list-group) : remove `bg-light`
- [sami]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/sami) : ordering colors have changed
- [table-group]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/content/tables#table-with-groups), [tables]({{% param url_metier %}}/fr/docs/{{% param docs_version %}}/components/alerts) : header first case should be `<th>` instead of `<td>` when checkbox inside

**Design communication**

- [carousel]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/components/carousel) : `bg-light` becomes `bg-carousel`
- [contact]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/components/edito#contact) : `bg-light` becomes `edito-contact-bg`
- [edito]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/components/edito) : `bg-light` becomes `edito-push-highlight-bg`\\
  remove `text-gray500` in header
- [navigation extern example]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/examples/navigation) : remove `bg-white` in `mastcontent`\\
  remove `text-white` in `<h3>`
- [navs/actionbar]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/layout/navs#actionbar) : remove all `text-white` from `<h3>`
- [packshot]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/components/edito#packshot) : `bg-light` becomes `edito-packshot`\\
  remove `text-gray500` in header `<h3>`
- [vignette]({{% param url_communication %}}/fr/docs/{{% param docs_version %}}/components/vignette) : `bg-white` becomes `vignette-bg`\\
  remove `text-gray500` in header `<h3>`

{{% /callout %}}

### Revision 4 _09/05/2019_
General

- Added [NPM Package](https://www.npmjs.com/org/sncf) automatic delivery
- Added [GitHub Release](https://github.com/SNCFdevelopers/bootstrap-sncf/releases) automatic delivery
- End of accessibility corrections

Corrections

- Restored datetimepicker native on portable devices
- Dropdown menu forced down on mobile breakpoints
- Some security corrections on dependencies
- As usual, lots of minor corrections and minor doc updates (see issues)

### Revision 3 _02/04/2019_

General

- Once again, lots of minors corrections & enhancements for accessibility
- Minor cosmetics or docs updates

Corrections

- Added IE11 compatibility fix and howto
- Vertical alignement of icons in Buttons Links
- Translation of Graphic Boards

### Revision 2 _18/03/2019_
General

- Lots (LOTS !) of minors corrections & enhancements for accessibility

Docs

- Search activated (by [Algolia](https://www.algolia.com/))
- Lots of minors corrections for accessibility
- [Favicon](/fr/docs/4.3/content/favicon/) & how to use added

Corrections

- Charts : vertical line on hover, and many others improvements
- DateTime Picker : Time is visible with date when popup fired
- Design Métier : Mastheader dropdown : mobile version corrected
- IE11 compatibility fixed
- Select : asynchrone loading fixed
- Design Métier : Tabs : mobile version fixed

And many other minor corrections (please consult [list of closed issues](https://github.com/SNCFdevelopers/bootstrap-sncf/issues?q=is%3Aissue+is%3Aclosed) or [commits](https://github.com/SNCFdevelopers/bootstrap-sncf/commits/master) for more details).


### Revision 1 _27/06/2018_

Initial version forked from original Bootstrap.
