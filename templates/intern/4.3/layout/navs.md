---
layout: docs
title: Navs
description: Documentation and examples for how to use Bootstrap's included navigation components.
group: layout
toc: true
permalink: /docs/4.3/layout/navs/
---

Section header bars are displayed under the header and show the section header, and depending on use, the sub-menus as tabs, display modes, context search and other actions (edit, delete, filter, etc.).
For mobiles, an arrow to the left of the section returns the reader to the previous page.  For tablets and desktops, breadcrumbs (see “Breadcrumb” section) should go above the section header. Tabs are placed under the section header so users can navigate in subsections. You can also add a set of steps when the user has to execute a series of tasks across multiple pages (to indicate  progress with each step).

## Simple action bar

{% example html %}
<div class="actionbar">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre page</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-pencil icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-list icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icons-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
</div>
{% endexample %}

## Tabs

{% example html %}
<div class="actionbar">
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active" title="Titre onglet actif">Titre onglet</a>
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

## Action bar with tabs

{% example html %}
<div class="actionbar has-tabs">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre page</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-pencil icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item toolbar-item-spacing">
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol-actionbar1">
            <span>Primary</span>
            <i class="icons-arrow-down"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" id="mycontrol-actionbar1">
            <ul>
              <li class="dropdown-item"><a href="#">Action</a></li>
              <li class="dropdown-item"><a href="#">Another action</a></li>
              <li class="dropdown-item"><a href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-list icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Filters</span>
          <i class="icons-filters icons-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav navtabs mb-0 dragscroll">
      <li class="navtabs-item pr-4">
        <a href="#" class="active" title="Titre onglet actif">Titre onglet</a>
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

## Title section

{% example html %}
<div class="actionbar">
  <div class="actionbar-head">
    <h1 class="mb-0"><a href="#"><i class="icons-arrow-prev icons-size-x75 mr-2"></i>Titre section</a></h1>
  </div>
</div>
{% endexample %}

## Breadcrumbs

{% example html %}
<div class="actionbar">
  <div class="actionbar-head">
    <nav role="navigation" aria-label="Vous êtes : ">
      <ol class="breadcrumb breadcrumb-lg mb-0 p-0">
        <li class="breadcrumb-item"><a href="#">Home</a></li>
        <li class="breadcrumb-item active" aria-current="page">Library</li>
      </ol>
    </nav>
  </div>
</div>
{% endexample %}

## Title section with steps indicators

{% example html %}
<div class="actionbar has-tabs">
  <div class="actionbar-head">
    <h1 class="mb-0">Titre section</h1>
    <ul class="toolbar mb-0 d-none d-md-flex">
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Edit</span>
          <i class="icons-pencil icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item toolbar-item-spacing">
        <div class="btn-group dropdown">
          <button type="button" class="btn btn-sm btn-primary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol-actionbar2">
            <span>Primary</span>
            <i class="icons-arrow-down"></i>
          </button>
          <div class="dropdown-menu dropdown-menu-right" id="mycontrol-actionbar2">
            <ul>
              <li class="dropdown-item"><a href="#">Action</a></li>
              <li class="dropdown-item"><a href="#">Another action</a></li>
              <li class="dropdown-item"><a href="#">Something else here</a></li>
            </ul>
          </div>
        </div>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">List</span>
          <i class="icons-list icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Search</span>
          <i class="icons-search icons-size-1x25"></i>
        </button>
      </li>
      <li class="toolbar-item">
        <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
          <span class="sr-only">Filters</span>
          <i class="icons-filters icons-size-1x25"></i>
        </button>
      </li>
    </ul>
  </div>
  <nav role="navigation" aria-label="Étapes" class="d-none d-md-flex">
    <ol class="breadcrumb mt-2 mb-0">
      <li class="breadcrumb-item"><a href="#">Step 1</a></li>
      <li class="breadcrumb-item active" aria-current="step">Step 2</li>
      <li class="breadcrumb-item disabled"><a href="#">Step 3</a></li>
      <li class="breadcrumb-item disabled"><a href="#">Step 4</a></li>
    </ol>
  </nav>
</div>
{% endexample %}

## Title section witch search box

