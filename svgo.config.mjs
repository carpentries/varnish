// SVGO v4 config for optimising static Mermaid SVG output.
//
// Mermaid diagrams in this site are rendered client-side by mermaid.js and are
// NOT passed through SVGO at runtime. This config is for any build step that
// optimises a static SVG exported from a Mermaid diagram (e.g. a "download as
// SVG" export, or a pre-rendered fallback image), so its styling survives
// optimisation intact.
//
// Run with something like: npx svgo --config svgo.config.mjs -i <in>.svg -o <out>.svg
export default {
  multipass: true,
  plugins: [
    {
      name: 'preset-default',
      params: {
        overrides: {
          // don't strip or rename IDs
          cleanupIds: false,
          removeUselessDefs: false,

          // don't drop rules that look "unused" in the static markup
          inlineStyles: false,
          minifyStyles: false,

          // Preserve accessibility attributes
          removeUnknownsAndDefaults: {
            keepAriaAttrs: true,
            keepRoleAttr: true,
          },
        },
      },
    },
  ],
};
