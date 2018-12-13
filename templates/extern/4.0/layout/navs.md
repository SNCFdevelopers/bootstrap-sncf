---
layout: docs
title: Navs
description: Documentation and examples for how to use Bootstrap's included navigation components.
group: layout
toc: true
permalink: /docs/4.0/layout/navs
---

## Tabs

{% example html %}
<div class="actionbar has-tabs">
  <div class="actionbar-head">
    <h1 class="h2 mb-0">Lorem Ipsum</h1>
  </div>
  <nav class="position-relative mt-2">
    <ul class="navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
{% endexample %}

### Colored tabs

Just add `bg-colorname`to `<div class="actionbar">` to use colored tabs

<div class="bd-example">
<div class="actionbar dark bg-teal has-tabs">
  <div class="actionbar-head">
    <h1 class="h2 mb-0">Titre section</h1>
  </div>
  <nav class="position-relative mt-2">
    <ul class="navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
</div>

<div class="bd-example">
<div class="actionbar light bg-primary has-tabs">
  <div class="actionbar-head">
    <h1 class="h2 mb-0">Titre section</h1>
  </div>
  <nav class="position-relative mt-2">
    <ul class="navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
</div>

{% highlight html %}
{% endhighlight %}


##  Actionbar

### Menu example
<div class="bd-example ">
<div class="menu" data-role="menu" style="position:relative;">
<div class="container">
<div id="programme" class="menu-item panel primary-panel active">
  <div class="panel-inner">
    <div class="panel-head">
      <h5 class="h3 mb-0" data-role="prev">
        <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
        Programme
      </h5>
      <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
        <i class="icons-close icons-size-1x" aria-hidden="true"></i>
      </a>
    </div>
    <div class="panel-content">
      <div class="panel-lead">
        <div class="h3 mb-4 text-white">Programme</div>
        <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
      </div>
      <nav class="subnav">
        <div class="subnav-inner">
          
            <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#loisirs-tourisme">
              Loisirs & Tourisme
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#toutes-les-lignes">
              Toutes les lignes
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#services-mobiles">
              Services mobiles
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#au-quotidien">
              Au quotidien
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#le-réseaux">
              Le réseau
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
        </div>
      </nav>
    </div>
  </div>
</div>
<div id="loisirs-tourisme" class="menu-item panel secondary-panel">
  <div class="panel-inner">
    <div class="panel-head">
      <h5 class="h3 mb-0" data-role="prev">
        <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
        Loisirs &amp; Tourisme
      </h5>
      <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
        <i class="icons-close icons-size-1x" aria-hidden="true"></i>
      </a>
    </div>
    <div class="panel-content">
      <nav class="subnav">
          
            <button type="button" class="subnav-item">
              Category 1
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Category 2
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Category 3
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
      </nav>
    </div>
  </div>
</div>

<div id="toutes-les-lignes" class="menu-item panel secondary-panel active">
  <div class="panel-inner">
    <div class="panel-head">
      <h5 class="h3 mb-0" data-role="prev">
        <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
        Toutes les lignes
      </h5>
      <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
        <i class="icons-close icons-size-1x" aria-hidden="true"></i>
      </a>
    </div>
    <div class="panel-content">
      <nav class="subnav">
          
            <button type="button" class="subnav-item">
              RER &amp; Trains
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Noctilien
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Métro
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Tramways
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Le réseau
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
      </nav>
    </div>
  </div>
</div>

<div id="services-mobiles" class="menu-item panel secondary-panel">
  <div class="panel-inner">
    <div class="panel-head">
      <h5 class="h3 mb-0" data-role="prev">
        <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
        Services mobiles
      </h5>
      <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
        <i class="icons-close icons-size-1x" aria-hidden="true"></i>
      </a>
    </div>
    <div class="panel-content">
      <nav class="subnav">
          
            <button type="button" class="subnav-item">
              Services mobiles 1
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Services mobiles 2
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Services mobiles 3
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
      </nav>
    </div>
  </div>
</div>

<div id="au-quotidien" class="menu-item panel secondary-panel">
  <div class="panel-inner">
    <div class="panel-head">
      <h5 class="h3 mb-0" data-role="prev">
        <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
        Au quotidien
      </h5>
      <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
        <i class="icons-close icons-size-1x" aria-hidden="true"></i>
      </a>
    </div>
    <div class="panel-content">
      <nav class="subnav">
          
            <button type="button" class="subnav-item">
              Quotidien 1
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Quotidien 2
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Quotidien 3
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
      </nav>
    </div>
  </div>
</div>

