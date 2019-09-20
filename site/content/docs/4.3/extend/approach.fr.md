---
layout: docs
title: Approche
description: Découvrez les principes directeurs, les stratégies et les techniques utilisés pour créer et gérer Bootstrap afin que vous puissiez plus facilement le personnaliser et l'étendre vous-même.
group: extend
toc: true
aliases:
  - "/docs/4.3/extend/"
---

Bien que les pages de démarrage fournissent une introduction au projet et à ce qu'il offre, le présent document est consacré à pourquoi nous faisons ce que nous faisons dans Bootstrap. Cela explique notre philosophie de construire le Web afin que d'autres puissent apprendre de nous, contribuer avec nous et nous aider à nous améliorer.

Vous voyez quelque chose qui ne sonne pas bien ou qui pourrait peut-être être mieux fait ? [Ouvrir une issue]({{<param repo>}}/issues/new)
— nous serions ravis d'en discuter avec vous.

## Sommaire

Nous allons approfondir chacun des points suivant :

- Les composants doivent être adaptatifs (_responsive_) et pensés pour le mobile (_mobile first_ !) en premier
- Les composants doivent être construits avec une classe de base puis étendus via des classes de modificateurs
- Les états des composants doivent obéir à une échelle commune de `z-index`
- Dans la mesure du possible, préférez une implémentation HTML et CSS au JavaScript
- Dans la mesure du possible, utilisez des utilitaires plutôt que des styles personnalisés
- Dans la mesure du possible, évitez d'imposer des exigences HTML strictes (sélecteurs enfants)

## Adaptatif (_responsive_)

Les styles adaptatifs de Bootstrap sont conçus pour être adaptatifs, une approche à laquelle on attribue souvent le qualificatif de _mobile-first_ (pensée pour le mobile en premier). Nous utilisons ce terme dans nos documents et nous sommes en grande partie en accord avec lui, mais il peut parfois être trop large. Bien que tous les composants _ne doivent pas_ être entièrement adaptatifs dans Bootstrap, cette approche adaptative consiste à réduire les substitutions CSS en vous poussant à ajouter des styles à mesure que la fenêtre d'affichage s'agrandit.

À travers Bootstrap, vous le verrez plus clairement dans nos requêtes médias. Dans la plupart des cas, nous utilisons des requêtes `min-width` qui commencent à s’appliquer à un point de rupture (_breakpoint_) spécifique et continuent aux points de rupture supérieurs. Par exemple, un `.d-none` s'applique de` min-width: 0` jusqu'à l'infini. Par ailleurs, un `.d-md-none` s’applique à partir du point d’arrêt moyen.

Nous utilisons parfois `max-width` lorsque la complexité inhérente à un composant l'exige. Parfois, ces substitutions sont plus simples à mettre en œuvre et à prendre en charge sur les plans fonctionnel et mental que la réécriture des fonctionnalités essentielles de nos composants. Nous nous efforçons de limiter cette approche, mais l’utilisons de temps à autre.

## Classes

Mis à part notre feuille de style de normalisation multi-navigateurs, _Reboot_ ou réinitialisation, tous nos styles visent à utiliser les classes comme sélecteurs. Cela signifie éviter les sélecteurs de type (par exemple, `input[type="text"]`) et les classes parent étrangères (par exemple, `.parent .child`) qui rendent les styles trop spécifiques pour pouvoir être facilement remplacés.

En tant que tels, les composants doivent être construits avec une classe de base contenant des paires propriété/valeur communes à ne pas remplacer. Par exemple, `.btn` et` .btn-primary` : nous utilisons `.btn` pour tous les styles courants tels que` display`, `padding` et` border-width`. Nous utilisons ensuite des modificateurs tels que `.btn-primary` pour ajouter la couleur, la couleur de fond, la couleur de bordure, etc.

Les classes de modificateur ne doivent être utilisées que s'il existe plusieurs propriétés ou valeurs à modifier dans plusieurs variantes. Les modificateurs ne sont pas toujours nécessaires. Veillez donc à ne pas multiplier les lignes de code et à éviter les remplacements inutiles lors de leur création. Nos classes de couleur et variantes de taille sont de bons exemples de modificateurs.

## Échelles `z-index`

Il existe deux échelles `z-index` dans les éléments de Bootstrap : dans les éléments de composant et dans les composants de superposition.

### Éléments de composant

