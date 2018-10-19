---
layout: docs
title: List group
description: List groups are a flexible and powerful component for displaying a series of content. Modify and extend them to support just about any content within.
group: components
toc: true
permalink: /docs/4.0/components/list-group
---

## Description

Standard lists can be used either with or without icons. Depending on the context, the list can have one or more actions (favourite, download, delete, etc.). Use standard lists with a unique action when each line has an action. 

Check boxes can be added when a group action is offered for all items on the list; another variation is a single button that combines several actions per line (context menu). When readers must be able to see both the list and detail (for skimming), use double panel lists. 

Last option: use tiles for more eye-catching lists. 

## Standard list

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
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
        <i class="icons-document icons-size-1x25"></i>
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
        <i class="icons-document icons-size-1x25"></i>
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
          <i class="icons-document icons-size-1x25"></i>
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

{% highlight html %}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25"></i>
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
{% endhighlight %}

## Simple list with unique action
<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample1">
            <label class="custom-control-label" for="managementExample1"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
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
        <div class="management-item-action">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-download"></i>
          </button>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample2">
            <label class="custom-control-label" for="managementExample2"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
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
        <div class="management-item-action">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-download"></i>
          </button>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample3">
            <label class="custom-control-label" for="managementExample3"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 5 mai 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Marcel Patoulatchi</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
        <div class="management-item-action">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-download"></i>
          </button>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample4">
            <label class="custom-control-label" for="managementExample4"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 30 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Magali Sondnach</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
        <div class="management-item-action">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-download"></i>
          </button>
        </div>
      </div>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-input">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="managementExample1">
        <label class="custom-control-label" for="managementExample1"></label>
      </div>
    </div>
    <div class="management-item-symbol">
      <i class="icons-document icons-size-1x25"></i>
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
    <div class="management-item-action">
      <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="icons-download"></i>
      </button>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-input">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="managementExample2">
        <label class="custom-control-label" for="managementExample2"></label>
      </div>
    </div>
    <div class="management-item-symbol">
      <i class="icons-document icons-size-1x25"></i>
    </div>
    <div class="management-item-main">
      <h2>Titre lorem ipsum dolor sit amet</h2>
      <ul class="meta-list font-weight-medium">
        <li class="meta-list-item">Mise à jour le 14 avril 2017</li>
        <li class="meta-list-item separator">Site : Lorem ipsum</li>
        <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
      </ul>
      <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
    </div>
    <div class="management-item-action">
      <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="icons-download"></i>
      </button>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-input">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="managementExample3">
        <label class="custom-control-label" for="managementExample3"></label>
      </div>
    </div>
    <div class="management-item-symbol">
      <i class="icons-document icons-size-1x25"></i>
    </div>
    <div class="management-item-main">
      <h2>Titre lorem ipsum dolor sit amet</h2>
      <ul class="meta-list font-weight-medium">
        <li class="meta-list-item">Mise à jour le 5 mai 2017</li>
        <li class="meta-list-item separator">Site : Lorem ipsum</li>
        <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Marcel Patoulatchi</li>
      </ul>
      <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
    </div>
    <div class="management-item-action">
      <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="icons-download"></i>
      </button>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-input">
      <div class="custom-control custom-checkbox">
        <input type="checkbox" class="custom-control-input" id="managementExample4">
        <label class="custom-control-label" for="managementExample4"></label>
      </div>
    </div>
    <div class="management-item-symbol">
      <i class="icons-document icons-size-1x25"></i>
    </div>
    <div class="management-item-main">
      <h2>Titre lorem ipsum dolor sit amet</h2>
      <ul class="meta-list font-weight-medium">
        <li class="meta-list-item">Mise à jour le 30 avril 2017</li>
        <li class="meta-list-item separator">Site : Lorem ipsum</li>
        <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Magali Sondnach</li>
      </ul>
      <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
      <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
    </div>
    <div class="management-item-action">
      <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i class="icons-download"></i>
      </button>
    </div>
  </li>
</ul>
{% endhighlight %}

## List with favorite button and actions

