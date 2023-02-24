/*
 JSnack 4
 In un array sono contenuti i nomi degli invitati alla festa del grande Gatsby,
 chiedi all’utente il suo nome e comunicagli se può partecipare o no alla festa.
*/

const participants = [
    'Cristian',
    'Fabio',
    'Leonardo',
    'Emanuele',
    'Daniele'
];
const name = prompt('Inserisci il tuo nome');
let join = false;

for (let i = 0; i < participants.length; i++) {
    const participant = participants[i];
    if (participant === name) {
        join = true;
    }
}

if (join === true) {
    alert('Benvenuto!')
} else {
    alert('Non puoi entrare.')
}
