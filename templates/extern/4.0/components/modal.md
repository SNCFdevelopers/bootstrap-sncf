---
layout: docs
title: Modal
description: Use Bootstrap's JavaScript modal plugin to add dialogs to your site for lightboxes, user notifications, or completely custom content.
group: components
toc: true
permalink: /docs/4.0/components/modal
---

## How it works

Before getting started with Bootstrap's modal component, be sure to read the following as our menu options have recently changed.

- Modals are built with HTML, CSS, and JavaScript. They're positioned over everything else in the document and remove scroll from the `<body>` so that modal content scrolls instead.
- Clicking on the modal "backdrop" will automatically close the modal.
- Bootstrap only supports one modal window at a time. Nested modals aren't supported as we believe them to be poor user experiences.
- Modals use `position: fixed`, which can sometimes be a bit particular about its rendering. Whenever possible, place your modal HTML in a top-level position to avoid potential interference from other elements. You'll likely run into issues when nesting a `.modal` within another fixed element.
- Once again, due to `position: fixed`, there are some caveats with using modals on mobile devices. [See our browser support docs]({{ site.baseurl }}/docs/{{ site.docs_version }}/getting-started/browsers-devices/#modals-and-dropdowns-on-mobile) for details.
- Due to how HTML5 defines its semantics, [the `autofocus` HTML attribute](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) has no effect in Bootstrap modals. To achieve the same effect, use some custom JavaScript:

{% highlight js %}
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
{% endhighlight %}

Keep reading for demos and usage guidelines.

## Examples

### Modal components

Below is a _static_ modal example (meaning its `position` and `display` have been overridden). Included are the modal header, modal body (required for `padding`), and modal footer (optional). We ask that you include modal headers with dismiss actions whenever possible, or provide another explicit dismiss action.

<div class="bd-example bd-example-modal">
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="h1 modal-title">Modal title</h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse incidunt officia accusantium facilis dolorem maxime, id numquam, nulla itaque velit quos fugit non placeat laboriosam, doloremque quo earum repellendus nesciunt.</p>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

<div class="bd-example bd-example-modal">
  <div class="modal" tabindex="-1" role="dialog">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="h1 modal-title">Modal title</h5>
        </div>
        <div class="modal-body">
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Esse incidunt officia accusantium facilis dolorem maxime, id numquam, nulla itaque velit quos fugit non placeat laboriosam, doloremque quo earum repellendus nesciunt.</p>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-dismiss="modal">Annuler</button>
          <a href="#" class="btn btn-primary">Continuer</a>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal" tabindex="-1" role="dialog">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title">Modal title</h5>
      </div>
      <div class="modal-body">
        <p>Modal body text goes here.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-primary">Save changes</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Live demo

Toggle a working modal demo by clicking the button below. It will slide down and fade in from the top of the page.

{% callout warning %}
#### The modals should be vertically centered according to SNCF's guidelines.
You have to add `.modal-dialog-centered` to `.modal-dialog` to vertically center the modal.
{% endcallout %}

<div id="exampleModalLive" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLiveLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="exampleModalLiveLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <p>Woohoo, you're reading this text in a modal!</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalLive">
    Launch demo modal
  </button>
</div>

{% highlight html %}
<!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
  Launch demo modal
</button>

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Download a file

<div class="bd-example bd-example-modal">
  <div class="modal" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <h2 class="h1 modal-title text-center mb-4" id="exampleModalLabel3"><i class="icons-download text-primary" aria-hidden="true"></i></h2>
          <h1 class="text-center mb-4">Glissez et déposez le fichier ici</h1>
          <p class="text-center mb-4">ou</p>
          <button type="button" class="btn btn-primary">Parcourir les fichiers</button>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body text-center">
        <h2 class="h1 modal-title text-center mb-4" id="exampleModalLabel3"><i class="icons-download text-primary" aria-hidden="true"></i></h2>
        <h1 class="text-center mb-4">Glissez et déposez le fichier ici</h1>
        <p class="text-center mb-4">ou</p>
        <button type="button" class="btn btn-primary">Parcourir les fichiers</button>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Demo form

<div class="bd-example bd-example-modal">
  <div class="modal" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <div class="modal-body">
          <h5 class="h1 modal-title" id="exampleModalLabel4">Action lorem ipsum</h5>
          <p>Détails pour paramétrer l'action</p>
          <label for="inputEmail1">Titre</label>
          <div class="form-control-container mb-4">
            <input type="email" class="form-control " id="inputEmail1" placeholder="Renseignez le titre" >
            <span class="form-control-state"></span>
          </div>
          <label for="select1">Secteur</label>
          <div class="select-improved mb-4" data-component="select-exclusive">
            <div class="select-control">
              <div class="input-group" data-role="select-toggle">
                <div class="form-control is-placeholder" data-role="placeholder">Sélectionnez le secteur</div>
                <select class="sr-only" id="select1" data-role="input" tabindex="-1" aria-hidden="true">
                  <option selected disabled hidden>Sélectionnez le secteur</option>
                  <option data-id="1" >Sem Inceptos Tellus</option>
                  <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
                  <option data-id="3" >Amet Porta</option>
                  <option data-id="4" >Pharetra Fusce Venenatis</option>
                </select>
                <div class="input-group-append input-group-last">
                  <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
                  <i class="icons-arrow-down icon-size-x75" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="select-menu" data-role="menu">
                <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
                <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
                <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
                <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
              </div>
            </div>
          </div>
          <label for="select2">Localisation</label>
          <div class="select-improved" data-component="select-exclusive">
            <div class="select-control">
              <div class="input-group" data-role="select-toggle">
                <div class="form-control is-placeholder" data-role="placeholder">Sélectionnez le lieu</div>
                <select class="sr-only" id="select2" data-role="input" tabindex="-1" aria-hidden="true">
                  <option selected disabled hidden>Sélectionnez le lieu</option>
                  <option data-id="1" >Sem Inceptos Tellus</option>
                  <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
                  <option data-id="3" >Amet Porta</option>
                  <option data-id="4" >Pharetra Fusce Venenatis</option>
                </select>
                <div class="input-group-append input-group-last">
                  <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
                  <i class="icons-arrow-down icon-size-x75" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
              <div class="select-menu" data-role="menu">
                <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
                <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
                <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
                <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="row">
            <div class="col-6">
              <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
            </div>
            <div class="col-6">
              <button type="button" class="btn btn-primary btn-block">Continuer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{% highlight html %}
<div class="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered modal-sm" role="document">
    <div class="modal-content">
      <div class="modal-body">
        <h5 class="h1 modal-title" id="exampleModalLabel4">Action lorem ipsum</h5>
        <p>Détails pour paramétrer l'action</p>
        <label for="inputEmail1">Titre</label>
        <div class="form-control-container mb-4">
          <input type="email" class="form-control " id="inputEmail1" placeholder="Renseignez le titre" >
          <span class="form-control-state"></span>
        </div>
        <label for="select1">Secteur</label>
        <div class="select-improved mb-4" data-component="select-exclusive">
          <div class="select-control">
            <div class="input-group" data-role="select-toggle">
              <div class="form-control is-placeholder" data-role="placeholder">Sélectionnez le secteur</div>
              <select class="sr-only" id="select1" data-role="input" tabindex="-1" aria-hidden="true">
                <option selected disabled hidden>Sélectionnez le secteur</option>
                <option data-id="1" >Sem Inceptos Tellus</option>
                <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
                <option data-id="3" >Amet Porta</option>
                <option data-id="4" >Pharetra Fusce Venenatis</option>
              </select>
              <div class="input-group-append input-group-last">
                <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
                <i class="icons-arrow-down icon-size-x75" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="select-menu" data-role="menu">
              <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
              <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
              <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
              <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
            </div>
          </div>
        </div>
        <label for="select2">Localisation</label>
        <div class="select-improved" data-component="select-exclusive">
          <div class="select-control">
            <div class="input-group" data-role="select-toggle">
              <div class="form-control is-placeholder" data-role="placeholder">Sélectionnez le lieu</div>
              <select class="sr-only" id="select2" data-role="input" tabindex="-1" aria-hidden="true">
                <option selected disabled hidden>Sélectionnez le lieu</option>
                <option data-id="1" >Sem Inceptos Tellus</option>
                <option data-id="2" >Sollicitudin Adipiscing Mattis</option>
                <option data-id="3" >Amet Porta</option>
                <option data-id="4" >Pharetra Fusce Venenatis</option>
              </select>
              <div class="input-group-append input-group-last">
                <button class="btn btn-primary btn-only-icon" data-role="btn" type="button">
                <i class="icons-arrow-down icon-size-x75" aria-hidden="true"></i>
                </button>
              </div>
            </div>
            <div class="select-menu" data-role="menu">
              <button class="select-menu-item" data-role="value" data-target="1">Sem Inceptos Tellus</button>
              <button class="select-menu-item" data-role="value" data-target="2">Sollicitudin Adipiscing Mattis</button>
              <button class="select-menu-item" data-role="value" data-target="3">Amet Porta</button>
              <button class="select-menu-item" data-role="value" data-target="4">Pharetra Fusce Venenatis</button>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <div class="row">
          <div class="col-6">
            <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
          </div>
          <div class="col-6">
            <button type="button" class="btn btn-primary btn-block">Continuer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Tooltips and popovers

[Tooltips]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/tooltips/) and [popovers]({{ site.baseurl }}/docs/{{ site.docs_version }}/components/popovers/) can be placed within modals as needed. When modals are closed, any tooltips and popovers within are also automatically dismissed.

