//Creare un array di oggetti: ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.

let Squadre = [
    {
        name: "luventus",
        puntiFatti: 0,
        puntiSubiti: 0,

    },
    {
        name: "Roma",
        puntiFatti: 0,
        puntiSubiti: 0,
    },
    {
        name: "lazio",
        puntiFatti: 0,
        puntiSubiti: 0,
    },
    {
        name: "atalanta",
        puntiFatti: 0,
        puntiSubiti: 0,
    }
]


//generare punti random a lle proprietà che hanno 0 

for (let i = 0; i < Squadre.length; i++) {
    let Squadra = Squadre[i];

    if (Squadra.puntiSubiti || Squadra.puntiFatti == 0) {
        Squadra.puntiFatti = Math.floor(Math.random() * 100);
        Squadra.puntiSubiti = Math.floor(Math.random() * 100);

    }

    console.log(Squadra);
}


