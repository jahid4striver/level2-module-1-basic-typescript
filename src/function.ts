//normal function
//default Value
function sum(num1:number, num2:number):number{
    return num1+num2;
}

// sum(2,2);

//arrow Function

const sumArrow=(num1:number, num2:number):number=> num1+num2;

// callback function

const arr=[10, 20,30];

const newArray= arr.map((ele:number)=>ele*ele)

// object function (Method)

const person:{
    name:string,
    balance:number,
    addBalance(money:number):void
}={
    name:'Jahid',
    balance:5,
    addBalance(money:number){
        return `My Present Balance Is ${this.balance+money}`
    }
}


//default Value
function sum2(num1:number, num2:number=20):number{
    return num1+num2;
}

// sum2(20,30);

// speard operators

const myFriends=['Abba', 'Ma', 'Bubu', 'Vai'];
const newFriends=['Taniya', 'Akter', 'Tazmirah'];

myFriends.push(...newFriends);

console.log(myFriends);


// rest parameter

// const greetFriends=(
//     fnd1:string,
//     fnd2:string,
//     fnd3:string
// )=> console.log(`Hi ${fnd1} \n Hi ${fnd2} \n Hi ${fnd3} `);

const greetFriends=(...fnd:string[])=>{
    fnd.forEach((fn)=>console.log(`Hi ${fnd}`)
    )
};

greetFriends('hashem','kashem','lashem', 'tashem');

//destructuring

const [bestfriend]=myFriends;

const myBestFriends={
    fullName:'Tania',
    age:20
}

const {fullName}=myBestFriends;