{% example html %}
<div class="actionbar">
  <div class="actionbar-head d-none d-md-flex">
    <h1 class="mb-0">Titre section</h1>
    <div class="d-flex align-items-center">
      <label for="rechercheveille" class="font-weight-medium text-nowrap pr-3 mb-0">Sélectionner un plan de veille</label>
      <div class="input-group align-items-center">
        <div class="form-control-container" data-component="control" data-clear-option="true">
          <input id="rechercheveille" type="search" class="form-control clear-option" data-role="input" data-placeholder="Rechercher" />
          <span class="form-control-state"></span>
          <button type="button" class="btn-clear btn-primary d-none" data-btn="clear">
            <span class="sr-only">Clear text</span>
            <i class="icons-close"></i>
          </button>
        </div>
        <div class="input-group-append input-group-last">
          <button type="button" class="btn btn-primary btn-only-icon">
            <span class="sr-only">Rechercher un plan</span>
            <i class="icons-search"></i>
          </button>
        </div>
        <button type="button" class="btn btn-only-icon btn-white d-block d-md-none" data-role="close">
          <span class="sr-only">Close search</span>
          <i class="icons-close icons-size-1x25"></i>
        </button>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Contextual menu

{% callout info %}
The contextual menu uses the dropdown component [described here]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/dropdowns).
{% endcallout %}

{% example html %}
<div class="btn-group dropdown">
  <button class="btn btn-link dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" aria-controls="mycontrol-contextmenu">
    <span class="sr-only">Nom du menu</span>
    <i class="pl-1 icons-options icons-size-1x75"></i>
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="mycontrol-contextmenu">
    <ul>
      <li class="dropdown-item"><a href="#">Modifier la liste</a></li>
      <li class="dropdown-item"><a href="#">Dupliquer la liste</a></li>
      <li class="dropdown-item"><a href="#">Supprimer la liste</a></li>
    </ul>
  </div>
</div>
{% endexample %}

### With icons

{% example html %}
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton" id="mycontrol-icons">
    <ul>
      <li class="dropdown-item"><a href="#"><i class="icons-pencil mr-3 icons-size-x75"></i> Modifier la liste</a></li>
      <li class="dropdown-item"><a href="#"><i class="icons-add mr-3 icons-size-x75"></i> Dupliquer la liste</a></li>
      <li class="dropdown-item"><a href="#"><i class="icons-close mr-3 icons-size-x75"></i> Supprimer la liste</a></li>
    </ul>
  </div>
{% endexample %}

## Display modes

### Default
{% example html %}
<i class="icons-list"></i>
{% endexample %}

### Clic/tap
{% example html %}
<i class="icons-mosaic"></i>
{% endexample %}

## Pagination

There is a [dedicated topic]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/pagination) for this component.

## Javascript tabs behavior

Dynamic tabbed interfaces, as described in the [<abbr title="Web Accessibility Initiative">WAI</abbr> <abbr title="Accessible Rich Internet Applications">ARIA</abbr> Authoring Practices](https://www.w3.org/TR/wai-aria-practices/#tabpanel), require `role="tablist"`, `role="tab"`, `role="tabpanel"`, and additional `aria-` attributes in order to convey their structure, functionality and current state to users of assistive technologies (such as screen readers).

Note that dynamic tabbed interfaces should <em>not</em> contain dropdown menus, as this causes both usability and accessibility issues. From a usability perspective, the fact that the currently displayed tab's trigger element is not immediately visible (as it's inside the closed dropdown menu) can cause confusion. From an accessibility point of view, there is currently no sensible way to map this sort of construct to a standard WAI ARIA pattern, meaning that it cannot be easily made understandable to users of assistive technologies.

<div class="bd-example">
<div class="actionbar">
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav nav navtabs mb-0 dragscroll" role="tablist" id="listeTitreOnglets">
      <li class="navtabs-item pr-4">
        <a href="#onglet1" class="active" id="titreonglet1" data-toggle="tab" role="tab" aria-controls="onglet1" aria-selected="true">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet2" id="titreonglet2" data-toggle="tab" role="tab" aria-controls="onglet2" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet3" id="titreonglet3" data-toggle="tab" role="tab" aria-controls="onglet3" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet4" id="titreonglet4" data-toggle="tab" role="tab" aria-controls="onglet4" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet5" id="titreonglet5" data-toggle="tab" role="tab" aria-controls="onglet5" aria-selected="false">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
