---
layout: docs
title: Icones
description: Exemples et guide d'utilisation des icones, pictogrammes.
group: components
toc: true
---

## Markup
{{% example html %}}
<i class="icons-checked icons-size-30px" aria-hidden="true"></i>
{{% /example %}}

## Liste

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

## Tailles basées sur la taille de la fontes

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

## Tailles spécifiques

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
La rotation ne doit être utilisée que lorsqu'elle est inévitable, par exemple, pour signaler un tri inverse d'une liste dans une table. Chaque utilisation de la rotation doit être correctement étudiée et justifiée.

_Pro tip_ : en cas de doute, pas de rotation ! Et [contactez-nous](mailto:design.fab@sncf.fr) si besoin qu'on vous accompagne
{{% /callout %}}

{{% example html %}}
<i class="icons-sort" aria-hidden="true"></i>
<i class="icons-sort icons-rotate-180" aria-hidden="true"></i>
{{% /example %}}
