const livros = require('./livros.json')
const troca = require('./troca')


function insertOnSort (lista) {

    for (let atual = 1; atual < livros.length; atual++ ) {

        let analise = atual

        while(analise > 0 && lista[analise].preco < lista[analise - 1].preco) {
            
            troca(lista, analise)

            analise--
        }
    }

    console.log(lista)

}

insertOnSort(livros)