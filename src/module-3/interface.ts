// use Interface with object type datas
// use Type Alis for Primitive Data Types

type User = {
    name: string,
    age: number,
}

interface IUser {
    name: string,
    age: number,
}

// const userWithTypeAlis:User={
//     name:'Jahid',
//     age:200
// }
// const userWithInterFace:IUser={
//     name:'Jahid',
//     age:100
// }

type ExtendedUser = User & {
    role: string
}

interface IExtendedUser extends IUser {
    role: string,
}

const userWithTypeAlis: ExtendedUser = {
    name: 'Jahid',
    age: 200,
    role: 'Kichu Na'
}
const userWithInterFace: IExtendedUser = {
    name: 'Jahid',
    age: 100,
    role: 'Onek Kisu'
}

//Object type Data Type Is Object, Function, Arrays
// Below Are Function Signuture with Type Alis

type AddFunctionType = (num1: number, num2: number) => number;
const AddFunction: AddFunctionType = (num1, num2) => num1 + num2;

// Below Are Function Signure With Interface But Not Recomended

interface IAddFunction{
    (num1:number, num2:number):number
}
const AddFunctionWithInterFace:IAddFunction=(num1, num2)=>num1+num2;

//Example With Arrays Type Alis

type RollNumber=number[]
const rollNumber:RollNumber=[1,4,9,3]

//Example With Arrays Interface

interface IRoolNumber{
    [index:number]:string|number
}

const roolNumberWithInterface:IRoolNumber=['44',3]

//So Use Interface When Is Object Only