---
layout: docs
title: Badges en français
slug: Badges
description: Status indicators and counters are not interactive. They are visual components that communicate the status of a list that communicate, for example, the status of a list and the number of items found in it.
group: components
toc: true
url: /docs/4.3/components/badge/
---

## Example

{{% example html %}}
<span class="badge badge-secondary">New</span>
{{% /example %}}

## Contextual variations

Add any of the below mentioned modifier classes to change the appearance of a badge.

{{< example html >}}
{{< colors.inline >}}
{{ range (index .Site.Data "theme-colors") }}
<span class="badge badge-{{ .name }}">{{ .name | humanize }}</span>{{ end }}
{{< /colors.inline >}}
{{< /example >}}

{{% partial "callout-warning-color-assistive-technologies.md" %}}