<div id="exampleModalPopovers" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalPopoversLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="exampleModalPopoversLabel">Modal title</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <h5>Popover in a modal</h5>
        <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute." data-container="#exampleModalPopovers">button</a> triggers a popover on click.</p>
        <hr>
        <h5>Tooltips in a modal</h5>
        <p><a href="#" class="tooltip-test" title="Tooltip" data-container="#exampleModalPopovers">This link</a> and <a href="#" class="tooltip-test" title="Tooltip" data-container="#exampleModalPopovers">that link</a> have tooltips on hover.</p>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModalPopovers">
    Launch demo modal
  </button>
</div>

{% highlight html %}
<div class="modal-body">
  <h5>Popover in a modal</h5>
  <p>This <a href="#" role="button" class="btn btn-secondary popover-test" title="Popover title" data-content="Popover body content is set in this attribute.">button</a> triggers a popover on click.</p>
  <hr>
  <h5>Tooltips in a modal</h5>
  <p><a href="#" class="tooltip-test" title="Tooltip">This link</a> and <a href="#" class="tooltip-test" title="Tooltip">that link</a> have tooltips on hover.</p>
</div>
{% endhighlight %}

### Using the grid

Utilize the Bootstrap grid system within a modal by nesting `.container-fluid` within the `.modal-body`. Then, use the normal grid system classes as you would anywhere else.

