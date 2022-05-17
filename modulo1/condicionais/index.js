//##Exercícios de interpretação de código##

//1.Leia o código abaixo:
// const respostaDoUsuario = prompt("Digite o número que você quer testar")
// const numero = Number(respostaDoUsuario)

// if (numero % 2 === 0) {
//   console.log("Passou no teste.")
// } else {
//   console.log("Não passou no teste.")
// }
//a) Explique o que o código faz. Qual o teste que ele realiza? 
//r: O código prova se a var numero é ou não um número par, utilizando o sinal de %
//b) Para que tipos de números ele imprime no console "Passou no teste"? 
//r: Para todos os números pares.
//c) Para que tipos de números a mensagem é "Não passou no teste"?
//r: Para todos os números ímpares.

//2.O código abaixo foi feito por uma pessoa desenvolvedora, contratada para automatizar algumas tarefas de um supermercado:
// let fruta = prompt("Escolha uma fruta")
// let preco
// switch (fruta) {
//   case "Laranja":
//     preco = 3.5
//     break;
//   case "Maçã":
//     preco = 2.25
//     break;
//   case "Uva":
//     preco = 0.30
//     break;
//   case "Pêra":
//     preco = 5.5
//     break; // BREAK PARA O ITEM c.
//   default:
//     preco = 5
//     break;
// }
// console.log("O preço da fruta ", fruta, " é ", "R$ ", preco)
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// a) Para que serve o código acima?
//r: Para descobrir o preço da fruta que o usúario escrever no prompt
// b) Qual será a mensagem impressa no console, se o valor de fruta for `"Maçã"`?
//r: "O preço da fruta, Maçã é R$ 2.25"
// c) Considere que um usuário queira comprar uma `Pêra`, qual seria a mensagem impressa no console se retirássemos o `break` que está logo acima 
// do `default` (o `break` indicado pelo comentário "BREAK PARA O ITEM c.")?
//r: "O preço da fruta Pêra é, R$ 5" porque o preço 5 está indicado em baixo do preço 5.5.
//=====================================================================================================================================================
//3. Leia o código abaixo:
// const numero = Number(prompt("Digite o primeiro número."))

// if(numero > 0) {
//   console.log("Esse número passou no teste")
// 	let mensagem = "Essa mensagem é secreta!!!"
// }

// console.log(mensagem)
//-----------------------------------------------------------------------------------------------------------------------------------------------------
// a) O que a primeira linha está fazendo?
//r: Atribuindo um valor dado pelo usúario para a var numero, e deixando a var do tipo Number
// b) Considere um usuário digitou o número 10. Qual será a mensagem do terminal? E se fosse o número -10?
//r: "Esse número passou no teste"
// c) Haverá algum erro no console? Justifique usando os conceitos de bloco ou escopo.
//r: a chave do if abrange até a var mensagem, e deveria ser fechada no termino do primeiro console.log
// =========================================================================================================================================================

// Exercícios de escrita de código
// const idadeUser = +prompt('Digite sua idade')
// console.log(typeof idadeUser)

// if (idadeUser >= 18){
//     console.log('Você pode dirigir.')
// } else {
//     console.log('Você não pode dirigir.')
// }

let turnoUser = prompt('Qual turno você estuda? use M para matutino, V para Vespertino e N para Noturno').toUpperCase()
if(turnoUser === 'M'){
    console.log('Bom dia!')
} else if (turnoUser === 'V'){
    console.log('Boa Tarde!')
} else if (turnoUser === 'N'){
    console.log('Boa noite!')
} else{
    console.log('Use apenas M, V e N para indicar o turno :D')
}

switch(turnoUser){
    case 'M':
        console.log('Bom dia!')
        break
    case 'V':
        console.log('Boa Tarde!')
        break
    case 'N':
        console.log('Boa Noite!')
        break
    default:
        console.log('Use apenas M, V e N para indicar o turno :D')
        break                             
}

const generoFilme = prompt('Qual gênero do filme?').toLowerCase()
const preco = +prompt('Qual o valor do ingresso em reais?')

if(generoFilme === 'fantasia' && preco < 15){
    console.log('Bom filme!')
} else {
    console.log('Escolha outro filme :(')
}
