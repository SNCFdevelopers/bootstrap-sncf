---
layout: docs
title: Introduction
description: Get started with Bootstrap, the world's most popular framework for building responsive, mobile-first sites, with BootstrapCDN and a template starter page, adapted for SNCF.
group: getting-started
aliases:
  - /docs/
  - /docs/4.3/
  - /docs/4.3/getting-started/
  - /docs/getting-started/
toc: true
---

## Quick start

Looking to quickly add Bootstrap to your project? Just download and unzip SNCF's Bootstrap [here]({{< param "download.source" >}}) in your working directory, and follow next steps.

### CSS

Copy-paste the stylesheet `<link>` into your `<head>` before all other stylesheets to load our CSS.

Alternate CSS is optional, use it if your project needs a [dark mode]({{< docsref "/layout/dark-mode" >}}).

{{< highlight html >}}
<link rel="stylesheet" href="/bootstrap-sncf.min.css">
<link rel="stylesheet alternate" href="/bootstrap-sncf.darkmode.min.css">
{{< /highlight >}}

### JS

Many of our components require the use of JavaScript to function. Specifically, they require:
- [jQuery](https://jquery.com)
- [Popper.js](https://popper.js.org/)
- [Flatpickrjs](https://flatpickr.js.org/)
- [Chart.js](https://www.chartjs.org/)
- and our own JavaScript plugins (included in all .js files)

{{< callout info >}}
For commodity reasons, **we have integrated** jQuery and popper inside `bootstrap-sncf.min.js`. \\
However, we propose a "no-externals" (without extra libs) version named `bootstrap-sncf-noext.min.js` (you'll need to add extra libs before loading this version).
{{< /callout >}}

{{< highlight html >}}
<script src="/bootstrap-sncf.min.js"></script>
{{< /highlight >}}

Curious which components explicitly require jQuery, our JS, Popper.js or other libs? Here's a list of those components. \\
Please remember that **all these libs are already included** in ours main releases, by default (except if you're using `-noext` lightened version).

- Alerts for dismissing
- Buttons for toggling states and checkbox/radio functionality
- Carousel for all slide behaviors, controls, and indicators
- Charts (also requires [Chart.js](https://www.chartjs.org/))
- Chips for input & delete elements
- Collapse for toggling visibility of content
- Dropdowns for displaying and positioning (also requires [Popper.js](https://popper.js.org/))
- Modals for displaying, positioning, and scroll behavior
- Navbar for extending our Collapse plugin to implement responsive behavior
- Pickers (also requires [Flatpickrjs](https://flatpickr.js.org/))
- Progress & range sliders
- Scrollspy for scroll behavior and navigation updates
- Searchbar (for erasing with button)
- Select for all elements
- Tables
- Tooltips and popovers for displaying and positioning (also requires [Popper.js](https://popper.js.org/))

## Starter template

{{< callout warning >}}
### IE11 Compatibility
To ensure IE11 compatibility you have to put this string `<meta http-equiv="X-UA-Compatible" content="IE=edge">` immediatly after `<head>`.
Moreover, SNCF's IE11 configuration uses IE7 compatibility mode by default, put this on IE11 mode.
{{< /callout >}}

Be sure to have your pages set up with the latest design and development standards. That means using an HTML5 doctype and including a viewport meta tag for proper responsive behaviors. Put it all together and your pages should look like this:

{{< highlight html >}}
<!doctype html>
<html lang="en">
  <head>
    <!-- IE 11 compatibility -->
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="dist/bootstrap-sncf.min.css">

    <title>Hello, world!</title>
  </head>
  <body>
    <h1>Hello, world!</h1>

    <script src="dist/bootstrap-sncf.min.js"></script>
  </body>
</html>
{{< /highlight >}}

That's all you need for overall page requirements. Visit the [Layout docs]({{< docsref "/layout/overview" >}}) or [our official examples]({{< docsref "/examples" >}}) to start laying out your site's content and components.

## Important globals

Bootstrap employs a handful of important global styles and settings that you'll need to be aware of when using it, all of which are almost exclusively geared towards the *normalization* of cross browser styles. Let's dive in.

### HTML5 doctype

Bootstrap requires the use of the HTML5 doctype. Without it, you'll see some funky incomplete styling, but including it shouldn't cause any considerable hiccups.

{{< highlight html >}}
<!doctype html>
<html lang="en">
  ...
</html>
{{< /highlight >}}

### Responsive meta tag

Bootstrap is developed *mobile first*, a strategy in which we optimize code for mobile devices first and then scale up components as necessary using CSS media queries. To ensure proper rendering and touch zooming for all devices, **add the responsive viewport meta tag** to your `<head>`.

{{< highlight html >}}
<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
{{< /highlight >}}

You can see an example of this in action in the [starter template](#starter-template).

### Box-sizing

For more straightforward sizing in CSS, we switch the global `box-sizing` value from `content-box` to `border-box`. This ensures `padding` does not affect the final computed width of an element, but it can cause problems with some third party software like Google Maps and Google Custom Search Engine.

On the rare occasion you need to override it, use something like the following:

{{< highlight css >}}
.selector-for-some-widget {
  box-sizing: content-box;
}
{{< /highlight >}}

With the above snippet, nested elements—including generated content via `::before` and `::after`—will all inherit the specified `box-sizing` for that `.selector-for-some-widget`.

Learn more about [box model and sizing at CSS Tricks](https://css-tricks.com/box-sizing/).

### Reboot

For improved cross-browser rendering, we use [Reboot]({{< docsref "/content/reboot" >}}) to correct inconsistencies across browsers and devices while providing slightly more opinionated resets to common HTML elements.

## Community

Stay up to date on the development of Bootstrap and reach out to the community with these helpful resources.

Contact the humans at [Fab Design](mailto:design.fab@sncf.fr) for more informations & how to.

- Share & learn with the others developers of SNCF on [GitHub]({{ site.github }})

For original Bootstrap :

- Follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap).
- Read and subscribe to [The Official Bootstrap Blog]({{ site.blog }}).
- Join [the official Slack room]({{ site.slack }}).
- Chat with fellow Bootstrappers in IRC. On the `irc.freenode.net` server, in the `##bootstrap` channel.
- Implementation help may be found at Stack Overflow (tagged [`bootstrap-4`](https://stackoverflow.com/questions/tagged/bootstrap-4)).
- Developers should use the keyword `bootstrap` on packages which modify or add to the functionality of Bootstrap when distributing through [npm](https://www.npmjs.com/browse/keyword/bootstrap) or similar delivery mechanisms for maximum discoverability.

You can also follow [@getbootstrap on Twitter](https://twitter.com/getbootstrap) for the latest gossip and awesome music videos.

