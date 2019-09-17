---
layout: docs
title: Pied de page
slug: pied-de-page
group: layout
toc: true
url: /docs/4.3/layout/footer/
---

{{% callout warning %}}
Les sous-sections **doivent** toutes être contenues dans une seule et unique section `<footer class="mastfooter bg-gray"></footer>`, consultez [l'exemple final](#exemple-complet) pour une implémentation complète.
{{% /callout %}}

### Liens

{{% example html %}}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <ul class="mastfooter-links order-2 order-md-1 row text-white gy-5 mb-0">
      <li class="col-12 col-md-4 pb-3 pb-md-0">
	<div class="d-flex align-items-center">
	  <a href="#" class="text-white d-flex align-items-center">
            <i class="icons-large-mail icons-size-50px mr-2" aria-hidden="true"></i>
	    S'abonner à la Newsletter
	    <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
	  </a>
	</div>
      </li>
      <li class="col-12 col-md-4 pb-3 pb-md-0">
	<div class="d-flex align-items-center">
	  <a href="#" class="text-white d-flex align-items-center">
	    <i class="icons-large-information icons-size-50px mr-2" aria-hidden="true"></i>
	    Découvrir le programme
	    <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
          </a>
	</div>
      </li>
      <li class="col-12 col-md-4">
	<div class="d-flex align-items-center">
	  <a href="#" class="text-white d-flex align-items-center">
	    <i class="icons-large-warning icons-size-50px mr-2" aria-hidden="true"></i>
	    Voir les actualités
	    <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
          </a>
	</div>
      </li>
    </ul>
  </div>
</footer>
{{% /example %}}

### Inscription à la newsletter
<div class="bd-example">
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-1 order-md-2 row gy-5">
      <div class="col-12 col-lg-6">
        <p class="display-3 text-white mt-4">Inscrivez-vous à nos news pour être tenu informé Nibh Dolor Parturient Quam</p>
      </div>
      <form class="col-12 col-lg-6">
        <div class="form-row">
          <div class="col-12 col-sm-auto flex-sm-fluid gb-3 gb-sm-0">
            <label class="text-white" for="inputEmail1">Votre adresse email (jeandupont@sncf.fr)</label>
            <div class="form-control-container ">
              <input class="form-control form-control-white" id="inputEmail1" placeholder="Example input" type="email">
              <span class="form-control-state"></span>
            </div>
          </div>
          <div class="col-12 col-sm-auto d-flex align-items-end">
            <button type="submit" class="btn btn-primary w-100 w-sm-auto">Valider <span class="sr-only">mon inscription à la newsletter</span></button>
          </div>
        </div>
      </form>
    </div>
  </div>
</footer>
</div>

{{% highlight html %}}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-1 order-md-2 row gt-5">
      <div class="col-12 col-lg-6">
        <p class="display-3 text-white mt-4">Inscrivez-vous à nos news pour être tenu informé Nibh Dolor Parturient Quam</p>
      </div>
      <form class="col-12 col-lg-6">
        <div class="form-row">
          <div class="col-12 col-sm-auto flex-sm-fluid gb-3 gb-sm-0">
            <label class="text-white" for="inputEmail1">Votre adresse email</label>
            <div class="form-control-container ">
              <input class="form-control form-control-white" id="inputEmail1" placeholder="Example input" type="email">
              <span class="form-control-state"></span>
            </div>
          </div>
          <div class="col-12 col-sm-auto d-flex align-items-end">
            <button type="submit" class="btn btn-primary w-100 w-sm-auto">Valider</button>
          </div>
        </div>
      </form>
    </div>
  </div>
</footer>
{{% /highlight %}}

### Plan du site

{{% example html %}}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-3 row text-sm gt-5 gb-6 font-weight-medium">
      <ul class="col-12 col-md-3 list-unstyled mb-0">
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
      </ul>
      <ul class="col-12 col-md-3 list-unstyled mb-0">
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
      </ul>
      <ul class="col-12 col-md-3 list-unstyled mb-0">
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
      </ul>
      <div class="col-12 col-md-3 gt-5 gt-md-0">
        <div class="pb-2 text-white">Suivez-nous :</div>
        <ul class="d-flex list-unstyled mb-0">
          <li class="pr-2">
            <button type="button" class="btn-rounded btn-color-footer"><span class="sr-only">Share with Twitter</span><i class="icons-twitter" aria-hidden="true"></i></button>
          </li>
          <li class="pr-2">
            <button type="button" class="btn-rounded btn-color-footer"><span class="sr-only">Share with FaceBook</span><i class="icons-facebook" aria-hidden="true"></i></button>
          </li>
          <li>
            <button type="button" class="btn-rounded btn-color-footer"><span class="sr-only">Share with LinkedIn</span><i class="icons-instagram" aria-hidden="true"></i></button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</footer>
{{% /example %}}

### CGUs, Contacts

{{% example html %}}
<footer class="mastfooter bg-gray" role="contentinfo">
  <div class="container d-flex flex-column">
    <div class="order-4 d-flex flex-column flex-md-row justify-content-between gy-4">
      <ul class="row flex-column flex-md-row list-unstyled mb-0">
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Contact</a>
        </li>
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Plan du site</a>
        </li>
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Mentions légales</a>
        </li>
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Conditions d'utilisation</a>
        </li>
      </ul>
      <ul class="mastfooter-lang pt-2 pt-md-0 mb-0 list-unstyled">
        <li><a href="#" class="text-gray300 active" title="Fr langue active"><img alt="" src="/assets/img/flags/french.svg" class="gr-2">Fr</a></li>
        <li><a href="#" class="text-gray300" title="En langue"><img alt="" src="/assets/img/flags/english.svg" class="d-none gr-3">En</a></li>
        <li><a href="#" class="text-gray300" title="De langue"><img alt="" src="/assets/img/flags/german.svg" class="d-none gr-3">De</a></li>
      </ul>
    </div>
  </div>
</footer>
{{% /example %}}

## Exemple complet

{{% example html %}}
<footer class="mastfooter bg-gray" role="contentinfo">
  <div class="container d-flex flex-column">
    <ul class="mastfooter-links order-2 order-md-1 row text-white gy-5 mb-0">
      <li class="col-12 col-md-4 pb-3 pb-md-0">
        <div class="d-flex align-items-center">
          <a href="#" class="text-white d-flex align-items-center">
                  <i class="icons-large-mail icons-size-50px mr-2" aria-hidden="true"></i>
            S'abonner à la Newsletter
            <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </li>
      <li class="col-12 col-md-4 pb-3 pb-md-0">
        <div class="d-flex align-items-center">
          <a href="#" class="text-white d-flex align-items-center">
            <i class="icons-large-information icons-size-50px mr-2" aria-hidden="true"></i>
            Découvrir le programme
            <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </li>
      <li class="col-12 col-md-4">
        <div class="d-flex align-items-center">
          <a href="#" class="text-white d-flex align-items-center">
            <i class="icons-large-warning icons-size-50px mr-2" aria-hidden="true"></i>
            Voir les actualités
            <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i>
          </a>
        </div>
      </li>
    </ul>
    <div class="order-1 order-md-2 row gy-5">
      <div class="col-12 col-lg-6">
        <p class="display-3 text-white mt-4">Inscrivez-vous à nos news pour être tenu informé Nibh Dolor Parturient Quam</p>
      </div>
      <form class="col-12 col-lg-6">
        <div class="form-row">
          <div class="col-12 col-sm-auto flex-sm-fluid gb-3 gb-sm-0">
            <label class="text-white" for="inputEmail2">Votre adresse email (jeandupont@sncf.fr)</label>
            <div class="form-control-container ">
              <input class="form-control form-control-white" id="inputEmail2" placeholder="Example input" type="email">
              <span class="form-control-state"></span>
            </div>
          </div>
          <div class="col-12 col-sm-auto d-flex align-items-end">
            <button type="submit" class="btn btn-primary w-100 w-sm-auto">Valider <span class="sr-only">mon inscription à la newsletter</span></button>
          </div>
        </div>
      </form>
    </div>
    <div class="order-3 row text-sm gt-5 gb-6 font-weight-medium">
      <ul class="col-12 col-md-3 list-unstyled mb-0">
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
      </ul>
      <ul class="col-12 col-md-3 list-unstyled mb-0">
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
      </ul>
      <ul class="col-12 col-md-3 list-unstyled mb-0">
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
        <li><a href="#" class="d-flex align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2" aria-hidden="true"></i></a></li>
      </ul>
      <div class="col-12 col-md-3 gt-5 gt-md-0">
        <div class="pb-2 text-white">Suivez-nous :</div>
        <ul class="d-flex list-unstyled mb-0">
          <li class="pr-2">
            <button type="button" class="btn-rounded btn-color-footer"><span class="sr-only">Share with Twitter</span><i class="icons-twitter" aria-hidden="true"></i></button>
          </li>
          <li class="pr-2">
            <button type="button" class="btn-rounded btn-color-footer"><span class="sr-only">Share with FaceBook</span><i class="icons-facebook" aria-hidden="true"></i></button>
          </li>
          <li>
            <button type="button" class="btn-rounded btn-color-footer"><span class="sr-only">Share with LinkedIn</span><i class="icons-circle-linkedin" aria-hidden="true"></i></button>
          </li>
        </ul>
      </div>
    </div>
    <div class="order-4 d-flex flex-column flex-md-row justify-content-between gy-4">
      <ul class="row flex-column flex-md-row list-unstyled mb-0">
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Contact</a>
        </li>
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Plan du site</a>
        </li>
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Mentions légales</a>
        </li>
        <li class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Conditions d'utilisation</a>
        </li>
      </ul>
      <ul class="mastfooter-lang pt-2 pt-md-0 mb-0 list-unstyled">
        <li><a href="#" class="text-gray300 active" title="Fr langue active"><img alt="" src="/assets/img/flags/french.svg" class="gr-2">Fr</a></li>
        <li><a href="#" class="text-gray300" title="En langue"><img alt="" src="/assets/img/flags/english.svg" class="d-none gr-3">En</a></li>
        <li><a href="#" class="text-gray300" title="De langue"><img alt="" src="/assets/img/flags/german.svg" class="d-none gr-3">De</a></li>
      </ul>
    </div>
  </div>
</footer>
{{% /example %}}
