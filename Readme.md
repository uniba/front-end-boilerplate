
[![Build Status](https://travis-ci.org/uniba/front-end-boilerplate.svg?branch=master)](https://travis-ci.org/uniba/front-end-boilerplate)

# front-end boilerplate

[![Greenkeeper badge](https://badges.greenkeeper.io/uniba/front-end-boilerplate.svg)](https://greenkeeper.io/)

CLI based boilerplate for front-end. You don't need `Gruntfile.js` or `gulpfile.js`.

## Pre-requirements

- Node.js v4+

## Stack

- [webpack](https://webpack.js.org/)
- [PostCSS](http://postcss.org/)
  - [`stylelint`](http://stylelint.io/)
    - [`stylelint-config-standard`](https://github.com/stylelint/stylelint-config-standard)
  - [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext)
- [Babel](https://babeljs.io/)
  - [`babel-preset-env`](https://babeljs.io/docs/plugins/preset-env/)
  - [`babel-preset-stage-0`](https://babeljs.io/docs/plugins/preset-stage-0/)
- [ESLint](http://eslint.org/)
  - [`eslint-config-standard`](https://github.com/feross/eslint-config-standard) + semi-colon
- [AVA](https://github.com/sindresorhus/ava)

## Workflow

To bundle up your JavaScript and CSS.

    $ npm run build

To boot preview server.

    $ npm run watch
    $ open http://0.0.0.0:3000/
