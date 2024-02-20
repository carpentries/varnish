#!/usr/bin/env bash

mkdir -p inst/pkgdown/assets/assets/
vend=source/javascripts/vendor
cust=source/javascripts/custom

node_modules/.bin/uglifyjs ${vend}/jquery/jquery.js \
  ${vend}/bootstrap/bootstrap.bundle.min.js \
  ${vend}/jquery-visible/jquery.visible.js \
  ${vend}/feather-icons/feather.js \
  ${vend}/mermaid/mermaid.min.js \
  ${cust}/menu.js \
  ${cust}/mermaid.js \
  --compress \
  --output inst/pkgdown/assets/assets/scripts.js

node_modules/.bin/uglifyjs ${cust}/themetoggle.js \
  --compress \
  --output inst/pkgdown/assets/assets/themetoggle.js
