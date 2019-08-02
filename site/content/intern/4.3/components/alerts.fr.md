---
layout: docs
title: Alertes
slug: alertes
description: Fournit des notifications contextuelles sous forme de messages d'alerte.
group: components
toc: true
url: /docs/4.3/components/alertes/
---

## Messages d'erreur

Les formulaires de message d'erreur sont affichés comme une alerte en haut de la page.

{{% example html %}}
<div class="form-error mb-3">
  <h2 class="text-uppercase">Attention, il y a une erreur !</h2>
  <ul class="mt-1 mb-0">
    <li>Merci de vérifier l'adresse de courriel</li>
    <li>Votre numéro de CP SNCF n'existe pas</li>
  </ul>
</div>
{{% /example %}}

{{% callout warning %}}
Pour des raisons de compatibilité, les autres couleurs `alert-xxx` de Bootstrap sont toujours présentes mais non recommandées.
{{% /callout %}}

## Notifications

Les messages de notifications (actions à confirmer, relatifs à une suppression) sont affichés en haut de la page.

{{% example html %}}
<p class="text-primary pl-4 pt-2 pb-2 font-weight-medium">
  <i class="icons-checked mr-2" aria-hidden="true"></i> Votre texte a bien été ajouté au dossier SNCF_MATERIEL.
</p>
{{% /example %}}

{{% example html %}}
<p class="text-danger pl-4 pt-2 pb-2 font-weight-medium">
  Votre texte a bien été supprimé du dossier SNCF_MATERIEL.
</p>
{{% /example %}}
