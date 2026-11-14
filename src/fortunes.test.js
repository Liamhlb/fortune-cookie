import test from 'node:test';
import assert from 'node:assert/strict';
import { dailyFortune, fortunes } from './fortunes.js';

test('contains all 60 distinct messages with their individual salutations', () => {
  assert.equal(fortunes.length, 60);
  assert.equal(new Set(fortunes.map(fortune => fortune.text)).size, 60);
  assert.equal(new Set(fortunes.map(fortune => fortune.title)).size, 60);
  for (const fortune of fortunes) {
    assert.match(fortune.title, /^My beloved .+\.\.\.$/);
    assert.ok(fortune.text.length > 50);
  }
});

test('starts with message 1 and shows all 60 messages in supplied order', () => {
  for (let i = 0; i < 60; i++) {
    assert.equal(dailyFortune(new Date(Date.UTC(2026, 10, 14 + i, 12))), fortunes[i]);
  }
  assert.equal(dailyFortune(new Date('2026-11-14T12:00:00Z')).title, 'My beloved dear princess...');
  assert.equal(dailyFortune(new Date('2027-01-12T12:00:00Z')).title, 'My beloved one and only...');
});

test('the daily message stays the same throughout a Zurich calendar day', () => {
  assert.equal(dailyFortune(new Date('2026-11-13T23:00:00Z')), dailyFortune(new Date('2026-11-14T22:59:59Z')));
});

test('changes the salutation and text together at Swiss midnight', () => {
  assert.equal(dailyFortune(new Date('2026-11-14T22:59:59Z')), fortunes[0]);
  assert.equal(dailyFortune(new Date('2026-11-14T23:00:00Z')), fortunes[1]);
  assert.notEqual(dailyFortune(new Date('2026-12-31T12:00:00Z')), dailyFortune(new Date('2027-01-01T12:00:00Z')));
});

test('repeats only after day 60 and uses the first note before the start date', () => {
  assert.equal(dailyFortune(new Date('2027-01-12T22:59:59Z')), fortunes[59]);
  assert.equal(dailyFortune(new Date('2027-01-12T23:00:00Z')), fortunes[0]);
  assert.equal(dailyFortune(new Date('2026-11-01T12:00:00Z')), fortunes[0]);
});
