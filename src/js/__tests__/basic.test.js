import indicator from '../hpIndicator';
import hpSorted from '../hpSorted';

test.each([
  [10, 'critical'],
  [49, 'wounded'],
  [99, 'healthy']
])('indicated for %i hp', (hp, expected) => {
  expect(indicator({name: 'tester', health: hp})).toBe(expected);
})

test('sorting with health', () => {
  let characters = [
    {name: 'мечник', health: 10},
    {name: 'маг', health: 100},
    {name: 'лучник', health: 80},
    {name: 'маг', health: 80}
  ];
  hpSorted(characters);
  for (let i = 1; i <= characters.lengts; i++) {
    expect(characters[i].health).toBeLessThanOrEqual(characters[i-1].health)
  }
})
