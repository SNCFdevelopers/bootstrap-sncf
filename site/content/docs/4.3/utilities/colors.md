---
layout: docs
title: Colors
description: Convey meaning through color with a handful of color utility classes. Includes support for styling links with hover states, too.
group: utilities
toc: true
---

## Color

Contextual text classes also work well on anchors with the provided hover and focus states. **Note that the `.text-white` and `.text-muted` class has no link styling.**

<div class="row">
<div class="col-lg-6">
<p class="h3">By theme</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "theme-colors") }}
<p class="text-{{ .name }}{{ if eq .name "light" }} bg-dark{{ end }}">.text-{{ .name }}</p>{{ end }}
{{< /colors.inline >}}
<p class="text-muted">.text-muted</p>
<p class="text-white bg-dark">.text-white</p>
{{< /example >}}
</div>
<div class="col-lg-6">
<p class="h3">By color name</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "colors") }}
<p class="text-{{ .name }}{{ if eq .name "white" }} bg-dark{{ end }}">.text-{{ .name }}</p>{{ end }}
{{< /colors.inline >}}
<p class="text-muted">Muted link</p>
{{< /example >}}
</div>
</div>

## Background color

Similar to the contextual text color classes, easily set the background of an element to any contextual class. Anchor components will darken on hover, just like the text classes. Background utilities **do not set `color`**, so in some cases you'll want to use `.text-*` utilities.

<div class="row">
<div class="col-lg-6">
<p class="h3">By theme</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} {{ if or (eq .name "light") (eq .name "warning") }}text-dark{{ else }}text-white{{ end }}">.bg-{{ .name }}</div>{{ end }}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
{{< /example >}}
</div>
<div class="col-lg-6">
<p class="h3">By color name</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "colors") }}
<div class="p-3 mb-2 bg-{{ .name }} {{ if or (eq .name "white") (eq .name "yellow") (eq .name "green") (eq .name "teal") }}text-dark{{ else }}text-white{{ end }}">.bg-{{ .name }}</div>{{ end }}
{{< /colors.inline >}}
{{< /example >}}
</div>
</div>