<div class="bd-example">
  <ul class="list-group">
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample11">
            <label class="custom-control-label" for="managementExample11"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
        <div class="management-item-action">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-only-icon btn-favorite d-none d-lg-block active">
              <input type="checkbox" autocomplete="off" checked>
              <span class="sr-only">Ajouter aux favoris</span>
              <i class="icons-bookmark icons-size-1x25"></i>
            </label>
          </div>
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="icons-options icons-size-1x75"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">Déclencher le suivi</button>
              <button class="dropdown-item" type="button">Télécharger</button>
              <button class="dropdown-item" type="button">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample12">
            <label class="custom-control-label" for="managementExample12"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
        <div class="management-item-action">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-only-icon btn-favorite d-none d-lg-block">
              <input type="checkbox" autocomplete="off">
              <span class="sr-only">Ajouter aux favoris</span>
              <i class="icons-bookmark icons-size-1x25"></i>
            </label>
          </div>
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="icons-options icons-size-1x75"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">Déclencher le suivi</button>
              <button class="dropdown-item" type="button">Télécharger</button>
              <button class="dropdown-item" type="button">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample13">
            <label class="custom-control-label" for="managementExample13"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
        <div class="management-item-action">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-only-icon btn-favorite d-none d-lg-block">
              <input type="checkbox" autocomplete="off">
              <span class="sr-only">Ajouter aux favoris</span>
              <i class="icons-bookmark icons-size-1x25"></i>
            </label>
          </div>
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="icons-options icons-size-1x75"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">Déclencher le suivi</button>
              <button class="dropdown-item" type="button">Télécharger</button>
              <button class="dropdown-item" type="button">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    <li class="list-group-item management-item">
      <div class="management-item-content">
        <div class="management-item-input">
          <div class="custom-control custom-checkbox">
            <input type="checkbox" class="custom-control-input" id="managementExample14">
            <label class="custom-control-label" for="managementExample14"></label>
          </div>
        </div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5>Titre lorem ipsum dolor sit amet</h5>
          <ul class="meta-list font-weight-medium">
            <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
            <li class="meta-list-item separator">Site : Lorem ipsum</li>
            <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
          </ul>
          <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
        <div class="management-item-action">
          <div class="btn-group-toggle" data-toggle="buttons">
            <label class="btn btn-only-icon btn-favorite d-none d-lg-block">
              <input type="checkbox" autocomplete="off">
              <span class="sr-only">Ajouter aux favoris</span>
              <i class="icons-bookmark icons-size-1x25"></i>
            </label>
          </div>
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="icons-options icons-size-1x75"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">Déclencher le suivi</button>
              <button class="dropdown-item" type="button">Télécharger</button>
              <button class="dropdown-item" type="button">Supprimer</button>
            </div>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>

{% highlight html %}
<ul class="list-group">
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample11">
          <label class="custom-control-label" for="managementExample11"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25"></i>
      </div>
      <div class="management-item-main">
        <h2>Titre lorem ipsum dolor sit amet</h2>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-only-icon btn-favorite d-none d-lg-block active">
            <input type="checkbox" autocomplete="off" checked>
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25"></i>
          </label>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-options icons-size-1x75"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Déclencher le suivi</button>
            <button class="dropdown-item" type="button">Télécharger</button>
            <button class="dropdown-item" type="button">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  </li>
  <li class="list-group-item management-item">
    <div class="management-item-content">
      <div class="management-item-input">
        <div class="custom-control custom-checkbox">
          <input type="checkbox" class="custom-control-input" id="managementExample12">
          <label class="custom-control-label" for="managementExample12"></label>
        </div>
      </div>
      <div class="management-item-symbol">
        <i class="icons-document icons-size-1x25"></i>
      </div>
      <div class="management-item-main">
        <h2>Titre lorem ipsum dolor sit amet</h2>
        <ul class="meta-list font-weight-medium">
          <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
          <li class="meta-list-item separator">Site : Lorem ipsum</li>
          <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : William Lemire</li>
        </ul>
        <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
        <a href="#" class="btn btn-link mt-2">Lien lorem <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="management-item-action">
        <div class="btn-group-toggle" data-toggle="buttons">
          <label class="btn btn-only-icon btn-favorite d-none d-lg-block">
            <input type="checkbox" autocomplete="off">
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25"></i>
          </label>
        </div>
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i class="icons-options icons-size-1x75"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right">
            <button class="dropdown-item" type="button">Déclencher le suivi</button>
            <button class="dropdown-item" type="button">Télécharger</button>
            <button class="dropdown-item" type="button">Supprimer</button>
          </div>
        </div>
      </div>
    </div>
  </li>
  ...
</ul>
{% endhighlight %}

## Double panel list

