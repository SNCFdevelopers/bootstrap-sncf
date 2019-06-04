---
permalink: /docs/4.0/examples/forms/
profile:
  - name: Agent de secteur
  - name: Autre
unit:
  - name: Unité 1
    attr: selected
  - name: Unité 2
  - name: Unité 3
sector:
  - name: Secteur 100
  - name: Secteur 101
  - name: Secteur 102
  - name: Secteur 103
    attr: selected
---

<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">

    <title>Forms template</title>

    <link href="{{ site.baseurl }}/bootstrap-sncf.min.css" rel="stylesheet">
  </head>
  <body style="background-color: #fff">
    <main class="container">
      <h1 class="display-1 pt-5">Formulaire empilé (e.g. E-isolement : Ajouter un agent)</h1>
      <div class="row justify-content-center pt-5 pb-5">
        <div class="col-12 col-md-7">
          <div class="form-error mb-5">
            <span class="h2 text-uppercase">Oouups ! Vous avez une erreur</span>
            <ul class="mt-1 mb-0">
              <li>Veuillez vérifier l'adresse email saisie</li>
            </ul>
          </div>
          <div class="form-group">
            <label for="zip">N° de CP</label>
            {% include components/input.html type="text" id="zip" %}
          </div>
          <div class="form-group">
            <label for="firstname">Prénom</label>
            {% include components/input.html type="email" id="firstname" %}
          </div>
          <div class="form-group">
            <label for="lastname">Nom</label>
            {% include components/input.html type="email" id="lastname" %}
          </div>
          <div class="form-group">
            <label for="profile">Profil</label>
            {% include components/select-exclusive.html id="profile" placeholder="Sélectionner un profil" iconsize="icons-size-x75" items=page.profile %}
          </div>
          <div class="form-group">
            <label for="profile">Profil</label>
            {% include components/select-exclusive.html id="profile" placeholder="Sélectionner un profil" iconsize="icons-size-x75" items=page.profile %}
          </div>
          <div class="form-group">
            <label>Droit d'admin</label>
            {% include components/checkbox.html container="mb-2" id="alert" label="Réception des alertes" attr="checked" %}
            {% include components/checkbox.html container="mb-2" id="nfc" label="Initialisation de cartes NfC" attr="checked" %}
            {% include components/checkbox.html container="mb-2" id="history" label="Saisie de l'historique" %}
          </div>
          <div class="form-group mt-2">
            <label for="email">Email</label>
            {% include components/input.html container="is-invalid" type="email" id="email" attr="value='test@sncf.com' required" %}
            <div class="invalid-feedback">
              Veuillez vérifier l'adresse email saisie
            </div>
          </div>
          <div class="form-group">
            <label for="email">Téléphone</label>
            {% include components/input.html type="tel" size="10" id="phones_pattern2" attr="pattern='^(?:0|\(?\+33\)?\s?|0033\s?)[1-79](?:[\.\-\s]?\d\d){4}$' value='0623456798' required" %}
          </div>
          <div class="form-group">
            <label for="profile">Unité</label>
            {% include components/select-exclusive.html id="unit" placeholder="Sélectionner une unité" iconsize="icons-size-x75" items=page.unit %}
          </div>
          <div class="form-group">
            <label for="profile">Secteur</label>
            {% include components/select-exclusive.html id="unit" placeholder="Sélectionner un secteur" iconsize="icons-size-x75" items=page.sector %}
          </div>
          <div class="form-group pt-2">
            <button type="button" class="btn btn-primary mr-2">Ajouter</button>
            <button type="button" class="btn btn-secondary">Annuler</button>
          </div>
        </div>
      </div>
    </main>

    <script src="{{ site.baseurl }}/bootstrap-sncf.min.js"></script>
  </body>
</html>