---
layout: docs
title: Graphiques
slug: graphiques
description: Les graphiques peuvent être notamment utilisés dans les dashboards d'applications de production. Ils permettent de mettre graphiquement en valeur les données.
group: components
toc: true
url: /docs/4.3/components/graphiques/
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


## Graphiques barres

Les graphiques barres montrent les changements d'une quantiité dans le temps. Nous les utilisons pour afficher les quantités mesurées périodiquement. Il existe trois types de graphiques barres : simple, cumulatif et proportionnel. Les graphiques barres simples affichent une seule mesure, tandis que les cumulatifs affichent deux à trois mesures par barre.
Dans les graphiques barres proportionnelles, toutes les barres ont la même taille mais des proportions différentes pour les indicateurs mesurés.

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


## Graphiques lignes

Les graphiques lignes représentent les modifications d'une donnée spécifique au fil du temps.
Nous les utilisons pour afficher des données mesurées périodiquement.

Options:

- data-styles : 'unfilled' (par défaut) ou 'dashed' (pointillés)
- data-colors : tableau de couleurs RVB

### Une seule ligne
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

### Multi lignes
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

### Ligne en pointillés
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

### Couleurs personnalisées
Attention : n'oubliez pas de mettre à jour la légende avec votre couleur personnalisée

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

### Aires

Les graphiques aires représentent les modifications d'un chiffre calculé dans le temps, souvent une fréquentation. Par exemple, les modifications du nombre de passagers sur une ligne au fil du temps.

Utilisez data-fill="true"

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

### Aires avec bordure
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

### Aires avec couleurs personnalisées
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

## Cartes

Ce composant "carte" peut être utilisé pour tout type de carte. Les exemples incluent la géolocalisation, le zoom, le déplacement sur une carte, les fonctions de recherche sur la carte et le filtrage.
