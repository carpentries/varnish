#!/usr/bin/env bash

mkdir -p inst/pkgdown/assets/assets/{fonts,images}
cp -r source/fonts/* inst/pkgdown/assets/assets/fonts/
cp -r source/images/* inst/pkgdown/assets/assets/images/

node_modules/.bin/sass -s compressed \
  source/stylesheets/styles.css.scss \
  inst/pkgdown/assets/assets/styles.css
