(() => {

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll("pre.mermaid").forEach($el => {
      // if the second selector got a hit, reference the parent <pre>
      console.log($el)
      if ($el.tagName === "CODE")
        $el = $el.parentElement
      // put the Mermaid contents in the expected <div class="mermaid">
      // plus keep the original contents in a nice <details>
      $el.outerHTML = `
        <div class="mermaid">${$el.textContent}</div>
        <details>
          <summary>Diagram source</summary>
          <pre>${$el.textContent}</pre>
        </details>
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
