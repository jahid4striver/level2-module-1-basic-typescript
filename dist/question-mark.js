"use strict";
// ternary operator
var _a;
const age = 22;
// if (age >= 18) {
//     console.log('Yes');
// } else {
//     console.log('No');
// }
const isAdult = age >= 18 ? "Yes" : "No";
// Nullish coalescing operator
// Null and Undefined
const isAuthenticatedUser = null;
const userName = isAuthenticatedUser !== null && isAuthenticatedUser !== void 0 ? isAuthenticatedUser : "Guest"; // Only work when null or undefined
const userName2 = isAuthenticatedUser ? isAuthenticatedUser : "Guest";
console.log({ userName }, { userName2 });
const manush1 = {
    name: "jahid",
    age: 25,
    address: {
        city: "No City",
        road: "No Road",
    }
};
const home = (_a = manush1.address.home) !== null && _a !== void 0 ? _a : "No Home";
console.log({ home });
