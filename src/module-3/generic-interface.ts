
// Generic Interface

interface CrushInterface<T, U> {
    name: 'Tania',
    husband: T,
    wife: U
};

interface IHusband {
    name: string,
    salary: number
}
interface IWife {
    name: string,
    age: number
}

const myCrush: CrushInterface<boolean, boolean> = {
    name: 'Tania',
    husband: true,
    wife: true,
};

const myCrush2: CrushInterface<string, string> = {
    name: 'Tania',
    husband: 'Jahid',
    wife: "Tazmirah"
};

const myCrush3: CrushInterface<IHusband, IWife> = {
    name: 'Tania',
    husband: {
        name: 'Jahid',
        salary: 2000000
    },
    wife: {
        name: 'Tazmirah',
        age: 20
    }
}