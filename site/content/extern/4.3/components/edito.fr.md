---
layout: docs
title: Édito
description: Éléments de mise en forme éditoriaux.
group: components
toc: true
url: /fr/docs/4.3/components/edito/
---

## Accordéons

Les accordéons séparent le contenu du texte pour faciliter la lecture et réduire la longueur de la page. Ils offrent ainsi aux utilisateurs un meilleur aperçu du contenu mis à leur disposition.

{{% example html %}}
<div id="accordion" class="accordions">
  <div class="accordion">
    <div class="accordion-head" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h3 class="accordion-title mb-0">Collapsible Group Item #1</h3>
      <button type="button" class="accordion-toggle">
        <span class="accordion-toggle-close mr-2">Fermer</span>
        <span class="accordion-toggle-show mr-2">Ouvrir</span>
        <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
      </button>
    </div>
    <div id="collapseOne" class="collapse show" aria-labelledby="headingOne" data-parent="#accordion">
      <div class="accordion-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
  <div class="accordion">
    <div class="accordion-head" id="headingTwo" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
      <h3 class="accordion-title mb-0">Collapsible Group Item #2</h3>
      <button type="button" class="accordion-toggle">
        <span class="accordion-toggle-close mr-2">Fermer</span>
        <span class="accordion-toggle-show mr-2">Ouvrir</span>
        <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
      </button>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="accordion-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
{{% /example %}}

## Citations

Les citations soulignent les informations sélectionnées et créent un flux dans une page de contenu.

Pour du contenu cité provenant d'une autre source de votre document, ajoutez `<blockquote class="blockquote">` autour des `<abbr title="HyperText Markup Language">HTML</abbr>` comme citation.

{{< example html >}}
<blockquote class="blockquote">
  <p class="blockquote-decoration mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{{< /example >}}

### Nommer une source

Ajoutez `<footer class="blockquote-footer">` pour identifier la source. Insérer le nom de la source dans une balise `<cite>`.

{{< example html >}}
<blockquote class="blockquote">
  <p class="blockquote-decoration mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Quelqu'un de connu dans <cite title="Source Title">Nom de la Source</cite></footer>
</blockquote>
{{< /example >}}

## Bloc « preuve »

Les blocs « preuve » renforcent les messages clés dans un corps de texte sur les pages en fournissant une « preuve concrète » des offres ou des initiatives de grande qualité de la société. Les blocs de « preuve » doivent être concis, informatifs et neutres; ils sont écrits dans un style journalistique.

Utilisez la classe `is-gray` ou n'importe quelle classe `bg-{color}` disponible pour changer le `background-color` de l'élement. Utilisez `text-{color}` pour choisir la couleur du texte.

{{< example html >}}
<div class="proof is-gray has-strip text-primary" style="max-width: 41.000rem">
  <div class="proof-icon pb-4 pb-md-0">
    <i class="icons-admin icons-size-96px icons-md-size-140px" aria-hidden="true"></i>
  </div>
  <div class="proof-content">
    <p class="display-3 mb-3">20 ans de travaux<br/> pour vous</p>
    <p class="mb-0">En 2016, SNCF fête son 20e été de travaux sur la ligne C.</p>
  </div>
</div>
{{< /example >}}

{{< example html >}}
<div class="proof has-strip text-white bg-info" style="max-width: 41.000rem">
  <div class="proof-icon pb-4 pb-md-0">
    <i class="icons-admin icons-size-96px icons-md-size-140px" aria-hidden="true"></i>
  </div>
  <div class="proof-content">
    <h2 class="display-3 mb-3">20 ans de travaux<br/> pour vous</h2>
    <p class="mb-0">En 2016, SNCF fête son 20e été de travaux sur la ligne C.</p>
  </div>
</div>
{{< /example >}}

## Bloc édito

### Standard

