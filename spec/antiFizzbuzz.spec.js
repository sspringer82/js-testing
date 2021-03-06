describe('FizzBuzz', () => {
  const map = [
    '',
    1,
    2,
    'Fizz',
    4,
    'Buzz',
    'Fizz',
    7,
    8,
    'Fizz',
    'Buzz',
    11,
    'Fizz',
    13,
    14,
    'FizzBuzz',
    16,
    17,
    'Fizz',
    19,
    'Buzz',
    'Fizz',
    22,
    23,
    'Fizz',
    'Buzz',
    26,
    'Fizz',
    28,
    29,
    'FizzBuzz',
  ];

  let fb;
  beforeEach(() => {
    fb = new FizzBuzz();
  });

  const fizzbuzzTest = function (x, y) {
    expect(fb.run(x)).toEqual(y);
  };

  for (let i = 1; i < map.length; i++) {
    it(
      `should return ${map[i]} if ${i} is provided`,
      fizzbuzzTest.bind(null, i, map[i]),
    );
  }
});
