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
  });
});
