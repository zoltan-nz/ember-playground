import { moduleForModel, test } from 'ember-qunit';

moduleForModel('story', 'Unit | Model | story', {
  // Specify the other units that are required for this test.
  needs: ['model:epic']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
