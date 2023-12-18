class Network {
  #users = [];
  #lastId = 0;
  constructor(name) {
    this.name = name;
  }

  addUser(user) {
    user.id = ++this.#lastId;
    this.#users.push(user);
  }

  removeUser(username) {
    this.#users = this.#users.filter((us) => us.username !== username);
  }

  login(username, pass) {
    return Boolean(
      this.#users.filter(
        (us) => us.username === username && us.checkPassword(pass)
      ).length
    );
  }
}

class User {
  #password = null;
  constructor({ username, password, name, lastname }) {
    this.lastname = lastname;
    this.name = name;
    this.username = username;
    this.#password = password;
  }

  checkPassword(pass) {
    return this.#password === pass;
  }
}
