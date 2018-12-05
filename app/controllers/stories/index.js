import Controller from '@ember/controller';
import { inject as service } from '@ember/service';

export default Controller.extend({

  sprintCollector: service(),

  actions: {
    addToSprint(story) {
      this.get('sprintCollector').addStory(story)
    }
  }
});
