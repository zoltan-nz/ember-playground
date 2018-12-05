import storyPointer from 'ember-test-demo-app/utils/story-pointer';
import {module, test} from 'qunit';

module('Unit | Utility | story pointer');

// Replace this with your real tests.
test('it works', function (assert) {
  let result = storyPointer();
  assert.ok(result);
});

test('easy story', function (assert) {
  const result = storyPointer('easy');
  assert.equal(result, 2);
});

test('default', function (assert) {
  const result = storyPointer('asdf');
  assert.equal(result, 5);
});
