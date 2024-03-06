#!/usr/bin/env bash

mkdir -p inst/pkgdown/assets/assets/
vend=source/javascripts/vendor
cust=source/javascripts/custom

node_modules/.bin/uglifyjs ${vend}/jquery/jquery.js \
  ${vend}/bootstrap/bootstrap.js \
  ${vend}/jquery-visible/jquery.visible.js \
  ${vend}/feather-icons/feather.js \
  ${cust}/menu.js \
  ${cust}/tabs.js \
  --compress \
  --output inst/pkgdown/assets/assets/scripts.js

