---
layout: docs
title: Badges
description: Les indicateurs d'état ne sont pas interactifs. Ce sont des composants visuels qui communiquent par exemple le statut d'une liste et qui peuvent indiquer également le nombre d'éléments qu'elle contient.
group: components
toc: true
url: /fr/docs/4.3/components/badges/
---

## Exemple

{{% example html %}}
<span class="badge badge-secondary">New</span>
{{% /example %}}

## Variations contextuelles

Ajoutez l'une des classes mentionnées ci-dessous pour adapter l'apparence d'un badge.

{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "theme-colors") }}
<span class="badge badge-{{ .name }}">{{ .name | humanize }}</span>{{ end }}
{{< /colors.inline >}}
{{< /example >}}

{{% partial "callout-warning-color-assistive-technologies.fr.md" %}}
