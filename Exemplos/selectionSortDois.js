const livros = require('../livros.json')
const menorValor  = require('../menorValor.js')
const trocaDois = require('./trocaDois')


for (let atual = 0; atual < livros.length; atual++){

    let menor = menorValor(livros, atual)

    // let menor = menorValor(livros, atual)

    trocaDois(menor, atual)
}

console.log(livros)