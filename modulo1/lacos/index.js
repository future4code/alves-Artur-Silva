//Exercício de interpretação de código

//1. O que o código abaixo está fazendo? Qual o resultado impresso no console?
// let valor = 0
// for(let i = 0; i < 5; i++) {
//   valor += i
// }
// console.log(valor)
//r: Esta fazendo a variavel valor ser adicionado primeiro o numero 1, depois 1 + 2, depois 1 + 2 + 3 assim até cchegar ao 4
//r: O resultado impresso será 10, porque 1 + 2 + 3 + 4 = 10


//2. Leia o código abaixo:
// const lista = [10, 11, 12, 15, 18, 19, 21, 23, 25, 27, 30]
// for (let numero of lista) {
//   if (numero > 18) {
// 		console.log(numero)
// 	}
// }
// a) O que vai ser impresso no console?
//r: a let numero: 19, 21, 23, 25, 27, 30
// b) Se eu quisesse acessar o **índice** de cada elemento dessa lista, o `for...of...` é suficiente? Se sim, o que poderia ser usado para fazer isso?
//r: sim, poderia ser utilizado ate o mesmo comando, porém sem o sinal de comparação, comparando algo.


//3.Qual seria o resultado impresso no console, se o usuário digitasse o número 4 ?
// const quantidadeTotal = Number(prompt("Digite a quantidade de linhas: "))
// let quantidadeAtual = 0
// while(quantidadeAtual < quantidadeTotal){
//   let linha = ""
//   for(let asteriscos = 0; asteriscos < quantidadeAtual + 1; asteriscos++){
//     linha += "*"
//   }
//   console.log(linha)
//   quantidadeAtual++
// }
/*r:   *
       **
       ***
       ****
*/


// Exercício de escrita de código
// 1. Pergunte ao usuário quantos bichinhos de estimação ele tem e guarde esse dado em uma variável. 
let bichinhos = +prompt('Quantos bichinhos de estimação você tem?')
if(bichinhos <= 0){
    console.log('Que pena! Você pode adotar um pet!')
} else {
    let arrayNomes = []
    while(arrayNomes.length < bichinhos){
        let nomePet = prompt('Digite o nome do seu pet')
        arrayNomes.push(nomePet)
    }
    console.log(arrayNomes)
}



//2.
let arrayOriginal = [1, 8, 47, 5, 6, 3, 98, 84]
function imprimeArray(arrayQualquer){
    for(index = 0; index < arrayQualquer; index++){
        let resultado = []
        resultado += arrayQualquer.push[index]
    }
    //console.log(resultado)//erradoaaaaaaaaaaa
}
imprimeArray(arrayOriginal)
