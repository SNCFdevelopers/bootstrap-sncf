---
layout: docs
title: Introduction
description: Débutez avec Bootstrap, le framework CSS le plus répandu au monde pour la création de sites réactifs axés sur le mobile, avec des exemples spécifiques à SNCF.
group: getting-started
aliases:
  - /docs/
  - /docs/4.3/
  - /docs/4.3/getting-started/
  - /docs/getting-started/
toc: true
---

## Démarrage rapide

Vous souhaitez ajouter rapidement Bootstrap à votre projet ? Il suffit de télécharger et décompresser le Bootstrap SNCF [téléchargeable ici]({{< param "download.source" >}}) dans le répertoire de votre projet et de suivre les étapes suivantes.

### CSS

Copiez-collez la feuille de style `<link>` dans la partie `<head>` avant tout autre feuille de style pour charger notre CSS.

La feuille de style alternative est optionnelle, utilisez-la si votre projet a besoin d'un [mode sombre]({{< docsref "/layout/dark-mode" >}}).

{{< highlight html >}}
<link rel="stylesheet" href="/bootstrap-sncf.min.css">
<link rel="stylesheet alternate" href="/bootstrap-sncf.darkmode.min.css">
{{< /highlight >}}

### JavaScript

Plusieurs de nos composants nécessitent l'utilisation de JavaScript pour fonctionner. De plus, ils dépendent des librairies suivantes :