Note the use of `no-gutters` class to stick the columns together.
<div class="bd-example">
  <div class="row no-gutters">
    <div class="col-lg-5 col-md-6">
      <div class="d-flex align-items-center justify-content-between bg-light pl-4 pr-1">
        <div>Lorem ipsum</div>
        <ul class="toolbar mb-0">
	        <li class="toolbar-item">
	          <button class="btn btn-only-icon btn-transparent btn-color-gray toolbar-item-spacing">
                    <span class="sr-only">Filters</span>
                    <i class="icons-filters icons-size-1x25"></i>
                  </button>
	        </li>
	        <li class="toolbar-item">
	          <button class="btn btn-only-icon btn-transparent btn-color-gray toolbar-item-spacing">
	            <span class="sr-only">Sort</span>
	            <i class="icons-sort icons-size-1x5"></i>
	          </button>
	        </li>
        </ul>
      </div>
      <ul class="list-group">
        <li class="list-group-item management-item">
          <div class="management-item-content">
	          <div class="management-item-symbol">
	            <i class="icons-document icons-size-1x25"></i>
	          </div>
	          <div class="management-item-main">
	            <h5>Titre lorem ipsum dolor sit amet</h5>
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
	            <i class="icons-document icons-size-1x25"></i>
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
	            <i class="icons-document icons-size-1x25"></i>
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
	            <i class="icons-document icons-size-1x25"></i>
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
      <div class="d-flex align-items-center justify-content-between bg-light pl-4 pr-1">
        <div>Content</div>
        <ul class="toolbar mb-0">
	        <li class="toolbar-item">
	          <div class="btn-group-toggle" data-toggle="buttons">
	            <label class="btn btn-only-icon btn-favorite toolbar-item-spacing">
	              <input type="checkbox" autocomplete="off">
	              <span class="sr-only">Ajouter aux favoris</span>
	              <i class="icons-bookmark icons-size-1x25"></i>
	            </label>
	          </div>
	        </li>
	        <li class="toolbar-item">
	          <div class="btn-group dropdown">
	            <button type="button" class="btn btn-only-icon btn-transparent btn-color-gray dropdown-toggle toolbar-item-spacing" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	              <i class="icons-options icons-size-1x75"></i>
	            </button>
	            <div class="dropdown-menu dropdown-menu-right">
	              <button class="dropdown-item" type="button">Déclencher le suivi</button>
	              <button class="dropdown-item" type="button">Télécharger</button>
	              <button class="dropdown-item" type="button">Supprimer</button>
	            </div>
	          </div>
	        </li>
        </ul>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="row no-gutters">
  <div class="col-lg-5 col-md-6">
    <div class="d-flex align-items-center justify-content-between bg-light pl-4 pr-1">
      <div>Lorem ipsum</div>
      <ul class="toolbar mb-0">
        <li class="toolbar-item">
          <button class="btn btn-only-icon btn-transparent btn-color-gray toolbar-item-spacing">
            <span class="sr-only">Filters</span>
            <i class="icons-filters icons-size-1x25"></i>
          </button>
        </li>
        <li class="toolbar-item">
          <button class="btn btn-only-icon btn-transparent btn-color-gray toolbar-item-spacing">
            <span class="sr-only">Sort</span>
            <i class="icons-sort icons-size-1x5"></i>
          </button>
        </li>
      </ul>
      </div>
        <ul class="list-group">
          <li class="list-group-item management-item">
            <div class="management-item-content">
            <div class="management-item-symbol">
            <i class="icons-document icons-size-1x25"></i>
          </div>
          <div class="management-item-main">
            <h2>Titre lorem ipsum dolor sit amet</h2>
            <ul class="meta-list font-weight-medium">
              <li class="meta-list-item">Mise à jour le 4 avril 2017</li>
              <li class="meta-list-item separator">Site : Lorem ipsum</li>
              <li class="meta-list-item separator separator separator-sm-none separator-md-none">Agent : Michka Ogliana</li>
            </ul>
            <p class="mb-0 d-none d-lg-block">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus non pellentesque mauris, a efficitur urna. Curabitur.</p>
          </div>
        </div>
      </li>
      ...
    </ul>
  </div>
  <div class="col-lg-7 col-md-6">
    <div class="d-flex align-items-center justify-content-between bg-light pl-4 pr-1">
      <div>Content</div>
      <ul class="toolbar mb-0">
	<li class="toolbar-item">
	  <div class="btn-group-toggle" data-toggle="buttons">
	    <label class="btn btn-only-icon btn-favorite toolbar-item-spacing">
	      <input type="checkbox" autocomplete="off">
	      <span class="sr-only">Ajouter aux favoris</span>
	      <i class="icons-bookmark icons-size-1x25"></i>
	    </label>
	  </div>
	</li>
	<li class="toolbar-item">
	  <div class="btn-group dropdown">
	    <button type="button" class="btn btn-only-icon btn-transparent btn-color-gray dropdown-toggle toolbar-item-spacing" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
	      <i class="icons-options icons-size-1x75"></i>
	    </button>
	    <div class="dropdown-menu dropdown-menu-right">
	      <button class="dropdown-item" type="button">Déclencher le suivi</button>
	      <button class="dropdown-item" type="button">Télécharger</button>
	      <button class="dropdown-item" type="button">Supprimer</button>
	    </div>
	  </div>
	</li>
      </ul>
    </div>
  </div>
