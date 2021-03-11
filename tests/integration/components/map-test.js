import { find, render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';
import ENV from 'ember-playground/config/environment';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

ENV.MAPBOX_ACCESS_TOKEN = 'pk.test';

module('Integration | Component | map', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders a map image for the specified parameters', async function (assert) {
    await render(hbs`
      <Map
        @lat="37.7797"
        @lng="-122.4184"
        @zoom="10"
        @width="150"
        @height="120"
      />
    `);

    assert
      .dom('.map img')
      .exists()
      .hasAttribute('alt', 'Map image at coordinates 37.7797,-122.4184')
      .hasAttribute('src')
      .hasAttribute('width', '150')
      .hasAttribute('height', '120');

    let { src } = find('.map img');

    assert.ok(src.includes(ENV.MAPBOX_ACCESS_TOKEN));
  });
});
