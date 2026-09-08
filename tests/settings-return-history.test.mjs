import {test} from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const source = fs.readFileSync(new URL('../app.js', import.meta.url), 'utf8');

test('Stripe settings return inserts an app history entry before settings', () => {
  assert.match(source, /function isSettingsRoute\(\) \{[\s\S]*?=== "\/settings";[\s\S]*?\}/);
  const match = source.match(/function establishSettingsReturnHistory\(\) \{([\s\S]*?)\n\}/);
  assert.ok(match, 'settings history helper should exist');
  const body = match[1];
  assert.match(body, /history\.replaceState\(\{ screen: "home", selected: null \}, "", "\/app\/"\)/);
  assert.match(body, /history\.pushState\(\{ screen: "settings", selected: null \}, "", settingsUrl\)/);
  assert.ok(source.indexOf('establishSettingsReturnHistory();') > source.indexOf('function render()'));
});

test('ordinary in-app back still uses browser history after the guard is installed', () => {
  assert.match(source, /if \(action === "back"\) \{\s+if \(history\.length > 1\) \{\s+history\.back\(\)/);
});
