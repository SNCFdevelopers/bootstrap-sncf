---
layout: docs
title: Favicon
description: Using and implement favicon
group: content
toc: true
---

## Description
For each SNCF's sites, you have to display a tiny SNCF logo in browser's adress bar, that is called [favicon](https://fr.wikipedia.org/wiki/Favicon).
This can be used too for making favorites on mobile devices, so you should choose wisely a title for you page (eg. the name of your site or webapp) that will be used as title of the favorite.

## How to use favicon
It's easy ! Just add theses lines in top of your page, inside `<head>` tag, and be sure to adapt `href` links to your site architecture (here, we've put`assets`directory in root of the site).

{% callout danger %}
Assets and all favicons variants are provided inside Bootstrap SNCF, as it should be.
**Don't try to change, add, remove anything from favicons directory !** If it seems to be unavoidable, please tell us and we'll try to find a solution with you.
{% endcallout %}


{% highlight html %}
<!-- Favicons -->
<link rel="apple-touch-icon" href="/assets/img/docs/favicons/apple-touch-icon.png" sizes="180x180">
<link rel="icon" href="/assets/img/docs/favicons/favicon-32x32.png" sizes="32x32" type="image/png">
<link rel="icon" href="/assets/img/docs/favicons/favicon-16x16.png" sizes="16x16" type="image/png">
<link rel="manifest" href="/assets/img/docs/favicons/manifest.json">
<link rel="mask-icon" href="/assets/img/docs/favicons/safari-pinned-tab.svg" color="#563d7c">
<link rel="icon" href="/assets/img/docs/favicons/favicon.ico">
<meta name="msapplication-config" content="/assets/img/docs/favicons/browserconfig.xml">
<meta name="theme-color" content="#563d7c">
{% endhighlight %}
