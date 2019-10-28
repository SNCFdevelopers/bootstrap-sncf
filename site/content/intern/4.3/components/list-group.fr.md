---
layout: docs
title: Groupes de listes
description: Les groupes de listes constituent un composant souple et puissant, permettant d'afficher une série de contenus. Modifiez-les et étendez-les pour prendre en charge à peu près tous les contenus.
group: components
toc: true
url: /fr/docs/4.3/components/list-group/
---

## Description

Les listes standard peuvent être utilisées avec ou sans icônes. Selon le contexte, la liste peut comporter une ou plusieurs actions (favori, télécharger, supprimer, etc.). Utilisez des listes standard avec une action unique lorsque chaque ligne a une action.

Des cases à cocher peuvent être ajoutées lorsqu'une action de groupe est proposée pour tous les éléments de la liste. Une autre variante est un bouton unique qui combine plusieurs actions par ligne (menu contextuel). Lorsque les utilisateurs doivent pouvoir voir à la fois la liste et les détails, utilisez des listes à double volets.

## Liste standard

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Michka Oglyana</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Titre lorem ipsum dolor sit amet</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 14 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      </div>
  </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Titre lorem ipsum dolor sit amet</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 5 mai 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Marcel Patoulatchi</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      </div>
  </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 30 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Magali Sondnach</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        </div>
      </div>
    </li>
  </ul>
</div>

{{% highlight html %}}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h2>Titre lorem ipsum dolor sit amet</h2>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Michka Oglyana</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      </div>
    </div>
  </li>
    ...
</ul>
{{% /highlight %}}

## Liste simple avec action unique

{{% example html %}}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample1" aria-label="Title 1">
          <label class="custom-control-label" for="managementExample1"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 1</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Michka Oglyana</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      </div>
      <div class="management-item-action">
        <button type="button" class="btn btn-options dropdown-toggle" title="Télécharger (pdf 50mo)" data-toggle="dropdown">
          <i class="icons-download" aria-hidden="true"></i>
          <span class="sr-only">Télécharger</span>
        </button>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample2" aria-label="Title 2">
          <label class="custom-control-label" for="managementExample2"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 2</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 14 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      </div>
      <div class="management-item-action">
        <button type="button" class="btn btn-options dropdown-toggle" title="Télécharger (pdf 50mo)" data-toggle="dropdown">
          <i class="icons-download" aria-hidden="true"></i>
          <span class="sr-only">Télécharger</span>
        </button>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample3" aria-label="Title 3">
          <label class="custom-control-label" for="managementExample3"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 3</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 5 mai 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Marcel Patoulatchi</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
      </div>
      <div class="management-item-action">
        <button type="button" class="btn btn-options dropdown-toggle" title="Télécharger (pdf 50mo)" data-toggle="dropdown">
          <i class="icons-download" aria-hidden="true"></i>
          <span class="sr-only">Télécharger</span>
        </button>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample4" aria-label="Title 4">
          <label class="custom-control-label" for="managementExample4"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 4</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 30 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Magali Sondnach</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
      </div>
      <div class="management-item-action">
        <button type="button" class="btn btn-options dropdown-toggle" title="Télécharger (pdf 50mo)" data-toggle="dropdown">
          <i class="icons-download" aria-hidden="true"></i>
          <span class="sr-only">Télécharger</span>
        </button>
      </div>
    </div>
  </li>
</ul>
{{% /example %}}

## Liste avec bouton favoris et actions

