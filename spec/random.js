it('should random', {
  spyOn(Math, 'random');
  Math.random.and.returnValue(42);

  expect(Math.random()).toBe(42);
})