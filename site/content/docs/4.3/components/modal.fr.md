---
layout: docs
title: Fenêtres modales
description: Utilisez le plugin JavaScript modal de Bootstrap pour ajuster des boîtes de dialogue sur votre site pour les Lightbox, les notifications des utilisateurs ou un contenu entièrement personnalisé.
group: components
toc: true
---
## Description

Les alertes avec des fenêtres modales sont utilisées pour afficher des informations importantes au lecteur ou pour demander une confirmation de continuer une tâche. Le premier type d’alerte affiche un message et ne nécessite aucune prise de décision de la part de l'utilisateur. La fenêtre peut être fermée en cliquant sur le x ou en dehors du modal. Le second type nécessite que l'utilisateur réponde en choisissant de poursuivre ou non l'action.

## Comment ça marche

Avant de commencer avec le composant modal de Bootstrap, veillez à lire les informations suivantes car nos options de menu ont récemment été modifiées.

- Les modaux sont construits avec HTML, CSS et JavaScript. Ils sont positionnés par-dessus tout le reste du document et suppriment le défilement du `<body>` afin que le contenu de la fenêtre modale défile à la place.
- Un clic sur le «fond» de la fenêtre modale la fermera automatiquement.
- Bootstrap ne prend en charge qu’une fenêtre modale à la fois. Les modaux imbriqués ne sont pas pris en charge car nous pensons qu’ils nuisent à l'expérience utilisateur.
- Les fenêtres modales utilisent `position: fixed`, qui peut parfois rendre particulier le rendu. Dans la mesure du possible, placez votre code HTML modal au plus haut niveau pour éviter toute interférence éventuelle d'autres éléments. Vous rencontrerez probablement des problèmes lors de l’imbrication d’un fichier `.modal` dans un autre élément fixe.
- Encore une fois, en raison de la classe `position: fixed`,  l'utilisation de modaux sur des appareils mobiles pose certains problèmes.
- En raison de la manière dont HTML5 définit sa sémantique, [l'attribut HTML `autofocus`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#attr-autofocus) n'a aucun effet dans les fenêtres modales Bootstrap. Pour obtenir le même effet, utilisez du code JavaScript personnalisé :

{{% highlight js %}}
$('#myModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})
{{% /highlight %}}

Continuez la lecture pour voir les démonstrations et les consignes d'utilisation.

## Exemples

### Composants fenêtres modales classiques

Vous trouverez ci-dessous un exemple de fenêtre modale _statique_ (ce qui veut dire que `position` et `display` ont été surpassés). Sont inclus l'en-tête de la fenêtre modale, son corps principal (requis pour `padding`), et le pied de page (optionnel). Nous vous demandons d'inclure des en-têtes de mode avec des actions de rejet dès que possible ou de fournir une autre action explicite de renvoi.

<div class="bd-example bd-example-modal">
  <div class="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel1">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="h1 modal-title" id="exampleModalLabel1">Modal title</h5>
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

{{% highlight html %}}
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel2">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="exampleModalLabel2">Modal title</h5>
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
{{% /highlight %}}

<div class="bd-example bd-example-modal">
  <div class="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel3">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="h1 modal-title" id="exampleModalLabel3">Modal title</h5>
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

{{% highlight html %}}
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="h1 modal-title" id="exampleModalLabel4">Modal title</h5>
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
{{% /highlight %}}

### Démonstration

Testez la démo de la fenêtre modale en cliquant sur le bouton ci-dessous. Il va glisser vers le bas et se fondre dans le haut de la page.

{{% callout warning %}}
#### Les fenêtres modales doivent être centrées verticalement dans les guidelines SNCF.
Pour cela, vous devez ajouter `.modal-dialog-centered` à `.modal-dialog` pour centrer la fenêtre.
{{% /callout %}}

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

{{% highlight html %}}
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
{{% /highlight %}}

Vous pouvez également créer des fenêtres modales scrollables permettant de faire défiler le corps de la modale en ajoutant `.modal-dialog-scrollable` à `.modal-dialog`.

### Télécharger un fichier

<div class="bd-example bd-example-modal">
  <div class="modal" id="exampleModal3" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel5">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-body text-center">
          <div class="h1 modal-title text-center mb-4"><i class="icons-download text-primary" aria-hidden="true"></i></div>
          <h1 id="exampleModalLabel5" class="text-center mb-4">Glissez et déposez le fichier ici</h1>
          <p class="text-center mb-4">ou</p>
          <button type="button" class="btn btn-primary">Parcourir les fichiers</button>
        </div>
      </div>
    </div>
  </div>
</div>

{{% highlight html %}}
<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel6" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-body text-center">
        <div class="h1 modal-title text-center mb-4"><i class="icons-download text-primary" aria-hidden="true"></i></div>
        <h1 id="exampleModalLabel6" class="text-center mb-4">Glissez et déposez le fichier ici</h1>
        <p class="text-center mb-4">ou</p>
        <button type="button" class="btn btn-primary">Parcourir les fichiers</button>
      </div>
    </div>
  </div>
</div>
{{% /highlight %}}

### Formulaire dans une fenêtre modale

<div class="bd-example bd-example-modal">
  <div class="modal" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4">
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
                  <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
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
                  <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
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
          <div class="row no-gutters">
            <div class="col-6 pr-1">
              <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
            </div>
            <div class="col-6 pl-1">
              <button type="button" class="btn btn-primary btn-block">Continuer</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

{{% highlight html %}}
<div class="modal fade" id="exampleModal4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel4" aria-hidden="true">
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
                <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
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
                <i class="icons-arrow-down icons-size-x75" aria-hidden="true"></i>
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
        <div class="row no-gutters">
          <div class="col-6 pr-1">
            <button type="button" class="btn btn-secondary btn-block" data-dismiss="modal">Annuler</button>
          </div>
          <div class="col-6 pl-1">
            <button type="button" class="btn btn-primary btn-block">Continuer</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
{{% /highlight %}}

### Utiliser la grille

Utilisez le système de grille Bootstrap dans une fenêtre modale en imbriquant `.container-fluid` dans le `.modal-body`. Ensuite, utilisez les classes normales du système de grille comme vous le feriez n'importe où ailleurs.

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

{{% highlight html %}}
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
{{% /highlight %}}

### Variation du contenu de la fenêtre modale

Vous avez plusieurs boutons qui déclenchent tous la même fenêtre modale avec un contenu légèrement différent ? Utilisez `event.relatedTarget` et les [attributs HTML `data-*`](https://developer.mozilla.org/en-US/docs/Learn/HTML/Howto/Use_data_attributes) (éventuellement [via jQuery](https://api.jquery.com/data/)) pour modifier le contenu de la fenêtre modale en fonction du bouton sur lequel vous avez cliqué.

Vous trouverez ci-dessous une démonstration suivie d'un exemple HTML et JavaScript. Pour davantage d'informations, [lisez la documentation relatifive aux événéments](#events) pour des détails sur `relatedTarget`.

{{% example html %}}
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
{{% /example %}}

{{% highlight js %}}
$('#exampleModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('whatever') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('.modal-title').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})
{{% /highlight %}}

### Supprimer l'animation

Pour les fenêtres modales qui apparaissent simplement plutôt que d'être fondu à l'ouverture, supprimez la classe `fade`.

{{% highlight html %}}
<div class="modal" tabindex="-1" role="dialog" aria-labelledby="..." aria-hidden="true">
  ...
</div>
{{% /highlight %}}

### Hauteurs dynamiques
Si la hauteur d'une fenêtre modale change alors qu'il est ouvert, vous devez appeler `$('#myModal').modal('handleUpdate')` pour réajuster sa position si une barre de défilement apparaît.

### Accessibilité

Assurez-vous d'ajouter `role="dialog"` et `aria-labelledby="..."`, en référençant le titre de la modale, à `.modal`, et `role="document"` à la `.modal-dialog` même. De plus, vous pouvez décrire votre modale avec `aria-describedby` sur `.modal`.

### Intégration de vidéos YouTube

L'intégration de vidéos YouTube dans des modaux nécessite du JavaScript supplémentaire, pas dans Bootstrap, pour arrêter automatiquement la lecture, etc. [Voir cette publication Stack Overflow pour plus d'informations](https://stackoverflow.com/questions/18622508/bootstrap-3-and-youtube-in-modal) for more information.

## Options de tailles

Les modales ont deux tailles optionnelles, disponibles via des classes de modificateurs pour être placées dans un `.modal-dialog`. Ces tailles entrent en jeu à certains breakpoints, pour éviter les barres de défilement horizontales dans les fenêtres plus étroites (sur mobile par exemple).

<div class="bd-example">
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Modale extra grande</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Grande modale</button>
  <button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Petite modale</button>
</div>

{{% highlight html %}}
<!-- Modale extra grande -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-xl">Modale extra grande</button>

<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Grande modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-lg">Grande modale</button>

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>

<!-- Petite modal -->
<button type="button" class="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm">Petite modale</button>

<div class="modal fade bd-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-sm">
    <div class="modal-content">
      ...
    </div>
  </div>
</div>
{{% /highlight %}}

<div class="modal fade bd-example-modal-xl" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="h1 modal-title" id="myLargeModalLabel">Modale extra grande</h4>
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

<div class="modal fade bd-example-modal-lg" tabindex="-1" role="dialog" aria-labelledby="myLargeModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-lg">
    <div class="modal-content">

      <div class="modal-header">
        <h4 class="h1 modal-title" id="myLargeModalLabel">Grande modale</h4>
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
        <h4 class="h1 modal-title" id="mySmallModalLabel">Petite modale</h4>
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

## Utilisation

Le plugin de la fenêtre modale bascule votre contenu caché à la demande, via des attributs de données data ou JavaScript. Il ajoute également `.modal-open` au `<body>` pour remplacer le comportement de défilement par défaut et génère un `.modal-backdrop` pour réaliser la zone de clic en fond, permettant la fermeture de la modale lorsque vous cliquez sur ce même fond.

### Via des attributs de données

Activer une modale sans écrire de JavaScript. Définissez `data-toggle="modal"` sur un élément du contrôleur, comme un bouton, avec `data-target="#foo"` ou `href="#foo"` pour cibler une modale spécifique à basculer.

{{% highlight html %}}
<button type="button" data-toggle="modal" data-target="#myModal">Launch modal</button>
{{% /highlight %}}

### Via JavaScript

Appelez une modale avec l'id `myModal` avec une seule ligne de JavaScript:

{{% highlight js %}}$('#myModal').modal(options){{% /highlight %}}

### Options

Les options peuvent être passées via des attributs de données ou du JavaScript. Pour les attributs de données, ajoutez le nom de l'option à `data-`, comme dans `data-backdrop=""`.

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
      <td>Inclut un élément modal-backdrop. Vous pouvez également spécifier <code>static</code> pour un fond qui ne ferme pas la modale au clic.</td>
    </tr>
    <tr>
      <td>keyboard</td>
      <td>boolean</td>
      <td>true</td>
      <td>Ferme la modale lorsque la touche Echap est pressée.</td>
    </tr>
    <tr>
      <td>focus</td>
      <td>boolean</td>
      <td>true</td>
      <td>Met le focus sur la modale une fois initialisée.</td>
    </tr>
    <tr>
      <td>show</td>
      <td>boolean</td>
      <td>true</td>
      <td>Affiche la modale une fois initialisée.</td>
    </tr>
  </tbody>
</table>

### Méthodes

{{% callout danger %}}
{{% partial "callout-danger-async-methods.md" %}}
{{% /callout %}}

#### `.modal(options)`

Active votre contenu en tant que fenêtre modale. Accepte les options `object`.

{{% highlight js %}}
$('#myModal').modal({
  keyboard: false
})
{{% /highlight %}}

#### `.modal('toggle')`

Alterner l'ouverture d'une modale manuellement. **Le retour de la méthode intervient avant que la modale ait été ouverte ou fermée** (par exemple, avant les évènements `shown.bs.modal` ou `hidden.bs.modal`).

{{% highlight js %}}$('#myModal').modal('toggle'){{% /highlight %}}

#### `.modal('show')`

Ouvre manuellement une modale. **Le retour de la méthode intervient avant que la modale ait été ouverte** (par exemple, avant l'évènement `shown.bs.modal`).

{{% highlight js %}}$('#myModal').modal('show'){{% /highlight %}}

#### `.modal('hide')`

Ferme manuellement une modale. **Le retour de la méthode intervient avant que la modale ait été fermée** (par exemple, avant l'évènement `hidden.bs.modal`).

{{% highlight js %}}$('#myModal').modal('hide'){{% /highlight %}}

#### `.modal('handleUpdate')`

Ajuste manuellement la position de la modale si sa hauteur change pendant qu'elle est visible (par exemple, si une barre de scroll apparaît).

{{% highlight js %}}$('#myModal').modal('handleUpdate'){{% /highlight %}}

#### `.modal('dispose')`

Détruit un élément de type modale.

### Évènements

Les classes des modales de Bootstrap exposent quelques évènements de façon à capturer certaines fonctionnalités. Tous ces évènements sont déclenchés au niveau de la modale elle-même (par exemple, à `<div class="modal">`).

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th scope="col" style="width: 150px;">Type d'évènement</th>
      <th scope="col">Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>show.bs.modal</td>
      <td>Cet évènement est déclenché immédiatement quand l'instance <code>show</code> est appelée. Si c'est causé par un click, l'élément cliqué est disponible comme <code>relatedTarget</code>, propriété de l'évènement.</td>
    </tr>
    <tr>
      <td>shown.bs.modal</td>
      <td>Cet évènement est déclenché quand la modale a été rendue visible à l'utilisateur, transitions CSS terminées). Si c'est causé par un click, l'élément cliqué est disponible comme <code>relatedTarget</code>, propriété de l'évènement.</td>
    </tr>
    <tr>
      <td>hide.bs.modal</td>
      <td>Cet évènement est déclenché immédiatement quand l'instance <code>hide</code> est appelée.</td>
    </tr>
    <tr>
      <td>hidden.bs.modal</td>
      <td>Cet évènement est déclenché quand la modale a terminé d'être masquée à l'utilisateur, fermée, transitions CSS terminées.</td>
    </tr>
  </tbody>
</table>

{{% highlight js %}}
$('#myModal').on('hidden.bs.modal', function (e) {
  // fait quelque chose...
})
{{% /highlight %}}
