const Calculator = require('./calc');

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

    it('should match snapshot', () => {
      expect(calc.render(4)).toMatchSnapshot();
    });
  });
});
