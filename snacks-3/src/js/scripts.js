/*
 JSnack 3
 Il software deve chiedere per 5 volte all’utente di inserire un numero. 
 Il programma stampa la somma di tutti i numeri inseriti. 
*/

let somma = 0;
for(let i = 1; i <= 5; i++){
    console.log(i);
    let newNumber = parseInt(prompt('Inserisci il ' + (i+1) + '° numero'));
    console.log(newNumber);

    somma += newNumber;
}

console.log(somma);
document.getElementById('somma').innerHTML = somma;