{{% example html %}}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample11" aria-label="Title 1">
          <label class="custom-control-label" for="managementExample11"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 1</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn-group-toggle" data-toggle="buttons">
          <label for="inputFavListgroup1" class="btn btn-only-icon btn-favorite d-none d-lg-block active">
            <input id="inputFavListgroup1" type="checkbox" autocomplete="off" checked>
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
          </label>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown1">
            <span class="sr-only">Actions</span>
            <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
          </button>
          <div id="dropdown1" class="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <button class="dropdown-item" type="button">Déclencher le suivi</button>
              </li>
              <li>
                <button class="dropdown-item" type="button" title="Télécharger (pdf 50mo)">Télécharger</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">Supprimer</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample12" aria-label="Title 1">
          <label class="custom-control-label" for="managementExample12"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 2</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn-group-toggle" data-toggle="buttons">
          <label for="inputFavListgroup2" class="btn btn-only-icon btn-favorite d-none d-lg-block">
            <input id="inputFavListgroup2" type="checkbox" autocomplete="off">
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
          </label>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown2">
            <span class="sr-only">Actions</span>
            <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
          </button>
          <div id="dropdown2" class="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <button class="dropdown-item" type="button">Déclencher le suivi</button>
              </li>
              <li>
                <button class="dropdown-item" type="button" title="Télécharger (pdf 50mo)">Télécharger</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">Supprimer</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample13" aria-label="Title 1">
          <label class="custom-control-label" for="managementExample13"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 3</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn-group-toggle" data-toggle="buttons">
          <label for="inputFavListgroup3" class="btn btn-only-icon btn-favorite d-none d-lg-block">
            <input id="inputFavListgroup3" type="checkbox" autocomplete="off">
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
          </label>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown3">
            <span class="sr-only">Actions</span>
            <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
          </button>
          <div id="dropdown3" class="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <button class="dropdown-item" type="button">Déclencher le suivi</button>
              </li>
              <li>
                <button class="dropdown-item" type="button" title="Télécharger (pdf 50mo)">Télécharger</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">Supprimer</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample14" aria-label="Title 4">
          <label class="custom-control-label" for="managementExample14"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h5>Title 4</h5>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn-group-toggle" data-toggle="buttons">
          <label for="inputFavListgroup4" class="btn btn-only-icon btn-favorite d-none d-lg-block">
            <input id="inputFavListgroup4" type="checkbox" autocomplete="off">
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
          </label>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdown4">
            <span class="sr-only">Actions</span>
            <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
          </button>
          <div id="dropdown4" class="dropdown-menu dropdown-menu-right">
            <ul>
              <li>
                <button class="dropdown-item" type="button">Déclencher le suivi</button>
              </li>
              <li>
                <button class="dropdown-item" type="button" title="Télécharger (pdf 50mo)">Télécharger</button>
              </li>
              <li>
                <button class="dropdown-item" type="button">Supprimer</button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </li>
</ul>
{{% /example %}}

## Liste double volets

Notez l'utilisation de la classe `no-gutters` pour coller les colonnes ensemble.

