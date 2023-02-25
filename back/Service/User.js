const users = require("../Model/user.js");

module.exports = class UserService {
  async Signup(user) {
    const userRecord = await users.createUser(user);
    return { user: userRecord };
  };

  async getAllUser() {
    const userRecord = await users.getAllUser();
    return userRecord;
  };
};