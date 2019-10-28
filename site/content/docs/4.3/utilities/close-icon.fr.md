---
layout: docs
title: Icône de fermeture
description: Utilisez une icône de fermeture générique pour faire disparaître des éléments que les modaux et les alertes.
group: utilities
toc: true
---
**Assurez-vous d'inclure le texte nécessaire aux lecteurs d'écran**, comme nous l'avons fait avec l'attribut `aria-label`.

{{% example html %}}
<button type="button" class="close" aria-label="Close">
  <span aria-hidden="true">&times;</span>
</button>
{{% /example %}}
