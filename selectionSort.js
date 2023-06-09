const livros = require('./livros')
const menorValor = require('./menorValor.js')


livros.forEach((_, indice) => { // O (_) serve para o Js entender que não vamos utilizar o primeiro parâmetro.
    let menor = menorValor(livros, indice)
   
    let livroAtual = livros[indice];
    console.log()
    console.log(`Livro atual ${indice}`)
    console.log(livros[indice])

    let livroMenorPreco = livros[menor];
    console.log()
    console.log(`Livro menor preço ${livros[menor]}`)
    // console.log(livros[menor])

   
    livros[indice] = livroMenorPreco
    livros[menor] = livroAtual 
   })

console.log(livros)