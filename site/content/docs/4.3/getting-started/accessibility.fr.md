---
layout: docs
title: Accessibilité
description: Un bref aperçu des fonctionnalités et des limitations de Bootstrap pour la création de contenu accessible.
group: getting-started
toc: true
---

Bootstrap fournit un cadre convivial de styles prédéfinis, d'outils de présentation et de composants interactifs, permettant aux développeurs de créer des sites Web et des applications attrayantes visuellement, riches en fonctionnalités et accessibles immédiatement.

## Charte SNCF

En 2016, la SNCF a signé un pacte visant à faire respecter les engagements découlant du standard RGAA. \\
Cette signature n’est que l’incarnation légale d’un engagement, un devoir éthique de la part de tous, qui permet à tous vos utilisateurs de consulter votre interface sans discrimination.

Le pacte est basé sur le respect minimum du niveau de conformité "AA" du [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20).

Comme indiqué dans la documentation technique ci-après, Bootstrap est "prêt à l'emploi" mais ne porte pas l'entière responsabilité de ce niveau de conformité. \\
Les composants sont en effet réalisés dans ce sens, optimisés (à quelques exceptions près, spécifiquement annoncés quand il le est), que ce soit en termes de code, mais également en termes de design. \\
Par contre, le travail appartient à l’équipe qui implémente le code, et donc les composants un par un, qui définit les couleurs de son interface et donc la personnalisation du design numérique de la SNCF, qui est de garantir l’accessibilité des logiciels.

Vous trouverez les consignes d'accessibilité sur la plate-forme Digital SNCF, afin de vous donner tous les détails nécessaires à ce processus :

- [Accessibilité numérique pour les designers](https://www.digital.sncf.com/ressources/accessibilite-numerique-design)
- [Accessibilité numérique pour les développeurs](https://www.digital.sncf.com/ressources/accessibilite-numerique-developpement)

Nous avons également produit un [livre blanc de l'accessibilité chez SNCF](https://www.digital.sncf.com/system/files/document/livre_blanc_initiation_a_laccessibilite_numerique.pdf) avec notre partenaire [Access42](https://access42.net/).

En parallèle, n'hésitez pas à demander à nos équipes de vous aider si vous avez besoin sur [design.fab@sncf.fr](mailto:design.fab@sncf.fr?subject=Bootstrap - Accessibilité), avec comme objet "Bootstrap - Accessibilité".
Nous pouvons également vous guider ou recommander des partenaires de confiance pour des questions spécifiques.

## Vue d'ensemble et limitations

L'accessibilité globale de tout projet construit avec Bootstrap dépend en grande partie du balisage de l'auteur, du style supplémentaire et des scripts inclus. Cependant, à condition que ceux-ci aient été correctement implémentés, il devrait être parfaitement possible de créer des sites Web et des applications avec Bootstrap [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) et des normes d'accessibilité similaires.

### Balisage structurel

Le style et la présentation de Bootstrap peuvent être appliqués à une large gamme de structures de balisage. Cette documentation vise à fournir aux développeurs des exemples de meilleures pratiques pour illustrer l'utilisation de Bootstrap et illustrer le balisage sémantique approprié, y compris les moyens de résoudre les problèmes d'accessibilité potentiels.

### Composants interactifs

Les composants interactifs de Bootstrap, tels que les boîtes de dialogue modales, les menus déroulants et les info-bulles personnalisées, sont conçus pour fonctionner avec les utilisateurs tactiles, souris et clavier. Grâce à l'utilisation des roles et attributs de [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/intro/aria), ces composants doivent également être compréhensibles et utilisables à l'aide de technologies d'assistance (telles que des lecteurs d'écran).

Les composants de Bootstrap étant volontairement conçus pour être assez génériques, les auteurs peuvent avoir besoin d'inclure davantage de rôles et d'attributs <abbr title = "Applications Internet riches accessibles">ARIA</abbr>, ainsi que le comportement JavaScript, pour en préciser la nature et la fonctionnalité de leur composant. Ceci est généralement noté dans la documentation.


### Contraste de couleur

La plupart des couleurs qui constituent actuellement la palette par défaut de Bootstrap SNCF respectent les besoins en contraste pour assurer le niveau « AA » du WCAG.

### Contenu masqué visuellement

Le contenu qui doit être masqué visuellement, tout en restant accessible aux technologies d'assistance telles que les lecteurs d'écran, peut être stylisé à l'aide de la classe `.sr-only`. Cela peut être utile dans les situations où des informations visuelles supplémentaires (telles que la signification indiquée par l'utilisation de couleurs) doivent également être transmises aux utilisateurs non-voyants.

{{% highlight html %}}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  Cette action n'est pas réversible
</p>
{{% /highlight %}}

Pour les contrôles interactifs visuellement masqués, tels que les liens traditionnels "de saut", `.sr-only` peut être combiné à la classe` .sr-only-focusable`. Cela garantira que le contrôle devient visible une fois la mise au point effectuée (pour les utilisateurs de clavier voyants).

{{% highlight html %}}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{{% /highlight %}}

## Ressources additionnelles

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [The A11Y Project](http://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Vérificateur d'accessibilité Tenon.io](https://tenon.io/)
- [Testeur de ratio de contraste de couleur](https://contrast-ratio.com/)
- [Analyse du contraste de couleur (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
