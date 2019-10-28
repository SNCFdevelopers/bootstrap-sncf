---
layout: docs
title: Tableaux
description: Documentation et exemple pour la customisation _opt-in_ des tables (étant donné leur utilisation répandue dans les plugins JavaScript) avec Bootstrap.
group: content
toc: true
---

## Exemples

En raison de l'utilisation répandue des tables sur des widgets tiers tels que des calendriers et des sélecteurs de date, nous avons conçu nos tables de manière à être **opt-in**. Ajoutez simplement la classe de base `.table` à n'importe quelle `<table>`, puis étendez-la avec des styles personnalisés ou les différentes classes de modificateurs incluses dans Bootstrap.

En utilisant le code HTML de table le plus basic, voici comment les tables basées sur `.table` sont représentées dans le framework SNCF.

{{< example html >}}
<div class="table-wrapper">
  <div class="table-scroller dragscroll">
    <table class="table">
      <caption class="sr-only">Titre</caption>
      <thead class="thead thead-light">
        <tr>
          <th>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="examples-thead">
                <label class="custom-control-label" for="examples-thead"><span class="sr-only">Tout sélectionner</span></label>
              </div>
            </div>
          </th>
          <th scope="col"><div class="cell-inner">Nom</div></th>
          <th scope="col"><div class="cell-inner">Type</div></th>
          <th scope="col"><div class="cell-inner">Vers</div></th>
          <th scope="col"><div class="cell-inner">Agent</div></th>
          <th scope="col"><div class="cell-inner">Mise à jour</div></th>
          <th scope="col"><span class="sr-only">Actions</span></th>
        </tr>
      </thead>
      <tbody>
        {{< range.inline >}}
        {{- range $index,$item := (index .Site.Data "tables") -}}
        <tr>
          <td>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="examples-cell{{ $index }}">
                <label class="custom-control-label" for="examples-cell{{ $index }}"><span class="sr-only">{{ $item.name }}, type {{ $item.type }}, ver {{ $item.version }}</span></label>
              </div>
            </div>
          </td>
          <td><div class="cell-inner">{{ $item.name }}</div></td>
          <td><div class="cell-inner">{{ $item.type }}</div></td>
          <td><div class="cell-inner">{{ $item.version }}</div></td>
          <td><div class="cell-inner">{{ $item.agent }}</div></td>
          <td><div class="cell-inner">{{ $item.update }}</div></td>
          <td>
            <div class="cell-inner">
              <button class="btn btn-only-icon btn-transparent btn-favorite">
                <span class="sr-only">Favorite</span>
                <i class="icons-favorite-on icons-size-1x25" aria-hidden="true"></i>
              </button>
              <button class="btn btn-only-icon btn-transparent btn-color-gray">
                <span class="sr-only">Divers</span>
                <i class="icons-circle-information icons-size-1x25" aria-hidden="true"></i>
              </button>
              <div class="btn-group dropdown">
                <button class="btn btn-only-icon btn-transparent btn-color-gray" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" aria-controls="toggle{{ $index }}">
                  <span class="sr-only">Actions</span>
                  <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-right" id="examples-toggle{{ $index }}">
                  <button type="button" class="dropdown-item">Télécharger</button>
                  <button type="button" class="dropdown-item">Imprimer</button>
                  <button type="button" class="dropdown-item">Partager</button>
                </div>
              </div>
            </div>
          </td>
        </tr>
        {{- end -}}
        {{< /range.inline >}}
      </tbody>
    </table>
  </div>
</div>
{{< /example >}}

## Table avec la dernière cellule fixe

Ajoutez la classe `last-cell-fixed` à l'élément `table-scroller`. N'oubliez pas d'ajouter par conséquent les éléments `cell-placeholder` et `cell-fixed`.

