describe('timing', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  it('should also work with promises', (done) => {
    const value = 'foo';
    const expectedValue = 'foo';
    const timeoutDuration = 4000;

    const promise = myAsyncPromise(value, timeoutDuration);
    promise.then((data) => {
      expect(data).toBe(expectedValue);
      done();
    });
    jasmine.clock().tick(4000);
  });
});
