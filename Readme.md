
# front-end boilerplate

CLI based boilerplate for front-end. You don't need `Gruntfile.js` or `gulpfile.js`.

## Pre-requirements

- Node.js v4+

## Stack

- Browserify
  - `babelify`
  - `licensify`
- PostCSS
  - `sugarss` for parsing
  - `precss`
  - `rucksack-css`
  - `postcss-cssnext`
- Babel
  - `babel-preset-es2015`
  - `babel-preset-stage-3` for `async` / `await`
- ESLint
  - `eslint-config-standard` + semi-colon
- AVA

## Workflow

To bundle up your JavaScript and CSS.

    $ npm run build

To boot preview server.

    $ npm run watch
    $ open http://0.0.0.0:3000/
