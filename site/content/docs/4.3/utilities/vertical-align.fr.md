---
layout: docs
title: Alignement vertical
slug: alignement-vertical
description: Changez facilement l'alignement vertical des éléments `inline`, `inline-block`, `inline-table`, et cellules d'une `table`.
group: utilities
---

Modifiez l'alignement d'éléments avec les utilitaires d'[alignement vertical](https://developer.mozilla.org/en-US/docs/Web/CSS/vertical-align). Veuillez noter que l'alignement vertical n'affecte que les éléments `inline`, `inline-block`, `inline-table`, et les cellules d'une `table`.

Choisissez entre `.align-baseline`, `.align-top`, `.align-middle`, `.align-bottom`, `.align-text-bottom`, et `.align-text-top` suivant vos besoins.

Avec des éléments `inline` :

{{< example >}}
<span class="align-baseline">baseline</span>
<span class="align-top">top</span>
<span class="align-middle">middle</span>
<span class="align-bottom">bottom</span>
<span class="align-text-top">text-top</span>
<span class="align-text-bottom">text-bottom</span>
{{< /example >}}

Avec les cellules d'une `table` :

{{< example >}}
<table style="height: 100px;">
  <tbody>
    <tr>
      <td class="align-baseline">baseline</td>
      <td class="align-top">top</td>
      <td class="align-middle">middle</td>
      <td class="align-bottom">bottom</td>
      <td class="align-text-top">text-top</td>
      <td class="align-text-bottom">text-bottom</td>
    </tr>
  </tbody>
</table>
{{< /example >}}
