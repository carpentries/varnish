#!/usr/bin/env bash

echo "building assets"
mkdir -p inst/pkgdown/assets/assets/
cp -r source/fonts/ inst/pkgdown/assets/assets/fonts/
cp -r source/images/ inst/pkgdown/assets/assets/images/

sass -s compressed \
  source/stylesheets/styles.css.scss \
  inst/pkgdown/assets/assets/styles.css
