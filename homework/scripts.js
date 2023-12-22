const inst = new Network("Instagram");

const user1 = new User({
  name: "MKrtich",
  lastname: "Aleksanyan",
  username: "amv.mkrtich",
  password: "123qwerty",
});

const user2 = new User({
  name: "Vahag",
  lastname: "Hakobyan",
  username: "v_vahag",
  password: "pass_pass",
});

const user3 = new User({
  name: "Ani",
  lastname: "Sahakyan",
  username: "an.sah",
  password: "ani1234",
});

inst.addUser(user2);
inst.addUser(user1);
inst.addUser(user3);
console.log(inst);
inst.removeUser("v_vahag");
console.log(inst.login("amv.mkrtich", "123qwerty"));
console.log(inst);

function A() {
  this.a = 1;
}

function B() {
  this.b = 2;
}
B.prototype = new A();
const b = new B();
console.log(b.a);
