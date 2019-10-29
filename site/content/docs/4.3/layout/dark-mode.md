---
layout: docs
title: Dark mode
description: Darker theme of all components & examples.
group: layout
toc: true
---
## Why a dark mode ?
The dark mode was created from a double wish.

1. **An answer of a job use case**\\
Some of our agents works in low light environments, whether indoors or outdoors.
Dark mode makes readability more easier in this environment.

2. **Make our Design an Ethical Design**\\
If the ethics notion is certainly much bigger than simply limiting the energy consumption of internal screens to the company, it’s already a first step.
We want to commit ourselves, as other entities do, to the energy savings achieved by the company, by fully adhering to our motto : "bringing freedom to everyone to circulate easily while preserving the planet".\\
Beyond that, this dark mode is an opportunity that the greatest interface designers and companies had taken to respond to this new demand from the user.
This use would allow the user to consume 6 times less battery than a white screen (even if the white is better for readability). An experiment was realized on Youtube, proving that a dark active mode (100% brightness) allowed to consume 60% less energy. Less energy spent, less recharge, a battery with a longer life, a virtuous circle.


## An accessible approach
If the realization of dark mode is obvious, answering a job use case, it fits even more in a Ethical Design logic, because fully accessible.
The colors have been redesigned in this sense : some are unchanged, others have been adapted (thinned or darkened) and finally others have simply been removed because they are not accessible and can’t be adapted.

Beware, dark mode should not be confused with the contrasts reversion, which responds perfectly to an accessibility logic and need. We are talking about a "Dark Design", a suitable design as mentioned above.


## How does this translate ?
In a global view, the adaptations in a Design term which have been realized are the following ones.

### Background
The white background `fff` of the page becomes a black background `000`.\\
The colored backgrounds (flat colors) are unchanged.\\
The _cool gray_ gray background 1 `f2f2f2` on a white background becomes a carbon background `333`.\\
The carbon background `333` on a white background becomes a _cool gray_ gray background 1 `f2f2f2`.

### Nav
The main navigation `fff` passes on a carbon background `000`.\\
The color of the galactic bar and footer on carbon background `333` is unchanged.

### Texts & Links
The texts in the different shades of gray, from carbon `333` to cool gray 1 `f2f2f2` on a white background change to cool gray 3 `D7D7D7`.\\
On the other hand, the white texts on the backgrounds of the different hues of gray go black `000`.

The primary blue text `0088ce` on a white background becomes `00a1ff` on dark backgrounds.\\
The orange text `e05206` on a white background becomes `ff6e20` on dark backgrounds.\\
The text blue duck `009aa6` on a white background becomes `00abb9` on dark backgrounds.

The yellow saffron text `ffb612` on a white background is unchanged on dark backgrounds.\\
The green anise text `d2e100` on a white background is unchanged on dark backgrounds.\\
The apple green text `82be00` on a white background is unchanged on dark backgrounds.

The purple text `6E1E78` on a white background would not be accessible on a black background 8% `191919`. This text changes to primary blue `00a1ff`.\\
The text plum `a1006b` on a white background would not be accessible on black background 8% `191919`. This text changes to primary blue `00a1ff`.\\
The raspberry text `cd0037` on a white background would not be accessible on a black background 8% `191919`. This text changes to primary blue `00a1ff`.

When a block uses a red help text, the whole block will remain unchanged (background and color of the text).

### Buttons & Tags
The colors of the buttons are based on the main color used and will be the same as those defined for the texts.\\
The carbon button changes to cool gray 1 `f2f2f2`.\\
The text of the button will always be black `000`.

### Fields
The white fields `fff` on a _cool gray_ gray background 1 `f2f2f2` change to black `000` on a carbon background `333`.\\
The cool gray gray 1 `f2f2f2` white background `#fff` fields change to carbon `333` on a black background `000`.

_NB: other adaptations have been made at the margin for particular cases, these are integrated in this version_


## An "Alpha" version
An "Alpha" version is a primary version, launched in a logic of experimentation.
It doesn’t have the vocation to be as integrated as possible. That is why we need you : test it on your use cases, that we invite you to let us know on Github or by email at [design.fab@sncf.fr](mailto:design.fab@sncf.fr?subject=Bootstrap - Dark mode) with "Bootstrap - Dark mode" subject.

This version is available on our Bootstrap : Communication & Métier.
We invite you to consult all the technical documentation below to implement the dark mode, and enable its activation on your interface.

We have already begun to think about improving this feature : should we leave it as it is, leaving the user to activate it or not ? Should we facilitate its visibility during specific time slots and offer it on the interface (like cookies banner) or even activate it by default ?
Don’t hesitate to give us your opinion on the subject by mail on [design.fab@sncf.fr](mailto:design.fab@sncf.fr?subject=Bootstrap - Dark mode) or on the dedicated [Yammer page](https://www.yammer.com/sncf.fr/#/threads/inGroup?type=in_group&feedId=11125103).

Feel free to give us your feedback on this feature by giving us your feedback on Usabilla (the right tab to the right of the interface).


## Technical implementation
Bootstrap SNCF distribution includes two CSS files (normal & minified):

- `bootstrap-sncf.(min.)css`
- `bootstrap-sncf.darkmode.(min.)css`

> They are automatically generated at compilation time.

You can use one of thoses for your project, but **not together**: each file includes all SNCF's Bootstrap, one with the light, standard theme, one with the dark side of the same design.

You can _switch_ between the two versions with native method (Firefox only) or a bit of javascript, see below.

### CSS, HTML

{{< includenav.inline >}}
{{- if eq .Site.Params.doc_flavour "extern" -}}
  For <em>Design Communication</em>, the darkmode switch should be inside <em>accessibility component</em> with others switches. This navbar example contains a working link, try it now !
{{- else -}}
  For <em>Design Métier</em> The switch should be inside dropdown menu in top right corner from the navbar, in the personal menu. This navbar example contains a working link, try it now !
{{- end -}}
{{- $navHTML := (printf "%s%s%s" "darkmode-" .Site.Params.doc_flavour "-navbar-example.html") -}}
{{ partial $navHTML }}
{{< /includenav.inline >}}

### Native browser implementation
The simplest method is to use [W3C recommandations](https://www.w3.org/Style/Examples/007/alternatives.en.html).
Add the following lines in your project :
```html
<link title="Light mode" href="bootstrap-sncf.min.css" rel="stylesheet">
<link title="Dark mode" href="bootstrap-sncf.darkmode.min.css" rel="stylesheet alternate">
```
On Opera, Internet Explorer and Firefox you can find the styles under the “View” menu, while Chrome requires an extension.

Yes, as simple as it sounds !

### JS
{{% callout info %}}
The following approach is not a reference but a proposal for implementing dark mode switching in your project.
Especially if you design with _single page_ model, you could not need to save value of dark mode switch.
{{% /callout %}}

First, we have to init and choose which CSS file we've to load and test if dark mode has been chosen by the past.
Else, the default value will be classic version. Please note that the following code needs to be placed inside `<head>` tags to not suffer from [FOUC](https://en.wikipedia.org/wiki/Flash_of_unstyled_content).

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

After that, insert a button, link, to toggle light or dark mode for example with `darkmode-btn` id, and the following JS code will change href's attribute value between `stylesheet` and `stylesheet alternate` links. Ideally, please use design implementation we've chosed for each of SNCF's variant (Communication or Métier).

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
