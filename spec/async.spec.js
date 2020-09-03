describe('myAsync', () => {
  it('should call the callback after 1000 ms with "foo"', (done) => {
    const value = 'foo';
    const expectedValue = 'foo';
    const timeoutDuration = 1000;

    function callback(v) {
      expect(v).toBe(expectedValue);
      done();
    }

    myAsync(callback, value, timeoutDuration);
  });

  it('should also work with promises', (done) => {
    const value = 'foo';
    const expectedValue = 'foo';
    const timeoutDuration = 1000;

    const promise = myAsyncPromise(value, timeoutDuration);
    promise.then((data) => {
      expect(data).toBe(expectedValue);
      done();
    });
  });

  it('should also work with promises', async () => {
    const value = 'foo';
    const expectedValue = 'foo';
    const timeoutDuration = 1000;

    const data = await myAsyncPromise(value, timeoutDuration);
    expect(data).toBe(expectedValue);
  });

  it('should also work with async await', async () => {
    const value = 'foo';
    const expectedValue = 'foo';
    const timeoutDuration = 1000;

    const data = await myAsyncAsync(value, timeoutDuration);
    expect(data).toBe(expectedValue);
  });
});
