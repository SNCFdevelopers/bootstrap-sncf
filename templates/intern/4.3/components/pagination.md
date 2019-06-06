---
layout: docs
title: Pagination
description: Documentation and examples for showing pagination to indicate a series of related content exists across multiple pages.
group: components
toc: true
permalink: /docs/4.0/components/pagination/
---

## Overview

Use page numbers when the content to be displayed is too long or cluttered or is spread across several pages. This lets users move easily to the first, last, previous or next page. The page the user is on is listed, as are the two pages before and after. In an advanced scenario, you can allow users to choose the number of results to show per page.

We use a large block of connected links for our pagination, making links hard to miss and easily scalable—all while providing large hit areas. Pagination is built with list HTML elements so screen readers can announce the number of available links. Use a wrapping `<nav>` element to identify it as a navigation section to screen readers and other assistive technologies.

In addition, as pages likely have more than one such navigation section, it's advisable to provide a descriptive `aria-label` for the `<nav>` to reflect its purpose. For example, if the pagination component is used to navigate between a set of search results, an appropriate label could be `aria-label="Search results pages"`.

{% example html %}
<nav role="navigation" aria-label="Page navigation example">
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
{% endexample %}

## Disabled and active states

Pagination links are customizable for different circumstances. Use `.disabled` for links that appear un-clickable and `.active` to indicate the current page.

{% example html %}
<nav role="navigation" aria-label="Résultats de recherche">
  <ul class="pagination">
    <li class="page-item page-skip disabled">
      <span class="page-link" href="#" tabindex="-1">
        <i class="icons-arrow-prev icons-size-x5" aria-hidden="true"></i>
        <span class="d-none d-sm-inline ml-2">Précédent</span>
      </span>
    </li>
    <li class="page-item active">
      <a class="page-link" href="#" title="1 Page active">1 <span class="sr-only">(current)</span></a>
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
{% endexample %}

## Sizing

Fancy larger or smaller pagination? Add `.pagination-lg` or `.pagination-sm` for additional sizes.

{% example html %}
<nav role="navigation" aria-label="Résultats de la recherche">
  <ul class="pagination pagination-lg">
    <li class="page-item disabled">
      <span class="page-link" href="#" tabindex="-1">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{% endexample %}

{% example html %}
<nav role="navigation" aria-label="Résultats de la recherche">
  <ul class="pagination pagination-sm">
    <li class="page-item disabled">
      <span class="page-link" href="#" tabindex="-1">1</span>
    </li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
  </ul>
</nav>
{% endexample %}

## Alignment

Change the alignment of pagination components with [flexbox utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/flex/).

{% example html %}
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
{% endexample %}

{% example html %}
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
{% endexample %}
