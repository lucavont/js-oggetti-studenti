// ESERCIZIO UNO

var studente_1 = {
    "Nome": "Luca",
    "Cognome": "Cavretti",
    "Età": 26
}

for (var key in studente_1) {
    $('.studente-1').append(key).append(": " + studente_1[key] + "<br>");
    console.log(studente_1[key])
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