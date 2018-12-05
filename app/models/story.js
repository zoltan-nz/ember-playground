import DS from 'ember-data';

export default DS.Model.extend({
  title: DS.attr(),
  description: DS.attr(),
  point: DS.attr('number'),
  epic: DS.belongsTo('epic'),

  isAddedToSprint: DS.attr('boolean', { defaultValue: false })
});
