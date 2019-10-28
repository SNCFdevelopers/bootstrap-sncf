---
layout: docs
title: Couleurs
description: Donnez du sens grâce aux couleurs avec des classes utilitaires prévues à cet effet. Cela inclut également le support des états au survol.
group: utilities
toc: true
---

## Couleurs

Les classes contextuelles de texte fonctionnement également bien sur les ancres avec les états de survol ou focus. **Notez que les classes `.text-white` et `.text-muted` n'ont pas de lien de style.**

<div class="row">
<div class="col-lg-6">
<p class="h3">Par thème</p>
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
<p class="h3">Par nom de couleur</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "colors") }}
<p class="text-{{ .name }}{{ if eq .name "white" }} bg-dark{{ end }}">.text-{{ .name }}</p>{{ end }}
{{< /colors.inline >}}
<p class="text-muted">Muted link</p>
{{< /example >}}
</div>
</div>

## Couleur de fond

À l'instar des couleurs contextuelles pour le texte, vous pouvez facilement définir le fond d'un élément avec ces classes contextuelles. Les composants d'ancre s'assombriront au survol, comme c'est le cas déjà pour les classes concernant le text. Ces classes **ne définissent pas la valeur de `color`**, donc dans certains cas vous devrez utiliser les classes utilitaires `.text-*`.

<div class="row">
<div class="col-lg-6">
<p class="h3">Par thème</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "theme-colors") }}
<div class="p-3 mb-2 bg-{{ .name }} {{ if or (eq .name "light") (eq .name "warning") }}text-dark{{ else }}text-white{{ end }}">.bg-{{ .name }}</div>{{ end }}
{{< /colors.inline >}}
<div class="p-3 mb-2 bg-white text-dark">.bg-white</div>
{{< /example >}}
</div>
<div class="col-lg-6">
<p class="h3">Par nom de couleur</p>
{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "colors") }}
<div class="p-3 mb-2 bg-{{ .name }} {{ if or (eq .name "white") (eq .name "yellow") (eq .name "green") (eq .name "teal") }}text-dark{{ else }}text-white{{ end }}">.bg-{{ .name }}</div>{{ end }}
{{< /colors.inline >}}
{{< /example >}}
</div>
</div>
