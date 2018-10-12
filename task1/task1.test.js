import task1 from './task1.js';

it('should parse single number', () => {
  expect(task1('5')).toBe([[5, 5]]);
});
it('should parse multiple numbers', () => {
  expect(task1('5,10')).toBe([[5, 5], [10, 10]]);
});
it('should parse single range', () => {
  expect(task1('1-5')).toBe([[1, 5]]);
});
it('should parse multiple ranges', () => {
  expect(task1('1-5, 10-15')).toBe([[1, 5],[10, 15]]);
});
it('should parse simple string with numbers and ranges', () => {
  expect(task1('1-3,5,8-10,20')).toBe([[1, 3], [5, 5], [8, 10], [20, 20]]);
});
it('should squash numbers if can', () => {
  expect(task1('1,2,3,4,5,4-10')).toBe([[1, 10]]);
});
it('should squash crossed ranges', () => {
  expect(task1('1-3,2-5,4-7,6-9,8-10')).toBe([[1, 10]]);
  expect(task1('1-3,8-10,2-5,6-9,4-7')).toBe([[1, 10]]);
});
it('should omit sub-ranges inside bigger ranges', () => {
  expect(task1('1-30,2-4')).toBe([[1, 30]]);
  expect(task1('2-4,1-30')).toBe([[1, 30]]);
});
it('should omit numbers inside ranges', () => {
  expect(task1('1-30, 30')).toBe([[1, 30]]);
  expect(task1('1-30, 1')).toBe([[1, 30]]);
});
