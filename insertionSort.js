const livros = require('./livros.json')


function insertOnSort (lista ) {

    livros.forEach((indice) => {

        let analise = indice;

        while ( analise > 0 && lista[analise].preco < lista[analise - 1].preco) {

            let itemAnalise = lista[analise]
            let itemAnterior = lista[analise - 1]

            lista[analise] = itemAnterior
            lista[analise - 1] = itemAnalise

            analise--
        }

    })

    console.log(lista)
}

insertOnSort(livros)