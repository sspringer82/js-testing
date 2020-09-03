describe('Calculator', () => {
  let calc;
  beforeAll(() => {});
  beforeEach(() => {
    // Arrange
    calc = new Calculator();
  });
  afterEach(() => {});
  afterAll(() => {});

  describe('add', () => {
    it('should add 1 and 1 and return 2', () => {
      // tripple A
      // Arrange
      // Act
      const result = calc.add(1, 1);
      // Assert
      expect(result).toBe(2);
    });

    //triangulate
    it('should add 2 and 2 and return 4', () => {
      // tripple A
      // Act
      const result = calc.add(2, 2);
      // Assert
      expect(result).toBe(4);
    });

    // negierung mit .not vor einem matcher
    it('should work', () => {
      expect(!false).toBeTrue();
      expect(false).not.toBeTrue();
    });

    it('should throw an exception if a string is provided', () => {
      try {
        const result = calc.add('a', 'b');
      } catch (e) {
        expect(e).toEqual(jasmine.any(Error));
      }
    });
    it('should throw an exception if a string is provided', () => {
      function addTest() {
        calc.add('a', 'b');
      }
      expect(addTest).toThrow();

      expect(() => calc.add('a', 'b')).toThrow();
      expect(() => calc.add('a', 'b')).toThrowError('Not a 🤬 Number!');
    });
  });
});
