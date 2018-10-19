---
layout: docs
title: Pickers
group: components
toc: true
permalink: /docs/4.0/components/picker
---

Pickers let users select a value from a set of pre-determined values with the help of visual and interactive aids. There are several types of pickers:- date-pickers- time-pickers- date-time-pickers- range-pickers

{% callout info %}
### How to use programmatic access ?
Our pickers are based upon [Flatpickr library](https://flatpickr.js.org/) and you can use all the fonctions included and described in their documentation.
Please note that **you don't** have to load `flatpickr.js` since it's already included in bootstrap's `main.js`.
{% endcallout %}

## Date
{% example html %}
<label class="font-weight-medium mb-2">Date</label>
<div data-component="picker">
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn">
        <i class="icons-calendar"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## Default date

Date-pickers let users select a date (in dd/mm/yyyy format) using a calendar visual. Be sure to visually differentiate the current date (selected by default), the date the user selects, and dates that cannot be selected.

{% example html %}
<label class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-default-date="2017-02-26">
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn">
        <i class="icons-calendar"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## Range

The range-picker lets users select a start date and end date to define a period using two separate fields.

{% example html %}
<label class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-mode="range">
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn">
        <i class="icons-calendar"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## Time picker

Time-pickers let users select a time (in hh:mm format) using a clock visual. Be sure to visually differentiate the time selected and times that cannot be selected. You can also use a drop-down list instead of a time-picker to display and select a time.

{% example html %}
<label class="font-weight-medium mb-2">Time</label>
<div data-component="picker" data-mode="time" data-increment-hours-on-minutes-max>
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input type="text" class="form-control" placeholder="Sélectionner une heure" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn">
        <i class="icons-calendar-time"></i>
      </button>
    </div>
  </div>
</div>
{% endexample html %}

## DateTime picker

Only use a date-time-picker when you need to optimize space and reduce the number of fields. The date-time-picker lets readers select a date and time in the same component instead of using a separate date-picker and time-picker.

{% example html %}
<label class="font-weight-medium mb-2">Heure</label>
<div data-component="picker" data-enable-time="true" data-increment-hours-on-minutes-max>
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input type="text" class="form-control" placeholder="JJ/MM/AAAA à HH:MM" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn">
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
