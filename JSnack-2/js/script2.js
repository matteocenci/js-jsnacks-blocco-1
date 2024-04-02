const mainList = ["Luca", "Marco", "Thomas", "Andrea"];



const guestName = prompt("Prego mi dai il suo nome:")
console.log(guestName);

let found = false;

for (let i = 0; i < mainList.length; i++) {
    console.log(i, mainList[i]);
    if (guestName === mainList[i]){
        found = true;
        break;
    }
}

if (found === true) {
    console.log("Prego lei può entrare!");
} else {
    console.log("Mi dispiace ma il suo nome non è sulla lista");
}

