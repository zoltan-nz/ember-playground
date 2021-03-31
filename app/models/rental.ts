import Model, { attr } from '@ember-data/model';

const COMMUNITY_CATEGORIES = ['Condo', 'Townhouse', 'Apartment'];

export default class Rental extends Model {
  @attr('string')
  declare title: string;
  @attr()
  declare owner: string;
  @attr()
  declare city: string;

  @attr()
  declare location: string;

  @attr()
  declare category: string;

  @attr()
  declare image: string

  @attr()
  declare bedrooms: string;

  @attr()
  declare description: string;

  get type() {
    if (COMMUNITY_CATEGORIES.includes(this.category)) {
      return 'Community';
    } else {
      return 'Standalone';
    }
  }
}
