---
layout: docs
title: Charts
description: Charts
group: components
toc: true
---

{% example html %}
<div class="charts position-relative" data-component="line-chart">
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
            <li class="chart-caption-item line">Libellé 2</li>
        </ul>
    </div>
    <canvas></canvas>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative" data-component="line-chart" data-fill="true">
    <canvas></canvas>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative" data-component="bar-chart">
    <canvas></canvas>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative" data-component="pie-chart">
    <canvas></canvas>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative" data-component="pie-chart" data-cutoutpercentage="50">
    <canvas></canvas>
</div>
{% endexample html %}