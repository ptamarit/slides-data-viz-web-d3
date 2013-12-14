/* global d3 */

var pt = pt || {};

pt.slideIdToFunctions = {
  'example-loop-remove-result': {
    'init': function() {
      'use strict';
      pt.exampleLoop.init();
    },
    '-1': function() {
      'use strict';
      d3.json('../examples/data/example-2000.json', pt.exampleLoop.update);
    },
    0: function() {
      'use strict';
      d3.json('../examples/data/example-2005.json', pt.exampleLoop.update);
    }
  },

  'example-bind-result': {
    'init': function() {
      'use strict';
      pt.exampleBind.init();
    },
    '-1': function() {
      'use strict';
      d3.json('../examples/data/example-2000.json', pt.exampleBind.update);
    },
    0: function() {
      'use strict';
      d3.json('../examples/data/example-2005.json', pt.exampleBind.update);
    }
  }
};
