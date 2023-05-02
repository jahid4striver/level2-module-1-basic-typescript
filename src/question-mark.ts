// ternary operator

const age = 22;

// if (age >= 18) {
//     console.log('Yes');

// } else {
//     console.log('No');
// }


const isAdult = age >= 18 ? "Yes" : "No";

// Nullish coalescing operator
// Null and Undefined

const isAuthenticatedUser=null; 

const userName =isAuthenticatedUser??"Guest"; // Only work when null or undefined
const userName2= isAuthenticatedUser?isAuthenticatedUser:"Guest"

console.log({userName}, {userName2});


type Manush={
    name:string,
    age:number,
    address:{
        city:"No City",
        road:"No Road",
        home?:''
    }
}

const manush1:Manush={
    name:"jahid",
    age:25,
    address:{
        city:"No City",
        road:"No Road",
    }
}

const home= manush1.address.home??"No Home";
console.log({home});

