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
    $('.studenti').append("<br><b>L'anagrafica dello studente è: </b><br>")
    for (var key in studenti[i]) {
        $('.studenti').append(key + ":" + studenti[i][key] + "<br>")
    }
}

// ESERCIZIO TRE