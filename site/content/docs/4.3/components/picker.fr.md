---
layout: docs
title: Sélecteurs de date et Heure
description: Permettent aux utilisateurs de choisir une valeur de date et heure prédéterminée à l'aide d'élements visuels et interactifs.
group: components
toc: true
permalink: /docs/4.3/components/picker/
---

Plusieurs types de sélecteurs existent :

- sélecteur de date
- sélecteur d'heure
- sélecteur de date et d'heure
- sélecteur d'intervalle

{{% callout warning %}}
### Accessibilité
Ce composant, et la librairie sur laquelle il est basé, nécessitent d'ajouter le paramètre `readonly` sur la balise `input`.
{{% /callout %}}

{{% callout info %}}
### Comment utiliser l'API de fonctionnement ?
Nos sélecteurs sont basé sur la [librairie FlatpickrJS](https://flatpickr.js.org/) et vous pouvez utiliser toutes les fonctions incluses et décrites dans sa documentation.
Veuillez noter qu'il n'est **pas nécessaire** de charger `flatpickr.js` si vous utilisez le fichier `bootstrap-sncf.min.js`, elle y est incluse.
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

## Date par défaut

Le sélecteur de date laisse l'utilisateur choisir une date (au format dd/mm/yyyy) en utilisant un calendrier visuel. Veuillez noter que la date du jour (sélectionnée par défaut), la date que l'utilisateur choisit, et celles qui ne sont pas disponibles sont visuellement différenciées.

{{% example html %}}
<label for="defaultdate" class="font-weight-medium mb-2">Date (jj/mm/aaaa)</label>
<div data-component="picker" data-default-date="26/02/2017">
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

## Intervalle

Le sélecteur d'intervalle permet aux utilisateurs de choisir une date de début et une date de fin pour définir une période en utilisant deux champs séparés.

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

## Sélecteur d'heure

Le sélecteur d'heure permet aux utilisateurs de choisir un horaire (au format hh:mm) en utilisant une horloge visuelle. Veuillez noter que l'heure sélectionnée et les heures non sélectionnables sont visuellement différenciées.
Vous pouvez également utiliser une list type _drop-down_ à la place d'un sélecteur si nécessaire.

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

## Sélecteur de date et heure

N'utilisez seulement le sélecteur de date et heure lorsqu'il est nécessaire d'optimiser l'espace et réduire le nombre de champs. Ce sélecteur permet de choisir une date et une heure dans le même composant à la place d'utiliser des sélecteur de date et d'heure séparés.

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

## Sélecteur de plage de dates

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
      <div class="input-group">
        <div class="form-control-container">
          <input id="secondRangeInput" type="text" class="form-control" placeholder="Date & Heure" data-input>
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
