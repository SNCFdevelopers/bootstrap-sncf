---
layout: docs
title: Analytics tracking
description: Bonnes pratiques pour implémenter le suivi utilisateurs et le tracking d'évènements, ou utilisateurs.
group: getting-started
toc: true
url: /fr/docs/4.3/getting-started/analytics-tracking/
---

## Pourquoi utiliser une solution de web analytics ?

La web-analyse est devenu un sujet régulier dans une optique d’amélioration continue pilotée par les données Les outils d’analytics ont déjà pris part dans le quotidien des métiers du _B2C_ (s’adressant aux clients et prospects) et certains métiers _B2E_ (s’adressant à l’interne).

### Présentation

Il est important d’avoir de l’informations concrète, quantifiable et qualifiable afin de pouvoir mesurer la performance son dispositif (Site web, App et même IoT).

Ces informations permettent de déterminer les actions à mener pour améliorer son dispositif grâce aux actions utilisateurs.

Les outils d’analytics permettent de récolter et de quantifier ces informations afin de pouvoir prendre des décisions basé sur des faits mesurés.

Ces informations permettent de répondre à des questions de ce genre :

- Est-ce que le parcours défini est compris par les utilisateurs ? (Implicitement, est-ce que j’ai défini un parcours ?)
- Quelle est l’étape du parcours où je perds le plus d’utilisateurs ? Est-ce par manque de compréhension ou est-ce un problème technique ?
- Quel est le ratio des utilisateurs qui navigue sur la partie A vs la partie B du site web ?
- Est-ce que mes utilisateurs passent plus de 3 minute sur mes pages de contenu ?
- En moyenne, combien de formulaires de demandes ont été envoyés ? Différencié par type de formulaire ?
- Combien de clics sur le bouton A vs le bouton B ?

Aujourd’hui, il est difficile voir impossible de répondre à ces questions sans avoir intégré d’outils dédiés car :

- Vous ne connaîtrez pas la fréquentation du site
- Vous ne connaissez pas les actions réalisées sur le site
- Vous ne savez pas si les fonctions prévues sont correctement utilisées

### Qu’est-ce que l’on suit exactement ?

Nous suivons principalement 3 types de données :

| Données utilisateurs           | Données de session                                    | Données d'évènements                  |
|--------------------------------|-------------------------------------------------------|---------------------------------------|
| User ID                        | Temps moyen passé                                     | Détail des pages visitées             |
| Volume de sessions             | Nombre de pages vues                                  | Boutons déclenchés par l’utilisateurs |
| Total du temps passé           | Conversions                                           | Détail des transactions e-commerce    |
| Total de pages vues            | Source d'acquisition                                  | Atteinte d’objectif paramétrés        |
| Total du nombre de conversions | Géolocalisation par adresse IP                        | Mots clés utilisés dans la recherche  |
| Géolocalisation                | Appareil utilisé, version de l'OS, définition d'écran | Données personnalisées                |
| Liste des appareils utilisés   | Données personnalisées                                |                                       |

### Socle analytics basement

Les solutions d’analytics récoltent des données comportementales sur les utilisateurs des dispositifs trackés (Site web, App et même IoT). Elles permettent d’aider au pilotage du trafic sur le-dit dispositif et de mesurer les performances.

Le socle analytics déployé dans le groupe SNCF est le suivant :

<img class="img-fluid" src="/analytics-tracking.png">

- Site Web : Dispositif mis en place dans le cadre d’un projet SNCF
- TMS : Outil qui va centraliser les outils tiers
- Outils tiers : Outils d’analyse de données, de récolte publicitaire ainsi que les outils marketing dans des optiques d’amélioration du site et de ses performances

## Implémentation technique et contact

### Pour intégrer le socle analytics SNCF

[https://developers.google.com/analytics](https://developers.google.com/analytics)

[https://support.google.com/tagmanager/answer/6103696?hl=fr](https://support.google.com/tagmanager/answer/6103696?hl=fr)

[https://developers.google.com/tag-manager/devguide](https://developers.google.com/tag-manager/devguide)

### Pour intégrer le socle analytics SNCF

[metrologie_applicative@sncf.fr](mailto:metrologie_applicative@sncf.fr) (Fab IT)

### Pour plus d’informations contactez la Fab Design

[design.fab@sncf.fr](mailto:design.fab@sncf.fr)

[https://www.digital.sncf.com/ressources/analytics](https://www.digital.sncf.com/ressources/analytics)
