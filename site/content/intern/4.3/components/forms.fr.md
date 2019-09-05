---
layout: docs
title: Formulaires et champs
slug: formulaires-et-champs
description: Exemples et consignes d'utilisation pour les champs, les options de disposition et les composants personnalisés permettant de créer une grande variété de formulaires.
group: components
toc: true
url: /docs/4.3/components/formulaires-et-champs/
---

## Vue d'ensemble

Vous trouverez ci-dessous des composants pour les formulaires (champs de saisie, curseurs, puces, textes d'aide, gestion des erreurs). Cependant, notez que les boutons de validation sont dans la section "Boutons", les boutons menu sont dans "Listes déroulantes" et les sélecteurs dans "Sélecteurs".

Les contrôles de formulaires de Bootstrap sont étendus par [nos formulaires avec style réinitialisé (_reboot_)]({{< docsref "/content/reboot#forms" >}}) avec les classes. Utilisez-les pour obtenir, via leurs affichages personnalisés, un rendu plus cohérent sur les navigateurs et les périphériques.

Veuillez à choisir un attribut `type` approprié sur toutes les _inputs_ (par exemple `email` pour les adresses de courriel ou `number` pour les informations numériques, etc.) de façon à profiter des avantages des nouveaux contrôles d'entrée comme la vérification de courriel, de nombre, et plus encore.

## Champs

Les contrôles de champs texte, tels que <input>s, <select>s, et <textarea>s sont stylisés avec la classe .form-control. Sont inclus les styles pour l'apparence générale, le dimensionnement, etc.

{{< example html >}}
<form>
  <div class="form-group">
    <label for="inputEmail1">Example label</label>
    {{< input type="email" id="inputEmail1" placeholder="Example input" >}}
  </div>
  <div class="form-group">
    <label for="textarea1">Example textarea</label>
    {{< textarea id="textarea1" placeholder="Example textarea" >}}
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form>
{{< /example >}}

### Petit champ texte

Ces champs peuvent être utilisés lorsqu'ils sont implémentés dans un bloc, ou dans le cadre d'un ajout additionnel non essentiel.

{{< example html >}}
<form>
  <div class="form-group">
    <label for="inputSmall1">Small input</label>
    {{< input type="email" id="inputSmall1" placeholder="Small input" class="form-control-sm" >}}
  </div>
</form>
{{< /example >}}

### Champs avec pictogramme

Utilisez la classe `.has-left-icon` sur l'élément `.form-control`. Ensuite, utilisez l'élément `.form-control-icon` avec un élément fonticon à l'intérieur.

{{< example html >}}
{{< input container="has-left-icon" id="inputIcon1" placeholder="Example for auto-completion" content="<span class=\"form-control-icon\"><i class=\"icons-search\"></i></span>" >}}
{{< /example >}}

### Champs lecture

Ces champs peuvent être utilisés lorsqu'une information a besoin d'être vue par l'utilisateur, mais qu'elle ne peut être modifiée par ses soins.

Ajoutez l'attribut booléen `readonly` sur un champ pour empêcher la modification de la valeur de l'entrée.

{{< example html >}}
<label for="readonly1">Readonly input</label>
{{< input type="text" id="readonly1" placeholder="Readonly input here..." attr="readonly" >}}
{{< /example >}}

{{< example html >}}
<label for="readonly2">Readonly textarea</label>
{{< textarea id="readonly2" placeholder="Readonly textarea here..." attr="readonly" >}}
{{< /example >}}

### Entrées obligatoires

Ajoutez l'attribut booléen `required` sur une entrée.

{{% callout warning %}}
Pour des raisons d'accessibilité, vous **devez** mettre le code sur la signification `*` signification **avant** toute occurrence des champs obligatoires.
{{% /callout %}}

{{< example html >}}
<p class="mt-3">Fields marked with * are required.</p>
<label for="required1" class="required">Required input</label>
{{< input type="text" id="required1" placeholder="Required input here..." attr="required" >}}
{{< /example >}}

### Champ avec bouton de suppression

Le comportement de l'effacement de texte est fait en `javascript`. Utilisez `data-component="control"` avec `data-clear-option="true"` pour l'activer. N'oubliez pas d'ajouter l'élément `button`.

{{< example html >}}
{{< input-clear-option type="text" id="readonly2" label="Rechercher" placeholder="Search..." >}}
{{< /example >}}

### Champs pour données normalisées

Dans certains cas, les champs peuvent contenir des données normalisées. Des caractères non modifiables peuvent être retirés de la zone de saisie et l'affichage varie en fonction des données.

{{< example html >}}
<fieldset>
  <legend class="text-base font-weight-medium mb-2">Numéro de transfert</legend>
  <div class="row align-items-center">
    <div class="col-4">
      <div class="form-control-container">
        <input class="form-control" type="text" maxlength="4" title="4 premiers caractères">
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-1 text-center font-weight-medium">
      TX
    </div>
    <div class="col-4">
      <div class="form-control-container">
        <input class="form-control" type="text" maxlength="4" title="4 derniers caractères après TX">
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
</fieldset>
{{< /example >}}

## Zones de texte  

### Dimensionnement automatique

Ajoutez une classe `stretchy` sur un élément `textarea`.

{{< example html >}}
<label for="stretchyTextarea1">Auto sizing textarea</label>
{{< textarea id="stretchyTextarea1" class="stretchy" placeholder="Auto sizing" >}}
{{< /example >}}

### Zone de texte avec compteur de caractères

{{< example html >}}
{{< textarea-counter id="countTextarea1" placeholder="Character counter" >}}
{{< /example >}}

### Zone de texte multi-ligne avec barre d'outils

Nous vous recommandons de limiter les barres d’outils à une ligne et de placer les outils secondaires dans un menu contextuel si nécessaire.

{{< example html >}}
<div class="form-group">
  <label for="exampleFormControlTextarea3">Example textarea</label>
  <div class="form-toolbar">
    <div class="form-toolbar-content">
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Bold</span>
        <i class="icons-toolbar-bold" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Italic</span>
        <i class="icons-toolbar-italic" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Underline</span>
        <i class="icons-toolbar-underline" aria-hidden="true"></i>
      </button>
      <span class="form-toolbar-separator"></span>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Text align left</span>
        <i class="icons-toolbar-left icons-size-1x25" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Text align center</span>
        <i class="icons-toolbar-center icons-size-1x25" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">List</span>
        <i class="icons-toolbar-list icons-size-1x25" aria-hidden="true"></i>
      </button>
    </div>
    <div class="form-toolbar-right">
      <div class="btn-group dropdown">
        <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
        </button>
        <div class="dropdown-menu dropdown-menu-right">
          <button class="dropdown-item" type="button">Option 1</button>
          <button class="dropdown-item" type="button">Option 2</button>
          <button class="dropdown-item" type="button">Option 3</button>
        </div>
      </div>
    </div>
  </div>
  <div class="form-control-container">
    <textarea id="exampleFormControlTextarea3" class="form-control" title="Comment" placeholder="Comment"></textarea>
    <span class="form-control-state"></span>
  </div>
</div>
{{< /example >}}


## Curseur intervalle

Les curseurs permettent aux utilisateurs de définir et d'ajuster une valeur ou une plage sur une plage de valeurs prédéfinie. Il existe deux types de curseurs : à valeur unique et à double valeur. Si nécessaire, affichez une valeur minimale et maximale à chaque extrêmité de la ligne permet à l'utilisateur de mieux se situer.

Avec un curseur, les utilisateurs peuvent choisir une valeur approximative, c'est-à-dire une valeur considérée comme relative.

{{% example html %}}
<div class="range-slider" data-component="range-slider" data-target="#range_01">
  <i class="icons-interrogation icons-size-1x25 pr-2" aria-hidden="true"></i>
  <div id="range_01" data-min="25" data-max="125" data-hide-from-to="true">
  </div>
  <i class="icons-interrogation icons-size-1x25 pl-2" aria-hidden="true"></i>
</div>
{{% /example %}}

{{% example html %}}
<div class="range-slider" data-component="range-slider" data-target="#range_02">
  <span class="d-inline-block pr-2">25</span>
  <div id="range_02" data-min="25" data-max="125" data-type="double" data-from="50" data-to="100">
  </div>
  <span class="d-inline-block pl-2">125</span>
</div>
{{% /example %}}

{{% example html %}}
<div class="range-slider is-disabled" data-component="range-slider" data-target="#range_03">
  <span class="d-inline-block pr-2">25</span>
  <div id="range_03" data-min="25" data-max="125" data-type="double" data-from="50" data-to="100">
  </div>
  <span class="d-inline-block pl-2">125</span>
</div>
{{% /example %}}

## Chips

Les chips sont des composants compacts qui apparaissent après la saisie ou la sélection d'éléments dans un champ. Ils peuvent être utilisés pour différents types d'éléments (contacts, concepts etc.) et sont prédéfinis ou peuvent être ajustés pour des besoins spécifiques. Ils sont également supprimables une fois que la saisie est faite.

{{% example html %}}
<div role="list">
  <div class="chips-group" role="listitem">
    <span class="chips chips-label">Mathéo Mercier</span>
    <button type="button" class="chips chips-btn chips-only-icon">
      <span class="sr-only">Remove Mathéo Mercier</span>
      <i class="icons-close" aria-hidden="true"></i>
    </button>
  </div>
</div>
{{% /example %}}

{{% example html %}}
<label class="font-weight-medium mb-2" for="addreceivers1">Add receivers</label>
<div class="form-control-container form-chips-container" data-component="chips">
  <input data-role="typewriter" type="text" class="chips-input stretchy" id="addreceivers1" />
  <label class="font-weight-medium mb-2 sr-only" for="receivers1">Receivers</label>
  <select class="sr-only" data-role="input" tabindex="-1" aria-hidden="true" id="receivers1" multiple>
    <option selected>Sem Inceptos Tellus</option>
    <option>Amet Porta</option>
    <option selected>Pharetra Fusce Venenatis</option>
  </select>
</div>
{{% /example %}}

{{% callout warning %}}

### Alternatives aux étiquettes cachées
Les technologies d'assistance telles que les lecteurs d'écran auront des problèmes avec formulaires si vous n'incluez pas d'étiquette pour chaque entrée. Pour ces formulaires en ligne, vous pouvez masquer les étiquettes avec la classe `.sr-only`. Il existe d'autres  méthodes alternatives pour fournir une  étiquette pour les technologies d'assistance, telles que les attributs `aria-label`, `aria-labelledby` ou `title`. Si aucune d'entre elles n'est présente, les technologies  d'assistance peuvent recourir à l'attribut `placeholder`, le cas échéant, mais notez que l'utilisation de `placeholder` en remplacement d'étiquetage n'est pas conseillée.
{{% /callout %}}

## Texte d'aide au remplissage

### Intérieur du champ

Vous pouvez préciser ce que vous attendez directement dans le champ avec `placeholder="Help text"`.
L'espace réservé disparaît à la saisie du premier caractère.

{{% example html %}}
<label class="font-weight-medium mb-2" for="inputPassword4">Password</label>
<div class="form-control-container">
  <input type="password" id="inputPassword4" class="form-control" title="Password must be 50 characters long, and contain emojis"  placeholder="Password must be 50 characters long, and contain emojis">
  <span class="form-control-state"></span>
</div>
{{% /example %}}

### Extérieur du champ

Le texte d'aide à l'extérieur du champ dans les formulaire peut être créé en utilisant `.form-text` (anciennement connu sous le nom `.help-block` dans la v3). Le texte d'aide sur une ligne peut être implémenté de manière flexible en utilisant n'importe quel élément HTML en ligne et des classes d'utilitaires telles que `.text-muted`.

{{% callout warning %}}

#### Associer un texte d'aide à des contrôles de formulaire

Le texte d'aide doit être explicitement associé au contrôle de formulaire lié à l'utilisation de l'attribut `aria-describedby`. Cela garantira que les technologies d'assistance, telles que les lecteurs d'écran, annonceront ce texte d'aide lorsque l'utilisateur se concentrera ou entrera dans le contrôle.
{{% /callout %}}

Le texte d'aide sous les entrées peut être stylisée avec `.form-text`. Cette classe inclut `display: block` et ajouter une marge supérieure pour un espacement suffisant avec le champ.

{{% example html %}}
<label class="font-weight-medium mb-2" for="inputPassword5">Password</label>
<div class="form-control-container">
  <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" title="Password">
  <span class="form-control-state"></span>
</div>
<small id="passwordHelpBlock" class="form-text text-muted">
  Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
</small>
{{% /example %}}

Le texte sur la ligne peut utiliser n'importe quel élément HTML typique (qu'il s'agisse d'un `<small>`, `<span>`, ou quelque chose d'autre) avec rien de plus qu'une classe utilitaire.

{{% example html %}}
<form class="form-inline">
  <div class="form-group">
    <label class="font-weight-medium" for="inputPassword6">Password</label>
    <div class="form-control-container mx-sm-3">
      <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline" title="Password">
      <span class="form-control-state"></span>
    </div>
    <small id="passwordHelpInline" class="text-muted">
      Must be 8-20 characters long.
    </small>
  </div>
</form>
{{% /example %}}

## Validation

Fournissez à vos utilisateurs des informations précieuses et exploitables grâce à la validation de formulaire HTML5–[disponible sur tous les navigateurs pris en charge](https://caniuse.com/#feat=form-validation). Choisissez parmi les commentaires de validation par défaut du navigateur ou implémentez des messages personnalisés avec nos classes intégrées et JavaScript.

{{% callout warning %}}
Nous **recommandons fortement** les styles de validation personnalisés car les paramètres par défaut du navigateur ne sont pas annoncés aux lecteurs d'écran.
{{% /callout %}}

{{% callout info %}}
Les coches <i class="text-primary icons-check"></i> ne sont pas obligatoires (ni même inclues dans les guidelines SNCF), mais il s'agit d'un moyen intéressant de montrer aux utilisateurs que le champ est validé. Utilisez-le si vous le souhaitez.
{{% /callout %}}

### Côté serveur

Nous vous recommandons d'utiliser la validation côté client, mais si vous avez besoin du côté serveur, vous pouvez indiquer des champs de formulaire non valides avec `.is-invalid`. Notez que `.invalid-feedback` est également pris en charge avec ces classes.

{{% example html %}}
<form class="needs-validation" novalidate>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom01">First name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationCustom01" placeholder="First name" value="Mark" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom02">Last name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationCustom02" placeholder="Last name" value="Otto" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustomUsername">Username</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Username" aria-describedby="inputGroupPrepend" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback" id="inputGroupPrepend">
        Please choose a username.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom03">City</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustom03" placeholder="City" aria-describedby="inputGroupPrepend2" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback" id="inputGroupPrepend2">
        Please provide a valid city.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{{% /example %}}

### Message d'erreur

{{% example html %}}
<form class="needs-validation" novalidate>
  <div class="form-error mb-3">
    <h2 class="text-white text-uppercase">Oouups ! Vous avez une erreur</h2>
    <ul class="mt-1 mb-0">
      <li>Veuillez vérifier l'adresse email saisie</li>
    </ul>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom03">City</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustom03" placeholder="City" aria-describedby="iputGroupPrepend3" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback" id="iputGroupPrepend3">
        Please provide a valid city.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{{% /example %}}

### Paramètres par défaut du navigateur

Vous n'êtes pas intéressé par les commentaires personnalisés de validation ou l'écriture de JavaScript pour changer les comportements de formulaire ? Tout va bien, vous pouvez utiliser les paramètres par défaut du navigateur. Essayez de soumettre le formulaire ci-dessous. En fonction de votre navigateur et de votre système d’exploitation, le style de vos commentaires sera légèrement différent.

Bien que ces styles de commentaires ne puissent pas être stylés avec CSS, vous pouvez toujours personnaliser le texte des commentaires via JavaScript.

{{% example html %}}
<form>
  <div class="form-row">
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault01">First name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault01" placeholder="First name" value="Mark" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault02">Last name</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault02" placeholder="Last name" value="Otto" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefaultUsername">Username</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Username" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault03">City</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault03" placeholder="City" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault04">State</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault04" placeholder="State" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-3 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault05">Zip</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault05" placeholder="Zip" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox mb-2 mr-sm-2">
      <input class="custom-control-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="custom-control-label font-weight-medium" for="invalidCheck2">Agree to terms and conditions</label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Submit form</button>
</form>
{{% /example %}}
