
//Creo un array vuoto

let oddNumbers = [];

// Chiedo all'utente di inserire 6 numeri
for(let i = 0; i < 6; i++) {
    let number = parseInt(prompt("Inserisci un numero:"))
    console.log(number);


    if (number % 2 !== 0) {
        oddNumbers.push(number)
    }

}

console.log("Numeri dispari inseriti", oddNumbers);