{{% example html %}}
<div class="row no-gutters">
  <div class="col-lg-5 col-md-6">
    <div class="list-group-double-panel-title d-flex align-items-center justify-content-between pl-4 pr-1">
      <h1 class="mb-0 text-base">Lorem ipsum</h1>
      <ul class="toolbar mb-0">
        <li class="toolbar-item">
          <button class="btn btn-only-icon btn-transparent btn-color-gray toolbar-item-spacing">
            <span class="sr-only">Filters</span>
            <i class="icons-filters icons-size-1x25" aria-hidden="true"></i>
          </button>
        </li>
        <li class="toolbar-item">
          <button class="btn btn-only-icon btn-transparent btn-color-gray toolbar-item-spacing">
            <span class="sr-only">Sort</span>
            <i class="icons-sort icons-size-1x5" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </div>
    <ul class="list-group">
      <li class="list-group-item management-item">
        <div class="management-item-content">
          <div class="management-item-symbol">
            <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
          </div>
          <div class="management-item-main">
            <h5 id="titreSelect">Titre lorem ipsum dolor sit amet</h5>
            <ul class="meta-list font-weight-medium">
              <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
              <li class="meta-list-item separator">Site : Lorem ipsum</li>
              <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Michka Ogliana</li>
            </ul>
            <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          </div>
        </div>
      </li>
      <li class="list-group-item management-item">
        <div class="management-item-content">
          <div class="management-item-symbol">
            <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
          </div>
          <div class="management-item-main">
            <h5>Titre lorem ipsum dolor sit amet</h5>
            <ul class="meta-list font-weight-medium">
              <li class="meta-list-item">Mise à jour le 14 avril 2017</li>
              <li class="meta-list-item separator">Site : Lorem ipsum</li>
              <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
            </ul>
            <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          </div>
        </div>
      </li>
      <li class="list-group-item management-item">
        <div class="management-item-content">
          <div class="management-item-symbol">
            <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
          </div>
          <div class="management-item-main">
            <h5>Titre lorem ipsum dolor sit amet</h5>
            <ul class="meta-list font-weight-medium">
              <li class="meta-list-item">Mise à jour le 5 mai 2017</li>
              <li class="meta-list-item separator">Site : Lorem ipsum</li>
              <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Marcel Patoulatchi</li>
            </ul>
            <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          </div>
        </div>
      </li>
      <li class="list-group-item management-item">
        <div class="management-item-content">
          <div class="management-item-symbol">
            <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
          </div>
          <div class="management-item-main">
            <h5>Titre lorem ipsum dolor sit amet</h5>
            <ul class="meta-list font-weight-medium">
              <li class="meta-list-item">Mise à jour le 30 avril 2017</li>
              <li class="meta-list-item separator">Site : Lorem ipsum</li>
              <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Magali Sondnach</li>
            </ul>
            <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          </div>
        </div>
      </li>
    </ul>
  </div>
  <div class="col-lg-7 col-md-6">
    <div class="list-group-double-panel-title d-flex align-items-center justify-content-between pl-4 pr-1">
      <h1 tabindex="-1" class="mb-0 text-base">Content</h1>
      <ul class="toolbar mb-0">
        <li class="toolbar-item">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-only-icon btn-favorite toolbar-item-spacing">
              <input type="checkbox" autocomplete="off">
              <span class="sr-only">Ajouter aux favoris</span>
              <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
            </label>
          </div>
        </li>
        <li class="toolbar-item">
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-only-icon btn-transparent btn-color-gray dropdown-toggle toolbar-item-spacing" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownLsitGroup">
              <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
            </button>
            <div id="dropdownLsitGroup" role="list" class="dropdown-menu dropdown-menu-right">
              <ul>
                <li>
                  <button class="dropdown-item" type="button">Déclencher le suivi</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button" title="Télécharger (pdf 50mo)">Télécharger</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">Supprimer</button>
                </li>
              </ul>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</div>
{{% /example %}}

## Exemple de liste groupée

