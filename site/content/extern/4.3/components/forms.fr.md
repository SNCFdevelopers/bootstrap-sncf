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

Vous trouverez ci-dessous des composants pour les formulaires (champs de saisie, curseurs, puces, textes d'aide, gestion des erreurs). Cependant, notez que les boutons de validation sont dans la section « Boutons », les boutons menu sont dans « menu déroulants » et les sélecteurs dans « listes déroulantes ».

Les contrôles de formulaires de Bootstrap sont étendus par [nos formulaires avec style réinitialisé (_reboot_)]({{< docsref "/content/reboot#forms" >}}) avec les classes. Utilisez-les pour obtenir, via leurs affichages personnalisés, un rendu plus cohérent sur les navigateurs et les périphériques.

Veuillez à choisir un attribut `type` approprié sur toutes les _inputs_ (par exemple `email` pour les adresses de courriel ou `number` pour les informations numériques, etc.) de façon à profiter des avantages des nouveaux contrôles d'entrée comme la vérification de courriel, de nombre, et plus encore.

## Champs

Les zones de texte d'une seule ligne sont utilisées dans les formulaires ou à d'autres fins fonctionnelles.

Une étiquette doit indiquer les informations à renseigner (exemple: « saisir un intitulé de poste »), ainsi que le format requis. Le champ peut être pré-rempli avec un exemple (exemples : « 10 rue Saint-Exupéry » ou « JJ/MM »).
Deux critères déterminent la longueur des champs: la formulation la plus longue possible et le respect de la grille.

Les contrôles de champs texte, tels que `<input>`, `<select>`, et `<textarea>` sont stylisés avec la classe `.form-control`. Sont inclus les styles pour l'apparence générale, le dimensionnement, etc.

{{< example html >}}
<form>
  <div class="form-group">
    <label for="inputEmail1">Label exemple</label>
    {{< input type="email" id="inputEmail1" placeholder="Exemple d'entrée" >}}
  </div>
  <div class="form-group">
    <label for="textarea1">Exemple de textarea</label>
    {{< textarea id="textarea1" placeholder="Exemple de textarea" >}}
  </div>
  <button type="submit" class="btn btn-primary">Valider</button>
</form>
{{< /example >}}

### Champs avec pictogramme

Utilisez la classe `.has-left-icon` sur l'élément `.form-control`. Ensuite, utilisez l'élément `.form-control-icon` avec une icône à l'intérieur.

{{< example html >}}
<label for="inputIcon1">Icône à gauche</label>
{{< input container="has-left-icon" id="inputIcon1" placeholder="Exemple d'auto-completion" content="<span class=\"form-control-icon\"><i class=\"icons-search\"></i></span>" >}}
{{< /example >}}

{{< example html >}}
<label for="inputIcon2">Icône à droite</label>
{{< input container="has-right-icon" id="inputIcon2" placeholder="Exemple d'auto-completion" content="<span class=\"form-control-icon\"><i class=\"icons-search\"></i></span>" >}}
{{< /example >}}


### Champs en lecture seule

Ces champs peuvent être utilisés lorsqu'une information a besoin d'être vue par l'utilisateur, mais qu'elle ne peut être modifiée par ses soins.

Ajoutez l'attribut booléen `readonly` sur un champ pour empêcher la modification de la valeur de l'entrée.

{{< example html >}}
<label for="readonly1">Entrée en lecture seule</label>
{{< input type="text" id="readonly1" placeholder="Entrée en lecture seule..." attr="readonly" >}}
{{< /example >}}

{{< example html >}}
<label for="readonly2">Zone de texte en lecture seule</label>
{{< textarea id="readonly2" placeholder="Zone de texte en lecture seule..." attr="readonly" >}}
{{< /example >}}


### Entrées obligatoires

Ajoutez l'attribut booléen `required` sur une entrée.

{{% callout warning %}}
Pour des problématiques d'accessibilité, vous **devez** ajouter l'indication sur la signification de `*` **avant** chaque champ obligatoire.
{{% /callout %}}

{{< example html >}}
<p class="mt-3">Les champs marqués * sont obligatoires.</p>
<label for="required1" class="required">Entrée obligatoire</label>
{{< input type="text" id="required1" placeholder="Entrée obligatoire ici..." attr="required" >}}
{{< /example >}}


### Champ avec bouton pour effacer

Le comportement de l'effacement de texte est réalisé en `javascript`. Utilisez `data-component="control"` avec `data-clear-option="true"` pour l'activer. N'oubliez pas d'ajouter l'élément `button`.

{{< example html >}}
{{< input-clear-option type="text" id="readonly2" label="Rechercher" placeholder="Rechercher..." >}}
{{< /example >}}


## Zones de texte  

### Dimensionnement automatique

Ajoutez une classe `stretchy` sur un élément `textarea`.

{{< example html >}}
<label for="stretchyTextarea1">Zone de texte à dimension automatique</label>
{{< textarea id="stretchyTextarea1" class="stretchy" placeholder="Dimensionnement automatique" >}}
{{< /example >}}

### Zone de texte avec compteur de caractères

{{< example html >}}
{{< textarea-counter id="countTextarea1" placeholder="Compteur de caractères" >}}
{{< /example >}}

### Zone de texte multi-ligne avec barre d'outils

Nous vous recommandons de limiter les barres d’outils à une ligne et de placer les outils secondaires dans un menu contextuel si nécessaire.

{{< example html >}}
<div class="form-group">
  <label for="exampleFormControlTextarea3">Exemple de zone de texte</label>
  <div class="form-toolbar">
    <div class="form-toolbar-content">
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Gras</span>
        <i class="icons-toolbar-bold" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Italique</span>
        <i class="icons-toolbar-italic" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Souligné</span>
        <i class="icons-toolbar-underline" aria-hidden="true"></i>
      </button>
      <span class="form-toolbar-separator"></span>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Aligné à gauche</span>
        <i class="icons-toolbar-left icons-size-1x25" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Aligné au centre</span>
        <i class="icons-toolbar-center icons-size-1x25" aria-hidden="true"></i>
      </button>
      <button type="button" class="form-toolbar-item">
        <span class="sr-only">Liste</span>
        <i class="icons-toolbar-list icons-size-1x25" aria-hidden="true"></i>
      </button>
    </div>
    <div class="form-toolbar-right">
      <div class="btn-group dropdown">
        <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <i class="icons-options icons-size-1x25" aria-hidden="true"></i>
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
    <textarea class="form-control" placeholder="Comment"></textarea>
    <span class="form-control-state"></span>
  </div>
</div>
{{< /example >}}


## Curseur intervalle

Les curseurs permettent aux utilisateurs de définir et d'ajuster une valeur ou une plage sur une plage de valeurs prédéfinie. Il existe deux types de curseurs : à valeur unique et à double valeur. Si nécessaire, affichez une valeur minimale et maximale à chaque extrêmité de la ligne permet à l'utilisateur de mieux se situer.

Avec un curseur, les utilisateurs peuvent choisir une valeur approximative, c'est-à-dire une valeur considérée comme relative.

{{< example html >}}
<div class="range-slider" data-component="range-slider" data-target="#range_01">
  <i class="icons-interrogation icons-size-1x25 pr-2" aria-hidden="true"></i>
  <div id="range_01" data-min="25" data-max="125" data-hide-from-to="true">
  </div>
  <i class="icons-interrogation icons-size-1x25 pl-2" aria-hidden="true"></i>
</div>
{{< /example >}}

{{< example html >}}
<div class="range-slider" data-component="range-slider" data-target="#range_02">
  <span class="d-inline-block pr-2">25</span>
  <div id="range_02" data-min="25" data-max="125" data-type="double" data-from="50" data-to="100">
  </div>
  <span class="d-inline-block pl-2">125</span>
</div>
{{< /example >}}

{{% example html %}}
<div class="range-slider is-disabled" data-component="range-slider" data-target="#range_03">
  <span class="d-inline-block pr-2">25</span>
  <div id="range_03" data-min="25" data-max="125" data-type="double" data-from="50" data-to="100">
  </div>
  <span class="d-inline-block pl-2">125</span>
</div>
{{< /example >}}

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
<label class="font-weight-medium mb-2" for="addreceivers1">Ajoutez un élément</label>
<div class="form-control-container form-chips-container" data-component="chips">
  <input data-role="typewriter" type="text" class="chips-input stretchy" id="addreceivers1" />
  <label class="font-weight-medium mb-2 sr-only" for="receivers1">Éléments</label>
  <select class="sr-only" data-role="input" tabindex="-1" aria-hidden="true" id="receivers1" multiple>
    <option selected>Sem Inceptos Tellus</option>
    <option>Amet Porta</option>
    <option selected>Pharetra Fusce Venenatis</option>
  </select>
</div>
{{% /example %}}

{{% example html %}}
<label class="font-weight-medium mb-2" for="addreceivers2">Éléments</label>
<div class="form-control-container form-chips-container" data-component="chips">
  <input id="addreceivers2" data-role="typewriter" type="text" class="chips-input stretchy" />
  <label class="font-weight-medium mb-2 sr-only" for="receivers2">Éléments</label>
  <select id="receivers2" class="sr-only" data-role="input" tabindex="-1" aria-hidden="true" multiple>
  </select>
</div>
{{% /example %}}

{{% callout warning %}}
### Alternatives aux étiquettes cachées
Les technologies d'assistance telles que les lecteurs d'écran auront des problèmes avec formulaires si vous n'incluez pas d'étiquette pour chaque entrée. Pour ces formulaires en ligne, vous pouvez masquer les étiquettes avec la classe `.sr-only`. Il existe d'autres  méthodes alternatives pour fournir une  étiquette pour les technologies d'assistance, telles que les attributs `aria-label`, `aria-labelledby` ou `title`. Si aucune d'entre elles n'est présente, les technologies  d'assistance peuvent recourir à l'attribut `placeholder`, le cas échéant, mais notez que l'utilisation de `placeholder` en remplacement d'étiquetage n'est pas conseillée.
{{% /callout %}}

## Texte d'aide au remplissage

Les textes de niveau de block dans les formulaires peuvent être créés avec `.form-text` (connu précédemment avec `.help-block` dans Bootstrap v3).
Le texte d'aide sur la même ligne peut être implémenté de manière flexible en utilisant n'importe quel élément HTML _inline_ et les classes utilitaires comme `.text-muted`.

{{% callout warning %}}
#### Associer les textes d'aide aux contrôles de formulaire

Le texte d'aide devrait toujours être associé avec le contrôle de formulaire auquel il fait référence grâce à l'attribut `aria-describedby`. Cela va assurer que la technologie d'assistance — comme les lecteurs d'écran — annonce le texte d'aide à l'utilisateur lui permettant d'utiliser le formulaire.
{{% /callout %}}

Le texte d'aide situé sous un champ peut être stylisé avec `.form-text`. Cette classe inclut `display: block` et ajoute quelques marges hautes pour faciliter l'espacement avec le champ situé au-dessus.

{{% example html %}}
<label class="font-weight-medium mb-2" for="inputPassword5">Mot de passe</label>
<div class="form-control-container">
  <input type="password" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock">
  <span class="form-control-state"></span>
</div>
<small id="passwordHelpBlock" class="form-text text-muted">
  Votre mot de passe devrait contenir au moins 230 caractères sans lettres ni nombres.
</small>
{{% /example %}}

Le texte sur une ligne peut utiliser n'importe quel élément HTML _inline_ (comme `<small>`, `<span>`, ou autres) sans rien de plus qu'une classe utilitaire.

{{% example html %}}
<form class="form-inline">
  <div class="form-group">
    <label class="font-weight-medium" for="inputPassword6">Mot de passe</label>
    <div class="form-control-container mx-sm-3">
      <input type="password" id="inputPassword6" class="form-control" aria-describedby="passwordHelpInline">
      <span class="form-control-state"></span>
    </div>
    <small id="passwordHelpInline" class="text-muted">
      Votre mot de passe devrait contenir au moins 230 caractères sans lettres ni nombres.
    </small>
  </div>
</form>
{{% /example %}}

## Formulaires inactifs

Ajoutez l'attribut booléen `disabled` sur une entrée pour empêcher l'utilisateur d'interagir avec un champ et légèrement griser le champ.

{{% highlight html %}}
<input class="form-control" id="disabledInput" type="text" placeholder="Entrée inactive ici..." disabled>
{{% /highlight %}}

Ajoutez l'attribut `disabled` attribute to a `<fieldset>` to disable all the controls within.

{{% example html %}}
<form>
  <fieldset disabled>
    <div class="form-group">
      <label class="font-weight-medium mb-2" for="disabledTextInput">Entrée inactive</label>
      <input type="text" id="disabledTextInput" class="form-control" placeholder="Entrée inactive">
    </div>
    <div class="form-group">
      <label class="font-weight-medium mb-2" for="disabledSelect">Liste déroulante inactive</label>
      <select id="disabledSelect" class="form-control">
        <option>Option inactive</option>
      </select>
    </div>
    <button type="submit" class="btn btn-primary">Valider</button>
  </fieldset>
</form>
{{% /example %}}

{{% callout warning %}}
### Mise en garde avec ancres

Par défaut, les navigateurs traitent tous les contrôles de formulaire natifs (éléments `<input>`, `<select>` et `<button>`) d'un groupe `<fieldset disabled>` comme désactivés, empêchant ainsi les interactions clavier et souris. Toutefois, si votre formulaire comprend également des éléments `<a ... class="btn btn-*">`, ceux-ci se verront attribuer un style `pointer-events: none`. Comme indiqué dans la section relative à [état désactivé pour les boutons]({{< docsref "/components/buttons" >}}) (et plus précisément dans la sous-section relative aux éléments d'ancrage), cette propriété CSS n'est pas encore normalisée et n'est pas totalement pris en charge dans _Opera 18_ et versions ultérieures, ou dans Internet Explorer 10, et n’empêchera pas les utilisateurs de clavier de se concentrer ou d’activer ces liens. Donc, pour être sûr, utilisez du JavaScript personnalisé pour désactiver ces liens.
{{% /callout %}}