{{< example html >}}
<div class="table-wrapper">
  <div class="table-scroller last-cell-fixed dragscroll">
    <table class="table">
      <caption class="sr-only">Titre</caption>
      <thead class="thead thead-light">
        <tr>
          <th>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="fixedlastrow-thead">
                <label class="custom-control-label" for="fixedlastrow-thead"><span class="sr-only">Tout sélectionner</span></label>
              </div>
            </div>
          </th>
          <th scope="col"><div class="cell-inner">Nom</div></th>
          <th scope="col"><div class="cell-inner">Type</div></th>
          <th scope="col"><div class="cell-inner">Vers</div></th>
          <th scope="col"><div class="cell-inner">Agent</div></th>
          <th scope="col"><div class="cell-inner">Mise à jour</div></th>
          <td class="cell-placeholder" aria-hidden="true"><span></span></td>
          <th class="cell-fixed"><span class="sr-only">Actions</span></th>
        </tr>
      </thead>
      <tbody class="tbody">
        {{< range.inline >}}
        {{- range $index,$item := (index .Site.Data "tables") -}}
        <tr>
          <td>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="fixedlastrow-cell{{ $index }}">
                <label class="custom-control-label" for="fixedlastrow-cell{{ $index }}"><span class="sr-only">{{ $item.name }}, type {{ $item.type }}, ver {{ $item.version }}</span></label>
              </div>
            </div>
          </td>
          <td><div class="cell-inner">{{ $item.name }}</div></td>
          <td><div class="cell-inner">{{ $item.type }}</div></td>
          <td><div class="cell-inner">{{ $item.version }}</div></td>
          <td><div class="cell-inner">{{ $item.agent }}</div></td>
          <td><div class="cell-inner">{{ $item.update }}</div></td>
          <td class="cell-placeholder"><span></span></td>
          <td class="cell-fixed">
            <div class="btn-group dropdown">
              <button class="btn btn-only-icon btn-transparent btn-color-gray" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-boundary="window" aria-controls="toggle1{{ $index }}">
                <span class="sr-only">Actions</span>
                <i class="icons-options icons-size-1x75" aria-hidden="true"></i>
              </button>
              <div class="dropdown-menu dropdown-menu-right" id="fixedlastrow-toggle{{ $index }}">
                <button type="button" class="dropdown-item">Télécharger</button>
                <button type="button" class="dropdown-item">Imprimer</button>
                <button type="button" class="dropdown-item">Partager</button>
              </div>
            </div>
          </td>
        </tr>
        {{- end -}}
        {{< /range.inline >}}
      </tbody>
    </table>
  </div>
</div>
{{< /example >}}

## Table avec groupes

{{< example html >}}
<div class="table-wrapper" data-component="table">
  <div class="table-scroller dragscroll">
    <table class="table">
      <caption class="sr-only">Titre</caption>
      <thead class="thead thead-light">
        <tr>
          <th scope="col"><div class="cell-inner cell-inner-350">Nom</div></th>
          <th scope="col"><div class="cell-inner">Type</div></th>
          <th scope="col"><div class="cell-inner">Vers</div></th>
          <th scope="col"><div class="cell-inner">Agent</div></th>
          <th scope="col"><div class="cell-inner">Mise à jour</div></th>
        </tr>
      </thead>
      <tbody class="tbody">
        {{< range.inline >}}
        {{- range $index,$item := (index .Site.Data "tables") -}}
        <tr class="trhead">
          <td class="cell-350 cell-caret" data-role="toggle-group-btn" data-id="{{ $index }}"><div class="cell-inner">{{ $item.name }}</div></td>
          <td><div class="cell-inner">{{ $item.type }}</div></td>
          <td><div class="cell-inner">{{ $item.version }}</div></td>
          <td><div class="cell-inner">{{ $item.agent }}</div></td>
          <td><div class="cell-inner">{{ $item.update }}</div></td>
        </tr>
        {{- range $subitem := (index $item.subrows) -}}
          <tr class="trgroup" data-trgroup="{{ $index }}">
            <td class="cell-350" colspan="5"><div class="cell-inner"><div class="text-truncate">{{ $subitem.name }}</div></div></td>
          </tr>
        {{- end -}}
        {{- end -}}
        {{< /range.inline >}}
      </tbody>
    </table>
  </div>
</div>
{{< /example >}}

{{< example html >}}
<div class="table-wrapper" data-component="table">
  <div class="table-scroller dragscroll">
    <table class="table">
      <caption class="sr-only">Titre</caption>
      <thead class="thead thead-light">
        <tr>
          <th scope="col">
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="tablegroups-thead">
                <label class="custom-control-label" for="tablegroups-thead"><span class="sr-only">étiquette</span></label>
              </div>
            </div>
          </th>
          <th scope="col"><div class="cell-inner cell-inner-350">Nom</div></th>
          <th scope="col"><div class="cell-inner">Type</div></th>
          <th scope="col"><div class="cell-inner">Vers</div></th>
          <th scope="col"><div class="cell-inner">Agent</div></th>
          <th scope="col"><div class="cell-inner">Mise à jour</div></th>
        </tr>
      </thead>
      <tbody class="tbody">
        {{< range.inline >}}
        {{- range $index,$item := (index .Site.Data "tables") -}}
        <tr class="trhead">
          <td>
            <div class="cell-inner">
              <div class="custom-control custom-checkbox custom-checkbox-alone">
                <input type="checkbox" class="custom-control-input" id="tablegroups-cell{{ $index }}">
                <label class="custom-control-label" for="tablegroups-cell{{ $index }}"><span class="sr-only">étiquette</span></label>
              </div>
            </div>
          </td>
          <td class="cell-350 cell-caret" data-role="toggle-group-btn" data-id="{{ $index }}"><div class="cell-inner">{{ $item.name }}</div></td>
          <td><div class="cell-inner">{{ $item.type }}</div></td>
          <td><div class="cell-inner">{{ $item.version }}</div></td>
          <td><div class="cell-inner">{{ $item.agent }}</div></td>
          <td><div class="cell-inner">{{ $item.update }}</div></td>
        </tr>
        {{- range $subitem := (index $item.subrows) -}}
          <tr class="trgroup" data-trgroup="{{ $index }}">
            <td>
              <div class="cell-inner">
                <div class="custom-control custom-checkbox custom-checkbox-alone">
                  <input type="checkbox" class="custom-control-input" id="tablegroups-cell2{{ $index }}">
                  <label class="custom-control-label" for="tablegroups-cell2{{ $index }}"><span class="sr-only">étiquette</span></label>
                </div>
              </div>
            </td>
            <td class="cell-350" colspan="5"><div class="cell-inner"><div class="text-truncate">{{ $subitem.name }}</div></div></td>
          </tr>
        {{- end -}}
        {{- end -}}
        {{< /range.inline >}}
      </tbody>
    </table>
  </div>
