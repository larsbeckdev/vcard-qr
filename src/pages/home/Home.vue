<script setup></script>

<template>
  <div class="main-inner">
    <section class="container header-section">
      <h1>vCard → QR</h1>
    </section>

    <section class="container qr-preview-section">
      <h2>QR Preview</h2>

      <div id="qr" class="qr-box"></div>

      <a id="download" class="qr-download" download="vcard-qr.png">
        Download PNG
      </a>

      <details class="vcard-debug">
        <summary>vCard text (debug)</summary>
        <pre id="vcardText"></pre>
      </details>
    </section>

    <section class="section container vcard-section">
      <form id="vcard-form" class="vcard-form">
        <div class="form-row">
          <div class="form-group">
            <label for="firstName">First name</label>
            <input id="firstName" name="firstName" autocomplete="given-name" />
          </div>

          <div class="form-group">
            <label for="lastName">Last name</label>
            <input id="lastName" name="lastName" autocomplete="family-name" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="org">Company</label>
            <input id="org" name="org" autocomplete="organization" />
          </div>

          <div class="form-group">
            <label for="title">Job title</label>
            <input id="title" name="title" autocomplete="organization-title" />
          </div>
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="phone">Phone</label>
            <input id="phone" name="phone" autocomplete="tel" />
          </div>

          <div class="form-group">
            <label for="email">Email</label>
            <input id="email" name="email" autocomplete="email" />
          </div>
        </div>

        <div class="form-group">
          <label for="website">Website</label>
          <input id="website" name="website" autocomplete="url" />
        </div>

        <div class="form-group">
          <label for="street">Street</label>
          <input id="street" name="street" autocomplete="street-address" />
        </div>

        <div class="form-row">
          <div class="form-group">
            <label for="zip">ZIP</label>
            <input id="zip" name="zip" autocomplete="postal-code" />
          </div>

          <div class="form-group">
            <label for="city">City</label>
            <input id="city" name="city" autocomplete="address-level2" />
          </div>
        </div>

        <div class="form-group">
          <label for="country">Country</label>
          <input id="country" name="country" autocomplete="country-name" />
        </div>

        <div class="form-actions">
          <div class="form-actions-main">
            <button type="button" id="btn-generate" class="btn btn-primary">
              Generate QR
            </button>
            <button type="button" id="btn-clear" class="btn btn-secondary">
              Clear
            </button>
          </div>

          <div class="form-actions-import-export">
            <h3 class="form-actions-header-title">Import / Export</h3>
            <button type="button" id="btn-export" class="btn">Export</button>

            <label class="btn">
              Import
              <input
                id="import-file"
                type="file"
                accept="application/json"
                hidden />
            </label>
          </div>
        </div>
      </form>
    </section>
  </div>
</template>

<style scoped></style>
