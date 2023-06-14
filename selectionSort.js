const livros = require('./livros.json')
const menorValor  = require('./menorValor.js')
const troca = require('./troca')


livros.forEach((_, indice) => { 
    
    // O (_) serve para o Js entender que não vamos utilizar o primeiro parâmetro.
    
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    let livroMenorPreco = livros[menor];

    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual
   })

console.log(livros)