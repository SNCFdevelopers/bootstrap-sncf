---
layout: docs
title: Téléchargement
description: Téléchargez Bootstrap SNCF pour obtenir le code CSS et JavaScript compilé, le code source ou incluez-le via npm.
group: getting-started
toc: true
---

## CSS et JS compilés

Vous pouvez télécharger le code compilé, prêt à l'emploi pour **Bootstrap SNCF v{{< param current_version >}} r{{< param sncf_version >}}** pour l'insérer dans votre projet. Le fichier zip intègre :

- `assets` Toutes les images, icônes et fontes
- `bootstrap-sncf.css` Feuille de style CSS originale non minifiée
- `bootstrap-sncf.css.map`
- `bootstrap-sncf.darkmode.css` Feuille de style CSS « mode sombre » non minifiée
- `bootstrap-sncf.darkmode.css.map`
- `bootstrap-sncf.js` JavaScript non minifié, contenant [toutes les librairies externes]({{< docsref "/getting-started/introduction#js" >}})
- `bootstrap-sncf.js.map`
- `bootstrap-sncf.min.css` Feuille de style CSS originale minifiée
- `bootstrap-sncf.darkmode.min.css` Feuille de style CSS « mode sombre » minifiée
- `bootstrap-sncf.min.js` JavaScript minifié, contenant [toutes les librairies externes]({{< docsref "/getting-started/introduction#js" >}})

Ce fichier ne comporte pas la documentation et les fichiers sources.

<a href="/bootstrap-sncf.{{< param doc_theme >}}.v{{< param current_version >}}-r{{< param sncf_version >}}.zip" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Télécharger</a>

## Fichiers sources

Compilez Bootstrap SNCF avec votre propre infrastructure en téléchargeant le code source Sass & JavaScript, ainsi que la documentation. Cette option nécessite que vous disposiez des bons outils :

- Compilateur Sass (Libsass ou Ruby Sass sont supportés) pour compiler votre CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) pour le CSS vendor prefixing

<a href="{{< param "download.source" >}}" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Télécharger les sources</a>

## npm

Installez Bootstrap SNCF dans vos applications Node.js avec le paquet _NPM_. Choisissez l'un de ces paquets suivant le type de votre projet :

{{% highlight sh %}}
npm install @sncf/bootstrap-sncf.metier
{{% /highlight %}}
{{% highlight sh %}}
npm install @sncf/bootstrap-sncf.communication
{{% /highlight %}}
