/*
 JSnack 1
 L’utente inserisce due numeri in successione, con due prompt.
 Il software stampa il maggiore
 1) Richiedere numero all'utente e salvarlo in una variabile
 2) Richiedere un secondo numero all'utente e salvarlo in un'altra variabile
 3) Fare un confronto:
    a) sono uguali?
    b) 1 è maggiore di 2
    c) 2 è maggiore di 1
 4) Stampare il magggiore
*/

const num1 = parseInt(prompt('Inserisci il primo numero'));
const num2 = parseInt(prompt('Inserisci un secondo numero'));

console.log(num1);
console.log(num2);

let result;
if(num1 === num2){
    result = 'I due numeri sono uguali';
} else if(num1 > num2){
    result = 'Il primo numero è maggiore';
} else {
    result = 'Il secondo numero è maggiore';
}

alert(result);
document.querySelector('h1').innerHTML = result;