<div id="le-réseaux" class="menu-item panel secondary-panel">
  <div class="panel-inner">
    <div class="panel-head">
      <h5 class="h3 mb-0" data-role="prev">
        <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
        Le réseau
      </h5>
      <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
        <i class="icons-close icons-size-1x" aria-hidden="true"></i>
      </a>
    </div>
    <div class="panel-content">
      <nav class="subnav">
          
            <button type="button" class="subnav-item">
              Réseau 1
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Réseau 2
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
            <button type="button" class="subnav-item">
              Réseau 3
              <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
            </button>
          
      </nav>
    </div>
  </div>
</div>
</div>
</div>
</div>

{% highlight html %}
<div class="menu" data-role="menu">
  <div class="container">
    <div id="programme" class="menu-item panel primary-panel active">
      <div class="panel-inner">
	<div class="panel-head">
	  <h3 class="h3 mb-0" data-role="prev">
	    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
	    Programme
	  </h3>
	  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
	    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="panel-content">
	  <div class="panel-lead">
	    <div class="h3 mb-4 text-white">Programme</div>
	    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
	  </div>
	  <nav class="subnav">
	    <div class="subnav-inner">
	      
		<button type="button" class="subnav-item" data-role="sub-toggle" data-target="#loisirs-tourisme">
		  Loisirs & Tourisme
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item" data-role="sub-toggle" data-target="#toutes-les-lignes">
		  Toutes les lignes
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item" data-role="sub-toggle" data-target="#services-mobiles">
		  Services mobiles
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item" data-role="sub-toggle" data-target="#au-quotidien">
		  Au quotidien
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item" data-role="sub-toggle" data-target="#le-réseaux">
		  Le réseau
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
	    </div>
	  </nav>
	</div>
      </div>
    </div>
    <div id="loisirs-tourisme" class="menu-item panel secondary-panel">
      <div class="panel-inner">
	<div class="panel-head">
	  <h3 class="h3 mb-0" data-role="prev">
	    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
	    Loisirs &amp; Tourisme
	  </h3>
	  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
	    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="panel-content">
	  <nav class="subnav">
	      
		<button type="button" class="subnav-item">
		  Category 1
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Category 2
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Category 3
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
	  </nav>
	</div>
      </div>
    </div>

    <div id="toutes-les-lignes" class="menu-item panel secondary-panel active">
      <div class="panel-inner">
	<div class="panel-head">
	  <h3 class="h3 mb-0" data-role="prev">
	    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
	    Toutes les lignes
	  </h3>
	  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
	    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="panel-content">
	  <nav class="subnav">
	      
		<button type="button" class="subnav-item">
		  RER &amp; Trains
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Noctilien
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Métro
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Tramways
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Le réseau
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
	  </nav>
	</div>
      </div>
    </div>

    <div id="services-mobiles" class="menu-item panel secondary-panel">
      <div class="panel-inner">
	<div class="panel-head">
	  <h3 class="h3 mb-0" data-role="prev">
	    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
	    Services mobiles
	  </h3>
	  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
	    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="panel-content">
	  <nav class="subnav">
	      
		<button type="button" class="subnav-item">
		  Services mobiles 1
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Services mobiles 2
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Services mobiles 3
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
	  </nav>
	</div>
      </div>
    </div>

    <div id="au-quotidien" class="menu-item panel secondary-panel">
      <div class="panel-inner">
	<div class="panel-head">
	  <h3 class="h3 mb-0" data-role="prev">
	    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
	    Au quotidien
	  </h3>
	  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
	    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="panel-content">
	  <nav class="subnav">
	      
		<button type="button" class="subnav-item">
		  Quotidien 1
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Quotidien 2
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Quotidien 3
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
	  </nav>
	</div>
      </div>
    </div>

    <div id="le-réseaux" class="menu-item panel secondary-panel">
      <div class="panel-inner">
	<div class="panel-head">
	  <h3 class="h3 mb-0" data-role="prev">
	    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
	    Le réseaux
	  </h3>
	  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
	    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
	  </a>
	</div>
	<div class="panel-content">
	  <nav class="subnav">
	      
		<button type="button" class="subnav-item">
		  Réseaux 1
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Réseaux 2
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
		<button type="button" class="subnav-item">
		  Réseaux 3
		  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
		</button>
	      
	  </nav>
	</div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Complete example