</div>
{{< /example >}}

## Lignes au fond alterné

Utilisez la classe `.table-striped` pour définir une alternance de la couleur de fond pour tous les éléments de `<tbody>`.

{{< example html >}}
<table class="table table-striped">
  <caption class="sr-only">Titre</caption>
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col"><div class="cell-inner">First</div></th>
      <th scope="col"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td><div class="cell-inner">Larry</div></td>
      <td><div class="cell-inner">the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Table avec bordure

Ajoutez `.table-bordered` pour avoir des bordures sur toute la table et ses cellules.

{{< example html >}}
<table class="table table-bordered">
  <caption class="sr-only">Titre</caption>
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col" id="cellfirst-t5"><div class="cell-inner">First</div></th>
      <th scope="col" id="celllast-t5"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td colspan="2" headers="cellfirst-t5 celllast-t5"><div class="cell-inner">Larry the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Survol des lignes

Ajotuez `.table-hover` pour activer un effet visuel au survol des lignes de `<tbody>`.

{{< example html >}}
<table class="table table-hover">
  <caption class="sr-only">Titre</caption>
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col" id="cellfirst-t6"><div class="cell-inner">First</div></th>
      <th scope="col" id="celllast-t6"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td colspan="2" headers="cellfirst-t6 celllast-t6"><div class="cell-inner">Larry the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Légendes

La fonction `<caption>` agît comme une légende à une table. Elle aide les utilisateurs avec lecteurs d'écran à trouver la table et comprendre de quoi il s'agît avant de décider s'ils veulent la lire.

{{< example html >}}
<table class="table">
  <caption>Liste des utilisateurs</caption>
  <thead>
    <tr>
      <th scope="col"><div class="cell-inner">#</div></th>
      <th scope="col" id="cellfirst-t6"><div class="cell-inner">First</div></th>
      <th scope="col" id="celllast-t6"><div class="cell-inner">Last</div></th>
      <th scope="col"><div class="cell-inner">Handle</div></th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row"><div class="cell-inner">1</div></th>
      <td><div class="cell-inner">Mark</div></td>
      <td><div class="cell-inner">Otto</div></td>
      <td><div class="cell-inner">@mdo</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">2</div></th>
      <td><div class="cell-inner">Jacob</div></td>
      <td><div class="cell-inner">Thornton</div></td>
      <td><div class="cell-inner">@fat</div></td>
    </tr>
    <tr>
      <th scope="row"><div class="cell-inner">3</div></th>
      <td colspan="2" headers="cellfirst-t6 celllast-t6"><div class="cell-inner">Larry the Bird</div></td>
      <td><div class="cell-inner">@twitter</div></td>
    </tr>
  </tbody>
</table>
{{< /example >}}

## Tables adaptatives (_responsives_)

Fonctionnant pour tous les [breakpoints]({{< docsref "/layout/overview" "#responsive-breakpoints" >}}), les classes `.table-wrapper` et `table-scroller` ajoutent des éléments de type _container_ pour avoir des tables scrollant horizontalement.

{{< example html >}}
<div class="table-wrapper" data-component="table">
  <div class="table-scroller dragscroll">
    <table class="table">
      <caption class="sr-only">Titre</caption>
      <thead>
        <tr>
          <th scope="col"><div class="cell-inner">N°</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
          <th scope="col"><div class="cell-inner">Titre</div></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <th scope="row"><div class="cell-inner">1</div></th>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
        </tr>
        <tr>
          <th scope="row"><div class="cell-inner">2</div></th>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
        </tr>
        <tr>
          <th scope="row"><div class="cell-inner">3</div></th>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
          <td><div class="cell-inner">Contenu de cellule</div></td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
{{< /example >}}
