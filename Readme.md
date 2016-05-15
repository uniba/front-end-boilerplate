
[![Build Status](https://travis-ci.org/uniba/front-end-boilerplate.svg?branch=master)](https://travis-ci.org/uniba/front-end-boilerplate)

# front-end boilerplate

CLI based boilerplate for front-end. You don't need `Gruntfile.js` or `gulpfile.js`.

## Pre-requirements

- Node.js v4+

## Stack

- [Browserify](http://browserify.org/)
  - [`babelify`](https://github.com/babel/babelify)
  - [`licensify`](https://github.com/twada/licensify)
- [PostCSS](http://postcss.org/)
  - [`sugarss`](https://github.com/postcss/sugarss) for parsing
  - [`precss`](https://github.com/jonathantneal/precss)
  - [`rucksack-css`](https://simplaio.github.io/rucksack/)
  - [`postcss-cssnext`](https://github.com/MoOx/postcss-cssnext)
- [Babel](https://babeljs.io/)
  - [`babel-preset-es2015`](https://babeljs.io/docs/plugins/preset-es2015/)
  - [`babel-preset-stage-3`](https://babeljs.io/docs/plugins/preset-stage-3/) for [`async` / `await`](https://github.com/tc39/ecmascript-asyncawait)
- [ESLint](http://eslint.org/)
  - [`eslint-config-standard`](https://github.com/feross/eslint-config-standard) + semi-colon
- [AVA](https://github.com/sindresorhus/ava)

## Workflow

To bundle up your JavaScript and CSS.

    $ npm run build

To boot preview server.

    $ npm run watch
    $ open http://0.0.0.0:3000/
