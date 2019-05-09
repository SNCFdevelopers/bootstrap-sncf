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

## v4.0.0

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
- [Favicon](/docs/4.0/content/favicon/) & how to use added

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
