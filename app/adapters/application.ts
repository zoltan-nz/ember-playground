import JSONAPIAdapter from '@ember-data/adapter/json-api';
import DS from 'ember-data';

export default class ApplicationAdapter extends JSONAPIAdapter {
  namespace = 'api';

  buildURL(modelName?: string | number | undefined, id?: string | {} | any[] | null | undefined, snapshot?: any[] | DS.Snapshot<string | number> | null | undefined, requestType?: string | undefined, query?: {} | undefined): string {
    return `${super.buildURL(modelName, id, snapshot, requestType, query)}.json`;
  }
}
