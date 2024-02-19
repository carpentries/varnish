(() => {
  // Adapted from https://css-tricks.com/making-mermaid-diagrams-in-markdown/

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("pre.mermaid, pre>code.language-mermaid").forEach($el => {
      // if the second selector got a hit, reference the parent <pre>
      if ($el.tagName === "CODE")
        $el = $el.parentElement
      // put the Mermaid contents in the expected <div class="mermaid">
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
        </div>
      `
    })
  })

  // initialize Mermaid to [1] log errors, [2] have loose security for first-party
  // authored diagrams, and [3] respect a preferred dark color scheme
  mermaid.initialize({
    logLevel: "error", // [1]
    securityLevel: "loose", // [2]
    theme: (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) ?
      "dark" :
      "default" // [3]
  })

})()