{{< liste-group.inline >}}
<div class="bd-example">
  <ul class="list-group">
{{ range $index,$group := (seq 3) }}
<li id="group{{ $group }}" class="list-group-item management-item management-item-group" >
  <div class="management-item-content" data-component="state" data-state="active" data-behaviour="toggle" data-target="#group{{ $group }}">
    <div class="management-item-checkbox">
      <div class="custom-control custom-checkbox custom-checkbox-alone">
        <input type="checkbox" class="custom-control-input" id="cell{{ $group }}">
        <label class="custom-control-label" for="cell{{ $group }}"><span class="sr-only">étiquette</span></label>
      </div>
    </div>
    <div class="management-item-caret"></div>
    <div class="management-item-symbol">
      <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
    </div>
    <div class="management-item-main">
      <h2 class="mb-0 text-base font-weight-normal"><button class="btn-unstyled" aria-expanded="false" aria-controls="sublist{{ $index }}">Titre lorem ipsum dolor sit amet</button></h2>
    </div>
  </div>
  <ul id="sublist{{ $group }}" class="management-item-grouplist">
    {{ range $item_idx,$item_grp := (seq 4) }}
    <li class="management-item">
      <div class="management-item-content">
        <div class="management-item-checkbox">
          <div class="custom-control custom-checkbox custom-checkbox-alone">
            <input type="checkbox" class="custom-control-input" id="sublist{{ $group }}-cell{{ $item_grp }}">
            <label class="custom-control-label" for="sublist{{ $group }}-cell{{ $item_grp }}"><span class="sr-only">étiquette</span></label>
          </div>
        </div>
        <div class="management-item-symbol management-item-spacing">
          <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
        </div>
        <div class="management-item-main">
          <h5 class="mb-0 font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
        </div>
        <div class="management-item-action">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label for="inputFavListgroup{{ $item_grp }}" class="btn btn-only-icon btn-favorite active d-none d-lg-block">
              <input id="inputFavListgroup{{ $item_grp }}" type="checkbox" autocomplete="off">
              <span class="sr-only">Ajouter aux favoris</span>
              <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
            </label>
          </div>
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownGroupExemple">
              <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
              <span class="sr-only">Actions</span>
            </button>
            <div role="list" class="dropdown-menu dropdown-menu-right" id="dropdownGroupExemple">
              <ul>
                <li>
                  <button class="dropdown-item" type="button">Rechercher dans la liste</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">Filtrer la liste</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">Trier la liste</button>
                </li>
                <li>
                  <button class="dropdown-item" type="button">Modifier la liste</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </li>
    {{ end }}
  </ul>
</li>
{{ end }}
  </ul>
</div>
{{< /liste-group.inline >}}

{{% highlight html %}}
<ul class="list-group">
  <li id="group1" class="list-group-item management-item management-item-group active">
    <div class="management-item-content" data-component="state" data-state="active" data-behaviour="toggle" data-target="#group1">
      <div class="management-item-checkbox">
        <div class="custom-control custom-checkbox custom-checkbox-alone">
          <input type="checkbox" class="custom-control-input" id="cell1">
          <label class="custom-control-label" for="cell1"><span class="sr-only">étiquette</span></label>
        </div>
      </div>
      <div class="management-item-caret"></div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
      </div>
      <div class="management-item-main">
        <h2 class="mb-0 text-base font-weight-normal"><button class="btn-unstyled" aria-expanded="false" aria-controls="sublist1">Titre lorem ipsum dolor sit amet</button></h2>
      </div>
    </div>
    <ul id="sublist1" class="management-item-grouplist">
      <li class="management-item">
        <div class="management-item-content">
          <div class="management-item-checkbox">
            <div class="custom-control custom-checkbox custom-checkbox-alone">
              <input type="checkbox" class="custom-control-input" id="cell1">
              <label class="custom-control-label" for="cell1"><span class="sr-only">étiquette</span></label>
            </div>
          </div>
          <div class="management-item-symbol management-item-spacing">
            <i class="icons-document icons-size-1x25" aria-hidden="true"></i>
          </div>
          <div class="management-item-main">
            <h5 class="mb-0 font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
          </div>
          <div class="management-item-action">
            <div class="btn-group-toggle" data-toggle="buttons">
              <label for="inputFavListgroup1" class="btn btn-only-icon btn-favorite d-none d-lg-block">
                <input id="inputFavListgroup1" type="checkbox" autocomplete="off">
                <span class="sr-only">Ajouter aux favoris</span>
                <i class="icons-bookmark icons-size-1x25" aria-hidden="true"></i>
              </label>
            </div>
            <div class="btn-group dropdown">
              <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="dropdownGroupExemple">
                <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
                <span class="sr-only">Actions</span>
              </button>
              <div role="list" class="dropdown-menu dropdown-menu-right" id="dropdownGroupExemple">
                <ul>
                  <li>
                    <button class="dropdown-item" type="button">Rechercher dans la liste</button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">Filtrer la liste</button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">Trier la liste</button>
                  </li>
                  <li>
                    <button class="dropdown-item" type="button">Modifier la liste</button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </li>
      ...
    </ul>
  </li>
  ...
</ul>
{{% /highlight %}}
