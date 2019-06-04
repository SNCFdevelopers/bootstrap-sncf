For _Design Métier_ The switch should be inside dropdown menu in top right corner from the navbar, in the personal menu. This navbar example contains a working link, try it now !

<div class="bd-example">
  <div class="mastheader">
    <div class="mastheader-logo">
      <a href="/docs">
        <img alt="SNCF" src="{{ site.baseurl }}/assets/img/brand/sncf-logo.png" width="70" />
      </a>
    </div>
    <header role="banner" class="mastheader-title d-none d-xl-block">
      <h1 class="text-uppercase text-white pt-2 pl-3 mb-0">Nom application</h1>
    </header>
    <div class="mastheader-search pr-md-4 pl-md-4" data-component="searchbar">
      <label for="galacticbar-search-input" class="font-weight-medium text-white pr-3 mb-0">Rechercher</label>
      <div class="input-group align-items-center">
        <div class="form-control-container" data-component="control" data-clear-option="true" role="search">
          <input id="galacticbar-search-input" type="search" class="form-control clear-option" data-role="input" data-placeholder="Rechercher" />
          <span class="form-control-state"></span>
          <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
            <span class="sr-only">Clear text</span>
            <i class="icons-close" aria-hidden="true"></i>
          </button>
        </div>
        <div class="input-group-append input-group-last">
          <button type="button" class="btn btn-primary btn-only-icon">
            <span class="sr-only">Rechercher</span>
            <i class="icons-search" aria-hidden="true"></i>
          </button>
        </div>
        <button type="button" class="btn btn-only-icon btn-white d-block d-md-none" data-role="close">
          <span class="sr-only">Close search</span>
          <i class="icons-close icons-size-1x25" aria-hidden="true"></i>
        </button>
      </div>
    </div>
    <ul class="mastheader-toolbar toolbar mb-0">
      <li class="toolbar-item separator-gray-500 d-none d-md-flex">
        <a href="#" class="btn btn-only-icon btn-notif toolbar-item-spacing">
          <span class="sr-only">Alert</span>
          <i class="icons-alert-notification icons-size-1x25 icons-md-size-1x5" aria-hidden="true"></i>
          <span class="notif">1</span>
        </a>
      </li>
      <li class="toolbar-item separator-gray-500 no-separator d-flex d-md-none">
        <button type="button class="btn btn-only-icon toolbar-item-spacing" data-component="searchbar-toggle">
          <span class="sr-only">Open search</span>
          <i class="icons-search icons-size-1x25 icons-md-size-1x5" aria-hidden="true"></i>
        </button>
      </li>
      <li class="toolbar-item separator-gray-500">
        <div class="btn-group dropdown">
          <button class="btn btn-transparent dropdown-toggle toolbar-item-spacing" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol">
            <i class="icons-menu-account icons-size-1x25 icons-md-size-1x5 mr-xl-2" aria-hidden="true"></i>
            <span class="d-none d-xl-block">Pierre Dumont</span>
            <i class="icons-arrow-down d-none d-xl-block" aria-hidden="true"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton" id="mycontrol">
            <ul>
              <li class="dropdown-item"><a href="#">Paramètre du compte</a></li>
              <li class="dropdown-item"><a href="#">Préférences</a></li>
              <li class="dropdown-item darkmode-btn"><a href="#">Mode clair/sombre</a></li>
              <li class="dropdown-item"><a href="#">Se déconnecter</a></li>
            </ul>
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
