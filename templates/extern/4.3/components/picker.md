---
layout: docs
title: Pickers
group: components
toc: true
permalink: /docs/4.3/components/picker/
---

## Date picker

Date pickers are often used for forms or for other functional purposes; they let users select a date. The default value is the current date at the time the user opens the calendar. The length of the date-picker field is not fixed, but it must respect the grid.

{% example html %}
<label for="date" class="font-weight-medium mb-2">Date</label>
<div data-component="picker">
  <div class="input-group input-group--flatpickr">
    <div class="form-control-container" data-toggle>
      <input id="date" type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
        <i class="icons-calendar"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## Default date

{% example html %}
<label for="defaultdate" class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-default-date="2017-02-26">
  <div class="input-group input-group--flatpickr">
    <div class="form-control-container" data-toggle>
      <input id="defaultdate" type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
        <i class="icons-calendar"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## Range

{% example html %}
<div aria-hidden="true">
  <label for="range" class="font-weight-medium mb-2">Date</label>
  <div data-component="picker" data-mode="range">
    <div class="input-group input-group--flatpickr">
      <div class="form-control-container" data-toggle>
        <input id="range" type="text" class="form-control" placeholder="Sélectionner une date" data-input>
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append">
        <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
          <i class="icons-calendar"></i>
        </button>
      </div>
    </div>
  </div>
</div>
<div class="pt-3">
  <button class="btn-link" aria-controls="inputrange" data-component="state" data-state="d-none" data-behaviour="toggle" data-target=".range-inputs">
    Saisir une plage de date
  </button>
  <div class="row pt-2 range-inputs d-none" id="inputrange" aria-expanded="false">
    <div class="col">
      <div class="form-group">
        <label for="date1">Date d’arrivée (jj/mm/aaaa)</label>
        {% include components/input.html type="text" id="date1" class="form-control" %}
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="date2">Date de départ (jj/mm/aaaa)</label>
        {% include components/input.html type="text" id="date2" class="form-control" %}
      </div>
    </div>
  </div>
</div>
{% endexample html %}

## Time picker

### Description

Time pickers are often used for forms or for other functional purposes; they let users choose from a list of times.
The length of the time-picker field is not fixed, but it must respect the content grid.

{% example html %}
<label for="timepicker" class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-timepicker="true" data-increment-hours-on-minutes-max="true">
  <div class="input-group input-group--flatpickr">
    <div class="form-control-container" data-toggle>
      <input id="timepicker" type="text" class="form-control" placeholder="Sélectionner une heure" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
        <i class="icons-calendar-time"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## DateTime picker

{% example html %}
<label for="datetimepicker" class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-enable-time="true">
  <div class="input-group input-group--flatpickr">
    <div class="form-control-container" data-toggle>
      <input id="datetimepicker" type="text" class="form-control" placeholder="Sélectionner une heure" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
        <i class="icons-calendar-time"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## Second range picker

{% example html %}
<form autocomplete="false">
  <div class="row">
    <div class="col">
      <div data-component="picker" data-second-range="#secondRangeInput">
        <div class="input-group">
          <div class="form-control-container">
            <input type="text" class="form-control" placeholder="Date & Heure" data-input>
            <span class="form-control-state"></span>
          </div>
          <div class="input-group-append">
            <button type="button" class="btn btn-primary btn-only-icon" data-toggle>
              <i class="icons-calendar"></i>
            </button>
          </div>
        </div>
        <div class="dropdown-menu" data-role="menu">
        </div>
      </div>
    </div>
    <div class="col">
      <div class="input-group">
        <div class="form-control-container">
          <input id="secondRangeInput" type="text" class="form-control" placeholder="Date & Heure" data-input>
          <span class="form-control-state"></span>
        </div>
        <div class="input-group-append">
          <button type="button" class="btn btn-primary btn-only-icon" data-toggle>
            <i class="icons-calendar"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample html %}
