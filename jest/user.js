const axios = require('axios');

class User {
  async fetchAllUsers() {
    const result = await axios.get('http://localhost:8765/users');
    return result.data;
  }

  async create(user) {
    const result = await axios.post('http://localhost:8765/users', user);
    return result.data;
  }

  getUserFullnames(users) {
    return users.map((user) => `${user.firstname} ${user.lastname}`);
  }
}
module.exports = User;
