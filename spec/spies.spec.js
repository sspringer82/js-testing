describe('Spies', () => {
  beforeEach(() => {
    jasmine.clock().install();
  });
  afterEach(() => {
    jasmine.clock().uninstall();
  });
  it('should call the callback after 1000 ms with "foo"', () => {
    const value = 'foo';
    const expectedValue = 'foo';
    const timeoutDuration = 1000;

    const callback = jasmine.createSpy();

    myAsync(callback, value, timeoutDuration);
    jasmine.clock().tick(1000);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledWith(expectedValue);
    expect(callback).toHaveBeenCalledTimes(1);
    // consosle.log(callback.calls); - objekt über das auf alle aufrufe zugegriffen werden kann
  });

  it('should work with an existing object', () => {
    const user = {
      firstname: 'Klaus',
      lastname: 'Müller',
      getFullName() {
        return `${this.firstname} ${this.lastname}`;
      },
    };

    spyOn(user, 'getFullName');
    user.getFullName.and.returnValue('Peter Meier');

    expect(user.getFullName()).toBe('Peter Meier');
    expect(user.getFullName).toHaveBeenCalledTimes(1);
  });

  it('should work with an existing object', () => {
    const user = {
      firstname: 'Klaus',
      lastname: 'Müller',
      getFullName() {
        return `${this.firstname} ${this.lastname}`;
      },
    };

    spyOn(user, 'getFullName');
    user.getFullName.and.callThrough();

    expect(user.getFullName()).toBe('Klaus Müller');
    expect(user.getFullName).toHaveBeenCalledTimes(1);
  });
});
