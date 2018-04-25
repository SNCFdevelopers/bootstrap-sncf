---
layout: docs
title: Elements
description: Elements.
group: components
toc: true
permalink: /docs/4.0/components/elements
---

## Vignettes

{% example html %}
<div class="row">
  {% for i in (1..3) %}
  <div class="col-md-4">
    <div>
      <img class="w-100 mb-4 rounded" src="https://dummyimage.com/308x184/000/fff" />
      <div>
        <h2 class="mb-2">Toutes les applications</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
        <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icon-size-x5 ml-2"></i></a>
      </div>
    </div>
  </div>
  {% endfor %}
</div>
{% endexample %}

{% example html %}
<div class="background-light">
  <div class="row">
    <div class="col-12 col-md-6">
      <img class="w-100" src="https://dummyimage.com/640x383/000/fff" />
    </div>
    <div class="col-12 col-md-6">
      <div class="gy-md-5 gr-md-5">
        <h3 class="text-sm text-uppercase">16 février 2017</h3>
        <h2 class="display-2">Meetup Open Transformation</h2>
        <p class="mb-3">Vestibulum id ligula porta felis euismod semper. Donec id elit non mi porta gravida at eget metus.</p>
        <div class="mb-3">Dijon</div>
        <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icon-size-x5 ml-2"></i></a>
      </div>
    </div>
  </div>
</div>
{% endexample %}