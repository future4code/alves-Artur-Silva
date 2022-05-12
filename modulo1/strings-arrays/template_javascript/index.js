
// Exercícios de interpretação de código
// let array
// console.log('a. ', array)//undefined

// array = null
// console.log('b. ', array)//null

// array = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]
// console.log('c. ', array.length)//11

// let i = 0
// console.log('d. ', array[i])//3

// array[i+1] = 19
// console.log('e. ', array)//(11) [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]

// const valor = array[i+6]
// console.log('f. ', valor)//9

// //EXERCÍCIO 2
// const frase = prompt("Digite uma frase")

// console.log(frase.toUpperCase().replaceAll("A", "I"), frase.length)// "SUBI NUM ÔNIBUS EM MIRROCOS"


//Exercícios de escrita de código

// let emailDoUsuario = prompt('Insira seu e-mail')
// let nomeDoUsuario = prompt('Insira seu nome')
// console.log(`O e-mail ${emailDoUsuario} foi cadastrado com sucesso. Seja bem-vindo(a), ${nomeDoUsuario}`)

// let comidasPrefiridas = ['Frango', 'Batata doce', 'Batata suiça', 'Banana', 'Pizza de calabresa']
// console.log(comidasPrefiridas)

// console.log(`Essas são as minhas comidas preferidas ${comidasPrefiridas} `)

// let comidasPreferidaUsuario = prompt('Qual sua comida preferida?')
// comidasPreferidaUsuario = comidasPrefiridas.replaceAll(comidasPreferidaUsuario, comidasPrefiridas[1])

let listaDeTarefas = [];
let tarefa1 = prompt('Digite uma tarefa que você precisa fazer por dia')
let tarefa2 = prompt('Digite mais uma tarefa que você precisa fazer no dia')
let tarefa3 = prompt('Digita só mais uma tarefa que você precisa fazer no dia')
listaDeTarefas.push  (tarefa1, tarefa2, tarefa3);
console.log (listaDeTarefas)
let removendoDaListaDeTarefas = prompt('Qual o índice você ja fez hoje? 0, 1 ou 2?')
listaDeTarefas = listaDeTarefas.splice(removendoDaListaDeTarefas, 1)
console.log (listaDeTarefas)



