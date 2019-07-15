---
layout: docs
title: Progress
description: Documentation and examples for steps indicator, and progress bars featuring support for stacked bars, animated backgrounds, and text labels.
group: components
toc: true
permalink: /docs/4.3/components/progress/
---

## Overview

Progress bars display the progress of an operation, such as retrieving data.
There are two types of progress bars:
- Determinate indicators show the duration of an operation and may feature a percentage to show progress.
- Indeterminate indicators display an unspecified wait time.

## Progress bars, how it works ?

Progress components are built with two HTML elements, some CSS to set the width, and a few attributes. We don't use [the HTML5 `<progress>` element](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/progress), ensuring you can stack progress bars, animate them, and place text labels over them.

- We use the `.progress` as a wrapper to indicate the max value of the progress bar.
- We use the inner `.progress-bar` to indicate the progress so far.
- The `.progress-bar` requires an inline style, utility class, or custom CSS to set their width.
- The `.progress-bar` also requires some `role` and `aria` attributes to make it accessible.

Put that all together, and you have the following examples.

{% example html %}
<div class="progress">
  <div class="progress-bar" role="progressbar" aria-valuenow="0" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 25%" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 50%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 75%" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
<div class="progress">
  <div class="progress-bar" role="progressbar" style="width: 100%" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

Bootstrap provides a handful of [utilities for setting width]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/sizing/). Depending on your needs, these may help with quickly configuring progress.

{% example html %}
<div class="progress">
  <div class="progress-bar w-75" role="progressbar" aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## Labels

Add labels to your progress bars by placing text within the `.progress-bar`, ans add `has-label` class on `progress`.

{% example html %}
<div class="progress has-label">
  <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"><span class="progress-label">25<sup>%</sup></span></div>
</div>
{% endexample %}

{% example html %}
<div class="progress has-label">
  <div class="progress-bar" role="progressbar" style="width: 99%;" aria-valuenow="99" aria-valuemin="0" aria-valuemax="100"><span class="progress-label">99<sup>%</sup></span></div>
</div>
{% endexample %}

{% example html %}
<div class="progress has-label">
  <div class="progress-bar" role="progressbar" style="width: 100%;" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"><span class="progress-label">100<sup>%</sup></span></div>
</div>
{% endexample %}

## Small version

{% example html %}
<div class="progress progress-sm">
  <div class="progress-bar" style="width: 50%" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
</div>
{% endexample %}

## Radial progress

### Without label
{% example html %}
<div class="progress-circle" data-component="radial-progress">
    <svg class="progress-circle-figure" data-role="figure" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <circle class="progress-circle-meter" cx="60" cy="60" r="54" stroke-width="12" />
      <circle class="progress-circle-value" cx="60" cy="60" r="54" stroke-width="12" />
    </svg>
    <input data-role="control" class="sr-only" type="progressbar" value="20" />
</div>
{% endexample %}

### With label
{% example html %}
<div class="progress-circle" data-component="radial-progress">
    <svg class="progress-circle-figure" data-role="figure" width="120" height="120" viewBox="0 0 120 120" aria-hidden="true">
      <circle class="progress-circle-meter" cx="60" cy="60" r="54" stroke-width="12" />
      <circle class="progress-circle-value" cx="60" cy="60" r="54" stroke-width="12" />
    </svg>
    <div class="progress-circle-label" data-role="label"><span><span data-role="labelvalue">0</span><sup>%</sup></span></div>
    <input data-role="control" class="sr-only" type="progressbar" value="60" />
</div>
{% endexample %}

## Steps indicator

{% callout info %}
If you're looking for breadcrumbs (Fil d'ariane), there is a [dedicated component]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/breadcrumb).
{% endcallout %}

Steps indicators show the progress of steps in a process. Steps achieved remain active, which means users can return to previous steps. The step in progress is highlighted, and steps not yet completed must be inactive.

{% callout warning %}
The logic of the component needs that **only steps before active step** are links or buttons.
{% endcallout %}

{% example html %}
<nav role="navigation" aria-label="Vous êtes : ">
  <ol class="breadcrumb">
    <li class="breadcrumb-item"><a href="#">Step 1</a></li>
    <li class="breadcrumb-item"><a href="#">Step 2</a></li>
    <li class="breadcrumb-item active" aria-current="step">Step 3 <span class="sr-only">actif</span></li>
    <li class="breadcrumb-item">Step 4</li>
    <li class="breadcrumb-item">Step 5</li>
  </ol>
</nav>
{% endexample %}

