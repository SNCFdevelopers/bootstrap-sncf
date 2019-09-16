---
layout: docs
title: Boutons
slug: boutons
description: "Les boutons ont plusieurs utilisations : ils peuvent permettre à l'utilisateur de déclencher une action, répondre à une question posée dans une interface conversationnelle, activer ou désactiver un état, augmenter ou diminuer une valeur numérique, etc. A noter que les boutons de menu sont affichés dans la section des menus déroulants."
group: components
toc: true
url: /docs/4.3/components/boutons/
---

## Exemples
Les boutons principaux sont utilisés pour l'action principale. Les boutons secondaires sont utilisés pour des actions moins importantes.

{{% example html %}}
<button type="button" class="btn btn-primary">btn-primary</button>
<button type="button" class="btn btn-secondary">btn-secondary</button>
{{% /example %}}

{{% callout info %}}
{{% partial "callout-where-are-the-colors.fr.md" %}}
{{% /callout %}}

## Classes de boutons

Les classes `.btn` sont conçues pour être utilisées avec l'élément `<button>`. Cependant, vous pouvez également des classes sur les éléments `<a>` ou `<input>` (bien que certains navigateurs puissent appliquer un rendu légèrement différent).

Lorsque vous utilisez des classes de boutons sur des éléments `<a>` utilisés pour déclencher des fonctionnalités de page (telles que la réduction de contenu), plutôt que sur des liens vers de nouvelles pages ou sections de la page en cours, un lien `role="button"` doit être attribué à ces liens afin de communiquer de manière appropriée avec les technologies d'assistance telles que les lecteurs d'écran.

{{% example html %}}
<a class="btn btn-primary" href="#" role="button">Link</a>
<button class="btn btn-primary" type="submit">Button</button>
<input class="btn btn-primary" type="button" value="Input">
<input class="btn btn-primary" type="submit" value="Submit">
<input class="btn btn-primary" type="reset" value="Reset">
{{% /example %}}

## Boutons liens

Ces boutons sont utilisés pour des actions mineures, ou des éléments appropriés (comme le téléchargement, les liens externes et le partage).

<p><a href="#" class="btn btn-link"><span>Internal link</span> <i class="icons-arrow-next icons-size-x75 ml-2" aria-hidden="true"></i></a></p>
<p><a href="#" class="btn btn-link"><span>Share link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></a></p>
<p><a href="#" class="btn btn-link"><span>Download link</span> <i class="icons-download icons-size-x75 ml-2" aria-hidden="true"></i></a></p>
<p><a href="#" class="btn btn-link"><span>External link</span> <i class="icons-external-link icons-size-x75 ml-2" aria-hidden="true"></i></a></p>

{{% highlight html %}}
<a href="#" class="btn btn-link"><span>Internal link</span> <i class="icons-arrow-next icons-size-x75 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>Share link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>Download link</span> <i class="icons-download icons-size-x75 ml-2" aria-hidden="true"></i></a>
<a href="#" class="btn btn-link"><span>External link</span> <i class="icons-external-link icons-size-x75 ml-2" aria-hidden="true"></i></a>
{{% /highlight %}}

### Etat inactif
{{% example html %}}
<p><span class="btn btn-link disabled"><span>Disabled link</span> <i class="icons-share icons-size-x75 ml-2" aria-hidden="true"></i></span></p>
{{% /example %}}

## Boutons icônes

Ces boutons sont utilisés pour une série de boutons placés les uns à côté des autres. Ils permettent un design plus compact pour des actions rapides (recherche, filtres, etc.).

{{% example html %}}
<button type="button" class="btn btn-only-icon btn-primary">
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
<button type="button" class="btn btn-only-icon btn-primary" disabled>
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
<button type="button" class="btn btn-only-icon btn-white">
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
<button type="button" class="btn btn-only-icon btn-white" disabled>
  <span class="sr-only">Search</span>
  <i class="icons-search" aria-hidden="true"></i>
</button>
{{% /example %}}

## Boutons icônes de navigation

Ces boutons permettent de se déplacer entre différentes vues (dans un carousel par exemple), ou points d'ancrage sur un écran (bouton rapide de remontée en haut de l'écran).

{{% example html %}}
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Haut</span><i class="icons-arrow-up" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Suivant</span><i class="icons-arrow-next" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Bas</span><i class="icons-arrow-down" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow"><span class="sr-only">Précédent</span><i class="icons-arrow-prev" aria-hidden="true"></i></button>
{{% /example %}}

{{% example html %}}
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Haut</span><i class="icons-arrow-up" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Suivant</span><i class="icons-arrow-next" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Bas</span><i class="icons-arrow-down" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-white box-shadow" disabled><span class="sr-only">Précédent</span><i class="icons-arrow-prev" aria-hidden="true"></i></button>
{{% /example %}}

## Boutons icônes de partage réseaux sociaux

Ces boutons permettent de partager une page donnée sur les réseaux sociaux.

