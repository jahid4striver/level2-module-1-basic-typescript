// Type Assertion Means I understand Better than typescript

let emni: any;

emni = "Next Level Web Development";

(emni as string).length;
<string>emni.length;


function kgToGram(param: number | string): number | string | undefined {
    if (typeof param === 'string') {
        const value = parseFloat(param) * 1000;
        return `The Gram Value Is ${value} Gram`
    } if (typeof param === 'number') {
        const value = param * 1000;
        return value;
    }
}

const resultToBeString = kgToGram("1000") as string;
const resultToBeNumber = kgToGram(1000) as number;

type CustomErrorType={
    message:string
}

try {
    
} catch (error) {
    console.log((error as CustomErrorType).message);
    
}