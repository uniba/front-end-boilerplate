
import test from 'ava';

test('foo', (t) => {
  t.pass();
});

test('bar', async (t) => {
  t.is(await Promise.resolve('bar'), 'bar');
});
