---
layout: docs
title: Accessibility
description: A brief overview of Bootstrap's features and limitations for the creation of accessible content.
group: getting-started
toc: true
---

Bootstrap provides an easy-to-use framework of ready-made styles, layout tools, and interactive components, allowing developers to create websites and applications that are visually appealing, functionally rich, and accessible out of the box.

## SNCF guidelines

In 2016, SNCF signed a pact that aims to enforce commitments arising from the RGAA standard. \\
This signature is only the legal embodiment of a commitment, an ethical duty of everyone, to allow all your users to consult your interface without discrimination.

The pact is based on minimum compliance with the "AA" compliance level of [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20).

As stated in the technical documentation to follow, Bootstrap is a "ready to use" but does not bear the entire responsibility with this level of compliance. \\
The components are indeed made in this sense, optimized (with few exceptions, specifically announced when it is), whether in terms of code, but also in terms of design. \\
On the other hand, the job is on the team who implements the code, and therefore the components one by one, which defines the colors of its interface and thus the personalization of the SNCF digital design, that is the task of guaranteeing the accessibility of its interface.

You will find the Accessibility guidelines on the Digital SNCF platform, in order to give you all the necessary details in this process :

- [Accessibility guidelines for designers](https://www.digital.sncf.com/ressources/accessibilite-numerique-design)
- [Accessibility guidelines for developers](https://www.digital.sncf.com/ressources/accessibilite-numerique-developpement)

We also made a white paper on [accessibility in SNCF](https://www.digital.sncf.com/system/files/document/livre_blanc_initiation_a_laccessibilite_numerique.pdf) with our partner [Access42](https://access42.net/).

In parallel, do not hesitate to ask our teams to help you if you need on [design.fab@sncf.fr](mailto:design.fab@sncf.fr?subject=Bootstrap - Accessibilité), with for object "Bootstrap - Accessibilité". We can also guide you or recommend trusted partners for specific questions.


## Overview and Limitations

The overall accessibility of any project built with Bootstrap depends in large part on the author's markup, additional styling, and scripting they've included. However, provided that these have been implemented correctly, it should be perfectly possible to create websites and applications with Bootstrap that fulfill [<abbr title="Web Content Accessibility Guidelines">WCAG</abbr> 2.0](https://www.w3.org/TR/WCAG20/) (A/AA/AAA), [Section 508](https://www.section508.gov/) and similar accessibility standards and requirements.

### Structural markup

Bootstrap's styling and layout can be applied to a wide range of markup structures. This documentation aims to provide developers with best practice examples to demonstrate the use of Bootstrap itself and illustrate appropriate semantic markup, including ways in which potential accessibility concerns can be addressed.

### Interactive components

Bootstrap's interactive components—such as modal dialogs, dropdown menus and custom tooltips—are designed to work for touch, mouse and keyboard users. Through the use of relevant [<abbr title="Web Accessibility Initiative">WAI</abbr>-<abbr title="Accessible Rich Internet Applications">ARIA</abbr>](https://www.w3.org/WAI/intro/aria) roles and attributes, these components should also be understandable and operable using assistive technologies (such as screen readers).

Because Bootstrap's components are purposely designed to be fairly generic, authors may need to include further <abbr title="Accessible Rich Internet Applications">ARIA</abbr> roles and attributes, as well as JavaScript behavior, to more accurately convey the precise nature and functionality of their component. This is usually noted in the documentation.

### Color contrast

Most of the colors that currently make up the SNCF's Bootstrap default palette meet the contrast requirements for the WCAG "AA" level. See [WCAG 2.0 color contrast ratio of 4.5:1](https://www.w3.org/TR/UNDERSTANDING-WCAG20/visual-audio-contrast-contrast.html).

### Visually hidden content

Content which should be visually hidden, but remain accessible to assistive technologies such as screen readers, can be styled using the `.sr-only` class. This can be useful in situations where additional visual information or cues (such as meaning denoted through the use of color) need to also be conveyed to non-visual users.

{{% highlight html %}}
<p class="text-danger">
  <span class="sr-only">Danger: </span>
  This action is not reversible
</p>
{{% /highlight %}}

For visually hidden interactive controls, such as traditional "skip" links, `.sr-only` can be combined with the `.sr-only-focusable` class. This will ensure that the control becomes visible once focused (for sighted keyboard users).

{{% highlight html %}}
<a class="sr-only sr-only-focusable" href="#content">Skip to main content</a>
{{% /highlight %}}

## Additional resources

- [Web Content Accessibility Guidelines (WCAG) 2.0](https://www.w3.org/TR/WCAG20/)
- [The A11Y Project](http://a11yproject.com/)
- [MDN accessibility documentation](https://developer.mozilla.org/en-US/docs/Web/Accessibility)
- [Tenon.io Accessibility Checker](https://tenon.io/)
- [Colour contrast ratio tester](https://contrast-ratio.com/)
- [Colour Contrast Analyser (CCA)](https://developer.paciellogroup.com/resources/contrastanalyser/)
- ["HTML Codesniffer" bookmarklet for identifying accessibility issues](https://github.com/squizlabs/HTML_CodeSniffer)
