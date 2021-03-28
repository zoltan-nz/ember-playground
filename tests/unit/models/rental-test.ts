import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

module('Unit | Model | rental', function (hooks) {
  setupTest(hooks);

  test('it has right type', function (assert) {
    const store = this.owner.lookup('service:store');

    let rental = store.createRecord('rental', { category: 'Estate' });
    assert.equal(rental.type, 'Standalone');

    rental.category = 'Condo';
    assert.equal(rental.type, 'Community');
  });
});
