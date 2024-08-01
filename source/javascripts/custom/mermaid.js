(() => {
  // Adapted from https://css-tricks.com/making-mermaid-diagrams-in-markdown/

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("pre.mermaid, pre>code.language-mermaid").forEach($el => {
      // Put the Mermaid contents in the expected <div class="mermaid">
      // plus keep the original contents in a nice <details>
      // Add a fig caption based on the accessible description
      var figcaption
      try {
        figcaption = $el.textContent.split('accDescr {')[1].split('}')[0]
      }
      catch (err) {
        figcaption = "Please enter an accessible description."
      }    
      $el.outerHTML = `
        <div class="mermaid-img-wrapper">
          <figure>
            <div class="mermaid">
            ${$el.textContent}
            </div>
            <figcaption>${figcaption}</figcaption>
          </figure>
          <details>
            <summary>Diagram source code</summary>
            <pre>${$el.textContent}</pre>
          </details>
          <div class="diagram-original-data" style="display: none">
            ${$el.textContent}
          </div>
        </div>
      `
    })
  })

  // The next section allows the diagrams to change theme
  // with the theme-toggle

  // Retreive the current session
  // needed as this JS is sep from the themetoggle.js
  // which gets loaded first to avoid a white flash on load
  try {
    var session = window.sessionStorage || {};
  } catch (e) {
    var session = {};
  }

  // Get the stored theme
  // Fallback to user preference if no stored theme
  const getPreferredTheme = () => {
    const storedTheme = session.getItem('theme')
    if (storedTheme) {
      return storedTheme
    }
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  // initialize Mermaid to [1] log errors, [2] have loose security for first-party
  // authored diagrams, and [3] respect the preferred colour scheme
  mermaid.initialize({
    logLevel: "error", // [1]
    securityLevel: "loose", // [2]
    theme: getPreferredTheme()
  })

  // Re-generate the diagrams on theme change
  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          // Reset the diagram code
          document.querySelectorAll(".mermaid-img-wrapper").forEach(el => {
            const original_code = el.querySelector(".diagram-original-data");
            var diagram_div = el.querySelector("div.mermaid");
            diagram_div.removeAttribute("data-processed");
            diagram_div.innerHTML = original_code.innerHTML;
          })
          // Get the new theme and re-initialise mermaid
          var new_theme = toggle.getAttribute('data-bs-theme-value')
          if (new_theme == 'auto') {
            new_theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
          }
          mermaid.initialize({theme: new_theme})
          mermaid.init({theme: new_theme})
        })
      })
  })

})()
