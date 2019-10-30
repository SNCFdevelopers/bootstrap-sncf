---
layout: docs
title: Download
description: Download Bootstrap SNCF to get the compiled CSS and JavaScript, source code, or include it with your favorite package managers like npm, RubyGems, and more.
group: getting-started
toc: true
---

## Compiled CSS and JS

Download ready-to-use compiled code for **Bootstrap SNCF v{{< param current_version >}} r{{< param sncf_version >}}** to easily drop into your project, which includes:

- `assets` All pictures, logos & fonts
- `bootstrap-sncf.css` Unminified CSS stylesheet original version
- `bootstrap-sncf.css.map`
- `bootstrap-sncf.dark.css` Unminified CSS stylesheet "dark mode" version
- `bootstrap-sncf.dark.css.map`
- `bootstrap-sncf.js` Unminified JS, with [all needed externals libs]({{< docsref "/getting-started/introduction#js" >}}) inside
- `bootstrap-sncf.js.map`
- `bootstrap-sncf.min.css` Minified CSS stylesheet original version
- `bootstrap-sncf.darkmode.min.css` Minified CSS stylesheet "dark mode" version
- `bootstrap-sncf.min.js` Minified JS, with all libs inside
- `bootstrap-sncf-noext.min.js` Minified JS, without [externals libs]({{< docsref "/getting-started/introduction#js" >}})

This doesn't include documentation and source files.

<a href="/bootstrap-sncf.{{< param doc_theme >}}.v{{< param current_version >}}-r{{< param sncf_version >}}.zip" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download Bootstrap');">Download</a>

## Source files

Compile Bootstrap SNCF with your own asset pipeline by downloading our source Sass, JavaScript, and documentation files. This option requires some additional tooling:

- Sass compiler (Libsass or Ruby Sass is supported) for compiling your CSS.
- [Autoprefixer](https://github.com/postcss/autoprefixer) for CSS vendor prefixing

<a href="{{< param "download.source" >}}" class="btn btn-primary" onclick="ga('send', 'event', 'Getting started', 'Download', 'Download source');">Download source</a>

## npm

Install Bootstrap in your Node.js powered apps with the npm package. Choose one of theses packages depending on the purpose of your project.

{{% highlight sh %}}
npm install @sncf/bootstrap-sncf.metier
{{% /highlight %}}
{{% highlight sh %}}
npm install @sncf/bootstrap-sncf.communication
{{% /highlight %}}

