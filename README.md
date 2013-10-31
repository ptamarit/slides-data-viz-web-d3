## How to install
- Install node.js and npm.
- Run `[sudo] npm install -g grunt-cli` to install the grunt command line interface.
- Run `[sudo] npm install -g bower` to install bower.
- Run `bower install` to install all the needed front-end dependencies.
- Run `npm install` to install all the node modules needed for the grunt build.

## Grunt targets
- Run `grunt check` to execute all the checking tasks.
- Run `grunt` to execute all the checking tasks and start a local HTTP server on the source files.
- Run `grunt build` to execute all the checking tasks and build the distributable files.
- Run `grunt dist` to execute all the checking tasks, build the distributable files and start a local HTTP server on the distributable files.
- Run `grunt publish` to execute all the checking tasks, build the distributable files and publish them to your gh-pages branch on GitHub.
