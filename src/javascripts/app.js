
import 'normalize.css';
import '../stylesheets/app.css';
import 'babel-polyfill';

import path from 'path';
import sub from './sub';

console.log(sub());
console.log(path.resolve('/foo/bar/baz', '../qux'));

async function fn() {
  console.log(await Promise.resolve(42));
}

fn();
