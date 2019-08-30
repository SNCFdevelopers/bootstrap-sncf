---
layout: docs
title: Mode sombre
slug: mode-sombre
description: Thème sombre pour tous les composants et exemples.
group: layout
toc: true
---
## Pourquoi un mode sombre ?

Le mode sombre a été créé pour deux raisons principales :

1. **Répondre à un cas d'usage métier**\\
Plusieurs de nos agents travaillent dans des environnements à faible luminosité, à l'intérieur comme à l'extérieur. Le mode sombre rend la lisibilité plus importante dans ce type d'environnements.

2. **Faire de notre Design un Design Éthique**\\
Si la notion d’éthique est assurément bien plus vaste que la simple limitation de la consommation énergétique des écrans internes à l’entreprise, c’est déjà un premier pas. Nous souhaitons nous engager, comme d’autres entités le font, dans les économies d’énergie réalisées par l’entreprise, en s’inscrivant pleinement dans notre devise « Apporter la liberté à chacun de circuler facilement en préservant la planète ».\\
Ce mode sombre est au-delà de cela une opportunité que saisissent les plus grands concepteurs d’interfaces et entreprises afin de répondre à cette nouvelle demande de l’utilisateur, bien au-delà de SNCF. Cette utilisation permettrait notamment à l’utilisateur de consommer 6 fois moins de batterie qu’un écran blanc. Une expérience a été réalisée sur Youtube, prouvant qu’un mode sombre actif (luminosité à 100%) permettait de consommer 60% de moins d’énergie. Moins d’énergie dépensée, moins de recharge, une batterie avec une durée de vie plus longue, un cercle vertueux.\\

## Une démarche accessible

Si la réalisation du mode sombre est une évidence, répondant donc à un cas d’usage métier, il s’inscrit encore plus dans une logique de Design Éthique car pleinement accessible.\\
Les couleurs ont été repensées en ce sens : certaines sont inchangées, d’autres ont été adaptées (éclaircies ou assombries) et enfin d’autres ont été tout simplement supprimées car non accessibles et qui ne peuvent être adaptées.

Attention, le mode sombre n’est pas à confondre avec une inversion de contrastes, qui lui répond totalement à une logique d’accessibilité. Ici, nous parlons bien d’un « Design Sombre », c’est-à-dire un design adapté comme évoqué précédemment.


## Comment cela se traduit ?

Dans les grandes lignes, les adaptations en terme de Design qui ont été réalisées sont les suivantes.

### Fonds
Le fond blanc `FFF` de la page devient un fond noir `000`.
Les fonds colorés (aplats de couleurs) sont inchangés.
Le fond gris cool gray 1 `F2F2F2` sur fond blanc devient un fond carbone `333`.
Le fond carbone `333` sur fond blanc devient un fond gris cool gray 1 `F2F2F2`.

### Navigations
La couleur de la barre galactique et du footer sur fond carbone `333` est inchangée.
La navigation principale `FFF` passe sur un fond carbone `000`.

### Textes & Liens
Les textes dans les différentes teintes de gris, du carbone `333` au cool gray 1 `F2F2F2` sur fond blanc passent en cool gray 3 `D7D7D7`.
A l’inverse, les textes blancs sur les fonds des différentes teintes de gris passent en noir `000`.

Le texte bleu primaire `0088CE` sur fond blanc devient `00A1FF` sur fonds foncés.
Le texte orange `E05206` sur fond blanc devient `FF6E20` sur fonds foncés.
Le texte bleu canard `009AA6` sur fond blanc devient `00ABB9` sur fonds foncés.

Le texte jaune safran `FFB612` sur fond blanc est inchangé sur fonds foncés.
Le texte vert anis `D2E100` sur fond blanc est inchangé sur fonds foncés.
Le texte vert pomme `82BE00` sur fond blanc est inchangé sur fonds foncés.

