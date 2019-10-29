---
layout: docs
title: Figures
description: Documentation et exemples d’affichage d’images et de texte associés avec le composant figure de Bootstrap.
group: content
---

Chaque fois que vous devez afficher un élément de contenu, comme une image avec une légende facultative, envisagez d'utiliser `<figure>`.

Utilisez les classes `.figure`, `.figure-img` et `.figure-caption` incluses pour fournir des styles de base aux éléments HTML5 `<figure>` et `<figcaption>`. Les images en _figures_ n’ayant pas de taille explicite, assurez-vous d’ajouter la classe `.img-fluid` à `<img>` pour le rendre _responsive_.

{{< example >}}
<figure class="figure">
  {{< placeholder width="400" height="300" class="figure-img img-fluid rounded" >}}
  <figcaption class="figure-caption">Une légende pour l'image ci-dessus.</figcaption>
</figure>
{{< /example >}}

Aligner la légende des figures se fait très facilement grâce à nos [classes utilitaires de texte]({{< docsref "/utilities/text#text-alignment" >}}).

{{< example >}}
<figure class="figure">
  {{< placeholder width="400" height="300" class="figure-img img-fluid rounded" >}}
  <figcaption class="figure-caption text-right">Une légende pour l'image ci-dessus.</figcaption>
</figure>
{{< /example >}}