Ces bannières sont principalement utilisées pour les pages de contenu, pour les pages avec des articles (souvent des articles d'actualité) ou pour les pages nécessitant une image frappante pour illustrer le contenu.

Les blocs de texte sont placés dans des pages de texte; ils offrent un contenu supplémentaire susceptible d'intéresser les utilisateurs en fonction de la page qu'ils consultent actuellement.

### Paragraphe

Un bloc de paragraphe est l’axe principal d’une page de contenu. \\
Pour un effet optimal, les concepteurs peuvent choisir parmi deux versions :

- le bloc « 100% paragraphe », où les sous-titres, le texte et les images couvrent chacun la grille de contenu afin que le concepteur puisse incorporer des images de grande taille dans la page.
- le bloc « paragraphe 50% », où les sous-titres, le texte et les images sont divisés en deux colonnes égales. Les images peuvent être placées à droite ou à gauche du contenu du texte.

Si des crédits d'image sont requis, ils apparaissent sous l'image.

### _Push_

Un « _push_ » au milieu de la page met en évidence le contenu étroitement lié à ce que l'utilisateur voit sur le reste de la page, améliorant ainsi l'expérience de l'utilisateur. Les annonces de milieu de page diffèrent de celles de pied de page, qui favorisent des contenus moins étroitement liés.

{{< example html >}}
<div class="editorial" style="max-width: 41.000rem">
  <div class="editorial-icon order-md-1">
    <p><i class="icons-large-sncf icons-size-96px"></i></p>
  </div>
  <div class="editorial-content order-md-0">
    <p class="display-3 mb-3">Maecenas sed diam eget risus varius blandit sit amet non</p>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio.</p>
    <a href="#" class="btn btn-link btn-link-white">Lorem ipsum dolor <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
  </div>
</div>
{{< /example >}}

{{< example html >}}
<div class="editorial editorial-light" style="max-width: 41.000rem">
  <div class="editorial-icon order-md-1">
    <p><i class="icons-large-sncf icons-size-96px"></i></p>
  </div>
  <div class="editorial-content order-md-0">
    <p class="display-3 mb-3">Maecenas sed diam eget risus varius blandit sit amet non</p>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio.</p>
    <a href="#" class="btn btn-link">Lorem ipsum dolor <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
  </div>
</div>
{{< /example >}}

{{< example html >}}
<div class="editorial" style="max-width: 41.000rem">
  <div class="editorial-icon order-md-1">
    <p><i class="icons-large-lightbulb icons-size-96px"></i></p>
  </div>
  <div class="editorial-content order-md-0">
    <p class="display-3 mb-4">Vous n'avez pas trouvé<br /> votre réponse ?</p>
    <div class="pb-2 pb-md-0">
      <a href="#" class="btn btn-primary">Questions/Réponses</a>
    </div>
  </div>
</div>
{{< /example >}}

### Surligner

Les fonds gris (sous forme de « carte ») mettent en évidence un point du paragraphe précédent sur une page de texte. Il existe plusieurs types de cartes grises, dont une avec un menu déroulant interne. Un texte ou un lien spécifique apparaît en fonction de l'option choisie par l'utilisateur pour la liste déroulante.

Nous vous recommandons d'utiliser une seule carte à fond gris par paragraphe.

{{< example html >}}
<div class="editorial editorial-light">
  <div class="editorial-content order-md-0">
    <h1 class="text-primary display-3 mb-3">Choisissez votre région</h1>
    <p>Plus de 24000 places de stationnement vélo vous sont proposées dans les gares SNCF en région.</p>
    <div class="select-improved" data-component="select-exclusive">
      <div class="select-control">
	<div class="input-group" data-role="select-toggle">
	  <div class="form-control form-control-white is-placeholder d-flex align-items-center" data-role="placeholder">Choisissez votre région...</div>
    <label for="select1" class="sr-only">Choisissez votre région</label>
	  <select class="sr-only" id="select1" data-role="input" tabindex="-1" aria-hidden="true">
	    <option selected disabled hidden>Lorem ipsum</option>
	    <option data-id="1">Occitanie</option>
	    <option data-id="2">Grand-Est</option>
	  </select>
	  <div class="input-group-append input-group-last">
	    <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
              <span class="sr-only">Choisissez votre région</span>
	      <i class="icons-arrow-down icons-size-x75"></i>
	    </button>
	  </div>
	</div>
	<div class="select-menu" data-role="menu">
          <button class="select-menu-item" data-role="value" data-target="1">Occitanie</button>
          <button class="select-menu-item" data-role="value" data-target="2">Grand-Est</button>
	</div>
      </div>
    </div>
    <p class="mt-3">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio.</p>
    <a href="#" class="btn btn-link">Lorem ipsum dolor <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
  </div>
</div>
{{< /example >}}

### Surlignage _push_

Sur les pages de texte sans ancres, certains composants peuvent être placés dans une colonne à droite du contenu éditorial : un _push_ au fond grisé peut faciliter la navigation sur le site Web, tandis que les fonds grisés « Date » et « lieu » peuvent être utilisées pour fournir des informations sur des événements ou des nouvelles.

{{< example html >}}
<div class="row">
  <div class="col-md-7">
  </div>
  <div class="col-md-5">
    <div class="d-flex flex-column edito-push-highlight-bg gx-3 gy-4 gx-md-4 rounded">
      <div class="d-flex flex-column flex-fluid">
	<h2 class="order-0 mb-5">Les derniers articles</h2>
	<h3 class="order-2 display-3 mb-3">Maecenas sed diam eget risus varius blandit sit amet non</h3>
	<p class="order-1 display-5 text-uppercase text-primary">ÉVÈNEMENT</p>
	<p class="order-3">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio.</p>
	<div class="order-4 d-flex align-items-end flex-fluid">
	  <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
	</div>
      </div>
    </div>
  </div>
</div>
{{< /example >}}

### Autres blocs à fond gris

Les cartes à fonds gris « Date » fournissent des informations urgentes sur les nouvelles ou les événements.

Les cartes à fonds gris « Lieu » fournissent des informations géographiques relatives à un événement ou à une actualité. Le lien redirige les utilisateurs vers une page externe où ils peuvent trouver des directions et des itinéraires.

### Blocs 1/3 2/3

Les blocs 1/3 2/3 améliorent le flux dans la page et illustrent un point spécifique dans le corps de la page.

Ces blocs apparaissent par trois sur une page de texte.

Il est possible

These blocks appear in threes on a text page.

Il est possible d'y présenter plusieurs types de contenu : illustrations, _packshots_, et photos produites par SNCF.

{{< example html >}}
<div style="max-width: 41.000rem">
  <h2 class="display-3 text-primary mb-4">Les services OUIBUS</h2>
  <ul class="list-unstyled">
    <li class="gb-4">
      <div class="d-flex flex-column flex-md-row">
        <div class="col-auto gr-md-4 px-0 pb-4 pb-md-0">
          <img alt="" class="w-100 w-md-auto rounded" width="221" src="https://dummyimage.com/221x133/d7d7d7/333" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="#" class="btn btn-link">Retrouvez l'intégralité des vidéos <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
        </div>
      </div>
    </li>
    <li class="gb-4">
      <div class="d-flex flex-column flex-md-row">
        <div class="col-auto gr-md-4 px-0 pb-4 pb-md-0">
          <img alt="" class="w-100 w-md-auto rounded" width="221" src="https://dummyimage.com/221x133/d7d7d7/333" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum ea distinctio, consequatur facilis repudiandae incidunt.</p>
          <a href="#" class="btn btn-link">Retrouvez l'intégralité des vidéos <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="d-flex flex-column flex-md-row">
        <div class="col-auto gr-md-4 px-0 pb-4 pb-md-0">
          <img alt="" class="w-100 w-md-auto rounded" width="221" src="https://dummyimage.com/221x133/d7d7d7/333" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum ea distinctio.</p>
          <a href="#" class="btn btn-link">Retrouvez l'intégralité des vidéos <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
        </div>
      </div>
    </li>
  </ul>
</div>
{{< /example >}}

### Packshot

Le block _packshots_ contiennent des produits ou des offres qui nécessitent une illustration et permettent de rediriger les utilisateurs vers une page ou une fenêtre contenant des informations plus détaillées.

Ces blocs viennent par deux ou quatre sur une page de texte.

{{% example html %}}
<div style="max-width: 41.000rem">
  <h2 class="display-3 text-primary mb-4">Titre bloc Packshot</h2>
  <div class="row">
    <div class="col-12 col-md-6 d-md-flex gb-5 gb-md-0">
      <div class="d-flex flex-column edito-packshot gx-3 gy-4 gx-md-4 rounded">
        <img alt="" class="w-100 mb-4" width="240" src="https://dummyimage.com/240x158/f2f2f2/000" />
        <div class="d-flex flex-column flex-fluid">
          <h3 class="mb-3">-25% garantis* sur tous les trains TGV et Intercités <br/>
            <span class="text-base">à réservation obligatoire</span>
          </h3>
          <div class="d-flex align-items-end flex-fluid">
            <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 d-md-flex gb-5 gb-md-0">
      <div class="d-flex flex-column edito-packshot gx-3 gy-4 gx-md-4 rounded">
        <img alt="" class="w-100 mb-4" width="240" src="https://dummyimage.com/240x158/f2f2f2/000" />
        <div class="d-flex flex-column flex-fluid">
          <h3 class="mb-3">-10% supplémentaires sur les billets Prem’s*</h3>
          <div class="d-flex align-items-end flex-fluid">
            <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

### Mosaïques

À l'instar des blocs _packshots_, les blocs de mosaïques présentent des produits qui nécessitent un visuel, où les utilisateurs peuvent être redirigés vers une page, ou fenêtre avec un peu plus d'information détaillée.

Les blocs mosaïques viennent par deux ou quatre sur une page de texte.

Il est possible d'y présenter plusieurs types de contenu : illustrations, _packshots_, et photos produites par SNCF.

{{% example html %}}
<div style="max-width: 41.000rem">
  <h2 class="display-3 text-primary mb-4">Titre bloc Mosaïque</h2>
  <div class="row">
    <div class="col-12 col-md-6 gb-5 gb-md-0">
      <div>
        <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
        <div>
          <h3 class="mb-2">Paris - Bordeaux</h3>
          <div class="mb-3">Lorem ipsum doloret</div>
          <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 gb-5 gb-md-0">
      <div>
        <img alt="" class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
        <div>
          <h3 class="mb-2">Paris - Nantes</h3>
          <div class="mb-3">Lorem ipsum doloret</div>
          <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /example %}}