{{% callout danger %}}
### Compatibilité multi-navigateur

Bien que Bootstrap applique ces styles dans tous les navigateurs, Internet Explorer 11 et les versions ultérieures ne prennent pas totalement en charge l'attribut `disabled` sur un `<fieldset>`. Utilisez du JavaScript personnalisé pour désactiver le groupe de champs dans ces navigateurs.
{{% /callout %}}

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
      <label class="font-weight-medium mb-2 required" for="validationCustom01">Prénom</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationCustom01" placeholder="Prénom" value="Marc" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom02">Nom de famille</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationCustom02" placeholder="Nom de famille" value="Dupont" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustomUsername">Pseudo</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustomUsername" placeholder="Pseudo" aria-describedby="inputGroupPrepend" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback" id="inputGroupPrepend">
        Veuillez choisir un pseudo.
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationCustom03">Ville</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustom03" placeholder="Ville" aria-describedby="inputGroupPrepend2" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback" id="inputGroupPrepend2">
        Veuillez renseigner une ville valable.
      </div>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Valider le formulaire</button>
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
      <label class="font-weight-medium mb-2 required" for="validationCustom03">Ville</label>
      <div class="form-control-container is-invalid">
        <input type="text" class="form-control" id="validationCustom03" placeholder="Ville" aria-describedby="iputGroupPrepend3" required>
        <span class="form-control-state"></span>
      </div>
      <div class="invalid-feedback" id="iputGroupPrepend3">
        Veuillez renseigner une ville valable.
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
      <label class="font-weight-medium mb-2 required" for="validationDefault01">Prénom</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault01" placeholder="Prénom" value="Marc" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault02">Nom de famille</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault02" placeholder="Nom de famille" value="Dupont" required>
        <span class="form-control-state"></span>
      </div>
    </div>
    <div class="col-md-4 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefaultUsername">Pseudo</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefaultUsername" placeholder="Pseudo" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-row">
    <div class="col-md-6 mb-3">
      <label class="font-weight-medium mb-2 required" for="validationDefault03">Ville</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault03" placeholder="Ville" required>
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
      <label class="font-weight-medium mb-2 required" for="validationDefault05">Code postal</label>
      <div class="form-control-container">
        <input type="text" class="form-control" id="validationDefault05" placeholder="Code postal" required>
        <span class="form-control-state"></span>
      </div>
    </div>
  </div>
  <div class="form-group">
    <div class="custom-control custom-checkbox mb-2 mr-sm-2">
      <input class="custom-control-input" type="checkbox" value="" id="invalidCheck2" required>
      <label class="custom-control-label font-weight-medium" for="invalidCheck2">Accepter les conditions d'utilisation</label>
    </div>
  </div>
  <button class="btn btn-primary" type="submit">Valider le formulaire</button>
</form>
{{% /example %}}
