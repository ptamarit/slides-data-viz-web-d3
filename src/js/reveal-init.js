/* global Reveal, hljs */

Reveal.initialize({
  // Don't display controls in the bottom right corner
  controls: false,

  // Push each slide change to the browser history
  history: true,

  // Transition style
  transition: 'none', // default/cube/page/concave/zoom/linear/fade/none

  // Transition style for full page slide backgrounds
  backgroundTransition: 'none', // default/linear/none

  // Optional libraries used to extend on reveal.js
  dependencies: [
    {
      // This path is relative to the HTML file, not to this JS file.
      src: '../bower_components/reveal.js/plugin/highlight/highlight.js',
      async: true,
      callback: function() {
        'use strict';
        hljs.initHighlightingOnLoad();
      }
    }
  ]
});
