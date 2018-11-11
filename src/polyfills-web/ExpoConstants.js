let manifest = require('../../app.json').expo;
let ctx = require.context('../', true);

if (manifest.icon) {
  manifest.iconUrl = ctx(manifest.icon.replace('src/',''));
}

export default { manifest };
