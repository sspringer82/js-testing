const User = require('./user');
const axios = require('axios');
const MockAdapter = require('axios-mock-adapter');

// This sets the mock adapter on the default instance
const mock = new MockAdapter(axios);

// Mock any GET request to /users
// arguments for reply are (status, data, headers)
mock.onGet('http://localhost:8765/users').reply(200, [
  { id: 1, firstname: 'Klaus', lastname: 'Müller' },
  { id: 2, firstname: 'Klaus', lastname: 'Müller' },
]);

mock
  .onPost('http://localhost:8765/users')
  .reply(201, { id: 3, firstname: 'lotta', lastname: 'Schmidt' });

describe('User', () => {
  let users;

  beforeEach(() => {
    users = new User();
  });
  it('should fetch the data', async () => {
    const result = await users.fetchAllUsers();
    expect(result.length).toBe(2);
    expect(result[0].firstname).toBe('Klaus');
  });

  it('should create a new user', async () => {
    const result = await users.create({
      firstname: 'Lotta',
      lastname: 'Schmidt',
    });
    expect(result.id).toBe(3);
  });

  it('should get all full names', async () => {
    const result = users.getUserFullnames([
      { id: 1, firstname: 'Klaus', lastname: 'Müller' },
      { id: 2, firstname: 'Klaus', lastname: 'Müller' },
    ]);
    expect(result).toEqual(['Klaus Müller', 'Klaus Müller']);
  });

  it('should work together', async () => {
    const data = await users.fetchAllUsers();
    const result = users.getUserFullnames(data);
    expect(result).toEqual(['Klaus Müller', 'Klaus Müller']);
  });
});