</div>
{% endhighlight %}

## Group example

<div class="bd-example">
  <ul class="list-group">
{% for group in (1..3) %}
<li id="group{{ forloop.index }}" class="list-group-item management-item management-item-group" data-component="state" data-state="active" data-behaviour="toggle" data-target="#group{{ forloop.index }}">
  <div class="management-item-content">
    <div class="management-item-checkbox">
      <div class="custom-control custom-checkbox custom-checkbox-alone">
        <input type="checkbox" class="custom-control-input" id="cell{{ forloop.index }}">
        <label class="custom-control-label" for="cell{{ forloop.index }}"></label>
      </div>
    </div>
    <div class="management-item-caret"></div>
    <div class="management-item-symbol">
      <i class="icons-document icons-size-1x25"></i>
    </div>
    <div class="management-item-main">
      <h5 class="mb-0 font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
    </div>
  </div>
  <ul class="management-item-grouplist">
    {% for item in (1..4) %}
    <li class="management-item">
      <div class="management-item-content">
        <div class="management-item-checkbox">
          <div class="custom-control custom-checkbox custom-checkbox-alone">
            <input type="checkbox" class="custom-control-input" id="cell{{ forloop.index }}">
            <label class="custom-control-label" for="cell{{ forloop.index }}"></label>
          </div>
        </div>
        <div class="management-item-symbol management-item-spacing">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h5 class="mb-0 font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
        </div>
        <div class="management-item-action">
          <div class="btn btn-only-icon btn-favorite active d-none d-lg-block">
            <span class="sr-only">Ajouter aux favoris</span>
            <i class="icons-bookmark icons-size-1x25"></i>
          </div>
          <div class="btn-group dropdown">
            <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <i class="icons-options icons-size-1x75"></i>
            </button>
            <div class="dropdown-menu dropdown-menu-right">
              <button class="dropdown-item" type="button">Rechercher dans la liste</button>
              <button class="dropdown-item" type="button">Filtrer la liste</button>
              <button class="dropdown-item" type="button">Trier la liste</button>
              <button class="dropdown-item" type="button">Modifier la liste</button>
            </div>
          </div>
        </div>
      </div>
    </li>
    {% endfor %}
  </ul>
</li>
{% endfor %}
  </ul>
</div>

{% highlight html %}
  <ul class="list-group">
      
    <li id="group1" class="list-group-item management-item management-item-group" data-component="state" data-state="active" data-behaviour="toggle" data-target="#group1">
      <div class="management-item-content">
        <div class="management-item-checkbox">
          <div class="custom-control custom-checkbox custom-checkbox-alone">
            <input type="checkbox" class="custom-control-input" id="cell1">
            <label class="custom-control-label" for="cell1"></label>
          </div>
        </div>
        <div class="management-item-caret"></div>
        <div class="management-item-symbol">
          <i class="icons-document icons-size-1x25"></i>
        </div>
        <div class="management-item-main">
          <h2 class="mb-0 font-weight-normal">Titre lorem ipsum dolor sit amet</h2>
        </div>
      </div>
      <ul class="management-item-grouplist">        
      
        <li class="management-item">
          <div class="management-item-content">
            <div class="management-item-checkbox">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="cell1">
                <label class="custom-control-label" for="cell1"></label>
              </div>
            </div>
            <div class="management-item-symbol management-item-spacing">
              <i class="icons-document icons-size-1x25"></i>
            </div>
            <div class="management-item-main">
              <h2 class="mb-0 font-weight-normal">Titre lorem ipsum dolor sit amet</h2>
            </div>
            <div class="management-item-action">
              <div class="btn btn-only-icon btn-favorite active d-none d-lg-block">
                <span class="sr-only">Ajouter aux favoris</span>
                <i class="icons-bookmark icons-size-1x25"></i>
              </div>
              <div class="btn-group dropdown">
                <button type="button" class="btn btn-options dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i class="icons-options icons-size-1x75"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button class="dropdown-item" type="button">Rechercher dans la liste</button>
                  <button class="dropdown-item" type="button">Filtrer la liste</button>
                  <button class="dropdown-item" type="button">Trier la liste</button>
                  <button class="dropdown-item" type="button">Modifier la liste</button>
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
{% endhighlight %}
