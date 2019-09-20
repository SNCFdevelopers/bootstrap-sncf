---
layout: docs
title: SAMI
description: Indicateurs de performance
group: components
toc: true
url: /fr/docs/4.3/components/sami/
---

Il y a plusieurs indicateurs de performance. Les plus courants sont :

- Satisfaisant
- Améliorations attendues
- Moyennement satisfaisant
- Insuffisant

Vous pouvez également utiliser des émoticones (pour indiquer la satisfaction, la qualité, etc.). Ces composants sont par ailleurs cliquables (si une donnée doit être entrée) ou non cliquables s'ils sont à destination d'affichage seulement.

{{% example html %}}
<span class="pr-3">Cliquez sur moi !</span>
<input type="checkbox" class="sr-only" id="samigreen">
<label for="samigreen" class="sami sami-checkbox-green">S</label>
<input type="checkbox" class="sr-only" id="samiblue">
<label for="samiblue" class="sami sami-checkbox-blue">A</label>
<input type="checkbox" class="sr-only" id="samiyellow">
<label for="samiyellow" class="sami sami-checkbox-yellow">M</label>
<input type="checkbox" class="sr-only" id="samired">
<label for="samired" class="sami sami-checkbox-red">I</label>
<input type="checkbox" class="sr-only" id="samigray">
<label for="samigray" class="sami sami-checkbox-gray">NC</label>
{{% /example %}}

{{% example html %}}
<span class="pr-3">Cliquez sur moi !</span>

<input type="checkbox" class="sr-only" id="smileysgreen">
<label for="smileysgreen" class="sami sami-checkbox-green">
  <span class="sr-only">grin</span>
  <i class="icons-sami-grin icons-size-3x" aria-hidden="true"></i>
</label>

<input type="checkbox" class="sr-only" id="smileysblue">
<label for="smileysblue" class="sami sami-checkbox-blue">
  <span class="sr-only">smile</span>
  <i class="icons-sami-smile icons-size-3x" aria-hidden="true"></i>
</label>

<input type="checkbox" class="sr-only" id="smileysyellow">
<label for="smileysyellow" class="sami sami-checkbox-yellow">
  <span class="sr-only">confused</span>
  <i class="icons-sami-confused icons-size-3x" aria-hidden="true"></i>
</label>

<input type="checkbox" class="sr-only" id="smileysred">
<label for="smileysred" class="sami sami-checkbox-red">
  <span class="sr-only">sad</span>
  <i class="icons-sami-sad icons-size-3x" aria-hidden="true"></i>
</label>
{{% /example %}}
