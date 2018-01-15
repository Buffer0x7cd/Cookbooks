
let user = {};

Object.defineProperty(user, "name", {
    value:"John",
    writable: false
});

descriptor = Object.getOwnPropertyDescriptor(user, "this")
console.log(JSON.stringify(descriptor, null, 2))

// user.name = "Pete"
// console.log(user.name)