---
layout: docs
title: Pickers
description: Pickers
group: components
toc: true
---

## Picker

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

{% example html %}
<label class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-mode="time">
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

{% example html %}
<label class="font-weight-medium mb-2">Date</label>
<div data-component="picker" data-enable-time="true">
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