---
layout: docs
title: Footer
description: Footers are composed by four sub-sections.
group: components
toc: true
permalink: /docs/4.0/components/footer
---

{% callout warning %}
Subsections **must all be** contained in one unique section `<footer class="mastfooter bg-gray"></footer>`, see [final example](#complete-example) for complete implementation.
{% endcallout %}

### Links

{% example html %}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="mastfooter-links order-2 order-md-1 row text-white gy-5">
      <div class="col-12 col-md-4 pb-3 pb-md-0">
	<div class="d-flex align-items-center">
	  <a href="#" class="text-white d-flex align-items-center">
            <i class="icons-large-mail icons-size-50px mr-2"></i>
	    S'abonner à la Newsletter
	    <i class="icons-arrow-next icons-size-x5 ml-2"></i>
	  </a>
	</div>
      </div>
      <div class="col-12 col-md-4 pb-3 pb-md-0">
	<div class="d-flex align-items-center">
	  <a href="#" class="text-white d-flex align-items-center">
	    <i class="icons-large-information icons-size-50px mr-2"></i>
	    Découvrir le programme
	    <i class="icons-arrow-next icons-size-x5 ml-2"></i>
          </a>
	</div>
      </div>
      <div class="col-12 col-md-4">
	<div class="d-flex align-items-center">
	  <a href="#" class="text-white d-flex align-items-center">
	    <i class="icons-large-warning icons-size-50px mr-2"></i>
	    Voir les actualités
	    <i class="icons-arrow-next icons-size-x5 ml-2"></i>
          </a>
	</div>
      </div>
    </div>
  </div>
</footer>
{% endexample %}

### Newsletter inscription
<div class="bd-example">
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-1 order-md-2 row gy-5">
      <div class="col-12 col-md-6">
        <p class="display-3 text-white mt-4">Inscrivez-vous à nos news pour être tenu informé Nibh Dolor Parturient Quam</p>
      </div>
      <form class="col-12 col-md-6">
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
</div>

{% highlight html %}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-1 order-md-2 row gt-5">
      <div class="col-12 col-md-6">
        <p class="display-3 text-white mt-4">Inscrivez-vous à nos news pour être tenu informé Nibh Dolor Parturient Quam</p>
      </div>
      <form class="col-12 col-md-6">
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
{% endhighlight %}

### Site plan

{% example html %}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-3 row text-sm gt-5 gb-6 font-weight-medium">
      <div class="col-12 col-md-3">
        <a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        <a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        <a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="col-12 col-md-3">
        <a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        <a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        <a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="col-12 col-md-3">
        <a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        <a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
        <a href="#" class="d-flex align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
      </div>
      <div class="col-12 col-md-3 gt-5 gt-md-0">
        <div class="pb-2 text-white">Suivez-nous :</div>
        <div class="d-flex">
          <div class="pr-2">
            <button type="button" class="btn-rounded btn-rounded-white btn-color-gray"><i class="icons-twitter"></i></button>
          </div>
          <div class="pr-2">
            <button type="button" class="btn-rounded btn-rounded-white btn-color-gray"><i class="icons-facebook"></i></button>
          </div>
          <div>
            <button type="button" class="btn-rounded btn-rounded-white btn-color-gray"><i class="icons-circle-linkedin"></i></button>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
{% endexample %}

### CGUs, Contacts

<div class="bd-example">
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-4 d-flex flex-column flex-md-row justify-content-between gy-4">
      <div class="row flex-column flex-md-row">
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Contact</a>
        </div>
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Plan du site</a>
        </div>
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Mentions légales</a>
        </div>
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Conditions d'utilisation</a>
        </div>
      </div>
      <div class="mastfooter-lang pt-2 pt-md-0">
        <a href="#" class="text-gray300 active"><img src="https://dummyimage.com/30x30/000/fff" class="gr-2">Fr</a>
        <a href="#" class="text-gray300"><img src="https://dummyimage.com/30x30/000/fff" class="d-none gr-3">En</a>
        <a href="#" class="text-gray300"><img src="https://dummyimage.com/30x30/000/fff" class="d-none gr-3">De</a>
      </div>
    </div>
  </div>
</footer>
</div>

{% highlight html %}
<footer class="mastfooter bg-gray">
  <div class="container d-flex flex-column">
    <div class="order-4 d-flex flex-column flex-md-row justify-content-between gb-6">
      <div class="row flex-column flex-md-row">
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Contact</a>
        </div>
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Plan du site</a>
        </div>
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Mentions légales</a>
        </div>
        <div class="col-auto pb-3 pb-md-0">
          <a href="#" class="text-gray300">Conditions d'utilisation</a>
        </div>
      </div>
      <div class="mastfooter-lang pt-2 pt-md-0">
        <a href="#" class="text-gray300 active"><img src="https://dummyimage.com/30x30/000/fff" class="gr-2">Fr</a>
        <a href="#" class="text-gray300"><img src="https://dummyimage.com/30x30/000/fff" class="d-none gr-3">En</a>
        <a href="#" class="text-gray300"><img src="https://dummyimage.com/30x30/000/fff" class="d-none gr-3">De</a>
      </div>
    </div>
  </div>
</footer>
{% endhighlight %}

## Complete Example

{% example html %}
      <footer class="mastfooter bg-gray">
        <div class="container d-flex flex-column">
          <div class="mastfooter-links order-2 order-md-1 row text-white gy-5">
            <div class="col-12 col-md-4 pb-3 pb-md-0">
              <div class="d-flex align-items-center">
	        <a href="#" class="text-white d-flex align-items-center">
                  <i class="icons-large-mail icons-size-50px mr-2"></i>
                  S'abonner à la Newsletter
                  <i class="icons-arrow-next icons-size-x5 ml-2"></i>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-4 pb-3 pb-md-0">
              <div class="d-flex align-items-center">
	        <a href="#" class="text-white d-flex align-items-center">
                  <i class="icons-large-information icons-size-50px mr-2"></i>
                  Découvrir le programme
                  <i class="icons-arrow-next icons-size-x5 ml-2"></i>
                </a>
              </div>
            </div>
            <div class="col-12 col-md-4">
              <div class="d-flex align-items-center">
	        <a href="#" class="text-white d-flex align-items-center">
                  <i class="icons-large-warning icons-size-50px mr-2"></i>
                  Voir les actualités
                  <i class="icons-arrow-next icons-size-x5 ml-2"></i>
                </a>
              </div>
            </div>
          </div>

          <div class="order-1 order-md-2 row gt-5">
            <div class="col-12 col-md-6">
              <p class="display-3 text-white mt-4">Inscrivez-vous à nos news pour être tenu informé Nibh Dolor Parturient Quam</p>
            </div>
            <form class="col-12 col-md-6">
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

          <div class="order-3 row text-sm gt-5 gb-6 font-weight-medium">
            <div class="col-12 col-md-3">
              <a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
              <a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
              <a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
            </div>
            <div class="col-12 col-md-3">
              <a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
              <a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
              <a href="#" class="d-flex pb-3 pb-md-0 align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
            </div>
            <div class="col-12 col-md-3">
              <a href="#" class="d-flex pb-3 align-items-center text-white">Tortor Ipsum <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
              <a href="#" class="d-flex pb-3 align-items-center text-white">Porta Ullamcorper <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
              <a href="#" class="d-flex align-items-center text-white">Euismod Tortor Amet <i class="icons-arrow-next icons-size-x5 ml-2"></i></a>
            </div>
            <div class="col-12 col-md-3 gt-5 gt-md-0">
              <div class="pb-2 text-white">Suivez-nous :</div>
              <div class="d-flex">
                <div class="pr-2">
                  <button type="button" class="btn-rounded btn-rounded-white btn-color-gray"><i class="icons-twitter"></i></button>
                </div>
                <div class="pr-2">
                  <button type="button" class="btn-rounded btn-rounded-white btn-color-gray"><i class="icons-facebook"></i></button>
                </div>
                <div>
                  <button type="button" class="btn-rounded btn-rounded-white btn-color-gray"><i class="icons-circle-linkedin"></i></button>
                </div>
              </div>
            </div>
          </div>

          <div class="order-4 d-flex flex-column flex-md-row justify-content-between gb-6">
            <div class="row flex-column flex-md-row">
              <div class="col-auto pb-3 pb-md-0">
                <a href="#" class="text-gray300">Contact</a>
              </div>
              <div class="col-auto pb-3 pb-md-0">
                <a href="#" class="text-gray300">Plan du site</a>
              </div>
              <div class="col-auto pb-3 pb-md-0">
                <a href="#" class="text-gray300">Mentions légales</a>
              </div>
              <div class="col-auto pb-3 pb-md-0">
                <a href="#" class="text-gray300">Conditions d'utilisation</a>
              </div>
            </div>
            <div class="mastfooter-lang pt-2 pt-md-0">
              <a href="#" class="text-gray300 active"><img src="https://dummyimage.com/30x30/000/fff" class="gr-2">Fr</a>
              <a href="#" class="text-gray300"><img src="https://dummyimage.com/30x30/000/fff" class="d-none gr-3">En</a>
              <a href="#" class="text-gray300"><img src="https://dummyimage.com/30x30/000/fff" class="d-none gr-3">De</a>
            </div>
        </div>
      </div>
    </footer>
{% endexample %}