<div class="tab-content mt-5" id="myTabContent">
  <div class="tab-pane fade show active" id="onglet1" role="tabpanel" aria-labelledby="titreonglet1">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut tortor diam, blandit non tincidunt non, dignissim vitae lorem. Ut bibendum laoreet ligula ultrices maximus. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Morbi a tortor et sem volutpat fringilla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Mauris sagittis id urna ut blandit. In finibus vel elit quis rhoncus. Aliquam non auctor quam. Etiam semper in nisi at mollis. Suspendisse potenti. Maecenas sollicitudin, lectus eu fringilla facilisis, justo erat rutrum justo, et vehicula dui nibh quis magna. Praesent sed dui id ante suscipit cursus. Proin congue vel risus id consectetur. Quisque id placerat odio. 
  </div>
  <div class="tab-pane fade" id="onglet2" role="tabpanel" aria-labelledby="titreonglet2">
     Sed blandit tempor neque vel blandit. Vestibulum dapibus iaculis diam, ut egestas nisl rutrum et. Cras sed metus in justo vestibulum dignissim. Etiam nunc odio, congue consectetur metus vel, pellentesque laoreet ex. In non odio suscipit, blandit purus sed, dictum urna. Aenean iaculis laoreet purus, sagittis commodo nunc mattis a. Nulla mollis nunc sed ultricies tempor. Donec in enim non tortor pellentesque ullamcorper. Fusce mollis cursus turpis, vitae hendrerit libero tincidunt sed. Praesent eget elit imperdiet, cursus quam id, bibendum neque. In posuere sem arcu, vel egestas quam ultricies non. 
  </div>
  <div class="tab-pane fade" id="onglet3" role="tabpanel" aria-labelledby="titreonglet3">
     Sed felis eros, finibus eu porttitor convallis, dignissim ut sem. Nulla vulputate mattis dolor, non posuere mauris luctus eu. Nunc quis lorem varius quam condimentum viverra sit amet sit amet nunc. Morbi viverra augue et accumsan maximus. Vivamus eleifend quis dui eu consectetur. Vivamus ut placerat augue. Ut pellentesque feugiat convallis. Vestibulum ullamcorper diam urna, vitae finibus sapien suscipit sed. Pellentesque euismod, elit non rhoncus tempus, purus sem rutrum ex, sit amet vulputate velit augue quis leo. 
  </div>
  <div class="tab-pane fade" id="onglet4" role="tabpanel" aria-labelledby="titreonglet4">
     Pellentesque ut ligula sed neque vehicula sollicitudin. Nulla facilisi. Sed dictum nibh non risus laoreet dignissim. Pellentesque pretium scelerisque mauris sit amet finibus. Proin venenatis dui vel dui consequat interdum. Nunc mi sapien, suscipit vel tortor vel, pulvinar blandit tortor. Aenean id pulvinar mauris. Nulla facilisi. Donec ac lacus tincidunt, luctus justo a, hendrerit turpis. Sed dignissim faucibus viverra. Sed ac magna diam. Sed a augue eu diam consequat finibus. Suspendisse pharetra erat diam, quis lacinia dolor venenatis at. Nulla vel porttitor nisi, sit amet volutpat neque. Phasellus feugiat purus orci, sed vehicula justo ultricies sed. 
  </div>
  <div class="tab-pane fade" id="onglet5" role="tabpanel" aria-labelledby="titreonglet5">
     Curabitur dapibus ipsum vitae consequat bibendum. Nulla commodo vel turpis sit amet venenatis. Proin faucibus quam massa, tristique vulputate massa porttitor a. Suspendisse gravida libero vel lacus tristique, tristique lacinia ligula iaculis. Etiam cursus odio vel pellentesque dictum. Vivamus in velit gravida purus fermentum tincidunt et a ligula. Pellentesque est metus, faucibus at eros eget, tempus varius massa. Nulla facilisi. Nulla ut dolor eu justo consequat suscipit ac sed arcu. In sed euismod enim, id dignissim neque. Aliquam malesuada fringilla nunc id varius. Phasellus ultricies placerat nulla eget sagittis. Ut felis libero, fringilla id elit non, ullamcorper cursus neque. Suspendisse quis leo eu sapien malesuada tincidunt. Suspendisse porta rhoncus ipsum id vestibulum. 
  </div>
</div>
</div>

{% highlight html %}
<div class="actionbar">
  <nav role="navigation" class="position-relative mt-2">
    <ul class="nav nav navtabs mb-0 dragscroll" role="tablist" id="listeTitreOnglets">
      <li class="navtabs-item pr-4">
        <a href="#onglet1" class="active" id="titreonglet1" data-toggle="tab" role="tab" aria-controls="onglet1" aria-selected="true">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet2" id="titreonglet2" data-toggle="tab" role="tab" aria-controls="onglet2" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet3" id="titreonglet3" data-toggle="tab" role="tab" aria-controls="onglet3" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet4" id="titreonglet4" data-toggle="tab" role="tab" aria-controls="onglet4" aria-selected="false">Titre onglet</a>
      </li>
      <li class="navtabs-item pr-4">
        <a href="#onglet5" id="titreonglet5" data-toggle="tab" role="tab" aria-controls="onglet5" aria-selected="false">Titre onglet</a>
      </li>
    </ul>
  </nav>
