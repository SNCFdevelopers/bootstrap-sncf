---
permalink: /docs/4.0/examples/table
---

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Forms template</title>

    <link href="{{ site.baseurl }}/main.css" rel="stylesheet">
  </head>
  <body>
    {% include components/mastnav.html %}
    {% include components/mastheader.html %}
    <div class="actionbar">
      <div class="actionbar-head">
        <h1 class="mb-0">Titre tableau</h1>
        <ul class="toolbar mb-0 d-none d-md-flex">
          <li class="toolbar-item">
            <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
              <span class="sr-only">Edit</span>
              <i class="icons-edit icon-size-1x25"></i>
            </button>
          </li>
          <li class="toolbar-item">
            <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing">
              <span class="sr-only">List</span>
              <i class="icons-liste icon-size-1x25"></i>
            </button>
          </li>
          <li class="toolbar-item">
            <button class="btn btn-sm btn-transparent btn-color-gray toolbar-item-spacing" data-component="state" data-state="active" data-behaviour="toggle" data-target="#collapseFiltersMenu">
              <span class="sr-only">Filters</span>
              <i class="icons-filters icon-size-1x25"></i>
            </button>
          </li>
        </ul>
      </div>
    </div>
    <div class="subactionbars">
      <div class="toolbar w-100">
        <div class="w-50 toolbar-item separator-gray-200">
          <button type="button" class="btn btn-block btn-link justify-content-center btn-color-gray" data-component="state" data-state="active" data-behaviour="toggle" data-target="#collapseFiltersMenu">Filtrer</button>
        </div>
        <div class="w-50 toolbar-item separator-gray-200 w-50">
          <button type="button" class="btn btn-block btn-link justify-content-center btn-color-gray">Trier</button>
        </div>
      </div>
    </div>
    {% include components/table-filters.html %}
    <main div class="mastcontainer mastcontainer-lg">

    </main>
    <script src="{{ site.baseurl }}/main.js"></script>
  </body>
</html>