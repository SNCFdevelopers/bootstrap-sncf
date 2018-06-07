---
layout: docs
title: Editorial
description: Editorial formatting elements.
group: components
toc: true
permalink: /docs/4.0/components/edito
---

## Accordion

{% example html %}
<div id="accordion" class="accordions">
  <div class="accordion">
    <div class="accordion-head" id="headingOne" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
      <h3 class="accordion-title mb-0">Collapsible Group Item #1</h3>
      <div class="accordion-toggle">
        <span class="accordion-toggle-close mr-2">Fermer</span>
        <span class="accordion-toggle-show mr-2">Ouvrir</span>
        <i class="icons-arrow-down icons-size-x75"></i>
      </div>
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
      <div class="accordion-toggle">
        <span class="accordion-toggle-close mr-2">Fermer</span>
        <span class="accordion-toggle-show mr-2">Ouvrir</span>
        <i class="icons-arrow-down icons-size-x75"></i>
      </div>
    </div>
    <div id="collapseTwo" class="collapse" aria-labelledby="headingTwo" data-parent="#accordion">
      <div class="accordion-body">
        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Blockquotes

For quoting blocks of content from another source within your document. Wrap `<blockquote class="blockquote">` around any <abbr title="HyperText Markup Language">HTML</abbr> as the quote.

{% example html %}
<blockquote class="blockquote">
  <p class="blockquote-decoration mb-0">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
</blockquote>
{% endexample %}

### Naming a source

Add a `<footer class="blockquote-footer">` for identifying the source. Wrap the name of the source work in `<cite>`.

{% example html %}
<blockquote class="blockquote">
  <p class="blockquote-decoration mb-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere erat a ante.</p>
  <footer class="blockquote-footer">Someone famous in <cite title="Source Title">Source Title</cite></footer>
</blockquote>
{% endexample %}

## Proof block

Use `is-gray` class or any `bg-{color}` classes available to change the `background-color` element. Use `text-{color}` to choose the text color.

{% example html %}
<div class="proof is-gray has-strip text-primary" style="max-width: 41.000rem">
  <div class="proof-icon pb-4 pb-md-0">
    <i class="icons-admin icons-size-96px icons-md-size-140px"></i>
  </div>
  <div class="proof-content">
    <p class="display-3 mb-3">20 ans de travaux<br/> pour vous</p>
    <p class="mb-0">En 2016, SNCF fête son 20e été de travaux sur la ligne C.</p>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="proof has-strip text-white bg-info" style="max-width: 41.000rem">
  <div class="proof-icon pb-4 pb-md-0">
    <i class="icons-admin icons-size-96px icons-md-size-140px"></i>
  </div>
  <div class="proof-content">
    <h2 class="display-3 mb-3">20 ans de travaux<br/> pour vous</h2>
    <p class="mb-0">En 2016, SNCF fête son 20e été de travaux sur la ligne C.</p>
  </div>
</div>
{% endexample %}

## Editorial block

### Push

{% example html %}
<div class="editorial" style="max-width: 41.000rem">
  <div class="editorial-icon order-md-1">
      <p>média</p>
  </div>
  <div class="editorial-content order-md-0">
    <p class="display-3 mb-3">Maecenas sed diam eget risus varius blandit sit amet non</p>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio.</p>
    <a href="#" class="btn btn-link btn-link-white">Lorem ipsum dolor <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="editorial editorial-light" style="max-width: 41.000rem">
  <div class="editorial-icon order-md-1">
      <p>média</p>
  </div>
  <div class="editorial-content order-md-0">
    <p class="display-3 mb-3">Maecenas sed diam eget risus varius blandit sit amet non</p>
    <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Cras mattis consectetur purus sit amet fermentum. Cras justo odio.</p>
    <a href="#" class="btn btn-link">Lorem ipsum dolor <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
  </div>
</div>
{% endexample %}

{% example html %}
<div class="editorial" style="max-width: 41.000rem">
  <div class="editorial-icon order-md-1">
      <p>média</p>
  </div>
  <div class="editorial-content order-md-0">
    <p class="display-3 mb-4">Vous n'avez pas trouvé<br /> votre réponse ?</p>
    <div class="pb-2 pb-md-0">
      <a href="#" class="btn btn-primary">Questions/Réponses</a>
    </div>
  </div>
</div>
{% endexample %}

### Bloc 1/3 2/3

