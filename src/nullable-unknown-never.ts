// nullable Type

const searchName = (value: string | null) => {
    if (value === null) {
        console.log('Nothing To Search');

    } else {
        console.log('Searching...');

    }
}
searchName("Jahid");

// unknown type 

const getMyCarSpeed=(speed:unknown)=>{
    if(typeof speed==='number'){
        const convertedSpeed= speed*1000/3600;
        console.log(`My Car Speed Is ${convertedSpeed}`);
        
    }if(typeof speed==='string'){
        const [value, unit]= speed.split(' ');
        const convertedSpeed= parseFloat(value)*1000/3600;
        console.log(`My Car Speed Is ${convertedSpeed}`);
    }else{
        console.log('There is Wrong Type');
        
    }
}

getMyCarSpeed(10);
getMyCarSpeed('10 kmh');
getMyCarSpeed(true);


// never type

function throwError(message:string):never{
    throw new Error(message)
}

throwError("Error Hoyese");