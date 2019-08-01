---
layout: docs
title: Icons
description: Examples and usage guidelines for icons.
group: components
toc: true
---

## Markup
{{% example html %}}
<i class="icons-checked icons-size-30px" aria-hidden="true"></i>
{{% /example %}}

## List

<div class="row mt-4">
{{< icons.inline >}}
{{- range (index .Site.Data "icons") -}}
  <div class="col-6 col-sm-4 col-md-3 col-lg-2 mb-3">
    <div class="text-center mb-2">
      <i class="icons-{{ . }} icons-size-50px" aria-hidden="true"></i>
    </div>
    <p class="text-center">icons-{{ . }}</p>
  </div>
{{- end -}}
{{< /icons.inline >}}
</div>

## Sizing based on base font-size

{{% example html %}}
<i class="icons-checked icons-size-x5" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-x75" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-1x" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-1x25" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-1x5" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-1x75" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-2x" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-3x" aria-hidden="true"></i>
{{% /example %}}

## Specifics sizes

{{% example html %}}
<i class="icons-checked icons-size-30px" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-50px" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-66px" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-90px" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-96px" aria-hidden="true"></i>
{{% /example %}}

{{% example html %}}
<i class="icons-checked icons-size-140px" aria-hidden="true"></i>
{{% /example %}}

## Rotation

{{% callout warning %}}
_Rotation_ should only be used when stricly unavoidable, for example, when you want to signal inverse sort order of a list in a table.
Each use case has to be carefully weighted before using rotation.

_Pro tip_ : in case of doubt, don't rotate it ! [Contact us](mailto:design.fab@sncf.fr) for any advice.
{{% /callout %}}

{{% example html %}}
<i class="icons-sort" aria-hidden="true"></i>
<i class="icons-sort icons-rotate-180" aria-hidden="true"></i>
{{% /example %}}

