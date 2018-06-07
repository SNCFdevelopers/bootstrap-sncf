---
layout: docs
title: Tables
description: Documentation and examples for opt-in styling of tables (given their prevalent use in JavaScript plugins) with Bootstrap.
group: content
toc: true
---

## Examples

Due to the widespread use of tables across third-party widgets like calendars and date pickers, we've designed our tables to be **opt-in**. Just add the base class `.table` to any `<table>`, then extend with custom styles or our various included modifier classes.

Using the most basic table markup, here's how `.table`-based tables look in SNCF Framework.

{% example html %}
<div class="table-wrapper">
  <div class="table-scroller dragscroll">
    <table class="table">
      <thead class="thead thead-light">
        <tr>
          <th>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="thead">
                <label class="custom-control-label" for="thead"></label>
              </div>
            </div>
          </th>
          <th><div class="cell-inner">Nom</div></th>
          <th><div class="cell-inner">Type</div></th>
          <th><div class="cell-inner">Vers</div></th>
          <th><div class="cell-inner">Agent</div></th>
          <th><div class="cell-inner">Mise à jour</div></th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {% for item in site.data.tables %}
        <tr>
          <td>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="cell{{ forloop.index }}">
                <label class="custom-control-label" for="cell{{ forloop.index }}"></label>
              </div>
            </div>
          </td>
          <td><div class="cell-inner">{{ item.name }}</div></td>
          <td><div class="cell-inner">{{ item.type }}</div></td>
          <td><div class="cell-inner">{{ item.version }}</div></td>
          <td><div class="cell-inner">{{ item.agent }}</div></td>
          <td><div class="cell-inner">{{ item.update }}</div></td>
          <td>
            <div class="cell-inner">
              <button class="btn btn-only-icon btn-transparent btn-favorite">
                <span class="sr-only">Favorite</span>
                <i class="icons-favorite-on icons-size-1x25"></i>
              </button>
              <button class="btn btn-only-icon btn-transparent btn-color-gray">
                <span class="sr-only">Favorite</span>
                <i class="icons-divers icons-size-1x25"></i>
              </button>
              <div class="btn-group dropdown">
                <button class="btn btn-only-icon btn-transparent btn-color-gray" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                  <span class="sr-only">Favorite</span>
                  <i class="icons-options icons-size-1x75"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right">
                  <button type="button" class="dropdown-item" href="#">Télécharger</button>
                  <button type="button" class="dropdown-item" href="#">Imprimer</button>
                  <button type="button" class="dropdown-item" href="#">Partager</button>
                </div>
              </div>
            </div>
          </td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>
{% endexample %}

## Table with fixed last row

Use `last-cell-fixed` class on `table-scroller` element. Don't forget to add `cell-placeholder` and `cell-fixed` elements.

{% example html %}
<div class="table-wrapper">
  <div class="table-scroller last-cell-fixed dragscroll">
    <table class="table">
      <thead class="thead thead-light">
        <tr>
          <th>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="thead">
                <label class="custom-control-label" for="thead"></label>
              </div>
            </div>
          </th>
          <th><div class="cell-inner">Nom</div></th>
          <th><div class="cell-inner">Type</div></th>
          <th><div class="cell-inner">Vers</div></th>
          <th><div class="cell-inner">Agent</div></th>
          <th><div class="cell-inner">Mise à jour</div></th>
          <th class="cell-placeholder"><span></span></th>
          <th class="cell-fixed"></th>
        </tr>
      </thead>
      <tbody class="tbody">
        {% for item in site.data.tables %}
        <tr>
          <td>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="cell{{ forloop.index }}">
                <label class="custom-control-label" for="cell{{ forloop.index }}"></label>
              </div>
            </div>
          </td>
          <td><div class="cell-inner">{{ item.name }}</div></td>
          <td><div class="cell-inner">{{ item.type }}</div></td>
          <td><div class="cell-inner">{{ item.version }}</div></td>
          <td><div class="cell-inner">{{ item.agent }}</div></td>
          <td><div class="cell-inner">{{ item.update }}</div></td>
          <td class="cell-placeholder"><span></span></td>
          <td class="cell-fixed">
            <div class="btn-group dropdown">
              <button class="btn btn-only-icon btn-transparent btn-color-gray" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window">
                <span class="sr-only">Favorite</span>
                <i class="icons-options icons-size-1x75"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right">
                <button type="button" class="dropdown-item" href="#">Télécharger</button>
                <button type="button" class="dropdown-item" href="#">Imprimer</button>
                <button type="button" class="dropdown-item" href="#">Partager</button>
              </div>
            </div>
          </td>
        </tr>
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>
{% endexample %}

## Table with groups

