//Creo un array

let numberArray = [];

for(let i = 0; i < 10; i++) {
    let number = parseInt(prompt("Inserisci un numero:"))
    console.log(number);
    
    
    numberArray.push(number);
    console.log(numberArray);
}

let operations = 0;
for (let a = 0; a < numberArray.length; a++) {
    operations += numberArray[a];

    mediaNumber = operations % 10;
}

console.log(operations);
console.log(mediaNumber);
