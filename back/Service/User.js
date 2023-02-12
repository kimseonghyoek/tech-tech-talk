import users from "../Model/user.js";

export default class UserService {
  async Signup(user) {
    const userRecord = await users.createUser(user);
    return { user: userRecord };
  };

  async getAllUser() {
    const userRecord = await users.getAllUser();
    return userRecord;
  };
};