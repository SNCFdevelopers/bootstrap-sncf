---
layout: docs
title: Visibilité
description: Contrôlez la visibilité, sans modifier l'affichage `display`, avec les classes utilitaires dédiées à celle-ci.
group: utilities
---

Définissez la visibilité `visibility` des éléments avec ces classes utilitaires. Elles ne modifient absolument pas la valeur de `display` et ne perturbent pas la mise en page ou la disposition — les éléments `.invisible` prennent donc toujours leur « place » dans la page. Le contenu sera masqué à la fois visuellement et pour les technologies d'assistances comme les lecteurs d'écran.

Appliquez la classe `.visible` ou `.invisible` selon votre besoin.

{{< highlight html >}}
<div class="visible">...</div>
<div class="invisible">...</div>
{{< /highlight >}}

{{< highlight scss >}}
// Class
.visible {
  visibility: visible !important;
}
.invisible {
  visibility: hidden !important;
}
{{< /highlight >}}
