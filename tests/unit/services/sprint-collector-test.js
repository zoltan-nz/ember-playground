import { moduleFor, test } from 'ember-qunit';
import { getOwner } from '@ember/application';
import { run } from '@ember/runloop';


let service;
let store;
let story1;

moduleFor('service:sprint-collector', 'Unit | Service | sprint collector', {
  // Specify the other units that are required for this test.
  needs: ['model:story'],

  beforeEach() {
    service = this.subject();
    store = getOwner(this).lookup('service:store');

    story1 = store.createRecord('story', { id: 1, title: 'example' });
  }
});

// Replace this with your real tests.
test('it exists', function(assert) {
  assert.ok(service);
});

test('addStory', function(assert) {
  assert.notOk(story1.get('isAddedToSprint'));
  assert.equal(service.get('stories').length, 0);

  run(() => service.addStory(story1));

  assert.equal(service.get('stories').length, 1)
  assert.ok(story1.get('isAddedToSprint'));
});
