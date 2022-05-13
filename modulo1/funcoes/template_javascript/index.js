// Exercícios de interpretação de código
// 1.
// function minhaFuncao(variavel) {
// 	return variavel * 5
// }

// console.log(minhaFuncao(2)) 
// console.log(minhaFuncao(10))
/*
a) O que vai ser impresso no console?
r: 10 porque o console está com o argumento 2, e 2 * 5 é 10.

b) O que aconteceria se retirasse os dois console.log e simplismene invocasse a função minhaFuncao(2) e minhaFuncao(10)? O que apareceria no console?
r: Vai aparecer o resultado da multiplicação do 2 e do 10 pelo 5.
*/
// 2.
// let textoDoUsuario = prompt("Insira um texto");

// const outraFuncao = function(texto) {
// 	return texto.toLowerCase().includes("cenoura")
// }

// const resposta = outraFuncao(textoDoUsuario)
// console.log(resposta)
/*
a) Explique o que essa função faz e qual é sua utilidade
r: Essa função basicamente, deixa todas os caracteres que o usuario colocar como parâmetro minúsculo, e em seguida o includes, ele retorna para o
usuário se true se houver a mesma sequência de caracteres que o usuario colocou como parâmetro no includes

b) Determine qualll será a saída no console para cada uma das 3 entradas do usuário:
i: Eu gosto de cenoura // TRUE
ii: CENOURA é bom pra vista //  TRUE
iii: Cenouras crescem na terra // FALSE
*/

//Exercícios de escrita de código
//1.
//a)
// function mensagem(){
//     console.log(`Eu sou Artur, tenho 19 anos, moro em Curitiba e sou estudante.` )
// }
// //b)
// function mensagemCompleta(nome, idade, cidade, profissão){
// return `Eu sou ${nome}, tenho ${idade} anos, moro em ${cidade} e sou ${profissão}.`
// }
// console.log(mensagemCompleta('Artur', 19, 'Curitiba', 'Estudante'));

2.
// function soma(num1, num2){
//     let resultado = num1 + num2
//     return resultado
// }
// console.log(soma(28, 30))

// function maiorIgual(num1, num2){
//     let resultado = num1 >= num2
//     return resultado
// }
// console.log(maiorIgual(12, 12))

// function imparPar(num1){
//     let resultado = num1 % 2 === 0
//     return resultado
// }
// console.log(imparPar(2189741946178943))

// function mensagemTamanho(mensage){
// console.log(mensage.length)
// console.log(mensage.toUpperCase())
// }
// mensagemTamanho('Olá mundo!')

//3.
// function soma(num1, num2){
// const somar = num1 + num2
// return somar
// }
// const pg1 = +prompt('Insira um número')
// const pg2 = +prompt('Insira outro número')

// const resultadoSoma = soma(pg1, pg2)
// console.log (resultadoSoma)

// function subtracao(num1, num2){
// const subtrair = num1 - num2
// return subtrair
// }
// const resultadoSub = subtracao(pg1, pg2)
// console.log(resultadoSub)

// function multiplicacao(num1, num2){
// const multiplicar = num1 * num2
// return multiplicar
// }
// const resultadoMult = multiplicacao(pg1, pg2)
// console.log(resultadoMult)

// function divisao(num1, num2){
// const dividindo = num1 / num2
// return dividindo
// }
// const resultadoDiv = divisao(pg1, pg2)
// console.log (resultadoDiv)