// // const rollNums: number[] = [2, 3, 4];

// // const rollNums1: Array<number> = [2, 3, 5];
// // const rollNums2: Array<string> = ['2', '5', '8'];
// // const rollNums3: Array<boolean> = [true, false];
// // const rollNumsAndNames: Array<{ name: string, roll: number }> = [
// //     {
// //         name: 'Jahid',
// //         roll: 1
// //     },
// //     {
// //         name: 'Nahid',
// //         roll: 2 
// //     }
// // ]


// type GenericType<T> = Array<T>

// type RollNameType = { name: string, roll: number }

// const rollNums1: GenericType<number> = [2, 3, 5];
// const rollNums2: GenericType<string> = ['2', '5', '8'];
// const rollNums3: GenericType<boolean> = [true, false];
// const rollNumsAndNames: GenericType<RollNameType> = [
//     {
//         name: 'Jahid',
//         roll: 1
//     },
//     {
//         name: 'Nahid',
//         roll: 2
//     }
// ];

// type GenericTuple<X, Y> = [X, Y];
// // type RelationWithSalaryType = { name: string, salary: number };
// interface RelationWithSalaryInterface { name: string, salary: number };

// const relations: GenericTuple<string, string> = ["Jahid", "Tania"];

// const relationWithSalary: GenericTuple<RelationWithSalaryInterface, string> = [{
//     name: 'Jahid',
//     salary: 2292033
// },
//     'Tania'
// ]