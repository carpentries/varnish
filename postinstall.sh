#!/bin/bash
# after npm install, copy source into directories that we can compile from
set -eux pipefail
rm -rf source/stylesheets/bootstrap
cp -rf node_modules/bootstrap source/stylesheets/
rm -rf source/stylesheets/fontawesome

rm -rf source/javascripts/vendor
mkdir -p source/javascripts/vendor/jquery/
mkdir -p source/javascripts/vendor/jquery-visible/
mkdir -p source/javascripts/vendor/bootstrap/
mkdir -p source/javascripts/vendor/feather-icons/
# mkdir -p source/javascripts/vendor/mathjax/

cp -rf node_modules/jquery/dist/* source/javascripts/vendor/jquery/
# cp -rf node_modules/mathjax/es5/* source/javascripts/vendor/mathjax/
cp -rf node_modules/jquery-visible/* source/javascripts/vendor/jquery-visible/
cp -rf node_modules/bootstrap/dist/js/* source/javascripts/vendor/bootstrap/
cp -rf node_modules/feather-icons/dist/* source/javascripts/vendor/feather-icons/


#cp -rf node_modules/popper.js/dist/* source/javascripts/vendor/popper/
