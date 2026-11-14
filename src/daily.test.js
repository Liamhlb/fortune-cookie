import test from 'node:test';
import assert from 'node:assert/strict';
import { dayKey, nextMidnight, formatCountdown } from './daily.js';
import { dailyFortune } from './fortunes.js';

test('uses Zurich midnight regardless of device timezone', () => {
  assert.equal(dayKey(new Date('2026-11-14T22:59:59Z')), '2026-11-14');
  assert.equal(dayKey(new Date('2026-11-14T23:00:00Z')), '2026-11-15');
  assert.equal(dayKey(new Date('2026-07-14T22:00:00Z')), '2026-07-15');
  assert.notEqual(dailyFortune(new Date('2026-11-14T22:59:59Z')), dailyFortune(new Date('2026-11-14T23:00:00Z')));
});

test('unlock time follows summer, winter and year boundaries', () => {
  for (const [now, midnight] of [
    ['2026-11-14T12:00:00Z', '2026-11-14T23:00:00Z'],
    ['2026-07-14T12:00:00Z', '2026-07-14T22:00:00Z'],
    ['2026-12-31T12:00:00Z', '2026-12-31T23:00:00Z'],
    ['2026-11-14T22:59:59.999Z', '2026-11-14T23:00:00Z'],
    ['2026-11-14T23:00:00Z', '2026-11-15T23:00:00Z'],
  ]) assert.equal(new Date(nextMidnight(new Date(now))).toISOString(), new Date(midnight).toISOString());
});

test('handles the 23-hour spring day and 25-hour autumn day', () => {
  const spring = new Date('2026-03-28T23:00:00Z');
  const autumn = new Date('2026-10-24T22:00:00Z');
  assert.equal(nextMidnight(spring) - spring.getTime(), 23 * 3600000);
  assert.equal(nextMidnight(autumn) - autumn.getTime(), 25 * 3600000);
});

test('countdown rounds remaining seconds up and never becomes negative', () => {
  assert.equal(formatCountdown(3661000), '01:01:01');
  assert.equal(formatCountdown(1), '00:00:01');
  assert.equal(formatCountdown(-1), '00:00:00');
  assert.equal(formatCountdown(25 * 3600000), '25:00:00');
});
