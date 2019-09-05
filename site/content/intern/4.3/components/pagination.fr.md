---
layout: docs
title: Pagination
description: Documentation et exemples montrant la pagination pour indiquer une série de contenus existants sur plusieurs pages.
group: components
toc: true
url: /docs/4.3/components/pagination/
---

## Vue d'ensemble

Utilisez des numéros de page lorsque le contenu à afficher est trop long, encombré ou s’il est réparti sur plusieurs pages. Cela permet aux utilisateurs de passer facilement de la première page à la dernière page ou à une page précédente ou suivante. La page sur laquelle l'utilisateur se trouve est répertoriée, de même que les deux pages avant et après. Dans un scénario avancé, vous pouvez permettre aux utilisateurs de choisir le nombre de résultats à afficher par page.

Nous utilisons un grand bloc de liens connectés pour notre pagination, ce qui rend les liens faciles à trouver et évolutifs, tout en offrant de grandes zones pour le click. La pagination est construite avec des éléments HTML de liste afin que les lecteurs d'écran puissent annoncer le nombre de liens disponibles. Utilisez un élément `<nav>` enveloppant pour l'identifier en tant que section de navigation par les lecteurs et autres technologies d'assistance.

De plus, comme les pages comportent probablement plusieurs sections de navigation, il est conseillé de fournir un `aria-label` descriptif pour le `<nav>` afin de refléter son objectif. Par exemple, si le composant de pagination est utilisé pour naviguer dans un ensemble de résultats de recherche, une étiquette appropriée pourrait être `aria-label="Résultats de la recherche"`.

{{% example html %}}
<nav role="navigation" aria-label="Exemple de page de navigation">
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

## États inactifs et actifs

Les liens de pagination sont modifiables pour différents besoins. Utilisez `.disabled` pour des liens devant apparaître non cliquables, et `.active` pour indiquer la page en cours.

{{% example html %}}
<nav role="navigation" aria-label="Résultats de recherche">
  <ul class="pagination">
    <li class="page-item page-skip disabled">
      <span class="page-link" href="#" tabindex="-1">
        <i class="icons-arrow-prev icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Précédent</span>
      </span>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#" title="1 Page active">1 <span class="sr-only">(courante)</span></a>
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

## Taille

Vous voulez une pagination plus grande ou plus petite ? Ajoutez respectivement `.pagination-lg` ou `.pagination-sm` pour des tailles additionnelles.

{{% example html %}}
<nav role="navigation" aria-label="Résultats de la recherche">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <span class="page-link" href="#" tabindex="-1">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{% /example %}}

{{% example html %}}
<nav role="navigation" aria-label="Résultats de la recherche">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <span class="page-link" href="#" tabindex="-1">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{{% /example %}}

## Alignement

Changez l'alignement du composant pagination avec [les utilitaires flexbox]({{< docsref "/utilities/flex" >}}).

{{% example html %}}
<nav role="navigation" aria-label="Page navigation example">
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
<nav role="navigation" aria-label="Page navigation example">
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