{% example html %}
<div style="max-width: 41.000rem">
  <h2 class="display-3 text-primary mb-4">Les services OUIBUS</h2>
  <ul class="list-unstyled">
    <li class="gb-4">
      <div class="d-flex flex-column flex-md-row">
        <div class="col-auto gr-md-4 px-0 pb-4 pb-md-0">
          <img class="w-100 w-md-auto rounded" width="221" src="https://dummyimage.com/221x133/000/fff" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
          <a href="#" class="btn btn-link">Retrouvez l'intégralité des vidéos <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
      </div>
    </li>
    <li class="gb-4">
      <div class="d-flex flex-column flex-md-row">
        <div class="col-auto gr-md-4 px-0 pb-4 pb-md-0">
          <img class="w-100 w-md-auto rounded" width="221" src="https://dummyimage.com/221x133/000/fff" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum ea distinctio, consequatur facilis repudiandae incidunt.</p>
          <a href="#" class="btn btn-link">Retrouvez l'intégralité des vidéos <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
      </div>
    </li>
    <li>
      <div class="d-flex flex-column flex-md-row">
        <div class="col-auto gr-md-4 px-0 pb-4 pb-md-0">
          <img class="w-100 w-md-auto rounded" width="221" src="https://dummyimage.com/221x133/000/fff" />
        </div>
        <div class="d-flex flex-column justify-content-center">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos earum ea distinctio.</p>
          <a href="#" class="btn btn-link">Retrouvez l'intégralité des vidéos <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
      </div>
    </li>
  </ul>
</div>
{% endexample %}

### Packshot

{% example html %}
<div style="max-width: 41.000rem">
  <h2 class="display-3 text-primary mb-4">Titre bloc Packshot</h2>
  <div class="row">
    <div class="col-12 col-md-6 d-md-flex gb-5 gb-md-0">
      <div class="d-flex flex-column bg-light gx-3 gy-4 gx-md-4 rounded">
        <img class="w-100" width="240" src="https://dummyimage.com/240x158/f2f2f2/000" />
        <div class="d-flex flex-column flex-fluid">
          <h3 class="text-gray500 mb-3">-25% garantis* sur tous les trains TGV et Intercités <br/>
            <span class="text-base">à réservation obligatoire</span>
          </h3>
          <div class="d-flex align-items-end flex-fluid">
            <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
          </div>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 d-md-flex gb-5 gb-md-0">
      <div class="d-flex flex-column bg-light gx-3 gy-4 gx-md-4 rounded">
        <img class="w-100" width="240" src="https://dummyimage.com/240x158/f2f2f2/000" />
        <div class="d-flex flex-column flex-fluid">
          <h3 class="text-gray500 mb-3">-10% supplémentaires sur les billets Prem’s*</h3>
          <div class="d-flex align-items-end flex-fluid">
            <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

### Mosaic

{% example html %}
<div style="max-width: 41.000rem">
  <h2 class="display-3 text-primary mb-4">Titre bloc Mosaïque</h2>
  <div class="row">
    <div class="col-12 col-md-6 gb-5 gb-md-0">
      <div>
        <img class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
        <div>
          <h3 class="text-gray500 mb-2">Paris - Bordeaux</h3>
          <div class="mb-3">Lorem ipsum doloret</div>
          <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
      </div>
    </div>
    <div class="col-12 col-md-6 gb-5 gb-md-0">
      <div>
        <img class="w-100 mb-4 rounded" src="https://dummyimage.com/240x158/000/fff" />
        <div>
          <h3 class="text-gray500 mb-2">Paris - Nantes</h3>
          <div class="mb-3">Lorem ipsum doloret</div>
          <a href="#" class="btn btn-link">Lire la suite <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        </div>
      </div>
    </div>
  </div>
</div>
{% endexample %}

## Contact

{% example html %}
<div style="max-width: 41.000rem">
  <div class="row no-gutters bg-light rounded gx-3 gb-4 g-md-5">
    <div class="col-12 col-md-6 order-md-1">
      <img class="w-100" src="https://dummyimage.com/286x160/000/fff" />
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
            {% include components/input.html type="email" id="inputEmail1" placeholder="Example input" class="form-control-white" %}
          </div>
          <div class="col-12 col-sm-auto d-flex align-items-end">
            <button type="submit" class="btn btn-primary w-100 w-sm-auto">Valider</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</div>
{% endexample %}