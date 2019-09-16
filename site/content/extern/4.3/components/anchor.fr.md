---
layout: docs
title: Ancre
description: Les liens d'ancrage facilitent la navigation verticale en amenant les utilisateurs directement à un emplacement spécifique sur une page de texte.
group: components
toc: true
url: /docs/4.3/components/anchor/
---

Les ancres sont situées à gauche du texte/contenu en haut de la page. Les liens d'ancrage restent figés lorsque l'utilisateur fait défiler la page. Un indicateur de position indique aux lecteurs où ils se trouvent sur la page.

{{% callout danger %}}
Cette fonctionnalité n'apparaît pas sur les tablettes en mode portrait ou sur les appareils mobiles.
{{% /callout %}}

### État intermédiaire

{{% example html %}}
<div class="anchor">
  <a href="#" class="anchor-item">Nos solutions</a>
  <a href="#" class="anchor-item">En régions</a>
  <a href="#" class="anchor-item current">En île-de-France</a>
  <a href="#" class="anchor-item">Notre réseau en île de france</a>
  <a href="#" class="anchor-item">Paris-Orléans</a>
</div>
{{% /example %}}

### État initial

{{% example html %}}
<div class="anchor">
  <a href="#" class="anchor-item current">Nos solutions</a>
  <a href="#" class="anchor-item">En régions</a>
  <a href="#" class="anchor-item">En île-de-France</a>
  <a href="#" class="anchor-item">Notre réseau en île de france</a>
  <a href="#" class="anchor-item">Paris-Orléans</a>
</div>
{{% /example %}}

### État final

{{% example html %}}
<div class="anchor">
  <a href="#" class="anchor-item">Nos solutions</a>
  <a href="#" class="anchor-item">En régions</a>
  <a href="#" class="anchor-item">En île-de-France</a>
  <a href="#" class="anchor-item">Notre réseau en île de france</a>
  <a href="#" class="anchor-item current">Paris-Orléans</a>
</div>
{{% /example %}}
