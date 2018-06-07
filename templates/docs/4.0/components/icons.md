---
layout: docs
title: Icons
description: Examples and usage guidelines for icons.
group: components
toc: true
---

## Markup
{% highlight html %}
<i class="icons-checked icons-size-30px"></i>
{% endhighlight %}

## List
<table style="width:100%">
{% for item in site.data.icons %}
  <tr>
    <td>
      <i class="icons-{{ item }} icons-size-30px"></i>
    </td>
    <td>
      <span>icons-{{ item }}</span>
    </td>
  </tr>
{% endfor %}
</table>

## Sizing based on base font-size

{% example html %}
<i class="icons-checked icons-size-x5"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-x75"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-1x"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-1x25"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-1x5"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-1x75"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-2x"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-3x"></i>
{% endexample %}

## Specifics sizes

{% example html %}
<i class="icons-checked icons-size-30px"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-50px"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-66px"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-90px"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-96px"></i>
{% endexample %}

{% example html %}
<i class="icons-checked icons-size-140px"></i>
{% endexample %}