- Certains composants dans Bootstrap sont construits avec des éléments qui se chevauchent pour empêcher les doubles bordures sans modifier la propriété `border`. Par exemple les groupes de boutons, les groupes de saisie et et la pagination.
- Ces composants partagent une échelle standard `z-index` de `0` à `3`.
- `0` est la valeur par défaut (initiale), `1` correspond au survolk `hover`, `2` est `actif`/`.active` et `3` est `:focus`.
- Cette approche correspond à nos attentes concernant la plus grande priorité des utilisateurs. Si un élément est `focus`, il est visible et à l'attention de l'utilisateur. Les éléments actifs occupent le deuxième rang en raison de leur état. Le survol est le troisième plus haut parce qu'il indique l'intention de l'utilisateur, mais _presque tout_ peut être survolé.

### Composants de substitutions

Bootstrap comprend plusieurs composants qui fonctionnent comme une superposition. Cela inclut, par ordre des `z-index` les plus élevés, les menus déroulants, les barres de navigation fixes et collantes, les fenêtres modales, les info-bulles et les bulles contextuelles. Ces composants ont leur propre échelle `z-index` qui commence à `1000`. Ce numéro de départ a été choisi arbitrairement et sert de petit tampon entre nos styles et les styles personnalisés de votre projet.

Chaque composant de superposition augmente légèrement sa valeur `z-index` de telle sorte que les principes d'interface utilisateur courants permettent aux éléments centrés sur l'utilisateur ou survolés de rester visibles à tout moment. Par exemple, une fenêtre modale bloque le document (par exemple, vous ne pouvez effectuer aucune action autre que celle du modal), nous le plaçons donc au-dessus de notre barre de navigation.

Apprenez-en plus à ce sujet dans notre [page sur la mise en page avec `z-index`]({{< docsref"/layout/overview" "#z-index" >}}).

## HTML et CSS plutôt que JavaScript

Dans la mesure du possible, nous préférons écrire en HTML et CSS plutôt que du JavaScript. En général, HTML et CSS sont plus prolifiques et accessibles à plus de gens de tous les niveaux d'expérience. Le HTML et le CSS sont également plus rapides dans votre navigateur que le JavaScript et votre navigateur offre généralement suffisamment de fonctionnalités pour vous.

Ce principe est que notre API JavaScript de première classe est constituée des attributs `data`. Vous n'avez presque pas besoin d'écrire du JavaScript pour utiliser nos plugins JavaScript; écrivez plutôt en HTML.

Enfin, nos styles s’appuient sur les comportements fondamentaux des composants Web natifs. Dans la mesure du possible, nous préférons utiliser les informations fournies par le navigateur. Par exemple, vous pouvez placer une classe `.btn` sur presque n'importe quel élément, mais la plupart des éléments ne fournissent aucune valeur sémantique ni fonctionnalité du navigateur. Donc, à la place, nous utilisons les classes `<button>` et `<a>`.

Il en va de même pour les composants plus complexes. Bien que _nous pourrions écrire_ notre propre système de validation de formulaire pour ajouter des classes à un élément parent en fonction de l'état d'une entrée, nous permettant ainsi de styliser le texte en rouge, nous préférons utiliser les pseudo-éléments `:valid`/`:invalid` que les navigateurs fournissent.

## Utilitaires

Les classes d’utilitaires — les utilitaires dans Bootstrap 3 — constituent un puissant allié dans la lutte contre le mauvais CSS et les pauvres performances des pages. Une classe d'utilitaires est généralement un simple appariement immuable propriété-valeur exprimé en classe (par exemple, `.d-block` représente `display: block;`). Leur principal attrait est la rapidité d’utilisation lors de l’écriture HTML et la limitation de la quantité de CSS personnalisée que vous devez écrire.

En ce qui concerne plus particulièrement le code CSS personnalisé, les utilitaires peuvent aider à lutter contre l’augmentation de la taille du fichier en réduisant vos paires propriété/valeur les plus souvent répétées en classes simples. Cela peut avoir un effet dramatique à grande échelle dans vos projets !

## HTML flexible

Bien que cela ne soit pas toujours possible, nous nous efforçons d'éviter d'être excessivement dogmatique dans nos exigences HTML pour les composants. Ainsi, nous nous concentrons sur des classes uniques dans nos sélecteurs CSS et essayons d'éviter les sélecteurs enfants immédiats (`>`). Cela vous donne plus de flexibilité dans votre implémentation et aide à garder notre CSS plus simple et moins spécifique.
