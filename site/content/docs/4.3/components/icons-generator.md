---
layout: docs
title: Icons Generator
description: Examples and usage guidelines for icons.
group: components
toc: true
---
<div class="bd-content pr-5" data-component="icons-generator">
  <span></span>
  <h2>Configuration</h2>
  <div class="row justify-content-between mt-3">
    <div class="col-4">
      <div class="row">
      {{< colors.inline >}}
      {{ range (index .Site.Data "theme-colors") }}
        <div class="ig-color col-1 mb-3" data-role="color" data-color="{{ .hex }}">
          <div class="p-3 mb-2 bg-{{ .name }}"></div>
        </div>
      {{ end }}
      {{< /colors.inline >}}
      </div>
    </div>
    <div class="col col-2">
      <div class="form-group">
        {{< input type="number" id="withSize" placeholder="Taille des png/svg" >}}
      </div>
    </div>
    <div class="col">
      <div class="row">
        <div class="col">
          {{< checkbox name="withFont" id="withFont" label="FONT" >}}
        </div>
        <div class="col">
          {{< checkbox name="withPng" id="withPng" label="PNG" >}}
        </div>
        <div class="col">
          {{< checkbox name="withSvg" id="withSvg" label="SVG" >}}
        </div>
      </div>
    </div>
    <div class="col d-flex justify-content-end">
      <div>
        <button type="button" disabled="true" class="btn btn-primary" data-role="download">Download</button>
      </div>
    </div>
  </div>

  {{< icons.inline >}}
  <div class="bd-content ig-container" data-role="container">
    {{- range (index .Site.Data "icons-generator") -}}
      <span></span>
      <h2>{{ .name }}</h2>
      <div class="row mt-4 mb-1">
        <div class="col-12 pb-3">
          <button type="button" class="btn btn-primary" data-role="selectall" data-values='["{{- delimit (index .icons) `", "` -}}"]'>Tout sélectionner</button>
        </div>    
        {{- range (index .icons) -}}
          <div class="col-3 col-md-2 col-lg-1 mb-3">
            <button type="button" class="ig-button btn-rounded text-center mb-2" data-role="icon" data-icon="{{ . }}">
              <i class="icons-{{ . }} ig-icon" aria-hidden="true"></i>
            </button>
          </div>
        {{ end }}
      </div>
    {{ end }}
  </div>
{{< /icons.inline >}}
