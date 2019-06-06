---
layout: docs
title: Versions, changelog
description: List of versions & changes specific to SNCF's Bootstrap fork.
group: about
toc: true
---

{% callout info %}
  Versions numbers will follow original Bootstrap versions, followed by SNCF's revision of this same version.<br>
  For example, **v{{ site.current_version }} r{{ site.sncf_version }}** is :
  - SNCF's **revision {{ site.sncf_version }}**
  - of Bootstrap **v{{ site.current_version }}**

  When changing Bootstrap version, SNCF revision will always reset to r1.
{% endcallout %}

## v4.3.0

### Revision 5 _24/05/2019_
General
- Added [Dark mode]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/dark-mode/)

Documentation
- Communication's Footer is in layout tab

{% callout warning %}
### Migration guide
Some of markup has to be changed, to ensure your project will correctly be displayed in dark mode style, please follow thoses simples indications (we've essentially changed `bg-light` or `text-white` for some components to ensure that color will change with each of CSS files, so you won't have to change your HTML markup when going between light or dark modes)

- [input-group]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/input-group/) : remove `text-right` in _Button and select addons_ section
- [popover]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/popovers/) : add `class="btn btn-link"` 

**Design métier**
- [alert]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/alerts/) : remove `text-white` from `<h2>`
- [charts]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/charts/) : add `data-gridcolor="rgb(51,51,51,1)"` if you want to change grid color behind charts
- [list-double-columns]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/list-group/) : replace `bg-light` by `list-group-double-panel-title`
- [list-group]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/list-group/) : remove `bg-light`
- [sami]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/sami/) : ordering colors have changed
- [table-group]({{ site.baseurl }}/docs/{{ site.docs_version }}/content/tables/#table-with-groups), [tables]({{ site.baseurl }}/docs/{{ site.docs_version }}//components/alerts/) : header first case should be `<th>` instead of `<td>` when checkbox inside

**Design communication**
- [carousel]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/carousel/) : `bg-light` becomes `bg-carousel`
- [contact]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/edito/#contact) : `bg-light` becomes `edito-contact-bg`
- [edito]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/edito/) : `bg-light` becomes `edito-push-highlight-bg`\\
  remove `text-gray500` in header
- [navigation extern example]({{ site.baseurl }}/docs/{{ site.docs_version }}/examples/navigation/) : remove `bg-white` in `mastcontent`\\
  remove `text-white` in `<h3>`
- [navs/actionbar]({{ site.baseurl }}/docs/{{ site.docs_version }}/layout/navs/#actionbar) : remove all `text-white` from `<h3>` 
- [packshot]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/edito/#packshot) : `bg-light` becomes `edito-packshot`\\
  remove `text-gray500` in header `<h3>`
- [vignette]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/vignette/) : `bg-white` becomes `vignette-bg`\\
  remove `text-gray500` in header `<h3>`
{% endcallout %}

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
- [Favicon](/docs/4.3/content/favicon/) & how to use added

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
