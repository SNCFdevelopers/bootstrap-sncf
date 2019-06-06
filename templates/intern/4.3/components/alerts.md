---
layout: docs
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
toc: true
permalink: /docs/4.3/components/alerts/
---

## Error messages

Form error messages are displayed as an alert at the top of the page.

{% example html %}
<div class="form-error mb-3">
  <h2 class="text-uppercase">Ooops ! There is an error</h2>
  <ul class="mt-1 mb-0">
    <li>Please check mail address</li>
    <li>Your SNCF ID doesn't exist</li>
  </ul>
</div>
{% endexample %}

{% callout warning %}
For compatibility reasons, `alert-xxx` from Twitter Bootstrap are still presents but not recommended.
{% endcallout %}

## Notifications

Notification messages (confirming actions, messages related to deletions) are displayed at the top of the page.

{% example html %}
<p class="text-primary pl-4 pt-2 pb-2 font-weight-medium">
  <i class="icons-checked mr-2" aria-hidden="true"></i> Votre texte a bien été ajouté au dossier SNCF_MATERIEL.
</p>
{% endexample %}

{% example html %}
<p class="text-danger pl-4 pt-2 pb-2 font-weight-medium">
  Votre texte a bien été supprimé du dossier SNCF_MATERIEL.
</p>
{% endexample %}
