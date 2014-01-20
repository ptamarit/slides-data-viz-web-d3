/* global d3 */

var pt = pt || {};

pt.exampleLoop = pt.exampleLoop || {};

pt.exampleLoop.WIDTH = 640;
pt.exampleLoop.HEIGHT = 480;
pt.exampleLoop.svg = null;

pt.exampleLoop.init = function() {
  'use strict';

  pt.exampleLoop.svg = d3.select('#example-loop-remove-result .placeholder')
    .append('svg')
    .attr('width', pt.exampleLoop.WIDTH)
    .attr('height', pt.exampleLoop.HEIGHT)
    .style('background', 'white');

  pt.exampleLoop.svg
    .append('text')
    .attr('font-size', '40px')
    .attr('x', 10)
    .attr('y', 40);
};

pt.exampleLoop.update = function(error, dataset) {
  'use strict';

  if (error) {
    return pt.displayError(error);
  }

  pt.exampleLoop.svg.select('text').text(dataset.year);

  pt.exampleLoop.svg.selectAll('circle').remove();

  for (var i = 0; i < dataset.people.length; i++) {
    var person = dataset.people[i];

    pt.exampleLoop.svg.append('circle')
      .attr('cx', person.age * 6) // 100 years old * 6 ~= 640
      .attr('cy', 480 - person.height * 2) // 200 cm high * 2 ~= 480
      .attr('r', person.weight)
      .attr('opacity', 0.5);
  }
};
