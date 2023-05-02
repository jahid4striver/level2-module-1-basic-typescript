

type NoobDeveloper = {
    name: string
};

// Union Types

// type JuniorDeveloper={
//     name:string,
//     expertise:string,
//     experience:number
// };



type JuniorDeveloper = NoobDeveloper & {
    expertise: string,
    experience: number
};

type NextLevelDeveloper= JuniorDeveloper &{
    leadershipEx:number
}

// enum Level{
//     junior='junior',
//     mid='mid',
//     senior='senior'
// }

const newDeveloper: NoobDeveloper | JuniorDeveloper = {
    name: 'Jahid',
    experience: 3,
   
}


const developer: NextLevelDeveloper={
    name:'Jahid',
    expertise:'JS',
    experience:3,
    leadershipEx:2,
}
