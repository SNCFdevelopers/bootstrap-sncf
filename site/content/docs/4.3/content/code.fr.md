---
layout: docs
title: Code
description: Documentation et exemples pour afficher du code source sur une ou plusieurs lignes avec Bootstrap.
group: content
toc: true
---

## Code sur une ligne

Enveloppez les fragments de code avec `<code>`. Pensez bien à échapper les chevrons HTML si besoin.

{{% example html %}}
Par exemple, <code>&lt;section&gt;</code> est encapsulé dans la phrase.
{{% /example %}}

## Blocs de code

Utilisez `<pre>`s pour de multiples lignes de code. Une fois encore, pensez à bien échapper tout chevron `<` `>` pour assurer le rendu désiré. Vous pouvez également ajouter la classe `.pre-scrollable` qui vous permettra de définir une hauteur maximale de 350px et ainsi fournir un ascenseur latéral à l'élement.

{{% example html %}}
<pre><code>&lt;p&gt;Sample text here...&lt;/p&gt;
&lt;p&gt;And another line of sample text here...&lt;/p&gt;
</code></pre>
{{% /example %}}

## Variables

Pour indiquer une variable, utilisez la balise `<var>`.

{{% example html %}}
<var>y</var> = <var>m</var><var>x</var> + <var>b</var>
{{% /example %}}

## Saisie utilisateur

Utilisez la balise `<kbd>` pour indiquer des touches à taper via le clavier.

{{% example html %}}
Pour changer de répertoire, tapez <kbd>cd</kbd> suivi du nom du répertoire.<br>
Pour éditer les paramètres, pressez <kbd><kbd>ctrl</kbd> + <kbd>,</kbd></kbd>
{{% /example %}}

## Sortie de commande

Pour afficher une sortie de commande ou d'un programme, utilisez la balise `<samp>`.

{{% example html %}}
<samp>Ce texte est la sortie console d'un programme très intéressant.</samp>
{{% /example %}}
