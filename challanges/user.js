
const unsername = Symbol("username");
const password = Symbol("password");

const user ={
    [username]: "Jenny",
    [password]: "12346",
    age: 26

};

console.log(user.username);
console.log(user.password);