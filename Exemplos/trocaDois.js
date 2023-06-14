function trocaDois(lista, analise) {

        let livroAtual = lista[analise];
        let livroMenorPreco = lista[menor];

        lista[analise] = livroMenorPreco
        lista[menor] = livroAtual
    
      }
    
      module.exports = trocaDois;