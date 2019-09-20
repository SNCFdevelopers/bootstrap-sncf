---
layout: docs
title: Boutons
description: "Les boutons ont plusieurs utilisations : ils peuvent permettre à l'utilisateur de déclencher une action, répondre à une question posée dans une interface conversationnelle, activer ou désactiver un état, augmenter ou diminuer une valeur numérique, etc. A noter que les boutons de menu sont affichés dans la section des menus déroulants."
group: components
toc: true
url: /fr/docs/4.3/components/buttons/
---

## Example

{{% example html %}}
<button type="button" class="btn btn-primary">btn-primary</button>
{{% /example %}}

{{% callout info %}}
{{% partial "callout-where-are-the-colors.fr.md" %}}
{{% /callout %}}

## Boutons d'action

Ce sont des boutons d'actions. Ils sont toujours bleus et ressemblent à un vrai bouton. L'action écrite sur le bouton doit être courte et constituer une commande. Exemple : « Confirmez votre inscription ». Nous préférons les liens pour des actions moins importantes. Les boutons indiquent l'action principale. Ne pas en abuser.

Les boutons d'actions sont alignés à gauche, à l'exception des périphériques mobiles et de certains formulaires, où ils peuvent occuper toute la largeur utilisable de l'écran.

Les classes `.btn` sont conçues pour être utilisées avec l’élément `<button>`. Cependant, vous pouvez également utiliser ces classes sur les éléments `<a>` ou `<input>` (bien que certains navigateurs puissent appliquer un rendu légèrement différent).

Lorsque vous utilisez des classes de boutons sur des éléments `<a>` utilisés pour déclencher des fonctionnalités de page (telles que masquer du contenu), plutôt que de lier à de nouvelles pages ou sections de la page en cours, ces liens devraient avoir un attribut `role="button"` pour correctement transmettre leur fonction aux technologies d'assistance telles que les lecteurs d'écran.

{{% example html %}}
<button class="btn btn-primary" type="submit">Boutons</button>
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
<button type="button" class="btn-rounded btn-rounded-instagram"><span class="sr-only">YouTube</span><i class="icons-instagram" aria-hidden="true"></i></button>
{{% /example %}}

{{% example html %}}
<button type="button" class="btn-rounded btn-rounded-gray">9</button>
<button type="button" class="btn-rounded btn-rounded-gray">99</button>
<button type="button" class="btn-rounded btn-rounded-gray">999</button>
{{% /example %}}

## Bouton de taille de bloc

Créez des boutons prenant la largeur d'un élément en ajoutant `.btn-block`.

{{% example html %}}
<button type="button" class="btn btn-primary btn-block">Bouton de taille de bloc</button>
{{% /example %}}
