# Template for Carpentries Lessons

This project is a work in progress template for carpentries lessons adapted from
[{pkgdown}]. There is no need to call this package directly, it is installed
via the [{sandpaper}] package.

The html templates use [mustache templating language](https://mustache.github.io/mustache.5.html)

To use this template in a [{pkgdown}] site, add the following to your
`_pkgdown.yml` file:

```yaml
template:
  package: varnish
  params:
    time: {{ time }}
    source: {{ source }}
    branch: {{ branch }}
    contact: {{ contact }}
    cp: {{ cp }}
    lc: {{ lc }}
    dc: {{ dc }}
    swc: {{ swc }}
    carpentry: {{ carpentry }}
    carpentry_name: {{ carpentry_name }}
    life_cycle: {{ life_cycle }}
    pre_alpha: {{ pre_alpha }}
    alpha: {{ alpha }}
    beta: {{ beta }}
```

Replace everything in the curly braces with a value. These are elements that are
constant across the entire site. Page-specific parameters are added via 
mustache.

## Templates 

At the moment, we have customized the following templates:

 - [title-body] displays the episodes for the lessons
 - [syllabus] is the landing page for the lessons
 - [header] contains metadata and favicons
 - [footer] contains navigation and credits


## CSS

The [carpentries css](inst/pkgdown/assets/css/lesson.css) is generated via
GitHub actions any time the [source scss file](inst/pkgdown/assets/css/lessons.scss)
is changed.

## TBD

 - create extra content page
 - document available variables for each template


[{pkgdown}]: https://r-lib.github.io/pkgdown
[{sandpaper}]: https://github.com/zkamvar/sandpaper
[title-body]: inst/pkgdown/templates/content-title-body.html
[syllabus]: inst/pkgdown/templates/content-syllabus.html
[header]: inst/pkgdown/templates/header.html
[footer]: inst/pkgdown/templates/footer.html
