---
layout: docs
title: Charts
description: Charts
group: components
toc: true
---

{% example html %}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480],[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]"
    data-line-styles='["unfilled", "dashed"]'
    data-line-colors = '["rgb(29, 136, 202)", "rgb(29, 136, 202)"]'>
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
            <li class="chart-caption-item dashed">Libellé 2</li>
        </ul>
    </div>
    <canvas></canvas>
</div>
{% endexample html %}

{% example html %}
<div class="charts position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480],[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]"
    data-line-styles='["unfilled", "dashed"]'>
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
            <li class="chart-caption-item dashed">Libellé 2</li>
        </ul>
    </div>
    <canvas></canvas>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative"
    data-component="line-chart"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480],[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]">
    <canvas></canvas>
</div>
{% endexample html %}