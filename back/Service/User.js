import users from "../Model/user.js";

export default class UserService {
  async Signup(user) {
    const userRecord = await users.createUser(user);
    return { user: userRecord };
  }
}