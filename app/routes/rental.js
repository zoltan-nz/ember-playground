import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class RentalRoute extends Route {
  @service store;

  async model(params) {
    return await this.store.findRecord('rental', params.rental_id);
  }
}
