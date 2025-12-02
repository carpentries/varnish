# Changelog

## varnish 1.0.8 \[2025-12-02\]

### NEW FEATURES

- Add ORCID icons for new Cite This Lesson pages - PR
  [179](https://github.com/carpentries/varnish/pull/179)
- Add parrot SVGs in place of Glosario superscript terms - PR
  [177](https://github.com/carpentries/varnish/pull/177)
- Add config.yaml and template support for dropdown menus to provide
  links to multi-lingual lessons -
  PR[175](https://github.com/carpentries/varnish/pull/175) (implemented
  [@unode](https://github.com/unode))
- Add support for [Mermaid
  diagrams](https://css-tricks.com/making-mermaid-diagrams-in-markdown/) -
  PR [125](https://github.com/carpentries/varnish/pull/125) (implemented
  [@astroDimitrios](https://github.com/astroDimitrios))

### BUG FIXES

- Fix accordion underlining - PR
  [180](https://github.com/carpentries/varnish/pull/180)

## varnish 1.0.7 \[2025-08-07\]

### NEW FEATURES

- Adjust text and background colour for inline code blocks - PR
  [172](https://github.com/carpentries/varnish/pull/172)
  ([reported](https://github.com/carpentries/workbench/issues/97)
  [@gcapes](https://github.com/gcapes), implemented
  [@froggleston](https://github.com/froggleston))
- Fix CSS for accordion callout lists, fonts - PR
  [171](https://github.com/carpentries/varnish/pull/171)
  ([reported](https://github.com/carpentries/workbench/issues/98)
  [@gcapes](https://github.com/gcapes), fixed
  [@froggleston](https://github.com/froggleston))

### MISC

- Fix pak install when trying to parse .editorconfig files
  ([@froggleston](https://github.com/froggleston))
- Fix link anchor colour in dark mode - PR
  [169](https://github.com/carpentries/varnish/pull/169)
  ([@astroDimitrios](https://github.com/astroDimitrios))

## varnish 1.0.6 \[2025-05-06\]

### NEW FEATURES

- Add support for dark mode image adjustment
  ([@astroDimitrios](https://github.com/astroDimitrios),
  [\#153](https://github.com/carpentries/varnish/issues/153))

### MISC

- Update links to new Carpentries handbook
  ([@robadob](https://github.com/robadob)
  [\#164](https://github.com/carpentries/varnish/issues/164))
- Improve h3 and h4 font sizes on large resolutions
  ([@Sheargrub](https://github.com/Sheargrub)
  [\#165](https://github.com/carpentries/varnish/issues/165))

## varnish 1.0.5 \[2024-11-11\]

### NEW FEATURES

- Two new Sass variables (`default_font` and `mono_font`) have been
  created to simplify the process of changing the default font and
  monospace font. In particular, this can be helpful for forks defining
  their own theme ([@Bisaloo](https://github.com/Bisaloo)
  [\#151](https://github.com/carpentries/varnish/issues/151))
- Carpentry-specific favicons are now used automatically based on the
  value of the `carpentry:` value in the `config.yaml` file
  ([@Bisaloo](https://github.com/Bisaloo),
  [\#152](https://github.com/carpentries/varnish/issues/152), based on a
  report from [@zkamvar](https://github.com/zkamvar) in
  [\#33](https://github.com/carpentries/varnish/issues/33)).
- Addition of the `caution` callout
  ([@MttArmstrong](https://github.com/MttArmstrong)
  [\#149](https://github.com/carpentries/varnish/issues/149))
- Improve CSS rendering of checklists by removing the bullet point and
  increasing spacing between checkbox and label (reported
  [@jq-11](https://github.com/jq-11)
  [\#156](https://github.com/carpentries/varnish/issues/156), fixed
  [@froggleston](https://github.com/froggleston))
- Improve support for Ukrainian alphabet by moving from specific Mulish
  latin to Mulish regular font (reported
  [@olexandr-konovalov](https://github.com/olexandr-konovalov)
  [\#120](https://github.com/carpentries/varnish/issues/120),
  implemented
  [@olexandr-konovalov](https://github.com/olexandr-konovalov),
  [@froggleston](https://github.com/froggleston)
  [\#133](https://github.com/carpentries/varnish/issues/133))

### MISC

- Add [@MttArmstrong](https://github.com/MttArmstrong) as a new
  contributor - welcome!

## varnish 1.0.4 \[2024-08-23\]

### NEW FEATURES

- Two new Sass variables (`default_font` and `mono_font`) have been
  created to simplify the process of changing the default font and
  monospace font. In particular, this can be helpful for forks defining
  their own theme ([@Bisaloo](https://github.com/Bisaloo)
  [\#151](https://github.com/carpentries/varnish/issues/151))
- Carpentry-specific favicons are now used automatically based on the
  value of the `carpentry:` value in the `config.yaml` file
  ([@Bisaloo](https://github.com/Bisaloo),
  [\#152](https://github.com/carpentries/varnish/issues/152), based on a
  report from [@zkamvar](https://github.com/zkamvar) in
  [\#33](https://github.com/carpentries/varnish/issues/33)).

### BUG FIXES

- Fix dark mode figure caption bug
  ([@astroDimitrios](https://github.com/astroDimitrios)
  [\#145](https://github.com/carpentries/varnish/issues/145))
- Fix CSS styling issues with the Resources section and squashed
  overview headings([@froggleston](https://github.com/froggleston)
  [\#147](https://github.com/carpentries/varnish/issues/147))
- Replace old macOS runs-on action property with ubuntu-latest
  ([@froggleston](https://github.com/froggleston)
  [\#147](https://github.com/carpentries/varnish/issues/147))

## varnish 1.0.3 (2023-06-18)

### NEW FEATURES

- Add config.yaml configuration option `analytics` to support inclusion
  of the Carpentries Matomo web analytics tracking script, a
  user-supplied tracking script a la Google, or no option to turn off
  tracking (reported: [@fiveop](https://github.com/fiveop)
  <https://github.com/carpentries/varnish/issues/37>, implemented
  [@froggleston](https://github.com/froggleston))
- Add a dark mode so users can switch between text and background
  colours (implemented:
  [@astroDimitrios](https://github.com/astroDimitrios)
  <https://github.com/carpentries/varnish/pull/124>)

## varnish 1.0.2 (2023-04-10)

### NEW FEATURES

- The lesson page footer now supports either a CITATION or CITATION.cff
  file (reported: [@tobyhodges](https://github.com/tobyhodges),
  implemented: [@tobyhodges](https://github.com/tobyhodges),
  [\#122](https://github.com/carpentries/varnish/issues/122);
  [@froggleston](https://github.com/froggleston),
  <https://github.com/carpentries/sandpaper/pull/572>)
- Add support for tabbed content in lessons (reported:
  [@astroDimitrios](https://github.com/astroDimitrios), implemented:
  [@astroDimitrios](https://github.com/astroDimitrios),
  [@froggleston](https://github.com/froggleston),
  <https://github.com/carpentries/varnish/pull/121>,
  <https://github.com/carpentries/sandpaper/pull/571>,
  <https://github.com/carpentries/pegboard/pull/148> ).
- Replace the problematic search box with a much simpler and functional
  solution of taking the user to the All in One page where they can
  search using the browser’s native search (Ctrl-F) (reported:
  [@anenadic](https://github.com/anenadic)
  <https://github.com/carpentries/workbench/issues/8>, implemented:
  [@erinbecker](https://github.com/erinbecker)
  [\#131](https://github.com/carpentries/varnish/issues/131) ).

## varnish 1.0.1 (2023-12-14)

### BUG FIX

- Font sizes for headings of overview box, callouts, and accordions now
  use relative units instead of pixels. This will cause a slight change
  in the appearance of these headings, but they will be more consistent
  as the size of the window changes.

## varnish 1.0.0 (2023-12-13)

### MAJOR VERSION NOTE

We are bumping the major version number with this release because this
version of {varnish} now requires a new set of `translate` variables to
be passed (which are provided by sandpaper \>= 0.16.0). If these
variables do not exist, the template will contain no navigation text.

This breaking change is a concious decision. The alternative for this
was to conditinally include translations and fall back to their
hard-coded English text when they did not exist. This may seem like a
more reasonable choice, but it can lead to upstream bugs that are
difficult to detect (if translations are not working, it’s not clear
what is the cause if the text is in English: is it coming from {varnish}
or is it coming from {sandpaper}?) and it makes maintenance of these
navigational elements more difficult because we would have to update
them in two places.

### NEW FEATURES

- Translation of lesson elements is now incorporated. Translation
  strings within the HTML templates can be found be searching for the
  word `translate`. All variables are assumed to exist and are defined
  in The Workbench as PascalCase variables. In order for this version of
  {varnish} to work, it *requires* {sandpaper} version 0.16.0 or
  greater. **This is a breaking change** (reported:
  [@zkamvar](https://github.com/zkamvar),
  [\#104](https://github.com/carpentries/varnish/issues/104);
  implemented: [@zkamvar](https://github.com/zkamvar) and
  [@joelnitta](https://github.com/joelnitta),
  [\#105](https://github.com/carpentries/varnish/issues/105))
- Buttons to show/hide the sidebar and solutions now have extra data
  attributes that are used for the language used by the button when they
  are toggled. This is an improvement over hard-coding the phrases
  inside of the JavaScript.

### BUG FIX

- Overview box heading font sizes now scaled based on viewport size.
  This fixes issues where the heading would wrap in an ugly fashion.
  (reported: [@jd-foster](https://github.com/jd-foster),
  [\#83](https://github.com/carpentries/varnish/issues/83),
  [@drmownickles](https://github.com/drmownickles),
  <https://github.com/carpentries/workbench/issues/57>,
  [@rbavery](https://github.com/rbavery),
  <https://github.com/carpentries/workbench/issues/64>,
  [@robadob](https://github.com/robadob),
  [\#111](https://github.com/carpentries/varnish/issues/111); fixed:
  [@froggleston](https://github.com/froggleston),
  [\#109](https://github.com/carpentries/varnish/issues/109),
  [@robadob](https://github.com/robadob),
  [\#112](https://github.com/carpentries/varnish/issues/112)).
- Spacing and alignment of text improved in Software Carpentry logo.
  (reported: [@tobyhodges](https://github.com/tobyhodges),
  [\#107](https://github.com/carpentries/varnish/issues/107); fixed
  [@tobyhodges](https://github.com/tobyhodges),
  [\#110](https://github.com/carpentries/varnish/issues/110)).
- Lesson title collision with search box resolved. (reported:
  [@ocasia](https://github.com/ocasia),
  [\#84](https://github.com/carpentries/varnish/issues/84); fixed
  [@robadob](https://github.com/robadob),
  [\#113](https://github.com/carpentries/varnish/issues/113)).

### MISC

Added [@joelnitta](https://github.com/joelnitta) as a contributor. Added
[@robadob](https://github.com/robadob) as a contributor.

## varnish 0.4.0 (2023-11-29)

- life cycle icons are now displayed as badges for better visibility
- lessons that are stable with peer-reviewed doi releases will now have
  a doi badge displayed with a link to the publication.

## varnish 0.3.3

- Code blocks in narrative no longer have a white background on top of
  the grey background of the code block (fixed:
  [@zkamvar](https://github.com/zkamvar),
  [\#103](https://github.com/carpentries/varnish/issues/103)).
- The colour of the inline code has been changed from the bootstrap
  default to black (fixed: [@zkamvar](https://github.com/zkamvar),
  [\#103](https://github.com/carpentries/varnish/issues/103)).

## varnish 0.3.2

- Provide an improved contrast to inline code within callout blocks by
  setting the background-color to \#FFFFFF (reported:
  [@sarahmbrown](https://github.com/sarahmbrown),
  <https://github.com/carpentries/workbench/issues/76>
  ([\#99](https://github.com/carpentries/varnish/issues/99)); fixed
  [@froggleston](https://github.com/froggleston),
  [\#100](https://github.com/carpentries/varnish/issues/100))
- Back and forward navigation titles have been fixed to keep raw content
  and not escape characters (reported:
  [@tobyhodges](https://github.com/tobyhodges),
  <https://github.com/carpentries/workbench/issues/71>
  ([\#98](https://github.com/carpentries/varnish/issues/98)); fixed
  [@froggleston](https://github.com/froggleston),
  [\#101](https://github.com/carpentries/varnish/issues/101))

## varnish 0.3.1

- Lesson titles no longer escape ampersands (reported and fixed:
  [@Robadob](https://github.com/Robadob),
  [\#95](https://github.com/carpentries/varnish/issues/95))

## varnish 0.3.0

- Lesson overview pages are now supported (reported:
  [@zkamvar](https://github.com/zkamvar),
  <https://github.com/carpentries/workbench/issues/65>; implemented:
  [@zkamvar](https://github.com/zkamvar),
  [\#87](https://github.com/carpentries/varnish/issues/87)). These
  overview pages do not have a sidebar and have extra navigation back to
  home and the setup page in the menu bar.
- new ‘overview’ template is implemented to always contain links back to
  the home page.
- The `spoiler` dropdown item has been implemented to allow authors to
  create stand-alone accordions that will hide optinal content from
  users without using a `solution` class (implemented:
  [@tobyhodges](https://github.com/tobyhodges),
  [\#92](https://github.com/carpentries/varnish/issues/92))

### MISC

- The build process for css/js bundles is now self-contained in the node
  dev dependencies. Running `npm install` will install everything needed
  to re-compile the js and css.
- The README has been updated with instructions to build locally
- An `.editorconfig` file has been added to ensure the JS content is
  indented properly

## varnish 0.2.18

- Non-math elements on the same line will no longer be treated as math
  (reported: [@marklcrowe](https://github.com/marklcrowe),
  [\#88](https://github.com/carpentries/varnish/issues/88); fixed:
  [@zkamvar](https://github.com/zkamvar),
  [\#90](https://github.com/carpentries/varnish/issues/90))
- Bold italic text will now render correctly (reported:
  [@marklcrowe](https://github.com/marklcrowe),
  [\#89](https://github.com/carpentries/varnish/issues/89); fixed:
  [@zkamvar](https://github.com/zkamvar),
  [\#91](https://github.com/carpentries/varnish/issues/91))

## varnish 0.2.17

- The margin below the schedule table in instructor view is now 25px
  instead of 225px (reported: [@bencomp](https://github.com/bencomp),
  [\#81](https://github.com/carpentries/varnish/issues/81); fixed:
  [@bencomp](https://github.com/bencomp),
  [\#82](https://github.com/carpentries/varnish/issues/82)).

## varnish 0.2.16

- font weight for anything in definition terms is now inherited.

## varnish 0.2.15

- The Carpentries Lab logo has been updated (reported:
  [@tobyhodges](https://github.com/tobyhodges),
  [\#59](https://github.com/carpentries/varnish/issues/59); fixed:
  [@tobyhodges](https://github.com/tobyhodges),
  [\#76](https://github.com/carpentries/varnish/issues/76))
- The size for large logos are now capped at 64px so contributors do not
  need to force their logos to a particular size when exporting SVG
  (fixed: [@zkamvar](https://github.com/zkamvar),
  [\#76](https://github.com/carpentries/varnish/issues/76))

## varnish 0.2.14

- Workbench Beta Phase `Edit on GitHub` links no longer redirect people
  to the beta phase intermediate page during the second stage of the
  beta phase.

## varnish 0.2.13

- Table display CSS is set to `table` as opposed to `block`, thus
  ensuring it is represented correctly in the accessibility tree (see
  <https://developer.mozilla.org/en-US/docs/Web/CSS/display#tables>).
  (fixed: [@zkamvar](https://github.com/zkamvar),
  [\#74](https://github.com/carpentries/varnish/issues/74))
- Table headings are now bold to easily distinguish from table contents.
- Collapsing the sidebar no longer results in extra room at the bottom
  of the page.

## varnish 0.2.12

- Table formatting has been fixed to no longer include 100px padding in
  the first row (reported: [@marklcrowe](https://github.com/marklcrowe),
  [\#72](https://github.com/carpentries/varnish/issues/72); fixed:
  [@zkamvar](https://github.com/zkamvar), 4385602)
- All tables will now be striped for accessibility

## varnish 0.2.11

- Formatted print media to avoid breaking in important contexts (code
  blocks, callout blocks, instructor notes) and shows solutions and
  instructor notes. (reported: Anonymous,
  [\#70](https://github.com/carpentries/varnish/issues/70); fixed:
  [@zkamvar](https://github.com/zkamvar),
  [\#71](https://github.com/carpentries/varnish/issues/71))

## varnish 0.2.10

- Fix issue with bullet points in callouts being mis-aligned (reported:
  [@sstevens2](https://github.com/sstevens2),
  [\#68](https://github.com/carpentries/varnish/issues/68); fixed:
  [@zkamvar](https://github.com/zkamvar),
  [\#69](https://github.com/carpentries/varnish/issues/69))

## varnish 0.2.9

- temporarily turn off matomo analytics

## varnish 0.2.8

- Workbench Beta phase “Edit on GitHub” links are now formatted
  correctly. (reported: [@zkamvar](https://github.com/zkamvar),
  [\#65](https://github.com/carpentries/varnish/issues/65); fixed
  [@zkamvar](https://github.com/zkamvar),
  [\#66](https://github.com/carpentries/varnish/issues/66))

## varnish 0.2.7

- Lessons in different phases of the workbench beta phase will now have
  the URLs redirect to a site that explains the purpose of the phase.

## varnish 0.2.6

- For lessons that use `workbench-beta: true`, the feedback URL has
  changed from <https://github.com/carpentries/workbench/discussions/>
  to <https://carpentries.typeform.com/to/KRBl4IZM>, so that we can get
  more specific feedback.

## varnish 0.2.5

- Workbench Beta messaging has been modified to be more visible and to
  link back to the original lesson if possible.
- The icon for lessons in “alpha” has been updated so it has a yellow
  background with a grey glyph so that the icon shows up better.

## varnish 0.2.4

- Callout block titles have been improved: The underline height for
  titles have been fixed to not look wonky when titles have multiple
  lines (reported: [@anenadic](https://github.com/anenadic),
  [\#53](https://github.com/carpentries/varnish/issues/53); fixed
  [@zkamvar](https://github.com/zkamvar),
  [\#55](https://github.com/carpentries/varnish/issues/55)). Moreover,
  the text transformation will no longer affect `code` and `kbd`
  elements.
- Heading element sizes have been recoded to use relative units. There
  was not enough specification in the original CSS to properly
  distinguish between H3 and H4 elements; moreover, on tablet and mobile
  devices, the H1 heading looked smallter than the H2 heading due to a
  copy/paste error. This has been fixed by using relative calcualtions
  ([@zkamvar](https://github.com/zkamvar),
  [\#55](https://github.com/carpentries/varnish/issues/55))
- Sidebar navigation now says “Episodes” instead of “Expand” when
  collapsed so that it is less confusing for folks. (suggested by
  [@drmowinckels](https://github.com/drmowinckels),
  <https://github.com/carpentries/workbench/issues/16>
  ([\#47](https://github.com/carpentries/varnish/issues/47)); fixed by
  [@zkamvar](https://github.com/zkamvar),
  [\#56](https://github.com/carpentries/varnish/issues/56))
- The collapsed sidebar label no longer reverts to saying “collapse” on
  a new page.
- The hamburger menu for mobile devices now has a border so it’s more
  clear that it is a menu (suggested by
  [@drmowinckels](https://github.com/drmowinckels),
  <https://github.com/carpentries/workbench/issues/16>
  ([\#47](https://github.com/carpentries/varnish/issues/47)); fixed by
  [@zkamvar](https://github.com/zkamvar),
  [\#57](https://github.com/carpentries/varnish/issues/57))

## varnish 0.2.3

- Add support for displaying anchor links (requested
  [@fiveop](https://github.com/fiveop),
  <https://github.com/carpentries/sandpaper/issues/285> and
  [@anenadic](https://github.com/anenadic),
  <https://github.com/carpentries/workbench/issues/28>; added:
  [\#54](https://github.com/carpentries/varnish/issues/54) by
  [@zkamvar](https://github.com/zkamvar))

## varnish 0.2.2

- Formatting of list elements in the solutions and instructor notes now
  follows the same formatting as the rest of the content (reported:
  [\#51](https://github.com/carpentries/varnish/issues/51) by
  [@tobyhodges](https://github.com/tobyhodges), fixed:
  [\#52](https://github.com/carpentries/varnish/issues/52) by
  [@zkamvar](https://github.com/zkamvar))

## varnish 0.2.1

- The sidebar navigation in mobile and tablet views now includes all the
  information that was included in the navigation bar for the desktop
  mode. (reported:
  <https://github.com/carpentries/workbench/issues/16#issuecomment-1165307355>
  by [@Athanasiamo](https://github.com/Athanasiamo) and
  [\#49](https://github.com/carpentries/varnish/issues/49), fixed:
  [\#50](https://github.com/carpentries/varnish/issues/50) by
  [@zkamvar](https://github.com/zkamvar))

## varnish 0.2.0

- The sidebar state (expanded or collapsed) will now persist during
  navigation to another page in the same window/tab. Opening the site in
  a new window/tab will reset the sidebar state to expanded. (reported:
  [\#43](https://github.com/carpentries/varnish/issues/43) by
  [@anenadic](https://github.com/anenadic), fixed
  [\#46](https://github.com/carpentries/varnish/issues/46),
  [@zkamvar](https://github.com/zkamvar)). This fix uses the
  `sessionStorage` API.

## varnish 0.1.16

- CHAPTERS has been temporarily renamed to EPISODES to reduce cognative
  load between the webpage and the source folders

## varnish 0.1.15

- The search field has been disabled to avoid confusion. We have not yet
  enabled search as this requires further testing. Disabling the search
  field means that it is now more clear that search is not yet
  available. ([\#44](https://github.com/carpentries/varnish/issues/44)
  by [@zkamvar](https://github.com/zkamvar))

## varnish 0.1.14

- indicators for lesson development stage (pre-alpha, alpha, beta) have
  been added as `<abbr>` elements with a link to the appropriate section
  in the CDH and `title` elements that describe the purpose of the
  stage. Visually hidden text follows the `<abbr>` element for users who
  can not perceive the lesson visually
  ([\#39](https://github.com/carpentries/varnish/issues/39) by
  [@zkamvar](https://github.com/zkamvar), reviewed by
  [@tobyhodges](https://github.com/tobyhodges)).
- FIX: .lesson-title and .lesson-title-md are now inline-block elements

## varnish 0.1.13

- An alert for the workbench beta phase is implemented if the lesson has
  `workbench-beta: true` in the `config.yaml`.

## varnish 0.1.12

- dropdown navigation no longer is hidden by the sidebar on XXL screens;
  z-index of `nav.bottom-nav` set to 3. (reported:
  [\#35](https://github.com/carpentries/varnish/issues/35) by
  [@brownsarahm](https://github.com/brownsarahm), fixed:
  [\#36](https://github.com/carpentries/varnish/issues/36) by
  [@zkamvar](https://github.com/zkamvar))

## varnish 0.1.11

- blockquotes are now more clearly delineated from the rest of the
  content (reported:
  [\#27](https://github.com/carpentries/varnish/issues/27) by
  [@fiveop](https://github.com/fiveop), fixed:
  [\#31](https://github.com/carpentries/varnish/issues/31) by
  [@zkamvar](https://github.com/zkamvar))

## varnish 0.1.10

- lab and incubator logos are now available.

## varnish 0.1.9

- Fix missing pegboard version tag

## varnish 0.1.8

- custom workbench engines are now properly linked in the footer via the
  `sandpaper_cfg` `pegboard_cfg`, and `varnish_cfg` variables.
- code of conduct link now points to the `CODE_OF_CONDUCT.md` file so
  authors can update or modify their own code of conduct (NOTE: all
  Carpentries lessons MUST have a code of conduct that links to the
  Carpentries Code of Conduct as well as the reporting guidelines.

## varnish 0.1.7

- compile the changes from 0.1.6

## varnish 0.1.6

- Tables now scroll on overflow

## varnish 0.1.5

- The index page now has specific sections for schedule and setup that
  link to the `#schedule` and `#setup` anchors. This partially addresses
  <https://github.com/carpentries/sandpaper/issues/260>

## varnish 0.1.4

- Removed ” logo” suffix from the logo elements, as it is redundant
  <https://webaim.org/techniques/alttext/#logos>

## varnish 0.1.3

- Add small version of the carpentries logo

## varnish 0.1.2

- Add matmo analytics in the footer
  ([@fmichonneau](https://github.com/fmichonneau),
  [\#17](https://github.com/carpentries/varnish/issues/17))

## varnish 0.1.1

- Add LICENSE file clarifying MIT licensing

## varnish 0.1.0

- Breaking change; moving from the carpentries/styles theme to the new
  theme developed in 2021. Variables and layouts have changed
  significantly, so this package gains a significant update.

## varnish 0.0.0.9008

- instructor block placeholder added

## varnish 0.0.0.9007

- update css to use em and not px
- align logo with navbar
- add testing phase notification to navbar

## varnish 0.0.0.9006

- First tracked version of varnish
- updated links to engines in the footer
