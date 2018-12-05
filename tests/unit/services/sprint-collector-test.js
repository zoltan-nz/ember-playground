import { moduleFor, test } from 'ember-qunit';
import { run } from '@ember/runloop';
import EmberObject from '@ember/object';

let service;

moduleFor('service:sprint-collector', 'Unit | Service | sprint collector', {
  beforeEach() {
    service = this.subject();
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.ok(service);
});

test('addStory', function (assert) {
  const dummyStory = EmberObject.create({});

  assert.notOk(dummyStory.get('isAddedToSprint'));
  assert.equal(service.get('stories').length, 0);

  run(() => service.addStory(dummyStory));

  assert.equal(service.get('stories').length, 1)
  assert.ok(dummyStory.get('isAddedToSprint'));
});
