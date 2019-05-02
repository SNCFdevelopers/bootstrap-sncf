---
layout: docs
title: Cards
description: Cards can be used when images would better identify the content (in tiled form for a list of visually recognizable items, for example).
group: components
toc: true
permalink: /docs/4.0/components/card/
---

## About

A **card** is a flexible and extensible content container. It includes options for headers and footers, a wide variety of content, contextual background colors, and powerful display options. If you're familiar with Bootstrap 3, cards replace the old panels, wells, and thumbnails. Similar functionality to those components is available as modifier classes for cards.

## Example

Cards are built with as little markup and styles as possible, but still manage to deliver a ton of control and customization. Built with flexbox, they offer easy alignment and mix well with other Bootstrap components. They have no `margin` by default, so use [spacing utilities]({{ site.baseurl }}/docs/{{ site.docs_version }}/utilities/spacing/) as needed.

Below is an example of a basic card with mixed content and a fixed width. Cards have no fixed width to start, so they'll naturally fill the full width of its parent element. This is easily customized with our various [sizing options](#sizing).

{% example html %}
<div class="row">
  <div class="col-md-4">
    <a href="#" class="card overflow-hidden">
      <img class="card-img-top" alt="" src="https://placebeard.it/267/128" />
      <div class="card-body text-center">
        <h5 class="card-title mb-0 text-base font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
      </div>
    </a>
  </div>
  <div class="col-md-4">
    <a href="#" class="card overflow-hidden">
      <img class="card-img-top" alt="" src="http://placebeard.it/267/128" />
      <div class="card-body text-center">
        <h5 class="card-title mb-0 text-base font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
      </div>
    </a>
  </div>
  <div class="col-md-4">
    <a href="#" class="card overflow-hidden">
      <img class="card-img-top" alt="" src="http://placebeard.it/267/128" />
      <div class="card-body text-center">
        <h5 class="card-title mb-0 text-base font-weight-normal">Titre lorem ipsum dolor sit amet</h5>
      </div>
    </a>
  </div>
</div>
{% endexample %}
