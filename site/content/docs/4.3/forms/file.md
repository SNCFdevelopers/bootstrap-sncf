---
layout: docs
title: File browser
description: Use our custom file inputs for consistent cross-browser styling, built-in customization, and lightweight JavaScript.
group: forms
toc: false
---

{{< callout info >}}
The recommended plugin to animate custom file input: [bs-custom-file-input](https://www.npmjs.com/package/bs-custom-file-input), that's what we are using currently here in our docs.
{{< /callout >}}

The file input is the most gnarly of the bunch and requires additional JavaScript if you'd like to hook them up with functional *Choose file...* and selected file name text.

{{< example >}}
<div class="form-file">
  <input type="file" class="form-file-input" id="customFile">
  <label class="form-file-label" for="customFile">
    <span class="form-file-text">Choose file...</span>
    <span class="form-file-button">Browse</span>
  </label>
</div>
{{< /example >}}

Add the `disabled` attribute to the `<input>` and the custom markup will be updated to appear disabled.

{{< example >}}
<div class="form-file">
  <input type="file" class="form-file-input" id="customFileDisabled" disabled>
  <label class="form-file-label" for="customFileDisabled">
    <span class="form-file-text">Choose file...</span>
    <span class="form-file-button">Browse</span>
  </label>
</div>
{{< /example >}}

Longer placeholder text is truncated and an ellipsis is added when there's not enough space.

{{< example >}}
<div class="form-file">
  <input type="file" class="form-file-input" id="customFileLong">
  <label class="form-file-label" for="customFileLong">
    <span class="form-file-text">Lorem ipsum posuere consectetur est at lobortis nulla vitae elit libero a pharetra augue fusce dapibus tellus ac cursus commodo tortor mauris condimentum nibh ut fermentum massa justo sit amet risus cras mattis consectetur purus sit amet fermentum</span>
    <span class="form-file-button">Browse</span>
  </label>
</div>
{{< /example >}}

We hide the default file `<input>` via `opacity` and instead style the `<label>`, and declare a `width` and `height` on the `<input>` for proper spacing for surrounding content.
