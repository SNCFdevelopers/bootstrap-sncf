---
layout: docs
title: Input group
description: Examples and usage guidelines for checkboxes and radios styles.
group: components
toc: true
---

## Button addons

{% example html %}
<div class="input-group">
  <div class="input-group-prepend">
    <div class="btn-group dropdown" data-component="select-radios">
      <button type="button" class="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <span data-role="placeholder">Tous ces mots</span>
        <i class="icons-arrow"></i>
      </button>
      <div class="dropdown-menu">
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch1" id="action1" class="sr-only"/>
        <label class="dropdown-item" for="action1">Action</label>
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch2" id="action2" class="sr-only"/>
        <label class="dropdown-item" for="action2">Another action</label>
        <input data-role="value" type="radio" name="keywordSearch" value="keywordSearch3" id="action3" class="sr-only"/>
        <label class="dropdown-item" for="action3">Something else here</label>
      </div>
    </div>
  </div>
  <div class="form-control-container">
    <input type="text" class="form-control" placeholder="Enter text">
    <span class="form-control-state"></span>
  </div>
</div>
{% endexample %}