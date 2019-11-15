---
layout: docs
title: Versions, changelog
description: List of versions & changes specific to SNCF's Bootstrap fork.
group: about
toc: true
---

{{% callout info %}}
  Versions numbers will follow original Bootstrap versions, followed by SNCF's revision of this same version.<br>
  For example, **v{{% param current_version %}} r{{% param sncf_version %}}** is :

  - SNCF's **revision {{% param sncf_version %}}**
  - of Bootstrap **v{{% param current_version %}}**

  When changing Bootstrap version, SNCF revision will always reset to r0.
{{% /callout %}}

## v4.3.1

### Revision 5 _15/11/2019_
- Corrected data-default-date format for picker (should be jj/mm/yyyy)
- Corrected favicons links **MANDATORY MIGRATION** replace `docs` by `brand` in asset's path for favicons (see docs for reference)

### Revision 4 _28/10/2019_
- Corrected bug Select Additionnal input
- Corrected bug checkbox **MANDATORY MIGRATION** List-group, tables : you must add `custom-checkbox-alone` class to `<input type="checkbox">` parent
- Added month/year chooser to datepicker
- Analytics doc updated
- Documentation build with HUGO
- French translation

### Revision 3 _15/10/2019_
- Added Select Native (without javascript)

### Revision 2 _26/09/2019_
- Added style & main in package.json for NPM

### Revision 1 _18/07/2019_
- Added SNCF's guidelines on [Accessibility page](/docs/{{% param docs_version %}}/getting-started/accessibility)
- Added SNCF's guidelines on [new Analytics page](/docs/{{% param docs_version %}}/getting-started/analytics-tracking)
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

- Added [Métier's signatures]({{% param url_metier %}}/docs/{{% param docs_version %}}/layout/navbars#use-metier-signature-logos) for navbar
- Added [icons-rotate](/docs/{{% param docs_version %}}/components/icons#rotation) for correct alignement of sort icon in table heading
- Updated [colors page](/docs/{{% param docs_version %}}/utilities/colors) with all variants
- Corrected lots of cursors issues


### Revision 5 _24/05/2019_
General

- Added [Dark mode](/docs/{{% param docs_version %}}/layout/dark-mode)

Documentation

- Communication's Footer is in layout tab

#### Migration guide

{{% callout warning %}}

#### Please apply theses modifications in your project if you're coming from version prior to v4.0.0-r5
Some of markup has to be changed, to ensure your project will correctly be displayed in dark mode style, please follow thoses simples indications (we've essentially changed `bg-light` or `text-white` for some components to ensure that color will change with each of CSS files, so you won't have to change your HTML markup when going between light or dark modes)

<<<<<<< HEAD:templates/docs/4.3/about/versions.md
- [input-group]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/input-group/) : remove `text-right` in _Button and select addons_ section
- [popover]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/popovers/) : add `class="btn btn-link"`
=======
- [input-group](/docs/{{% param docs_version %}}/components/input-group" >}}) : remove `text-right` in _Button and select addons_ section
- [popover]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/popovers" >}}) : add `class="btn btn-link"`
>>>>>>> trad-nico:site/content/docs/4.3/about/versions.md

**Design métier**

- [alert]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/alerts) : remove `text-white` from `<h2>`
- [charts]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/charts) : add `data-gridcolor="rgb(51,51,51,1)"` if you want to change grid color behind charts
- [list-double-columns]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/list-group) : replace `bg-light` by `list-group-double-panel-title`
- [list-group]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/list-group) : remove `bg-light`
- [sami]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/sami) : ordering colors have changed
- [table-group]({{% param url_metier %}}/docs/{{% param docs_version %}}/content/tables#table-with-groups), [tables]({{% param url_metier %}}/docs/{{% param docs_version %}}/components/alerts) : header first case should be `<th>` instead of `<td>` when checkbox inside

**Design communication**

- [carousel]({{% param url_communication %}}/docs/{{% param docs_version %}}/components/carousel) : `bg-light` becomes `bg-carousel`
- [contact]({{% param url_communication %}}/docs/{{% param docs_version %}}/components/edito#contact) : `bg-light` becomes `edito-contact-bg`
- [edito]({{% param url_communication %}}/docs/{{% param docs_version %}}/components/edito) : `bg-light` becomes `edito-push-highlight-bg`\\
  remove `text-gray500` in header
- [navigation extern example]({{% param url_communication %}}/docs/{{% param docs_version %}}/examples/navigation) : remove `bg-white` in `mastcontent`\\
  remove `text-white` in `<h3>`
<<<<<<< HEAD:templates/docs/4.3/about/versions.md
- [navs/actionbar]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/navs/#actionbar) : remove all `text-white` from `<h3>`
- [packshot]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/edito/#packshot) : `bg-light` becomes `edito-packshot`\\
=======
- [navs/actionbar]({{% param url_communication %}}/docs/{{% param docs_version %}}/layout/navs#actionbar) : remove all `text-white` from `<h3>`
- [packshot]({{% param url_communication %}}/docs/{{% param docs_version %}}/components/edito#packshot) : `bg-light` becomes `edito-packshot`\\
>>>>>>> trad-nico:site/content/docs/4.3/about/versions.md
  remove `text-gray500` in header `<h3>`
- [vignette]({{% param url_communication %}}/docs/{{% param docs_version %}}/components/vignette) : `bg-white` becomes `vignette-bg`\\
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
- [Favicon](/docs/{{% param docs_version %}}/content/favicon/) & how to use added

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
