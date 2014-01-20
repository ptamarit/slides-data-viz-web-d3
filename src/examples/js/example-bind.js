/* global d3 */

var pt = pt || {};

pt.exampleBind = pt.exampleBind || {};

pt.exampleBind.WIDTH = 640;
pt.exampleBind.HEIGHT = 480;
pt.exampleBind.svg = null;

pt.exampleBind.init = function () {
  'use strict';

  pt.exampleBind.svg = d3.select('#example-bind-result .placeholder')
    .append('svg')
    .attr('width', pt.exampleBind.WIDTH)
    .attr('height', pt.exampleBind.HEIGHT)
    .style('background', 'white');

  pt.exampleBind.svg
    .append('text')
    .attr('font-size', '40px')
    .attr('x', 10)
    .attr('y', 40);
};

pt.exampleBind.positionAndSizeCircle = function(circle) {
  'use strict';

  circle
    .attr('cx', function(d) {
      return d.age * 6; // 100 years old * 6 ~= 640
    })
    .attr('cy', function(d) {
      return pt.exampleBind.HEIGHT - d.height * 2; // 200 cm high * 2 ~= 480
    })
    .attr('r', function(d) {
      return d.weight;
    });
};

pt.exampleBind.update = function(error, dataset) {
  'use strict';

  if (error) {
    return pt.displayError(error);
  }

  pt.exampleBind.svg.select('text').text(dataset.year);

  var circles = pt.exampleBind.svg
    .selectAll('circle')
    // The unique key is the name.
    .data(dataset.people, function(d) { return d.name; });

  // UPDATE
  circles
    .transition()
    .duration(750)
    .call(pt.exampleBind.positionAndSizeCircle)
    // Necessary in case we switch quickly between data, and some circles started fading out but are not deleted yet.
    // Then, during the update of the circles, we set it back to the correct opacity.
    // This is because setting a new transition on an element is cancelling the previous transition.
    .style('opacity', 0.5);

  // ENTER
  circles
    .enter()
    .append('circle')
    .style('fill', 'black')
    .style('opacity', 0)
    .call(pt.exampleBind.positionAndSizeCircle)
    .transition()
    .duration(750)
    .style('opacity', 0.5);

  // ENTER + UPDATE
  // Nothing here...

  // EXIT
  circles
    .exit()
    .transition()
    .duration(750)
    .style('opacity', 0)
    .remove();
};
