---
layout: docs
title: Darkmode
description: Darker theme of all components & examples.
group: layout
toc: true
---

# Technical implementation

Bootstrap SNCF distribution includes two CSS files :
- `bootstrap-sncf.min.css`
- `bootstrap-sncf.darkmode.min.css`

> They are automatically generated at compilation time.

You can use one of thoses for your project, but **not together**: each file includes all SNCF's Bootstrap, one with the light, standard theme, one with the dark side of the same design.

You can _switch_ between the two versions with native method (Firefox only) or a bit of javascript, see below.

## CSS, HTML

{% include darkmode-{{ site.doc_theme }}-navbar-example.md %}

## Native browser implementation
The simplest method is to use [W3C recommandations](https://www.w3.org/Style/Examples/007/alternatives.en.html).
Add the following lines in your project :
```html
<link title="Light mode" href="bootstrap-sncf.min.css" rel="stylesheet">
<link title="Dark mode" href="bootstrap-sncf.darkmode.min.css" rel="stylesheet alternate">
```
On Opera, Internet Explorer and Firefox you can find the styles under the “View” menu, while Chrome requires an extension.

Yes, as simple as it sounds !

## JS
{% callout info %}
The following approach is not a reference but a proposal for implementing darkmode switching in your project.
Especially if you design with _single page_ model, you could not need to save value of darkmode switch.
{% endcallout %}

First, we have to init and choose which CSS file we've to load and test if darkmode has been chosen by the past.
If note, the default value will be classic version. Please note that the following code needs to be placed inside `<head>` tags to not suffer from [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).

```js
initDarkmode()

function initDarkmode() {
  const mode = localStorage.getItem('bootstrap-sncf-css-name')
  if (mode === 'dark') {
    document.write('<link rel="stylesheet" type="text/css" title="Mode sombre" name="dark" href="/bootstrap-sncf.darkmode.min.css" id="activecss">')
    document.write('<link rel="stylesheet alternate" type="text/css" title="Style classique" name="light" href="/bootstrap-sncf.min.css" id="inactivecss">')
  }
  else {
    document.write('<link rel="stylesheet" type="text/css" title="Style classique" name="light" href="/bootstrap-sncf.min.css" id="activecss">')
    document.write('<link rel="stylesheet alternate" type="text/css" title="Mode sombre" name="dark" href="/bootstrap-sncf.darkmode.min.css" id="inactivecss">')
  }
}
```

After that, insert a button, link, to toggle light or dark mode for example with `darkmode-btn` id, and the following JS code will change href between `stylesheet` and `stylesheet alternate` links. Ideally, please use design implementation we've chosed for each of SNCF's variant (Communication or Métier).

To keep user's choice, you can record it in a _local storage_ object and request it's value at the next page loading.

```js
document.getElementById('darkmode-btn').addEventListener('click', () => {
  toggleDarkmode()
})

function toggleDarkmode() {
  const activecss = document.getElementById('activecss')
  const inactivecss = document.getElementById('inactivecss')
  const oldhref = activecss.getAttribute('href')
  const newhref = inactivecss.getAttribute('href')
  const name = inactivecss.getAttribute('name')
  activecss.setAttribute('href', newhref)
  inactivecss.setAttribute('href', oldhref)
  localStorage.setItem('bootstrap-sncf-css-name', name)
}
```
