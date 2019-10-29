---
layout: docs
title: Analytics tracking
description: Good practices to implement analytics & events tracking
group: getting-started
toc: true
url: /docs/4.3/getting-started/analytics-tracking/
---

## Why do you need an Analytics solution

Data Analytics has become a strong subject on continuous improvement within the SNCF Group.

Analytics tools are already used by _B2C_ entities and start to be used by _B2E_ entities. We need to improve this maturity and behaviour around performance management with agents working with digital tools.

### Presentation

It is important to have concrete and measurable insights based on behaviors to keep an eye on your tool performance (Website, App or IoT).

In a continuous improvement case of users experience, how to manage an app/website evolution if:

- You don’t know how often it is used
- You don’t know how it is used
- You don’t know if it is correctly used

An Analytics solution can provide aswers to questions like:

- Is my user journey is understood by my users ? (Have i determined a Journey ?)
- At which stage of my business journey did I lost the most users ?
- What is the ratio between A content vs B content in volume of visits ?
- Does my users staid more than 3 minutes on mycontent pages ?
- What is the average lead volume by month ?
- How many clicks on my specific button ?

Does informations allows to take actions to improve your platform, thanks to your users actions.

### What do we track?

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

### Analytics basement

The Analytics basement deployed into the SNCF Group is:

<img class="img-fluid" src="/analytics-tracking.png">

- Website : The project set up what nest a Tag Manager
- Tag Management System : The Tag Manager that nest marketing tags
- Marketing tags : Analytics tools, medias tags for advertising and marketing tools for continuous improvement

## Technical implant and contacts

### SNCF Analytics Basement

[https://developers.google.com/analytics](https://developers.google.com/analytics)

[https://support.google.com/tagmanager/answer/6103696?hl=fr](https://support.google.com/tagmanager/answer/6103696?hl=fr)

[https://developers.google.com/tag-manager/devguide](https://developers.google.com/tag-manager/devguide)

### Other tools

[metrologie_applicative@sncf.fr](mailto:metrologie_applicative@sncf.fr) (Fab IT)

### For more informations, please contact Fab design

[design.fab@sncf.fr](mailto:design.fab@sncf.fr)

[https://www.digital.sncf.com/ressources/analytics](https://www.digital.sncf.com/ressources/analytics)
