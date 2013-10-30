/* global console */

var pt = pt || {};

pt.displayError = function(error) {
  'use strict';

  if (error == null) {
    console.warn('Please call pt.displayError() only when the error is not null. Cheers!');
    return;
  }

  console.error(error);

  var errorMessage = 'Oops, looks like we can\'t retreive data properly!\n\n';

  if (window.location.protocol === 'file:') {
    errorMessage += 'What about trying to display this page via localhost instead? ' +
      'You can start a local server by running \'grunt connect\'.\n\nFingers crossed!';
  } else {
    errorMessage += 'Please check the developer console to see if there\'s something ' +
      'interesting there...\n\nSorry about that.';
  }

  window.alert(errorMessage);
};
