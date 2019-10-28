---
layout: docs
title: Cases à cocher et boutons radio
description: Exemples et consignes d'utilisation pour les styles de cases à cocher et de boutons radios.
group: components
toc: true
---

Plusieurs outils de sélection permettent aux utilisateurs de choisir parmi des options prédéfinies :

- faire plusieurs choix : cases à cocher (ou listes déroulantes avec cases à cocher lorsqu'il y a beaucoup de choix)
- faire un seul choix: boutons radio, switch (ou listes déroulantes lorsqu'il y a beaucoup de choix)
- définir une valeur ou une plage (voir la section “Forms”)

Lorsque les options doivent être illustrées, utilisez les grands boutons d'image (voir la section “Boutons”).

Nous utilisons le sélecteur (`~`) pour tous nos `<input>` states—comme `:checked`—to properly style our custom form indicator. When combined with the `.custom-control-label` class, we can also style the text for each item based on the `<input>`'s state.

Le champ `<input>` par défaut est masqué avec `opacity` ainsi que l'utilisation de `.custom-control-label` pour fabriquer un nouvel indicateur de formulaire customisé à sa place avec `::before` et `::after`. Malheureusement, nous ne pouvions le faire directement depuis la balise native `<input>` du fait que la propriété CSS `content` ne fonctionne pas sur cet élément.

Dans les états cochés, nous utilisons **les icônes SVG intégrés base64** de [Open Iconic](https://useiconic.com/open). Cela nous fournit le meilleur contrôle pour le style et le positionnement sur les navigateurs et les appareils.

### Cases à cocher

Les cases à cocher sont souvent utilisées pour les formulaires ou pour d'autres fonctions permettant aux utilisateurs de sélectionner des options dans un questionnaire à choix multiple. Avec les cases à cocher, les utilisateurs peuvent choisir plusieurs critères ou options, ce qui n'est pas possible avec les boutons radio.

Il existe trois états de sélection : « désélectionné », « sélectionné » et « indéfini ». L'état « indéfini » apparaît lorsqu'un groupe de sous-sélections contient des états « désélectionné » et « sélectionné ».

{{% example html %}}
{{% checkbox name="exampleCheckbox1" id="exampleCheckbox1" label="Case à cocher custom" %}}
{{% /example %}}

Les cases à cocher personnalisées peuvent également utiliser la pseudo-classe `:indeterminate` et `aria-checked="mixed` pour le lecteur d'écran, lorsqu'elles sont définies manuellement via JavaScript (il n'y a aucun attribut HTML disponible pour le spécifier).

<div class="bd-example bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheck2">
    <label class="custom-control-label" for="customCheck2">Cochez cette case à cocher customisée</label>
  </div>
</div>

Si vous utilisez jQuery, cela devrait suffire :

{{% highlight js %}}
$('.your-checkbox').prop('indeterminate', true);
$('.your-checkbox').attr('aria-checked', 'mixed');
{{% /highlight %}}

### Boutons radio

Les boutons radio sont souvent utilisés dans les formulaires ou pour d’autres fonctions permettant aux utilisateurs de sélectionner une seule option dans une liste. Avec les boutons radio, les utilisateurs ne peuvent pas faire plusieurs sélections parmi les options suggérées (comme ils le peuvent avec des cases à cocher).

{{% example html %}}
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio1" name="customRadio" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadio1">Basculez l'état de ce bouton radio customisé</label>
</div>
<div class="custom-control custom-radio">
  <input type="radio" id="customRadio2" name="customRadio" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadio2">Ou basculez l'état de cet autre bouton radio</label>
</div>
{{% /example %}}

### Switch

Les switch permettent d'activer ou de désactiver une fonctionnalité ou une option. Les items peuvent être appliqués si nécessaire (par exemple : Option 1 / Option 2).

{{% example html %}}
<label for="switch1" class="switch-control">
  <span class="sr-only">On/Off switch</span>
  <input id="switch1" type="checkbox" class="sr-only">
  <span class="switch-control-slider"></span>
</label>

<label for="switch2" class="switch-control">
  <span class="sr-only">On/Off switch</span>
  <input id="switch2" type="checkbox" class="sr-only" checked>
  <span class="switch-control-slider"></span>
</label>
{{% /example %}}

### Options

{{% example html %}}
<div class="options-control">
  <div class="options-item">
    <input type="radio" name="optionsRadio" id="optionsRadio1" class="sr-only" checked/>
    <label class="options-btn font-weight-medium" for="optionsRadio1">Option 1</label>
  </div>
  <div class="options-item">
    <input type="radio" name="optionsRadio" id="optionsRadio2" class="sr-only"/>
    <label class="options-btn font-weight-medium" for="optionsRadio2">Option 2</label>
  </div>
</div>
{{% /example %}}

### En ligne

{{% example html %}}
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline1" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadioInline1">Basculez l'état de ce bouton radio customisé</label>
</div>
<div class="custom-control custom-radio custom-control-inline">
  <input type="radio" id="customRadioInline2" name="customRadioInline1" class="custom-control-input">
  <label class="custom-control-label font-weight-medium" for="customRadioInline2">Ou celui-ci</label>
</div>
{{% /example %}}

### Etat désactivé
Les cases à cocher personnalisées et les boutons radio peuvent également être désactivés en cas de force majeure (un élément désactivé est un élément à ne pas afficher dans la mesure du possible pour éviter les incompréhensions chez l'utilisateur). Ajoutez l'attribut `disabled` à `<input>` l'indicateur personnalisé et la description de l'item seront automatiquement stylisés.

{{% example html %}}
<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckDisabled1" disabled>
  <label class="custom-control-label font-weight-medium" for="customCheckDisabled1">Case à cocher customisée</label>
</div>

<div class="custom-control custom-checkbox">
  <input type="checkbox" class="custom-control-input" id="customCheckCheckedDisabled2" disabled checked>
  <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled2">Case à cocher customisée</label>
</div>

<div class="bd-example-indeterminate">
  <div class="custom-control custom-checkbox">
    <input type="checkbox" class="custom-control-input" id="customCheckCheckedDisabled3" disabled>
    <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled3">Case à cocher customisée</label>
  </div>
</div>

<div class="custom-control custom-radio">
  <input type="radio" id="radio3" name="radioDisabled" id="customCheckCheckedDisabled4" class="custom-control-input" disabled>
  <label class="custom-control-label font-weight-medium" for="customCheckCheckedDisabled4">Bouton radio customisé</label>
</div>

<div class="mt-2">
  <label class="switch-control" for="customRadioDisabled1">    
    <span class="sr-only">On/Off switch</span>
    <input id="customRadioDisabled1" type="checkbox" class="sr-only" disabled>
    <span class="switch-control-slider"></span>
  </label>
</div>

<div class="mt-2">
  <label class="switch-control" for="customRadioDisabled2">
    <span class="sr-only">On/Off switch</span>
    <input id="customRadioDisabled2" type="checkbox" class="sr-only" checked disabled>
    <span class="switch-control-slider"></span>
  </label>
</div>

<div class="options-control disabled mt-2">
  <div class="options-item">
    <input type="radio" name="optionsRadioDisabled" id="optionsRadio3" class="sr-only" checked disabled/>
    <label class="options-btn font-weight-medium" for="optionsRadio3">Option 1</label>
  </div>
  <div class="options-item">
    <input type="radio" name="optionsRadioDisabled" id="optionsRadio4" class="sr-only" disabled/>
    <label class="options-btn font-weight-medium" for="optionsRadio4">Option 2</label>
  </div>
</div>
{{% /example %}}
