const User = require('./user');

(async () => {
  const u = new User();
  const data = await u.fetchAllUsers();
  console.log(data);
})();
