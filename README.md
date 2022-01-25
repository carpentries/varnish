# Template for Carpentries Lessons

This project is a work in progress template for carpentries lessons adapted from
[{pkgdown}]. There is no need to call this package directly, it is installed
via the [{sandpaper}] package.

The html templates use [mustache templating language](https://mustache.github.io/mustache.5.html)

To use this template in a [{pkgdown}] site, add the following to your
`_pkgdown.yml` file:

```yaml
title: {{ title }} # needed to set the site title
home:
  title: Home
  strip_header: true
  description: ~
template:
  package: varnish
  params:
    time: {{ time }}
    source: {{ source }}
    branch: {{ branch }}
    contact: {{ contact }}
    license: {{ license }}
    handout: {{ handout }}
    cp: {{ cp }}
    lc: {{ lc }}
    dc: {{ dc }}
    swc: {{ swc }}
    carpentry: {{ carpentry }}
    carpentry_name: {{ carpentry_name }}
    carpentry_icon: {{ carpentry_icon }}
    life_cycle: {{ life_cycle }}
    pre_alpha: {{ pre_alpha }}
    alpha: {{ alpha }}
    beta: {{ beta }}
```

Replace everything in the curly braces with a value. These are elements that are
constant across the entire site. Page-specific parameters are added via 
mustache.

## Parameters

The parameters used are a combination of global parameters stored in the
`_pkgdown.yaml` file and local parameters passed on to
`pkgdown::render_html()`.

### Global

(TODO: write descriptions of these parameters)

### Page-specific

(TODO: write descriptions of these parameters)

## HTML Templates

We have customized the following templates:

 - [content-chapter] displays the episodes for the lessons
 - [content-syllabus] is the landing page for the lessons
 - [content-extra] is used for pages that are not chapters and do not need
   positional navigation
 - [head] contains the metadata and script loading
 - [navbar] is a bit of misnomer, but it contains the sidebar navigation
 - [header] contains metadata and favicons
 - [footer] contains navigation, credits, and JSON metadata
 - [layout] pulls everything together

## CSS and JavaScript

The CSS and JavaScript used for the lessons are minified. Their sources live in
the [`source/`](source/) folder with directives to include their dependencies
(bootstrap, jquery, feather).

The minified versions are built via GitHub actions any time one of the source
files is changed. 

Instructions to build locally forthcoming.


[{pkgdown}]: https://r-lib.github.io/pkgdown
[{sandpaper}]: https://github.com/zkamvar/sandpaper
[content-chapter]: inst/pkgdown/templates/content-chapter.html
[content-syllabus]: inst/pkgdown/templates/content-syllabus.html
[content-extra]: inst/pkgdown/templates/content-extra.html
[head]: inst/pkgdown/templates/head.html
[header]: inst/pkgdown/templates/header.html
[layout]: inst/pkgdown/templates/layout.html
[navbar]: inst/pkgdown/templates/navbar.html
[footer]: inst/pkgdown/templates/footer.html
