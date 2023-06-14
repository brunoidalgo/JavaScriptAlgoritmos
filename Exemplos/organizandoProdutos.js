const produtos = require('./produtos.json')

function insertOnSort (produtos) {

    for (let atual = 1; atual < produtos.length; atual++ ) {

        let analise = atual

        while(analise > 0 && produtos[analise].preco < produtos[analise - 1].preco) {
            
            let itemAnalise = produto[analise] // Atribui a posição 
            let itemAnterior = produto[analise - 1] // Atribui a posição anterior

            produto[analise] = itemAnterior // Troca a posição do item atual para o item anterior.
            produto[analise - 1] = itemAnalise // Troca a posição do item anterior para o atual.

            analise-- // Volta um indice.
        }
    }

    console.log(produtos)

}

insertOnSort(produtos)