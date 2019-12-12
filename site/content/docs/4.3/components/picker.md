---
layout: docs
title: Pickers
description: Pickers let users select a value from a set of pre-determined values with the help of visual and interactive aids.
group: components
toc: true
permalink: /docs/4.3/components/picker/
---

There are several types of pickers:

- date-pickers
- time-pickers
- date-time-pickers
- range-pickers

{{% callout warning %}}
### Accessibility
This components, and the library which it's based on, needs to automatically add `readonly` on input tag to ensure correct working.
{{% /callout %}}

{{% callout info %}}
### How to use programmatic access ?
Our pickers are based upon [Flatpickr library](https://flatpickr.js.org/) and you can use all the fonctions included and described in their documentation.
Please note that **you don't** have to load `flatpickr.js` since it's already included in bootstrap's `bootstrap-sncf.min.js`.
{{% /callout %}}

## Date
{{% example html %}}
<label for="date" class="font-weight-medium mb-2">Date (jj/mm/aaaa)</label>
<div data-component="picker">
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input id="date" type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" tabindex="-1" aria-expanded="false">
        <i class="icons-calendar" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
{{% /example %}}

## Default date

Date-pickers let users select a date (in dd/mm/yyyy format) using a calendar visual. Be sure to visually differentiate the current date (selected by default), the date the user selects, and dates that cannot be selected.

{{% example html %}}
<label for="defaultdate" class="font-weight-medium mb-2">Date (jj/mm/aaaa)</label>
<div data-component="picker" data-default-date="26/02/2017" id="my-picker">
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input id="defaultdate" type="text" class="form-control" placeholder="Sélectionner une date" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" tabindex="-1" aria-expanded="false">
        <i class="icons-calendar" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
{{% /example %}}

## Range

The range-picker lets users select a start date and end date to define a period using two separate fields.

{{< example html >}}
<div aria-hidden="true">
  <label for="range" class="font-weight-medium mb-2">Date</label>
  <div data-component="picker" data-mode="range">
    <div class="input-group" data-toggle>
      <div class="form-control-container">
        <input id="range" tabindex="-1" type="text" class="form-control" placeholder="Sélectionner une date" data-input>
        <span class="form-control-state"></span>
      </div>
      <div class="input-group-append">
        <button tabindex="-1" type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
          <i class="icons-calendar" aria-hidden="true"></i>
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
        {{< input type="text" id="date1" >}}
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="date2">Date de départ (jj/mm/aaaa)</label>
        {{< input type="text" id="date2" >}}
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Time picker

Time-pickers let users select a time (in hh:mm format) using a clock visual. Be sure to visually differentiate the time selected and times that cannot be selected. You can also use a drop-down list instead of a time-picker to display and select a time.

{{% example html %}}
<label class="font-weight-medium mb-2" for="timepickerExemple">Time</label>
<div data-component="picker" data-mode="time" data-increment-hours-on-minutes-max>
  <div class="input-group" data-toggle>
    <div class="form-control-container">
      <input id="timepickerExemple" tabindex="-1" type="text" class="form-control" placeholder="Sélectionner une heure" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
        <span class="sr-only">Saisir l’heure</span>
        <i class="icons-calendar-time" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>
{{% /example %}}

## DateTime picker

Only use a date-time-picker when you need to optimize space and reduce the number of fields. The date-time-picker lets readers select a date and time in the same component instead of using a separate date-picker and time-picker.

{{< example html >}}
<label class="font-weight-medium mb-2">Heure</label>
<div data-component="picker" data-enable-time="true" data-increment-hours-on-minutes-max="true">
  <div class="input-group input-group--flatpickr">
    <div class="form-control-container" data-toggle>
      <input type="text" class="form-control" placeholder="JJ/MM/AAAA à HH:MM" data-input>
      <span class="form-control-state"></span>
    </div>
    <div class="input-group-append">
      <button type="button" class="btn btn-primary btn-only-icon" data-role="btn" aria-expanded="false">
        <i class="icons-calendar-time" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</div>

<div class="pt-3">
  <button class="btn-link" aria-controls="inputdatetime" data-component="state" data-state="d-none" data-behaviour="toggle" data-target=".range-inputs">
    Saisir une date et une heure
  </button>
  <div class="row pt-2 range-inputs d-none" id="inputdatetime">
    <div class="col">
      <div class="form-group">
        <label for="datetime1">Date d’arrivée (jj/mm/aaaa)</label>
        {{< input type="text" id="datetime1" class="form-control" >}}
      </div>
    </div>
    <div class="col">
      <div class="form-group">
        <label for="datetime2">Heure d'arrivée (HH:MM)</label>
        {{< input type="text" id="datetime2" class="form-control" >}}
      </div>
    </div>
  </div>
</div>
{{< /example >}}

## Second range picker

{{< example html >}}
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
              <i class="icons-calendar" aria-hidden="true"></i>
            </button>
          </div>
        </div>
        <div class="dropdown-menu" data-role="menu">
        </div>
      </div>
    </div>
    <div class="col">
      <div class="input-group" id="secondRangeInput">
        <div class="form-control-container">
          <input type="text" class="form-control" placeholder="Date & Heure" data-input>
          <span class="form-control-state"></span>
        </div>
        <div class="input-group-append">
          <button type="button" class="btn btn-primary btn-only-icon" data-toggle>
            <i class="icons-calendar" aria-hidden="true"></i>
          </button>
        </div>
      </div>
    </div>
  </div>

  <div class="pt-3">
    <button class="btn-link" aria-controls="inputrange2" data-component="state" data-state="d-none" data-behaviour="toggle" data-target=".range-inputs">
      Saisir une plage de date
    </button>
    <div class="row pt-2 range-inputs d-none" id="inputrange2">
      <div class="col">
        <div class="form-group">
          <label for="range1">Date d’arrivée (jj/mm/aaaa)</label>
          {{< input type="text" id="range1" class="form-control" >}}
        </div>
      </div>
      <div class="col">
        <div class="form-group">
          <label for="range2">Date de départ (jj/mm/aaaa)</label>
          {{< input type="text" id="range2" class="form-control" >}}
        </div>
      </div>
    </div>
  </div>
</form>
{{< /example >}}

## Use with JavaScript
Use <a target="_blank" href="https://flatpickr.js.org/">Flatpickr documentation</a>

{{% highlight html %}}
<div data-component="picker" id="my-picker" ...>
  ...
</div>
{{% /highlight %}}

Access to your component instance : `document.querySelector('#my-picker').flatpickr`