</div>
<div class="tab-content" id="myTabContent">
  <div class="tab-pane fade show active" id="onglet1" role="tabpanel" aria-labelledby="titreonglet1">...</div>
  <div class="tab-pane fade" id="onglet2" role="tabpanel" aria-labelledby="titreonglet2">...</div>
  <div class="tab-pane fade" id="onglet3" role="tabpanel" aria-labelledby="titreonglet3">...</div>
  <div class="tab-pane fade" id="onglet4" role="tabpanel" aria-labelledby="titreonglet4">...</div>
  <div class="tab-pane fade" id="onglet5" role="tabpanel" aria-labelledby="titreonglet5">...</div>
</div>
{% endhighlight %}

### Via JavaScript

Enable tabbable tabs via JavaScript (each tab needs to be activated individually):

{% highlight js %}
$('#myTab a').on('click', function (e) {
  e.preventDefault()
  $(this).tab('show')
})
{% endhighlight %}

You can activate individual tabs in several ways:

{% highlight js %}
$('#myTab a[href="#profile"]').tab('show') // Select tab by name
$('#myTab li:first-child a').tab('show') // Select first tab
$('#myTab li:last-child a').tab('show') // Select last tab
$('#myTab li:nth-child(3) a').tab('show') // Select third tab
{% endhighlight %}

### Fade effect

To make tabs fade in, add `.fade` to each `.tab-pane`. The first tab pane must also have `.show` to make the initial content visible.

{% highlight html %}
<div class="tab-content">
  <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane fade" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane fade" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>
{% endhighlight %}

### Methods

{% include callout-danger-async-methods.md %}

#### $().tab

Activates a tab element and content container. Tab should have either a `data-target` or an `href` targeting a container node in the DOM.

{% highlight html %}
<ul class="nav nav-tabs" id="myTab" role="tablist">
  <li class="nav-item">
    <a class="nav-link active" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="messages-tab" data-toggle="tab" href="#messages" role="tab" aria-controls="messages" aria-selected="false">Messages</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" id="settings-tab" data-toggle="tab" href="#settings" role="tab" aria-controls="settings" aria-selected="false">Settings</a>
  </li>
</ul>

<div class="tab-content">
  <div class="tab-pane active" id="home" role="tabpanel" aria-labelledby="home-tab">...</div>
  <div class="tab-pane" id="profile" role="tabpanel" aria-labelledby="profile-tab">...</div>
  <div class="tab-pane" id="messages" role="tabpanel" aria-labelledby="messages-tab">...</div>
  <div class="tab-pane" id="settings" role="tabpanel" aria-labelledby="settings-tab">...</div>
</div>

<script>
  $(function () {
    $('#myTab li:last-child a').tab('show')
  })
</script>
{% endhighlight %}

#### .tab('show')

Selects the given tab and shows its associated pane. Any other tab that was previously selected becomes unselected and its associated pane is hidden. **Returns to the caller before the tab pane has actually been shown** (i.e. before the `shown.bs.tab` event occurs).

{% highlight js %}
$('#someTab').tab('show')
{% endhighlight %}

#### .tab('dispose')

Destroys an element's tab.

### Events

When showing a new tab, the events fire in the following order:

1. `hide.bs.tab` (on the current active tab)
2. `show.bs.tab` (on the to-be-shown tab)
3. `hidden.bs.tab` (on the previous active tab, the same one as for the `hide.bs.tab` event)
4. `shown.bs.tab` (on the newly-active just-shown tab, the same one as for the `show.bs.tab` event)

If no tab was already active, then the `hide.bs.tab` and `hidden.bs.tab` events will not be fired.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 150px;">Event Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.tab</td>
      <td>This event fires on tab show, but before the new tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
    </tr>
    <tr>
      <td>shown.bs.tab</td>
      <td>This event fires on tab show after a tab has been shown. Use <code>event.target</code> and <code>event.relatedTarget</code> to target the active tab and the previous active tab (if available) respectively.</td>
    </tr>
    <tr>
      <td>hide.bs.tab</td>
      <td>This event fires when a new tab is to be shown (and thus the previous active tab is to be hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the current active tab and the new soon-to-be-active tab, respectively.</td>
    </tr>
    <tr>
      <td>hidden.bs.tab</td>
      <td>This event fires after a new tab is shown (and thus the previous active tab is hidden). Use <code>event.target</code> and <code>event.relatedTarget</code> to target the previous active tab and the new active tab, respectively.</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
  e.target // newly activated tab
  e.relatedTarget // previous active tab
})
{% endhighlight %}

