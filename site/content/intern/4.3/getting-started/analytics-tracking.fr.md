---
layout: docs
title: Analytics tracking
description: Bonnes pratiques pour implémenter le suivi utilisateurs et le tracking d'évènements, ou utilisateurs.
group: getting-started
toc: true
url: /fr/docs/4.3/getting-started/analytics-tracking/
---

Data Analytics has become a strong subject on continuous improvement within the SNCF Group.

Analytics tools are already used by _B2C_ entities.
We need to create this maturity and behaviour around performance management with _B2E_ entities and agents working with digital tools.
When you have a traffic monitoring by user actions tracking, you’ll stock datas in the aim of making evolve your agent interfaces, looking at insights gave by tools

For internal projects (production app and webapps) SNCF Group chose a _GDPR_ compliant _open source_ analytics solution : [Matomo Analytics](https://matomo.org/).
This tool will collect datas and will send it to SNCF secured servers that will be treated by internal Analysts : **every informations will stay in SNCF environment**.

We can provide you this integrated solution that is central to each SNCF entity.

Linked with Customer Knowledge central team, we’ll also provide advices about setting up your KPIs (Key Performance Indicators), according to your business needs and your goals to offer the best tracking that you need.

So, please feel free to contact us by email on [design.fab@sncf.fr](mailto:design.fab@sncf.fr?subject=Bootstrap Métier - Analytics) with the object “Bootstrap Métier – Analytics”.\\
We will open access to make you autonomous on your tracking.

However, if you are not comfortable with this subject, the “Customer Knowledge” team can occasionally advise you to define your KPIs according to your business needs, and guide you in the design of your tracking.

Do not hesitate to read technical informations wrote down or read official documentation of Matomo.

You’ll find below some examples of tracking, what do we track and how does it works.

## What is it? How it works?

[Matomo](https://matomo.org/) is an analytics tool, wrote in Javascript (Web), Swift (iOS), Java (Android) or measurement protocol (any IoT object).
It will track datas from users, their sessions and actions they realized onsite (like Google Analytics, Xiti, Adobe Analytics…).

{{% callout info %}}
**Example for a website** \\
A javascript tag collect datas from navigator and send it to a Matomo server owned by SNCF.
{{% /callout %}}

## Why to track? What do we do with?

It is important to have concrete and measurable insights based on behaviors.

In a continuous improvement case of users experience, how to manage an app/website evolution if :

- you don’t know how often it is used
- you don’t know how it is used
- you don’t know if it is correctly used

## What do we track?

It will track multiples informations scoped on 3 types of datas :

| Users data               | Session data                                 | Action data                           |
|--------------------------|----------------------------------------------|---------------------------------------|
| User ID                  | Time on site                                 | Pages visited                         |
| Visits volume            | Page views                                   | Action events hitted by user’s clicks |
| Total time on site       | Conversions                                  | e-commerce transaction                |
| Total page views         | Source (marketing lever used to catch users) | Goals hitted                          |
| Total conversions        | Geographic location based on IP Adress       | Internal search keywords              |
| Geographic location list | Device + OS version + Screenresolution       | Custom Datas                          |
| Device list              | Custom Datas                                 |                                       |

## Technical implementation

{{% callout info %}}
**Official documentation** \\
[https://developer.matomo.org/guides/tracking-javascript-guide](https://developer.matomo.org/guides/tracking-javascript-guide)
{{% /callout %}}


There’s multiples things to implant :

- page tracker on every html pages
- events tracker
- goals tracker

### Pages tracking

{{% highlight html %}}
<!-- Matomo -->
<script type="text/javascript">
  var _paq = window._paq || [];

  _paq.push(['trackPageView']);
  _paq.push(['enableLinkTracking']);
  (function() {
    var u="//{$PIWIK_URL}/";
    _paq.push(['setTrackerUrl', u+'piwik.php']);
    _paq.push(['setSiteId', {$IDSITE}]);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.type='text/javascript'; g.async=true; g.defer=true; g.src=u+'piwik.js'; s.parentNode.insertBefore(g,s);
  })();
</script>
<!-- End Matomo Code -->
{{% /highlight %}}

### Actions tracking

{{% highlight html %}}
<a href="#" onclick="_paq.push(['trackEvent', {EventCategory}', '{EventAction}', '{EventName}']);">Link</a>
{{% /highlight %}}

`{EventCategory}`\\
Category given to the event pushed. Examples : Header, Menu, Footer, Homepage...

`{EventAction}`\\
Action given to the event pushed. Examples : Click, Scroll, Submit, Accept, Decline...

`{EventName}`\\
Name given to the event pushed. Examples : Validated, [product name], [page name]...

### Goal tracking

{{% highlight html %}}
<a href="#" onclick="_paq.push(['trackGoal', {$GoalSlot}])>">Link</a>
{{% /highlight %}}

`{$GoalSlot}`\\
The numbered location given to the goal that will feed the slot used on Matomo tool

### Internal search tracking

{{% highlight html %}}
<a href="_paq.push(['trackSiteSearch','{$keyword}','{$searchcategory}', {$searchvolume}]);">Link</a>
{{% /highlight %}}

`{$keyword}`\\
Value to push according to keywords used by user’s search.

`{$searchcategory}`\\
Optional value to push according to the category defined by the search (**please, put “false” if the variable is not used**.)

`{$searchvolume}`\\
Optional value to push with the results volume (**please, put “false” if the variable is not used**.)

## Simple example
An simple example of where do you need to implant the page tracker (before closing the head or after opening the body) :

{{% highlight html %}}
<!DOCTYPE html>
<html>
  <head>
    <title>
      Coucou
    </title>
    Meta descriptions etc etc
    <script> Matomo tracking script to put here ! </script>
  </head>
  <body>
    <script> or here :) </script>
    Page content
  </body>
</html>
{{% /highlight %}}
