---
layout: docs
title: Charts
slug: Graphiques
description: Les graphiques peuvent être notamment utilisés dans les dashboards d'applications de production. Ils permettent de mettre graphiquement en valeur les données.
group: components
toc: true
url: /docs/4.3/components/charts/
---

{{% callout info %}}
### Comment utiliser l'accès programmatique ?
Nos graphiques sont basés sur la [ChartJS library](http://www.chartjs.org/docs/latest/) et vous pouvez utiliser toutes les fonctions incluses et décrites dans leur documentation.
Veuillez noter que **vous ne devez pas** charger `chart.js` car il est déjà inclus dans `bootstrap-sncf.min.js`.
{{% /callout %}}

{{% callout warning %}}
### Vous utilisez le mode sombre ?
Les couleurs globales seront ajustées mais pas les couleurs de grille. Celui-ci est un paramètre `data-gridcolor="rgb(215,215,215,1)"` vous devriez changer lorsque vous passez du mode classique au [mode sombre]({{< docsref "/layout/dark-mode" >}}). \\
Les bonnes valeurs sont les niveaux de gris des [couleurs]({{< docsref "/utilities/colors" >}}), par exemple :

- `rgb(215,215,215,1)` pour le mode classique
- `rgb(51,51,51,1)` pour le mode sombre
{{% /callout %}}

## Graphiques radar

Les graphiques radar montrent les valeurs de différentes variables.

{{% example html %}}
<div class="position-relative"
    data-component="radar-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]'
    data-values='[[580, 400, 500, 600, 700, 800]]'
    data-gridcolor="rgb(215,215,215,1)">
    <canvas>Graphique A</canvas>
    <a href="#">Description détaillée du graphique A</a>
</div>
{{% /example %}}


## Diagrammes à secteurs ou "Camemberts"

Les diagrammes à secteurs, aussi appelés "Camemberts", montrent la répartition relative des éléments dans un groupe.

{{% example html %}}
<div class="position-relative" style="width: 500px; height: 500px"
    data-component="pie-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]'
    data-values='[580, 400, 500, 600, 700, 800]'>
    <canvas width="500px" height="500px">Graphique B</canvas>
    <a href="#">Description détaillée du graphique B</a>
</div>
{{% /example %}}


## Graphiques "Donuts"

Les graphiques "Donuts" ont un fonctionnement similaire aux diagrammes à secteurs, dits "Camemberts", mais ne sont pas pleins. Ce qui permet de saisir une information centrale ou illustration par exemple.

{{% example html %}}
<div class="position-relative" style="width: 340px; height: 340px"
    data-component="pie-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin"]'
    data-values='[580, 400, 500, 600, 700, 800]'
    data-cutoutpercentage="78">
    <canvas width="340px" height="340px">Graphique C</canvas>
    <a href="#">Description détaillée du graphique C</a>
</div>
{{% /example %}}


## Bar charts

Bar graphs show changes in a quantity over time. We use them to display quantities measured periodically. There are three types of bar graphs: simple, cumulative and proportional. Simple bar graphs display a single measurement, while cumulative bar graphs display two to thr
ee measurements per bar. In proportional bar graphs, all bars are the same size but have different proportions for the indicators measured within them.

{{% example html %}}
<div class="position-relative"
    data-component="bar-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[400, 500, 250, 300, 700, 600, 100, 200]]"
    data-gridcolor="rgb(215,215,215,1)">
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item">Libellé 1</li>
        </ul>
    </div>
    <canvas>Graphique D</canvas>
    <a href="#">Description détaillée du graphique D</a>
</div>
{{% /example %}}

{{% example html %}}
<div class="position-relative"
    data-component="bar-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[400, 500, 250, 300, 700, 600, 100, 200],[400, 300, 550, 500, 100, 200, 700, 600]]"
    data-gridcolor="rgb(215,215,215,1)">
    <canvas>Graphique E</canvas>
    <a href="#">Description détaillée du graphique E</a>
</div>
{{% /example %}}


## Line charts

Line charts represent changes in a specific piece of data over time. We use them to display pieces of data that are measured periodically. 

Options:

- data-styles : 'unfilled' (by default) or 'dashed'
- data-colors : Array of rgb colors

### Single line
{{% example html %}}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars"]'
    data-values="[[280, 400, 550]]"
    data-gridcolor="rgb(215,215,215,1)">
    <div class="chart-head mb-4">
        <h2 class="font-weight-normal mb-0">Titre de la courbe</h2>
        <ul class="chart-caption">
            <li class="chart-caption-item line">Libellé 1</li>
        </ul>
    </div>
    <canvas>Graphique F</canvas>
    <a href="#">Description détaillée du graphique F</a>
</div>
{{% /example %}}

### Multi line
{{% example html %}}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars"]'
    data-values="[[280, 400, 550],[200, 380, 430]]"
    data-gridcolor="rgb(215,215,215,1)">
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
{{% /example %}}

### Dashed line
{{% example html %}}
<div class="charts position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 400],[580, 400, 500, 600, 700, 800, 480, 400]]"
    data-styles='["unfilled", "dashed"]'
    data-gridcolor="rgb(215,215,215,1)">
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
{{% /example %}}

### Custom colors
Warning : don't forget to update the legend with your own color

{{% example html %}}
<div class="charts position-relative"
    data-component="line-chart"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août"]'
    data-values="[[580, 400, 500, 600, 700, 800, 480, 400],[500, 380, 460, 520, 650, 700, 380, 300]]"
    data-colors='["rgb(203, 2, 11)", "rgb(199, 87, 147)"]'
    data-gridcolor="rgb(215,215,215,1)">
    <canvas>Graphique I</canvas>
    <a href="#">Description détaillée du graphique I</a>
</div>
{{% /example %}}

### Area

Area charts represent changes in a figure calculated over time, e.g., changes in passenger numbers on a rail line over time. 

Use data-fill="true"

{{% example html %}}
<div class="position-relative"
    data-component="line-chart"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]"
    data-gridcolor="rgb(215,215,215,1)">
    <canvas> Graphique J</canvas>
    <a href="#">Description détaillée du graphique J</a>
</div>
{{% /example %}}

### With border
Use data-straightlines="true"

{{% example html %}}
<div class="position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280]]"
    data-gridcolor="rgb(215,215,215,1)">
    <canvas>Graphique K</canvas>
    <a href="#">Description détaillée du graphique K</a>
</div>
{{% /example %}}

### Custom colors
{{% example html %}}
<div class="position-relative"
    data-component="line-chart"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280],[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480]]"
    data-colors='["rgb(203, 2, 11)", "rgb(199, 87, 147)"]'
    data-gridcolor="rgb(215,215,215,1)">
    <canvas>Graphique L</canvas>
    <a href="#">Description détaillée du graphique L</a>
</div>
{{% /example %}}

{{% example html %}}
<div class="position-relative"
    data-component="line-chart"
    data-straightlines="true"
    data-fill="true"
    data-labels='["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"]'
    data-values="[[500, 380, 460, 520, 650, 700, 380, 300, 480, 460, 400, 280],[580, 400, 500, 600, 700, 800, 480, 400, 520, 580, 500, 480]]"
    data-line-colors = '["rgb(7, 138, 206)", "rgb(67, 167, 219)"]'
    data-gridcolor="rgb(215,215,215,1)">
    <canvas>Graphique M</canvas>
    <a href="#">Description détaillée du graphique M</a>
</div>
{{% /example %}}

## Maps

This “map” component can be used for any type of map. Examples include geolocation, zooming, moving around a map, map search features and filtering.
