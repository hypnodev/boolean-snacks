/*
 JSnack 2
 L’utente inserisce due parole in successione, con due prompt.
 Il software stampa prima la parola più corta, poi la parola più lunga.
*/

const parola1 = prompt('Inserisci una parola');
const parola2 = prompt('Inserisci una parola');

console.log('Parola inserite dall\'utente:', parola1, parola2);
console.log('La parola1 è lunga ' + parola1.length);
console.log('La parola2 è lunga ' + parola2.length);

if (parola1.length === parola2.length) {
    console.log('Il controllo non può essere effettuato perché le parole sono di uguale misura.');
}
else if (parola1.length < parola2.length) {
    console.log(parola1, parola2);
}
else {
    console.log(parola2, parola1);
}