Le texte violet `6E1E78` sur fond blanc ne serait pas accessible sur fond noir 8% `191919`. Ce texte passe en bleu primaire `00A1FF`.
Le texte prune `A1006B` sur fond blanc ne serait pas accessible sur fond noir 8% `191919`. Ce texte passe en bleu primaire `00A1FF`.
Le texte framboise `CD0037` sur fond blanc ne serait pas accessible sur fond noir 8% `191919`. Ce texte passe en bleu primaire `00A1FF`.

Lorsqu’un bloc utilisera un texte rouge assistance, l’ensemble du bloc sera inchangé (fond et couleur du texte).

### Boutons & Tags
Les couleurs des boutons sont fonction de la couleur principale utilisée et seront les mêmes que celles définies pour les textes.
Le bouton carbone se transforme en cool gray 1 `F2F2F2`.
Le texte du bouton sera quant à lui toujours en noir `000`.

### Champs
Les champs blancs `FFF` sur fond gris cool gray 1 `F2F2F2` passent en noir `000` sur fond carbone `333`.
Les champs gris cool gray 1 `F2F2F2` sur fond blanc `FFF` passent en carbone `333` sur fond noir `000`.

_NB : d’autres adaptations ont été réalisées à la marge pour des cas particuliers, celles-ci sont intégrées dans cette version_

## Une version « Alpha »

Une version « Alpha » est une version primaire, que nous lançons dans une logique d’expérimentation.
Elle n’a pas la vocation d’être la plus intégrée possible. C’est pour cela que nous avons besoin de vous, de vos cas d’usage, que nous vous invitons à nous faire remonter soit via GitHub, soit via notre adresse email [design.fab@sncf.fr](mailto:design.fab@sncf.fr?subject=Bootstrap - Dark mode) avec pour objet « Bootstrap - Mode sombre ».

Cette version est disponible sur nos deux versions de Bootstrap (Communication & Métier).
Nous vous invitons à consulter l’ensemble de la documentation technique ci-dessous pour implémenter le mode sombre, et permettre son activation sur votre interface.

