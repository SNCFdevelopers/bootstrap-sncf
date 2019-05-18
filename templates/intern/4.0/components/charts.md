---
layout: docs
title: Charts
description: Charts
group: components
toc: true
permalink: /docs/4.0/components/charts/
---
Our SNCF design system has 7 types of charts: 
- curved line charts 
- area charts
- line charts 
- bar graphs 
- pie charts 
- ring charts 
- progress charts

{% callout info %}
### How to use programmatic access ?
Our charts are based upon [ChartJS library](http://www.chartjs.org/docs/latest/) and you can use all the fonctions included and described in their documentation.
Please note that **you don't** have to load `chart.js` since it's already included in bootstrap's `bootstrap-sncf.min.js`.
{% endcallout %}

## Radar charts

Radar charts show the values of different variables.

{% example html %}
<div class="position-relative"
    data-component="radar-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]'
    data-values='[[580, 400, 500, 600, 700, 800]]'
    data-gridcolor="rgb(51,51,51,1)">
    <canvas>Graphique A</canvas>
    <a href="#">Description détaillée du graphique A</a>
</div>
{% endexample html %}


## Pie charts

Pie charts show the relative distribution of items in a group.

{% example html %}
<div class="position-relative" style="width: 500px; height: 500px"
    data-component="pie-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]'
    data-values='[580, 400, 500, 600, 700, 800]'>
    <canvas width="500px" height="500px">Graphique B</canvas>
    <a href="#">Description détaillée du graphique B</a>
</div>
{% endexample html %}


## Donut charts

{% example html %}
<div class="position-relative" style="width: 340px; height: 340px"
    data-component="pie-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]'
    data-values='[580, 400, 500, 600, 700, 800]'
    data-cutoutpercentage="78">
    <canvas width="340px" height="340px">Graphique C</canvas>
    <a href="#">Description détaillée du graphique C</a>
</div>
{% endexample html %}


## Bar charts

Bar graphs show changes in a quantity over time. We use them to display quantities measured periodically. There are three types of bar graphs: simple, cumulative and proportional. Simple bar graphs display a single measurement, while cumulative bar graphs display two to thr
ee measurements per bar. In proportional bar graphs, all bars are the same size but have different proportions for the indicators measured within them.

{% example html %}
<div class="position-relative"
    data-component="bar-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[400, 500, 250, 300, 700, 600, 100, 200]]"
    data-gridcolor="rgb(51,51,51,1)">
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item">Libellé 1</li>
        </ul>
    </div>
    <canvas>Graphique D</canvas>
    <a href="#">Description détaillée du graphique D</a>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative"
    data-component="bar-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[400, 500, 250, 300, 700, 600, 100, 200],[400, 300, 550, 500, 100, 200, 700, 600]]">
    <canvas>Graphique E</canvas>
    <a href="#">Description détaillée du graphique E</a>
</div>
{% endexample html %}


## Line charts

Line charts represent changes in a specific piece of data over time. We use them to display pieces of data that are measured periodically. 

Options:
- data-styles : 'unfilled' (by default) or 'dashed'
- data-colors : Array of rgb colors

### Single line
{% example html %}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars"]'
    data-values="[[280, 400, 550]]"
    data-gridcolor="rgb(255,200,0,1)">
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
        </ul>
    </div>
    <canvas>Graphique F</canvas>
    <a href="#">Description détaillée du graphique F</a>
</div>
{% endexample html %}

### Multi line
{% example html %}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars"]'
    data-values="[[280, 400, 550],[200, 380, 430]]">
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
            <li class="chart-caption-item line">Libellé 2</li>
        </ul>
    </div>
    <canvas>Graphique G</canvas>
    <a href="#">Description détaillée du graphique G</a>
</div>
{% endexample html %}

### Dashed line
{% example html %}
<div class="charts position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 400],[580, 400, 500, 600, 700, 800, 480, 400]]"
    data-styles='["unfilled", "dashed"]'>
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
            <li class="chart-caption-item dashed">Libellé 2</li>
        </ul>
    </div>
    <canvas>Graphique H</canvas>
    <a href="#">Description détaillée du graphique H</a>
</div>
{% endexample html %}

### Custom colors
Warning : don't forget to update the legend with your own color

{% example html %}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[580, 400, 500, 600, 700, 800, 480, 400],[500, 380, 460, 520, 650, 700, 380, 300]]"
    data-colors='["rgb(203, 2, 11)", "rgb(199, 87, 147)"]'>
    <canvas>Graphique I</canvas>
    <a href="#">Description détaillée du graphique I</a>
</div>
{% endexample html %}

### Area

Area charts represent changes in a figure calculated over time, e.g., changes in passenger numbers on a rail line over time. 

Use data-fill="true"

{% example html %}
<div class="position-relative"
    data-component="line-chart"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]">
    <canvas> Graphique J</canvas>
    <a href="#">Description détaillée du graphique J</a>
</div>
{% endexample html %}

### With border
Use data-straightlines="true"

{% example html %}
<div class="position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]">
    <canvas>Graphique K</canvas>
    <a href="#">Description détaillée du graphique K</a>
</div>
{% endexample html %}

### Custom colors
{% example html %}
<div class="position-relative"
    data-component="line-chart"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280],[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480]]"
    data-colors='["rgb(203, 2, 11)", "rgb(199, 87, 147)"]'>
    <canvas>Graphique L</canvas>
    <a href="#">Description détaillée du graphique L</a>
</div>
{% endexample html %}

{% example html %}
<div class="position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280],[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480]]"
    data-line-colors = '["rgb(7, 138, 206)", "rgb(67, 167, 219)"]'>
    <canvas>Graphique M</canvas>
    <a href="#">Description détaillée du graphique M</a>
</div>
{% endexample html %}

## Maps

This “map” component can be used for any type of map. Examples include geolocation, zooming, moving around a map, map search features and filtering.

