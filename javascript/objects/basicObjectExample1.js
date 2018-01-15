let user = {
    name: "John Smith",
    age: 35
  };

userJson = JSON.stringify(user);
userReverseJson = JSON.parse(userJson);

console.log(userJson)
console.log(userReverseJson)