{% example html %}
<div class="table-wrapper" data-component="table">
  <div class="table-scroller dragscroll">
    <table class="table">
      <thead class="thead thead-light">
        <tr>
          <th><div class="cell-inner cell-inner-350">Nom</div></th>
          <th><div class="cell-inner">Type</div></th>
          <th><div class="cell-inner">Vers</div></th>
          <th><div class="cell-inner">Agent</div></th>
          <th><div class="cell-inner">Mise à jour</div></th>
        </tr>
      </thead>
      <tbody class="tbody">
        {% for item in site.data.tables %}
        {% assign index = forloop.index %}
        <tr class="trhead">
          <td class="cell-350 cell-caret" data-role="toggle-group-btn" data-id="{{ index }}"><div class="cell-inner">{{ item.name }}</div></td>
          <td><div class="cell-inner">{{ item.type }}</div></td>
          <td><div class="cell-inner">{{ item.version }}</div></td>
          <td><div class="cell-inner">{{ item.agent }}</div></td>
          <td><div class="cell-inner">{{ item.update }}</div></td>
        </tr>
        {% for subitem in item.subrows %}
          <tr class="trgroup" data-trgroup="{{ index }}">
            <td class="cell-350" colspan="5"><div class="cell-inner"><div class="text-truncate">{{ subitem.name }}</div></div></td>
          </tr>
        {% endfor %}
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="table-wrapper" data-component="table">
  <div class="table-scroller dragscroll">
    <table class="table">
      <thead class="thead thead-light">
        <tr>
          <th>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="thead">
                <label class="custom-control-label" for="thead"></label>
              </div>
            </div>
          </th>
          <th><div class="cell-inner cell-inner-350">Nom</div></th>
          <th><div class="cell-inner">Type</div></th>
          <th><div class="cell-inner">Vers</div></th>
          <th><div class="cell-inner">Agent</div></th>
          <th><div class="cell-inner">Mise à jour</div></th>
        </tr>
      </thead>
      <tbody class="tbody">
        {% for item in site.data.tables %}
        {% assign index = forloop.index %}
        <tr class="trhead">
          <td>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="cell{{ forloop.index }}">
                <label class="custom-control-label" for="cell{{ forloop.index }}"></label>
              </div>
            </div>
          </td>
          <td class="cell-350 cell-caret" data-role="toggle-group-btn" data-id="{{ index }}"><div class="cell-inner">{{ item.name }}</div></td>
          <td><div class="cell-inner">{{ item.type }}</div></td>
          <td><div class="cell-inner">{{ item.version }}</div></td>
          <td><div class="cell-inner">{{ item.agent }}</div></td>
          <td><div class="cell-inner">{{ item.update }}</div></td>
        </tr>
        {% for subitem in item.subrows %}
          <tr class="trgroup" data-trgroup="{{ index }}">
            <td>
              <div class="cell-inner">
                <div class="custom-control custom-checkbox custom-checkbox-alone">
                  <input type="checkbox" class="custom-control-input" id="cell{{ forloop.index }}">
                  <label class="custom-control-label" for="cell{{ forloop.index }}"></label>
                </div>
              </div>
            </td>
            <td class="cell-350" colspan="5"><div class="cell-inner"><div class="text-truncate">{{ subitem.name }}</div></div></td>
          </tr>
        {% endfor %}
        {% endfor %}
      </tbody>
    </table>
  </div>
</div>
{% endexample %}

## Striped rows

Use `.table-striped` to add zebra-striping to any table row within the `<tbody>`.

{% example html %}
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col"><div class="cell-inner">First</div></th>
      <th scope="col"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td><div class="cell-inner">Larry</div></td>
      <td><div class="cell-inner">the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Bordered table

Add `.table-bordered` for borders on all sides of the table and cells.

{% example html %}
<table class="table table-bordered">
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col"><div class="cell-inner">First</div></th>
      <th scope="col"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td colspan="2"><div class="cell-inner">Larry the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Hoverable rows

Add `.table-hover` to enable a hover state on table rows within a `<tbody>`.

{% example html %}
<table class="table table-hover">
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col"><div class="cell-inner">First</div></th>
      <th scope="col"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td colspan="2"><div class="cell-inner">Larry the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Captions

A `<caption>` functions like a heading for a table. It helps users with screen readers to find a table and understand what it's about and decide if they want to read it.

{% example html %}
<table class="table">
  <caption>List of users</caption>
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">First</th>
      <th scope="col">Last</th>
      <th scope="col">Handle</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</table>
{% endexample %}

## Responsive tables

Across every breakpoint, use `.table-wrapper` and `table-scroller` container elements for horizontally scrolling tables.

{% example html %}
<div class="table-wrapper" data-component="table">
  <div class="table-scroller dragscroll">
    <table class="table">
      <thead>
        <tr>
          <th scope="col">#</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
          <th scope="col">Heading</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
          <td>Cell</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{% endexample %}
