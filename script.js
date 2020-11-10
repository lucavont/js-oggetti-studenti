// ESERCIZIO UNO

var studente_1 = {
    "Nome": "Luca",
    "Cognome": "Cavretti",
    "Età": 26
}

for (var key in studente_1) {
    $('.studente-1').append(key).append(": " + studente_1[key] + "<br>");
}

// ESERCIZIO DUE

var studenti = [{
        "Nome": "Luca",
        "Cognome": "Cavretti",
        "Età": 26
    },
    {
        "Nome": "Marco",
        "Cognome": "Tabaro",
        "Età": 24
    }, {
        "Nome": "Flavio",
        "Cognome": "Cordari",
        "Età": 29
    }
]

for (var i = 0; i < studenti.length; i++) {
    $('.studenti').append("<b>Nome</b>: " + studenti[i].Nome)
    $('.studenti').append(" <b>Cognome</b>: " + studenti[i].Cognome + "<br>")
    console.log(studenti[i].Nome)
}

// ESERCIZIO TRE

var nuovoStudente = {
    'Nome': undefined,
    'Cognome': undefined,
    'Età': undefined
};

nuovoStudente.Nome = prompt('Inserisci il tuo nome:');
nuovoStudente.Cognome = prompt('Inserisci il tuo cognome:');
nuovoStudente.Età = parseInt(prompt('Inserisci la tua età:'));

studenti.push(nuovoStudente);

for (var i = 0; i < studenti.length; i++) {
    $('.nuovo-studente').append("<b>Nome</b>: " + studenti[i].Nome)
    $('.nuovo-studente').append(" <b>Cognome</b>: " + studenti[i].Cognome)
    $('.nuovo-studente').append(" <b>Età</b>: " + studenti[i].Età + "<br>")
    console.log(studenti[i].Nome)
}