- [jQuery](https://jquery.com)
- [Popper.js](https://popper.js.org/)
- [Flatpickrjs](https://flatpickr.js.org/)
- [Chart.js](https://www.chartjs.org/)
- et nos propres plugins JavaScript plugins (inclus dans in tous les fichiers .js)

{{< callout info >}}
Pour plus de commidités, **nous avons intégré** _jQuery_ et _popper_ dans `bootstrap-sncf.min.js`. \\
Néanmoins, nous proposons également une version « sans librairies externes » nommée `bootstrap-sncf-noext.min.js` (vous aurez cependant besoin d'ajouter manuellement les librairies nécessaires à vos plugins).
{{< /callout >}}

{{< highlight html >}}
<script src="/bootstrap-sncf.min.js"></script>
{{< /highlight >}}

Curieux de connaître quels composants nécessitent explicitement ces librairies ? En voici la liste. \\
N'oubliez pas que **toutes ces librairies sont déjà incluses** dans nos versions principales par défaut (sauf si vous utilisez les versions allégées `-noext`).

- Alertes pour l'effacement
- Boutons pour les changements d'état et les fonctionnalités type cases à cocher
- Caroussel pour les comportements de diaporama, les contrôles et indicateurs
- Graphiques (nécessitent également [Chart.js](https://www.chartjs.org/))
- _Chips_ pour la saisie et la suppression des éléments
- _Collapse_ pour la bascule de visibilité du contenu
- Menus déroulants pour l'affichage et le positionnement (nécessite également [Popper.js](https://popper.js.org/))
- Modales pour l'affichage, le positionnement et le comportement au défilement
- Barre de navigation pour étendre le plugin _Collapse_ et implémenter le comportement _responsive_
- Sélecteurs de date & heure (nécessite également [Flatpickrjs](https://flatpickr.js.org/))
- Barres de progression
- _Scrollspy_ pour le comportement au défilement et mises à jour de la navigation
- Barre de rechercher pour effacer avec le bouton
- Selecteurs pour tous les éléments
- Tables
- Infos-bulles et _popovers_ pour l'affichage et le positionnement (nécessite également [Popper.js](https://popper.js.org/))

## Kit de démarrage

{{< callout warning >}}
### Compatibilité IE11
Pour assurer la compatibilité avec IE11, vous devez ajouter la ligne `<meta http-equiv="X-UA-Compatible" content="IE=edge">` immédiatement après `<head>`.
De plus, la configuration IE11 chez SNCF utilise le mode de compatibilité IE7par défaut : réglez le sur le mode IE11.
{{< /callout >}}

Assurez-vous que vos pages sont configurées avec les normes de conception et de développement les plus récentes. Cela signifie qu’il est nécessaire d’utiliser un `doctype HTML5` et d’inclure une balise méta `viewport` pour obtenir les comportements réactifs appropriés. Si vous mettez le tout ensemble, vos pages devraient ressembler à ceci:

{{< highlight html >}}
<!doctype html>
<html lang="en">
  <head>
    <!-- compatibilité IE 11 -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Meta tags requis -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- CSS Bootstrap -->
    <link rel="stylesheet" href="dist/bootstrap-sncf.min.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Coucou !</h1>

    <script src="dist/bootstrap-sncf.min.js"></script>
  </body>
</html>
{{< /highlight >}}

C'est tout ce dont vous avez besoin en terme d'éléments requis ! Consultez la [documentation de mise en page]({{< docsref "/layout/overview" >}}) ou nos [exemples officiels]({{< docsref "/examples" >}}) pour commencer à mettre en page le contenu de votre site et ses composants.

## Éléments globaux importants

Bootstrap utilise une poignée de styles et de paramètres globaux importants dont vous devrez tenir compte lors de son utilisation, qui sont tous presque exclusivement orientés vers la *normalisation* des styles de navigateurs. Allons-y !

### doctype HTML5

Bootstrap nécessite l'utilisation du doctype HTML5. Sans cela, vous verrez un style incomplet et quelque peu funky. Son inclusion ne devrait pas causer de problème majeur.

{{< highlight html >}}
<!doctype html>
<html lang="fr">
  ...
</html>
{{< /highlight >}}

### Meta tag _responsive_
Bootstrap est développé *mobile first*, une stratégie dans laquelle nous optimisons d’abord le code pour les appareils mobiles, puis mettons à l’échelle les composants à l’aide de requêtes multimédia CSS. Pour que le rendu et le zoom tactile soient corrects pour tous les périphériques, **ajoutez la balise méta responsive de la fenêtre d'affichage** à votre `<tête>`.

{{< highlight html >}}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{{< /highlight >}}

Vous pouvez voir un exemple de cela en action dans le [kit de démarrage de base](#starter-template).

### Taille des boîtes (_Box-sizing_)

Pour un dimensionnement plus simple en CSS, nous passons la valeur globale de `box-sizing` de` content-box` à `border-box`. Cela garantit que le `padding` n'affecte pas la largeur finale calculée d'un élément, mais peut causer des problèmes avec certains logiciels tiers tels que _Google Maps_ et le moteur de recherche personnalisé _Google_.

Dans les rares cas où vous devez le remplacer, utilisez l'une des méthodes suivantes :

{{< highlight css >}}
.selector-for-some-widget {
  box-sizing: content-box;
}
{{< /highlight >}}

Avec l'extrait de code ci-dessus, les éléments imbriqués, y compris le contenu généré via `:: before` et `:: après` hériteront du `box-sizing` spécifié pour le `.selector-for-some-widget`.

En savoir plus sur [le modèle de boîte et de taille sur les CSS Tricks](https://css-tricks.com/box-sizing/).

### Remise à plat (_Reboot_)

Pour améliorer le rendu sur tous les navigateurs, nous utilisons [la « remise à plat » ou « Reboot »]({{< docsref "/content/reboot" >}}) pour corriger les incohérences entre les navigateurs et les périphériques tout en fournissant des réinitialisations légèrement plus radicales aux éléments HTML courants.

## Communauté

Restez à jour sur le développement de Bootstrap et contactez la communauté avec ces ressources utiles.

Contactez les humains de la [Fab Design](mailto:design.fab@sncf.fr) pour plus d'informations et d'aide.

- Partagez et apprenez avec les autres développeurs de SNCF sur [GitHub]({{< param repo >}})

Pour le Bootstrap original :

- Suivez [@getbootstrap sur Twitter](https://twitter.com/getbootstrap).
- Lisez et inscrivez-vous au [blog officiel de Bootstrap]({{ site.blog }}).
- Rejoignez [le canal officiel sur Slack]({{ site.slack }}).
- Discutez avec la compagnie des Bootstrappers sur IRC. Sur le serveur `irc.freenode.net` dans le canal `##bootstrap`.
- Une aide à l'implémentation peut être trouvée sur _Stack Overflow_ (cherchez les tags [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Les développeurs devraient utiliser le mot-clef `bootstrap` sur les paquets qui modifient ou ajoutent des fonctionnalités à Bootstrap au moment de les redistribuer avec [npm](https://www.npmjs.com/browse/keyword/bootstrap) ou alors des techniques ou mécaniques similaires pour permettre une découvrabilité maximale.

Vous pouvez enfin suivre également [@getbootstrap sur Twitter](https://twitter.com/getbootstrap) pour les dernières nouvelles ou des clips musicaux géniaux.
