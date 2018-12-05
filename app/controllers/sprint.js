import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({
  sprintCollector: service(),

  actions: {
    removeStoryFromSprint(story) {
      this.get('sprintCollector').removeStory(story);
    }
  }
});