## Contact

Le bloc « contact », comme son nom l'indique, permet aux utilisateurs de contacter le service client d'une société par courriel pour lui envoyer du contenu ou échanger de l'information.

Un lien _mailto_ peut être inséré à la place d'un champ `input`.

{{< example html >}}
<div style="max-width: 41.000rem">
  <div class="row no-gutters edito-contact-bg rounded gx-3 gb-4 g-md-5">
    <div class="col-12 col-md-6 order-md-1">
      <img alt="" class="w-100" src="https://dummyimage.com/286x160/000/fff" />
    </div>
    <div class="col-12 col-md-6 order-md-0 mb-1">
      <h3 class="display-3 text-primary">Lorem ipsum</h3>
      <p>Abonnez-vous à notre magazine Perspectives Fret en renseignant votre adresse éléctronique et recevez chaque mois une nouvelle édition en version numérique.</p>
    </div>
    <div class="col-12 order-md-2">
      <form>
        <div class="form-row">
          <div class="col-12 col-sm-auto flex-sm-fluid gb-3 gb-sm-0">
            <label for="inputEmail1">Courriel</label>
            {{< input type="email" id="inputEmail1" placeholder="Example input" class="form-control-white" >}}
          </div>
          <div class="col-12 col-sm-auto d-flex align-items-end">
            <button type="submit" class="btn btn-primary w-100 w-sm-auto">Valider mon inscription au magazine</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
{{< /example >}}