{{% example html %}}
<button type="button" class="btn-rounded btn-rounded-primary"><span class="sr-only">Partager</span><i class="icons-share" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-facebook"><span class="sr-only">Facebook</span><i class="icons-facebook" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-twitter"><span class="sr-only">Twitter</span><i class="icons-twitter" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-linkedin"><span class="sr-only">Linkedin</span><i class="icons-linkedin" aria-hidden="true"></i></button>
<button type="button" class="btn-rounded btn-rounded-instagram"><span class="sr-only">Instagram</span><i class="icons-instagram" aria-hidden="true"></i></button>
{{% /example %}}

{{% example html %}}
<button type="button" class="btn-rounded btn-rounded-gray">9</button>
<button type="button" class="btn-rounded btn-rounded-gray">99</button>
<button type="button" class="btn-rounded btn-rounded-gray">999</button>
{{% /example %}}

## Tailles

Des petits boutons sont utilisés lorsque l'espace est limité, par exemple dans un tableau.

Vous voulez de plus petits boutons ? Ajoutez `.btn-sm` pour des tailles supplémentaires.

{{% example html %}}
<button type="button" class="btn btn-primary btn-sm">Small button</button>
<button type="button" class="btn btn-secondary btn-sm">Small button</button>
{{% /example %}}

Créez des boutons prenant la largeur d'un élément en ajoutant `.btn-block`.

{{% example html %}}
<button type="button" class="btn btn-primary btn-block">Block level button</button>
<button type="button" class="btn btn-secondary btn-block">Block level button</button>
{{% /example %}}

## État actif

Lorsqu'ils sont activés, les boutons auront une apparence au roll et au clic, avec une couleur plus sombre, une bordure plus sombre et une ombre incrustée). **Il n'est pas nécessaire d'ajouter une classe à `<button>` car ils utilisent une pseudo-classe**. Cependant, vous pouvez toujours forcer la même apparence active avec `.active` (et inclure l'attribut <code>aria-pressed="true"</code>) si vous devez répliquer l'état programmatiquement.

{{% example html %}}
<button type="button" class="btn btn-primary active" aria-pressed="true">Primary link</button>
<a href="#" class="btn btn-secondary active" role="button" aria-pressed="true">Link</a>
{{% /example %}}

## Etat inactif

Même si on ne l'utilise que très peu (un bouton inactif est un bouton qui n'existe pas), vous pouvez, en cas de force majeure, désactiver les boutons en ajoutant l'attribut `disabled` à tout élément `<button>`.

{{% example html %}}
<button type="button" class="btn btn-primary" disabled>Primary button</button>
<a href="#" class="btn btn-secondary disabled">Button</a>
{{% /example %}}

Les boutons désactivés utilisant l'élément `<a>` se comportent différemment:

- `<a>` ne supporte pas l'attribut `disabled`, vous devez donc ajouter la classe `.disabled` pour lui donner une apparence désactivée.
- Certains styles compatibles avec le futur sont inclus pour désactiver les `pointer-events` sur les boutons d'ancrage. Dans les navigateurs prenant en charge cette propriété, vous ne verrez pas du tout le curseur désactivé.
- Les boutons désactivés doivent inclure l'attribut `aria-disabled="true"` pour indiquer l'état de l'élément pour les technologies d'assistance telles que les lecteurs d'écran.

{{% example html %}}
<a href="#" class="btn btn-primary disabled" aria-disabled="true">Primary link</a>
<a href="#" class="btn btn-secondary disabled" aria-disabled="true">Link</a>
{{% /example %}}

{{% callout warning %}}
##### Mise en garde concernant la fonctionnalité de lien

La classe `.disabled` utilise `pointer-events: none` pour essayer de désactiver la fonctionnalité de liaison `<a>`s, mais cette propriété CSS n'est pas encore normalisée. En outre, même dans les navigateurs qui prennent en charge les événements de type `pointer-events: none`, la navigation au clavier reste inchangée, ce qui signifie que les utilisateurs de clavier et de technologies d'assistance comme les lecteurs d'écran pourront toujours activer ces liens. Pour plus de sécurité, ajoutez donc un attribut `tabindex="-1"` sur ces liens (pour les empêcher de recevoir le focus clavier) et utilisez du JavaScript personnalisé pour désactiver leurs fonctionnalités.
{{% /callout %}}

## Boutons pictogrammes

Les gros boutons avec pictogramme sont utilisés lorsque les options proposées par les boutons nécessitent une image pour davantage de clarté, ou pour illustrer des entrées sur un espace suffisant par exemple.

{{% example html %}}
<button type="button" class="btn btn-card">
  <i class="icons-large-france icons-size-90px" aria-hidden="true"></i>
  <span>Carte</span>
</button>
<button type="button" class="btn btn-card active" title="Carte actif">
  <i class="icons-large-france icons-size-90px" aria-hidden="true"></i>
  <span>Carte</span>
</button>
<button type="button" class="btn btn-card" disabled>
  <i class="icons-large-france icons-size-90px" aria-hidden="true"></i>
  <span>Carte</span>
</button>
{{% /example %}}
