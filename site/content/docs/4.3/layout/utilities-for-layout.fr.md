---
layout: docs
title: Outils de mise en page
description: Bootstrap inclut des dizaines de classes d’utilitaires permettant d’afficher, de masquer, d’aligner et d’espacer le contenu pour un développement plus rapide, adapté aux mobiles et adaptatif.
group: layout
toc: true
---

## Modifier `display`

Utilisez nos [outils d'affichage]({{< docsref "/utilities/display" >}}) pour basculer de manière adaptative les valeurs communes pour la propriété `display`. Mélangez-les avec notre système de grille, le contenu ou composants pour afficher/masquer ceux-ci suivant chaque type d'écran.


## Options _flexbox_

Bootstrap 4 est construit avec flexbox, cependant tous les éléments `display` n'ont pas été réglés sur `display: flex` car cela ajouterait beaucoup de corrections supplémentaires inutiles, et risquerait de provoquer des comportements inattendus sur certains navigateurs. La plupart de nos composants sont construit avec flexbox.

Si vous avez besoin d'ajouter `display: flex` à un élément, vous pouvez le faire en ajouter la classe `.d-flex` (ou l'une de ses variantes adaptatives comme par exemple `.d-sm-flex`). L'ajout de cette classe, ou de la valeur à `display` sera nécessaire si vous vouliez bénéficier de nos [outils flexbox]({{< docsref "/utilities/flex" >}}) pour le dimensionnement, l'alignement, l'espacement, et plus encore.

## Marges extérieures et intérieures

Utilisez les [outils d'espacements]({{< docsref "/utilities/spacing" >}}) `margin` et `padding` pour contrôler comme les éléments et composants sont placés et dimensionnés. Bootstrap 4 inclut une échelle sur 5 niveaux pour ces élements, basé sur la valeur par défaut de `1rem`  de la variable `$spacer`. Choisissez des valeurs pour tous les types d'écran (par exemple `.mr-3` pour `margin-right: 1rem`), ou choisissez des variantes adaptatives pour cibler certains type d'écrans spécifiques (par exemple `.mr-md-3` pour `margin-right: 1rem` débutant à partir du _breakpoint_ `md`).

## Visibilité

Quand modifier la valeur de `display` n'a pas besoin d'être modifiée, vous pouvez basculer la visbilité d'un élément grâce à nos [outils de contrôle de la visibilité]({{< docsref "/utilities/visibility" >}}). Ainsi les éléments invisibles continueront d'affecter la mise en page, mais resteront invisibles aux utilisateurs.
