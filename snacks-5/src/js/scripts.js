/*
 * Crea due tag div con due id diversi.
 * Un div avrà il testo colorato di rosso mentre l'altro di verde.
 * Partendo da un array di numeri, stampiamo nell'id rosso i numeri dispari
 * e in verde i numeri pari.
 */

const numbers = [15, 20, 1, 22];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    if (number % 2 === 0) {
        document.getElementById('green').innerHTML += number + '<br>';
    } else {
        document.getElementById('red').innerHTML += number + '<br>';
    }
}
