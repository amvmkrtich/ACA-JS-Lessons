const inst = new NetworkFunc("Instagram");

const user1 = new UserFunc({
  name: "MKrtich",
  lastname: "Aleksanyan",
  username: "amv.mkrtich",
  password: "123qwerty",
});

const user2 = new UserFunc({
  name: "Vahag",
  lastname: "Hakobyan",
  username: "v_vahag",
  password: "pass_pass",
});

const user3 = new UserFunc({
  name: "Ani",
  lastname: "Sahakyan",
  username: "an.sah",
  password: "ani1234",
});

inst.addUser(user2);
inst.addUser(user1);
inst.addUser(user3);
console.log(user2.checkPassword("ani1234"));
inst.removeUser("v_vahag");
console.log(inst.login("amv.mkrtich", "123qwerty"));
console.log(inst);
