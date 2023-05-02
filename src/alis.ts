
type CrushType = {
    name: string,
    age?: number,
    proffesion: string,
    address: string
}


const crush1: CrushType = {
    name: 'Taniya',
    age: 20,
    proffesion: 'Ghorer Kum',
    address: 'Kolkoti'
}
const crush2: CrushType = {
    name: 'Tazmirah',
    proffesion: 'Ghorer Kum',
    address: 'Kolkoti'
}

type CrushMarriedType = boolean;
const isCrushMarried: CrushMarriedType = true;

type CourseType = string;
const courseName: CourseType = 'Next Level Web Development'


// Flexible Function

type OperationType=(x: number, y: number) => number

const calculate = (num1: number, num2: number, operations:OperationType) => {
    return operations(num1, num2)
}

calculate(20, 10,(x, y)=>x+y);
calculate(20, 10,(x, y)=>x-y);
calculate(20, 10,(x, y)=>x/y);
