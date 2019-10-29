---
layout: docs
title: Favicon
description: Utiliser et implémenter la _favicon_
group: content
toc: true
---

## Description
Pour chaque site SNCF, vous devez afficher le logo SNCF miniature en entête de la barre d'adresse du navigateur. Cette icône miniature est appelée [favicon](https://fr.wikipedia.org/wiki/Favicon).
Elle peut être également nécessaire pour définir des favoris sur vos périphériques mobiles, par conséquent, choisissez un titre pertinent pour votre page (par exmple le nom de votre site ou application web), il sera utilisé comme titre du favoris.

## Comment utiliser la favicon
Rien de plus simple ! Ajoutez simplement les lignes suivantes dans le haut de votre code HTML au sein des balises `<head>`, et pensez à adapter les liens `href` à l'architecture de votre site (ici, nous avons placé le répertoire des `assets` à la racine du site).

{{% callout danger %}}
Les ressources (_assets_) et variantes des favicons sont fournies dans la distribution de Bootstrap SNCF, selon les règles en vigueur.
Sauf si vous savez ce que vous faites, **n'essayez pas de changer, modifier, quoique ce soit du répertoire des favicons !** Si cela est indispensable, contactez-nous et nous essayerons de trouver une solution avec vous.
{{% /callout %}}


{{% highlight html %}}
<!-- Favicons -->
<link rel="apple-touch-icon" href="/assets/img/docs/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/assets/img/docs/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/assets/img/docs/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/assets/img/docs/favicons/manifest.json">
<link rel="mask-icon" href="/assets/img/docs/favicons/safari-pinned-tab.svg" color="#563d7c">
<link rel="icon" href="/assets/img/docs/favicons/favicon.ico">
<meta name="msapplication-config" content="/assets/img/docs/favicons/browserconfig.xml">
<meta name="theme-color" content="#563d7c">
{{% /highlight %}}
