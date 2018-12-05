import { moduleFor, test } from 'ember-qunit';

moduleFor('controller:stories/index', 'Unit | Controller | stories/index', {
  // Specify the other units that are required for this test.
  needs: ['service:sprint-collector']
});

// Replace this with your real tests.
test('it exists', function(assert) {
  let controller = this.subject();
  assert.ok(controller);
});