<div id="gridSystemModal" class="modal fade" tabindex="-1" role="dialog" aria-labelledby="gridModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="gridModalLabel">Grids in modals</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
      </div>
      <div class="modal-body">
        <div class="container-fluid bd-example-row">
          <div class="row">
            <div class="col-md-4">.col-md-4</div>
            <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
            <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
          </div>
          <div class="row">
            <div class="col-sm-9">
              Level 1: .col-sm-9
              <div class="row">
                <div class="col-8 col-sm-6">
                  Level 2: .col-8 .col-sm-6
                </div>
                <div class="col-4 col-sm-6">
                  Level 2: .col-4 .col-sm-6
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>

<div class="bd-example">
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#gridSystemModal">
  Launch demo modal
</button>
</div>

{% highlight html %}
<div class="modal-body">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-4">.col-md-4</div>
      <div class="col-md-4 ml-auto">.col-md-4 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-3 ml-auto">.col-md-3 .ml-auto</div>
      <div class="col-md-2 ml-auto">.col-md-2 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-md-6 ml-auto">.col-md-6 .ml-auto</div>
    </div>
    <div class="row">
      <div class="col-sm-9">
        Level 1: .col-sm-9
        <div class="row">
          <div class="col-8 col-sm-6">
            Level 2: .col-8 .col-sm-6
          </div>
          <div class="col-4 col-sm-6">
            Level 2: .col-4 .col-sm-6
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{% endhighlight %}

### Varying modal content

