const mioOggetto = {
    nome: 'Umberto',
    cognome: 'Barera',
    eta: 0,
    patente: true,

    calcolaEta:function(anno) {
        this.eta = 2023 - anno;
    },
    stampa: function () {
        return (
            this.nome + ' ' + this.cognome + ' ' + this.eta + ' ' + this.patente
        )
    }
}

document.getElementById('calcola').addEventListener('click', function() {
    let anno = document.getElementById('anno').ariaValueMax;
    mioOggetto.calcolaEta(anno);
    scrvi();

});

function scrvi() {
    document.getElementById('oggetto').innerHTML = mioOggetto.stampa();
}

