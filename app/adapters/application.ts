import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DS from 'ember-data';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(modelName?: string | number, id?: string | {} | any[] | null, snapshot?: any[] | DS.Snapshot<string | number> | null, requestType?: string, query?: {}): string {
    return `${super.buildURL(modelName, id, snapshot, requestType, query)}.json`;
  }
}
