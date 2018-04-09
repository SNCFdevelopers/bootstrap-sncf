---
layout: docs
title: Pickers
description: Pickers
group: components
toc: true
---

{% example html %}
<form autocomplete="false">
  <div class="row">
    <div class="col">
      <div data-component="picker">
        <div class="input-group">
          <div class="form-control-container">
            <input type="text" class="form-control" placeholder="Date & Heure" data-input>
            <span class="form-control-state"></span>
          </div>
          <div class="input-group-append">
            <button type="button" class="btn btn-primary btn-only-icon" data-toggle>
              <i class="icons-agenda"></i>
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
            <i class="icons-agenda"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</form>
{% endexample html %}