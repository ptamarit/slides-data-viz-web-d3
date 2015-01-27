[![devDependency Status](https://david-dm.org/ptamarit/slides-data-viz-web-d3/dev-status.png)](https://david-dm.org/ptamarit/slides-data-viz-web-d3#info=devDependencies)

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

## License

The content of this project is licensed under the
[Creative Commons Attribution 4.0 International License](http://creativecommons.org/licenses/by/4.0/),
and the source code is licensed under the
[MIT license](http://opensource.org/licenses/MIT).

© [Pablo Tamarit](http://ptamarit.com)
