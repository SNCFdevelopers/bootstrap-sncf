---
layout: docs
title: Sami
group: components
toc: true
url: /docs/4.3/components/sami/
---

There are several performance indicators. The most common is: 

- Satisfactory
- Meets expectations
- Improvement needed
- Unsatisfactory.

You can also use emoticons (to indicate satisfaction, quality, etc.). These components can be either clickable (if data must be entered) or unclickable if they are for display only.

{{% example html %}}
<span class="pr-3">Click me!</span>
<input type="checkbox" class="sr-only" id="samigreen">
<label for="samigreen" class="sami sami-checkbox-green">S</label>
<input type="checkbox" class="sr-only" id="samiblue">
<label for="samiblue" class="sami sami-checkbox-blue">A</label>
<input type="checkbox" class="sr-only" id="samiyellow">
<label for="samiyellow" class="sami sami-checkbox-yellow">M</label>
<input type="checkbox" class="sr-only" id="samired">
<label for="samired" class="sami sami-checkbox-red">I</label>
<input type="checkbox" class="sr-only" id="samigray">
<label for="samigray" class="sami sami-checkbox-gray">NC</label>
{{% /example %}}

{{% example html %}}
<span class="pr-3">Click me!</span>

<input type="checkbox" class="sr-only" id="smileysgreen">
<label for="smileysgreen" class="sami sami-checkbox-green">
  <span class="sr-only">grin</span>
  <i class="icons-sami-grin icons-size-3x" aria-hidden="true"></i>
</label>

<input type="checkbox" class="sr-only" id="smileysblue">
<label for="smileysblue" class="sami sami-checkbox-blue">
  <span class="sr-only">smile</span>
  <i class="icons-sami-smile icons-size-3x" aria-hidden="true"></i>
</label>

<input type="checkbox" class="sr-only" id="smileysyellow">
<label for="smileysyellow" class="sami sami-checkbox-yellow">
  <span class="sr-only">confused</span>
  <i class="icons-sami-confused icons-size-3x" aria-hidden="true"></i>
</label>

<input type="checkbox" class="sr-only" id="smileysred">
<label for="smileysred" class="sami sami-checkbox-red">
  <span class="sr-only">sad</span>
  <i class="icons-sami-sad icons-size-3x" aria-hidden="true"></i>
</label>
{{% /example %}}
