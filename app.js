const nomeHeroi = 'Gui'
let nivel = ''

function pontosRankeados(vitorias, derrotas) {

    let saldoVitorias = vitorias - derrotas

    if (saldoVitorias <= 10) {
        nivel = 'Ferro'
    } else if (saldoVitorias >= 11 && saldoVitorias <= 20) {
        nivel = 'Bronze'
    } else if (saldoVitorias >= 21 && saldoVitorias <= 50) {
        nivel = 'Prata'
    } else if (saldoVitorias >= 51 && saldoVitorias <= 80) {
        nivel = 'Ouro'
    } else if (saldoVitorias >= 81 && saldoVitorias <= 90) {
        nivel = 'diamante'
    } else if (saldoVitorias >= 91 && saldoVitorias <= 700) {
        nivel = 'Lendário'
    } else if (saldoVitorias >= 101) {
        nivel = 'Imortal'
    }

    if (saldoVitorias > 0) {
        return `O Herói tem de saldo de ${saldoVitorias} está no nível de ${nivel}`
    } else {
        return 'Não tem saldo de vitórias'
    }
}

console.log(pontosRankeados(120, 10));