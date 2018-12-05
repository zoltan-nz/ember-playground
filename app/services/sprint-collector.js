import Service from '@ember/service';

export default Service.extend({

  stories: null,

  init() {
    this._super(...arguments);

    this.set('stories', [])
  },

  addStory(story) {
    this.get('stories').pushObject(story);
    story.set('isAddedToSprint', true);
  },

  removeStory(story) {
    story.set('isAddedToSprint', false);
    this.get('stories').popObject(story);
  }
});
