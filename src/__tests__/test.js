import healthStatus from '../main';

test('Helthbar status function', () => {
  const unitsList = [
    { name: 'мечник', health: 10 },
    { name: 'маг', health: 100 },
    { name: 'лучник', health: 50 },
  ];
  expect(healthStatus(unitsList[0])).toBe('critical');
  expect(healthStatus(unitsList[1])).toBe('healthy');
  expect(healthStatus(unitsList[2])).toBe('wounded');
});