Nous avons d’ores et déjà entamé des réflexions concernant l’amélioration de cette fonctionnalité : doit-on le laisser tel quel en laissant le soin à l’utilisateur de l’activer ou non ? Doit-on lui faciliter sa visibilité durant des créneaux horaire spécifiques et le proposer sur l’interface (à l’instar des cookies) voire même l’activer par défaut ? N’hésitez pas à nous donner votre avis sur le sujet [par mail](mailto:design.fab@sncf.fr?subject=Bootstrap - Dark mode) ou sur le [Yammer dédié](https://www.yammer.com/sncf.fr/#/threads/inGroup?type=in_group&feedId=11125103).

N’hésitez pas à nous donner votre feedback sur cette fonctionnalité en nous donnant votre retour sur Usabilla (la languette de droite située à droite de l’interface).

## Implémentation technique
La distribution Bootstrap SNCF distribution inclut deux fichiers CSS (normal & minifié):

- `bootstrap-sncf.(min.)css`
- `bootstrap-sncf.darkmode.(min.)css`

> Ils sont automatiquement généré au moment de la compilation SASS.

Vous pouvez utiliser l'un ou l'autre pour votre projet mais **pas en même temps** : chaque fichier intègre l'ensemble du Bootstrap SNCF, l'un en mode normal, clair, l'autre avec le côté obscur du même design.

Il est possible de _permuter_ d'une version à l'autre avec la méthode native du navigateur Firefo, ou avec un peu de JavaScript, voir plus bas.

### CSS, HTML

{{< includenav.inline >}}
{{- if eq .Site.Params.doc_flavour "extern" -}}
  Pour le <em>Design Communication</em>, le bouton mode-sombre devrait être incorporé à l'intérieur des réglages d'accessibilité, avec les autres interrupteurs. Cet exemple de barre de navigation contient un interrupteur fonctionnel, essayez-le tout de suite !
{{- else -}}
  Pour le <em>Design Métier</em> l'interrupteur devrait être inclus dans le menu déroulant des paramètres personnels, en haut à droite de la barre de navigation. Cet exemple de barre de navigation contient un interrupteur fonctionnel, essayez-le tout de suite !
{{- end -}}
{{- $navHTML := (printf "%s%s%s" "darkmode-" .Site.Params.doc_flavour "-navbar-example.html") -}}
{{ partial $navHTML }}
{{< /includenav.inline >}}

### Implémentation native dans le navigateur

La méthode la plus simples est d'utiliser les [recommandations du W3C](https://www.w3.org/Style/Examples/007/alternatives.en.html).
Ajoutez les lignes suivantes à votre projet :
```html
<link title="Light mode" href="bootstrap-sncf.min.css" rel="stylesheet">
<link title="Dark mode" href="bootstrap-sncf.darkmode.min.css" rel="stylesheet alternate">
```
Sur Opera, Internet Explorer et Firefox vous allez pouvoir trouver la liste des styles disponibles dans une page dans le menu « Affichage » (Chrome nécessite une extension spécifique pour prendre en compte cette norme).

Et oui, c'est aussi simple que ça !

### JS
{{% callout info %}}
L'approche suivante n'est pas une référence mais une proposition d'implémentation de l'interrupteur mode sombre dans votre projet.
Si votre design est en mode « page unique » sans rechargement, il ne vous sera notamment pas nécessaire de sauvegarder l'état de l'interrupteur.
{{% /callout %}}

D'abord, il faut initialiser et choisir quel fichier CSS nous voulons charger et tester si le mode sombre doit être activé par défaut.
Sinon, la valeur par défaut sera la version claire. Veuillez notez que le code JavaScript suivant doit être placé à l'intérieur de la balise `<head>` de façon à éviter un [FOUC](https://fr.wikipedia.org/wiki/FOUC).

```js
initDarkmode()

function initDarkmode() {
  const mode = localStorage.getItem('bootstrap-sncf-css-name')
  if (mode === 'dark') {
    document.write('<link rel="stylesheet" type="text/css" title="Mode sombre" name="dark" href="/bootstrap-sncf.darkmode.min.css" id="activecss">')
    document.write('<link rel="stylesheet alternate" type="text/css" title="Style classique" name="light" href="/bootstrap-sncf.min.css" id="inactivecss">')
  }
  else {
    document.write('<link rel="stylesheet" type="text/css" title="Style classique" name="light" href="/bootstrap-sncf.min.css" id="activecss">')
    document.write('<link rel="stylesheet alternate" type="text/css" title="Mode sombre" name="dark" href="/bootstrap-sncf.darkmode.min.css" id="inactivecss">')
  }
}
```
Après cela, ajoutez un bouton, lien, pour basculer entre les modes normal ou sombre, avec par exemple un id `darkmode-btn` et le script suivant pourra changer la valeur de l'attribut `href` entre `stylesheet` et `stylesheet alternate`. Idéalement, essayez d'utiliser le design d'implémentation que nous avons choisie pour chaque variante du socle design SNCF (Communication or Métier).

Pour conserver le choix de l'utilisateur, vous pouvez enregistrer cette valeur par exemple dans un objet _local storage_ et récupérer sa valeur à sa prochaine visite pour lui proposer le bon mode.

```js
document.getElementById('darkmode-btn').addEventListener('click', () => {
  toggleDarkmode()
})

function toggleDarkmode() {
  const activecss = document.getElementById('activecss')
  const inactivecss = document.getElementById('inactivecss')
  const oldhref = activecss.getAttribute('href')
  const newhref = inactivecss.getAttribute('href')
  const name = inactivecss.getAttribute('name')
  activecss.setAttribute('href', newhref)
  inactivecss.setAttribute('href', oldhref)
  localStorage.setItem('bootstrap-sncf-css-name', name)
}
```
