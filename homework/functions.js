function Network(name) {
  this.users = [];
  this.name = name;
  this.lastId = 0;

  this.addUser = function (user) {
    user.id = ++this.lastId;
    this.users.push(user);
  };

  this.removeUser = function (username) {
    this.users = this.users.filter((us) => us.username !== username);
  };

  this.login = function (username, pass) {
    return Boolean(
      this.users.filter(
        (us) => us.checkPassword(pass) && us.username === username
      ).length
    );
  };
}

function User({ username, password, name, lastname }) {
  const psw = password;
  this.name = name;
  this.username = username;
  this.lastname = lastname;

  this.checkPassword = function (pass) {
    return psw === pass;
  };
}