Have a bunch of buttons that all trigger the same modal with slightly different contents? Use `event.relatedTarget` and [HTML `data-*` attributes](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (possibly [via jQuery](https://api.jquery.com/data/)) to vary the contents of the modal depending on which button was clicked.

Below is a live demo followed by example HTML and JavaScript. For more information, [read the modal events docs](#events) for details on `relatedTarget`.

{% example html %}
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@mdo">Open modal for @mdo</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@fat">Open modal for @fat</button>
<button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal" data-whatever="@getbootstrap">Open modal for @getbootstrap</button>

<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <label for="recipient-name" class="col-form-label">Recipient:</label>
            <input type="text" class="form-control" id="recipient-name">
          </div>
          <div class="form-group">
            <label for="message-text" class="col-form-label">Message:</label>
            <textarea class="form-control" id="message-text"></textarea>
          </div>
        </form>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" class="btn btn-primary">Send message</button>
      </div>
    </div>
  </div>
</div>
{% endexample %}

{% highlight js %}
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
{% endhighlight %}

### Remove animation

For modals that simply appear rather than fade in to view, remove the `.fade` class from your modal markup.

{% highlight html %}
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="..." aria-hidden="true">
  ...
</div>
{% endhighlight %}

### Dynamic heights

If the height of a modal changes while it is open, you should call `$('#myModal').modal('handleUpdate')` to readjust the modal's position in case a scrollbar appears.

### Accessibility

Be sure to add `role="dialog"` and `aria-labelledby="..."`, referencing the modal title, to `.modal`, and `role="document"` to the `.modal-dialog` itself. Additionally, you may give a description of your modal dialog with `aria-describedby` on `.modal`.

### Embedding YouTube videos

Embedding YouTube videos in modals requires additional JavaScript not in Bootstrap to automatically stop playback and more. [See this helpful Stack Overflow post](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.

## Optional sizes

Modals have two optional sizes, available via modifier classes to be placed on a `.modal-dialog`. These sizes kick in at certain breakpoints to avoid horizontal scrollbars on narrower viewports.

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>
</div>

{% highlight html %}
<!-- Large modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Large modal</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Small modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Small modal</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{% endhighlight %}

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="h1 modal-title" id="myLargeModalLabel">Large modal</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="h1 modal-title" id="mySmallModalLabel">Small modal</h4>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
        ...
      </div>
    </div>
  </div>
</div>

## Usage

The modal plugin toggles your hidden content on demand, via data attributes or JavaScript. It also adds `.modal-open` to the `<body>` to override default scrolling behavior and generates a `.modal-backdrop` to provide a click area for dismissing shown modals when clicking outside the modal.

### Via data attributes

Activate a modal without writing JavaScript. Set `data-toggle="modal"` on a controller element, like a button, along with a `data-target="#foo"` or `href="#foo"` to target a specific modal to toggle.

{% highlight html %}
<button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
{% endhighlight %}

### Via JavaScript

Call a modal with id `myModal` with a single line of JavaScript:

{% highlight js %}$('#myModal').modal(options){% endhighlight %}

### Options

Options can be passed via data attributes or JavaScript. For data attributes, append the option name to `data-`, as in `data-backdrop=""`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 100px;">Name</th>
      <th scope="col" style="width: 50px;">Type</th>
      <th scope="col" style="width: 50px;">Default</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>backdrop</td>
      <td>boolean or the string <code>'static'</code></td>
      <td>true</td>
      <td>Includes a modal-backdrop element. Alternatively, specify <code>static</code> for a backdrop which doesn't close the modal on click.</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>Closes the modal when escape key is pressed</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>boolean</td>
      <td>true</td>
      <td>Puts the focus on the modal when initialized.</td>
    </tr>
    <tr>
      <td>show</td>
      <td>boolean</td>
      <td>true</td>
      <td>Shows the modal when initialized.</td>
    </tr>
  </tbody>
</table>

### Methods

{% capture callout-include %}{% include callout-danger-async-methods.md %}{% endcapture %}
{{ callout-include | markdownify }}

#### `.modal(options)`

Activates your content as a modal. Accepts an optional options `object`.

{% highlight js %}
$('#myModal').modal({
  keyboard: false
})
{% endhighlight %}

#### `.modal('toggle')`

Manually toggles a modal. **Returns to the caller before the modal has actually been shown or hidden** (i.e. before the `shown.bs.modal` or `hidden.bs.modal` event occurs).

{% highlight js %}$('#myModal').modal('toggle'){% endhighlight %}

#### `.modal('show')`

Manually opens a modal. **Returns to the caller before the modal has actually been shown** (i.e. before the `shown.bs.modal` event occurs).

{% highlight js %}$('#myModal').modal('show'){% endhighlight %}

#### `.modal('hide')`

Manually hides a modal. **Returns to the caller before the modal has actually been hidden** (i.e. before the `hidden.bs.modal` event occurs).

{% highlight js %}$('#myModal').modal('hide'){% endhighlight %}

#### `.modal('handleUpdate')`

Manually readjust the modal's position if the height of a modal changes while it is open (i.e. in case a scrollbar appears).

{% highlight js %}$('#myModal').modal('handleUpdate'){% endhighlight %}

#### `.modal('dispose')`

Destroys an element's modal.

### Events

Bootstrap's modal class exposes a few events for hooking into modal functionality. All modal events are fired at the modal itself (i.e. at the `<div class="modal">`).

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 150px;">Event Type</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.modal</td>
      <td>This event fires immediately when the <code>show</code> instance method is called. If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
    </tr>
    <tr>
      <td>shown.bs.modal</td>
      <td>This event is fired when the modal has been made visible to the user (will wait for CSS transitions to complete). If caused by a click, the clicked element is available as the <code>relatedTarget</code> property of the event.</td>
    </tr>
    <tr>
      <td>hide.bs.modal</td>
      <td>This event is fired immediately when the <code>hide</code> instance method has been called.</td>
    </tr>
    <tr>
      <td>hidden.bs.modal</td>
      <td>This event is fired when the modal has finished being hidden from the user (will wait for CSS transitions to complete).</td>
    </tr>
  </tbody>
</table>

{% highlight js %}
$('#myModal').on('hidden.bs.modal', function (e) {
  // do something...
})
{% endhighlight %}