{% example html %}
  <div class="bd-example">
    <div class="mastnav" data-component="mastnav">
      <div class="menubar">
        <div class="container">
          <h2 class="mb-0">#Digitalsncf</h2>
          <div class="menubar-menu" data-role="menubar-menu">
            <div class="d-md-none">
              <label for="search" class="h3">Rechercher</label>
              <div class="form-control-container has-left-icon">
                <input type="" class="form-control " id="search">
                <span class="form-control-state"></span>
                <span class="form-control-icon"><i class="icons-search" aria-hidden="true"></i></span>
              </div>
            </div>
            <h3 class="gt-5 mb-3 d-md-none">Menu</h3>
            <nav class="nav">
              
                <button type="button" class="nav-item" data-role="main-toggle" data-target="#programme">
                  Programme
                  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                </button>
              
                <button type="button" class="nav-item" data-role="main-toggle" data-target="#startup">
                  Startup
                  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                </button>
              
                <button type="button" class="nav-item" data-role="main-toggle" data-target="#store">
                  Store
                  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                </button>
              
                <button type="button" class="nav-item" data-role="main-toggle" data-target="#resources">
                  Resources
                  <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                </button>
              
              <div class="dropdown dropdown-menubar gt-5 d-md-none">
                <button type="button" class="btn w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Accessibilité <i class="icons-arrow-down icons-size-x5 ml-2" aria-hidden="true"></i></button>
                <div class="dropdown-menu">
                  <div data-role="stop-propagation">
                    <div class="mb-3">
                      <label class="w-100 font-weight-medium mb-2">Police (dyslexie)</label>
                      <div class="options-control options-control-lg options-control-menubar">
                        <div class="options-item">
                          <input type="radio" name="typography" id="typography-default2" class="sr-only" checked/>
                          <label class="options-btn font-weight-medium" for="typography-default2">Défaut</label>
                        </div>
                        <div class="options-item">
                          <input type="radio" name="typography" id="typography-adapted2" class="sr-only"/>
                          <label class="options-btn font-weight-medium" for="typography-adapted2">Adaptée</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="w-100 font-weight-medium mb-2">Contrastes</label>
                      <div class="options-control options-control-lg options-control-menubar">
                        <div class="options-item">
                          <input type="radio" name="contrast" id="contrast-default2" class="sr-only" checked/>
                          <label class="options-btn font-weight-medium" for="contrast-default2">Défaut</label>
                        </div>
                        <div class="options-item">
                          <input type="radio" name="contrast" id="contrast-strong2" class="sr-only"/>
                          <label class="options-btn font-weight-medium" for="contrast-strong2">Renforcés</label>
                        </div>
                        <div class="options-item">
                          <input type="radio" name="contrast" id="contrast-inverted2" class="sr-only"/>
                          <label class="options-btn font-weight-medium" for="contrast-inverted2">Inversés</label>
                        </div>
                      </div>
                    </div>
                    <div class="mb-3">
                      <label class="w-100 font-weight-medium mb-2">Interlignage</label>
                      <div class="options-control options-control-lg options-control-menubar">
                        <div class="options-item">
                          <input type="radio" name="lineheight" id="lineheight-default2" class="sr-only" checked/>
                          <label class="options-btn font-weight-medium" for="lineheight-default2">Défaut</label>
                        </div>
                        <div class="options-item">
                          <input type="radio" name="lineheight" id="lineheight-increases2" class="sr-only"/>
                          <label class="options-btn font-weight-medium" for="lineheight-increases2">Augmenté</label>
                        </div>
                      </div>
                    </div>
                    <div>
                      <label class="w-100 font-weight-medium mb-2">Animations</label>
                      <div class="options-control options-control-lg options-control-menubar">
                        <div class="options-item">
                          <input type="radio" name="animations" id="enabled2" class="sr-only" checked/>
                          <label class="options-btn font-weight-medium" for="enabled2">Option 1</label>
                        </div>
                        <div class="options-item">
                          <input type="radio" name="animations" id="disabled2" class="sr-only"/>
                          <label class="options-btn font-weight-medium" for="disabled2">Option 2</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="dropdown dropdown-menubar gt-2 d-md-none">
                <button type="button" class="btn w-100 dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Langue : Fr <i class="icons-arrow-down icons-size-x5 ml-2" aria-hidden="true"></i></button>
                <div class="dropdown-menu">
                  <div class="pr-4">
                    <div class="dropdown-menu-lang-item gb-3 active">
                      <img src="https://dummyimage.com/30x30/000/fff" class="pr-3" />
                      Français
                    </div>
                    <div class="dropdown-menu-lang-item gb-3">
                      <img src="https://dummyimage.com/30x30/000/fff" class="pr-3" />
                      English
                    </div>
                    <div class="dropdown-menu-lang-item">
                      <img src="https://dummyimage.com/30x30/000/fff" class="pr-3" />
                      Deutsch
                    </div>
                  </div>
                </div>
              </div>
            </nav>
          </div>
          <ul class="toolbar mb-0">
            <li class="toolbar-item d-none d-md-block">
              <a href="#" class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
                <span class="sr-only">Search</span>
                <i class="icons-menu-searchbar icons-size-30px" aria-hidden="true"></i>
              </a>
            </li>
            <li class="toolbar-item no-separator separator-md">
              <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
                <span class="sr-only">Account</span>
                <i class="icons-menu-account icons-size-30px" aria-hidden="true"></i>
              </button>
            </li>
            <li class="toolbar-item no-separator-md d-md-none">
              <button class="btn btn-burger btn-sm btn-transparent btn-color-gray toolbar-item-spacing" data-role="burger">
                <span class="sr-only">Menu</span>
                <i class="btn-burger-open icons-menu-burger icons-size-30px"></i>
                <i class="btn-burger-close icons-close icons-size-30px"></i>
              </button>
            </li>
          </ul>
        </div>
      </div>

      <div class="menu" data-role="menu">
        <div class="container">
          
            <div id="programme" class="menu-item panel primary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Programme
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <div class="panel-lead">
                    <div class="h3 mb-4 text-white">Programme</div>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  </div>
                  <nav class="subnav">
                    <div class="subnav-inner">
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#loisirs-tourisme">
                          Loisirs & Tourisme
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#toutes-les-lignes">
                          Toutes les lignes
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#services-mobiles">
                          Services mobiles
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#au-quotidien">
                          Au quotidien
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#le-réseaux">
                          Le réseaux
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                    </div>
                  </nav>
                </div>
              </div>
            </div>

          
            <div id="loisirs-tourisme" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Loisirs & Tourisme
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Category 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
            <div id="toutes-les-lignes" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Toutes les lignes
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          RER & Trains
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Noctilien
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Métro
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Tramways
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Le réseau
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
            <div id="services-mobiles" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Services mobiles
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Services mobiles 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Services mobiles 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Services mobiles 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
            <div id="au-quotidien" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Au quotidien
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Quotidien 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Quotidien 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Quotidien 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
            <div id="le-réseaux" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Le réseaux
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Réseaux 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Réseaux 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Réseaux 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
          
            <div id="startup" class="menu-item panel primary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Startup
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <div class="panel-lead">
                    <div class="h3 mb-4 text-white">Startup</div>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  </div>
                  <nav class="subnav">
                    <div class="subnav-inner">
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#startup-catégorie">
                          Startup catégorie
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                    </div>
                  </nav>
                </div>
              </div>
            </div>

          
            <div id="startup-catégorie" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Startup catégorie
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Category 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
          
            <div id="store" class="menu-item panel primary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Store
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <div class="panel-lead">
                    <div class="h3 mb-4 text-white">Store</div>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  </div>
                  <nav class="subnav">
                    <div class="subnav-inner">
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#store-catégorie">
                          Store catégorie
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                    </div>
                  </nav>
                </div>
              </div>
            </div>

          
            <div id="store-catégorie" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Store catégorie
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Category 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
          
            <div id="resources" class="menu-item panel primary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Resources
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <div class="panel-lead">
                    <div class="h3 mb-4 text-white">Resources</div>
                    <p>Nullam id dolor id nibh ultricies vehicula ut id elit. Cras mattis consectetur purus sit amet fermentum. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                  </div>
                  <nav class="subnav">
                    <div class="subnav-inner">
                      
                        <button type="button" class="subnav-item" data-role="sub-toggle" data-target="#resources-catégorie">
                          Resources catégorie
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                    </div>
                  </nav>
                </div>
              </div>
            </div>

          
            <div id="resources-catégorie" class="menu-item panel secondary-panel">
              <div class="panel-inner">
                <div class="panel-head">
                  <h3 class="h3 mb-0" data-role="prev">
                    <i class="icons-arrow-prev icons-size-1x mr-3" aria-hidden="true"></i>
                    Resources catégorie
                  </h3>
                  <a href="#" class="btn btn-sm btn-transparent btn-color-gray panel-close" data-role="close" aria-label="Close">
                    <i class="icons-close icons-size-1x" aria-hidden="true"></i>
                  </a>
                </div>
                <div class="panel-content">
                  <nav class="subnav">
                      
                        <button type="button" class="subnav-item">
                          Category 1
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 2
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                        <button type="button" class="subnav-item">
                          Category 3
                          <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
                        </button>
                      
                  </nav>
                </div>
              </div>
            </div>
          
          
        </div>
      </div>
    </div>
  </div>
{% endexample %}
