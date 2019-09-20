---
layout: docs
title: Pagination
description: Les numéros de page guident les utilisateurs dans le contenu sur plusieurs pages. Ils apparaissent au bas de la page.
group: components
toc: true
url: /fr/docs/4.3/components/pagination/
---

## Vue d'ensemble

Utilisez des numéros de page lorsque le contenu à afficher est trop long, encombré, ou réparti sur plusieurs pages. Cela permet aux utilisateurs de passer facilement à la première page, à la dernière page ou à la page précédente ou suivante. La page sur laquelle l'utilisateur se trouve est répertoriée, de même que les deux pages avant et après. Dans un scénario avancé, vous pouvez permettre aux utilisateurs de choisir le nombre de résultats à afficher par page.

Nous utilisons un grand bloc de liens connectés pour notre pagination, ce qui rend les liens bien visibles et facilement évolutifs, tout en offrant de grandes zones de clic. La pagination est construite avec des éléments HTML de liste afin que les lecteurs d'écran puissent annoncer le nombre de liens disponibles. Utilisez un élément `<nav>` enveloppant pour l'identifier en tant que section de navigation permettant de filtrer les lecteurs et autres technologies d'assistance.

De plus, comme les pages comportent probablement plusieurs sections de navigation, il est conseillé de fournir un `aria-label` descriptif pour la `<nav>` afin de refléter son objectif. Par exemple, si le composant de pagination est utilisé pour naviguer entre un ensemble de résultats de recherche, une étiquette appropriée pourrait être `aria-label="Pages de résultats de recherche"`.

{{% example html %}}
<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <i class="icons-arrow-double icons-rotate-180 icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Début</span>
      </a>
    </li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <i class="icons-arrow-prev icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Précédent</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Suivant</span>
        <i class="icons-arrow-next icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Fin</span>
        <i class="icons-arrow-double icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
{{% /example %}}

## États actifs et inactifs

Les liens de pagination sont personnalisables pour différentes circonstances. Utilisez `.disabled` pour les liens non cliquables et `.active` pour indiquer la page en cours.

Bien que la classe `.disabled` utilise` pointer-events: none` pour _tenter_ de désactiver la fonctionnalité « lien » des balises `<a>`, cette propriété CSS n'est pas encore normalisée et ne prend pas en compte la navigation au clavier. En tant que tel, vous devriez toujours ajouter `tabindex="-1"` sur les liens désactivés et utiliser du JavaScript personnalisé pour désactiver complètement leurs fonctionnalités.

{{% example html %}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item page-skip disabled">
      <a class="page-link" href="#" tabindex="-1">
        <i class="icons-arrow-prev icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Précédent</span>
      </a>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#">1 <span class="sr-only">(current)</span></a>
    </li>
    <li class="page-item">
      <a class="page-link" href="#">2</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Suivant</span>
        <i class="icons-arrow-next icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
{{% /example %}}

Vous pouvez éventuellement permuter les ancres actives ou désactivées pour `<span>`, ou omettre l'ancre dans le cas des flèches précédente/suivante, pour supprimer la possibiliter de cliquer et empêcher le focus au clavier tout en conservant les styles souhaités.

{{% example html %}}
<nav aria-label="...">
  <ul class="pagination">
    <li class="page-item page-skip disabled">
      <span class="page-link">Previous</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item active">
      <span class="page-link">
        2
        <span class="sr-only">(current)</span>
      </span>
    </li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">Next</a>
    </li>
  </ul>
</nav>
{{% /example %}}

## Dimensions

Vous voulez augmenter ou réduire la taille de ce composant ? Ajoutez `.pagination-lg` ou `.pagination-sm` pour tes tailles additionnelles.

{{% example html %}}
<nav aria-label="...">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{% /example %}}

{{% example html %}}
<nav aria-label="...">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <a class="page-link" href="#" tabindex="-1">1</a>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{% /example %}}

## Alignement

Changez l'alignement du composant de pagination avec les [utilitaires flexbox]({{< docsref "/utilities/flex" >}}).

{{% example html %}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-center">
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <i class="icons-arrow-double icons-rotate-180 icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Début</span>
      </a>
    </li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <i class="icons-arrow-prev icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Précédent</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Suivant</span>
        <i class="icons-arrow-next icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Fin</span>
        <i class="icons-arrow-double icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
{{% /example %}}

{{% example html %}}
<nav aria-label="Page navigation example">
  <ul class="pagination justify-content-end">
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <i class="icons-arrow-double icons-rotate-180 icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Début</span>
      </a>
    </li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <i class="icons-arrow-prev icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Précédent</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Suivant</span>
        <i class="icons-arrow-next icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
    <li class="page-item page-skip">
      <a class="page-link" href="#">
        <span class="d-none d-sm-inline mr-2">Fin</span>
        <i class="icons-arrow-double icons-size-x5" aria-hidden="true"></i>
      </a>
    </li>
  </ul>
</nav>
{{% /example %}}
