---
layout: docs
title: Tongues
group: components
toc: true
url: /docs/4.3/components/tongues/
---

Tongues indicate time-sensitive information related to an offer, a news item or a new development. Examples: “Since November”, “from 12 - 22 January”, “Coming soon”, or “New”. They can be used for the following home page components: carousels, event highlight vignettes, and classic vignettes.

{% callout info %}
Choosing white or dark text on color is not arbitrary but the result of accessibility study made about contrast between colors.
That's why we only display the combinations that guaranteed the respect of accessibility norms.
{% endcallout %}

## With white text
<div class="row">
  <div class="col-sm-6 mb-3">
    <div class="tongue">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-info">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-danger">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-orange">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-pink">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-purple">Du 2 janvier au 28 février</div>
  </div>
</div>

{% highlight html %}
<div class="tongue">Du 2 janvier au 28 février</div>
<div class="tongue bg-info">Du 2 janvier au 28 février</div>
<div class="tongue bg-danger">Du 2 janvier au 28 février</div>
<div class="tongue bg-orange">Du 2 janvier au 28 février</div>
<div class="tongue bg-pink">Du 2 janvier au 28 février</div>
<div class="tongue bg-purple">Du 2 janvier au 28 février</div>
{% endhighlight %}

## With dark text

<div class="row">
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-green text-dark">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-teal text-dark">Du 2 janvier au 28 février</div>
  </div>
  <div class="col-sm-6 mb-3">
    <div class="tongue bg-yellow text-dark">Du 2 janvier au 28 février</div>
  </div>
</div>
 
{% highlight html %}
<div class="tongue bg-green text-dark">Du 2 janvier au 28 février</div>
<div class="tongue bg-teal text-dark">Du 2 janvier au 28 février</div>
<div class="tongue bg-yellow text-dark">Du 2 janvier au 28 février</div>
{% endhighlight %}
