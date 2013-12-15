/* global d3 */

(function(){
  'use strict';

  // When landing on the page, set "lang" to the current HTML page's language.
  try {
    localStorage.setItem('lang', d3.select('html').attr('lang'));
  } catch(e) { }

  // When clicking on "no", hide the bubble.
  d3.select('.lang-no')
    .on('click', function() {
      d3.event.preventDefault();
      d3.select('nav')
        .transition()
        .style('opacity', 0)
        .remove();
    });

  // When clicking on "yes", just before going to the other page,
  // set a variable telling us that the user just switched language.
  d3.select('.other-lang-yes')
    .on('click', function() {
      try {
        localStorage.setItem('langJustSwitched', 'true');
      } catch(e) { }
    });

  // If the user just switched language, hide the bubble.
  var langJustSwitched;
  try {
    langJustSwitched = localStorage.getItem('langJustSwitched');
  } catch(e) { }
  if (langJustSwitched) {
    d3.select('nav').remove();
    localStorage.removeItem('langJustSwitched'); // No need to try/catch this one.
  }

})();
