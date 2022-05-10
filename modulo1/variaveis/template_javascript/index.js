//Exercícios de escrita de código
// 1
let nome = undefined
let idade = undefined
console.log (typeof nome)
console.log (typeof idade)
// o valor undefined foi impresso porque as duas variáveis não tem valores definidos aínda.
prompt("Qual seu nome?")
prompt("Qual sua idade?")
nome = 'Artur'
idade = 19
console.log (typeof nome)
console.log (typeof idade)
console.log ("Olá " + nome + ", você tem " + idade + " " + 'anos')
//2
let resposta1 = 'SIM'
let resposta2 = 'SIM'
let resposta3 = 'NÃO'
console.log ('Você está gostando do curso da Labenu? ' + resposta1)
console.log ('Você recomendaria a Labenu para seus amigos? ' + resposta2)
console.log ('Você já havia programado antes? ' + resposta3)
//3
let a = 10
let b = 25
//Trocando os valores de a para b, e b para a.
let c = undefined
c = a
a = b 
b = c 
console.log("O novo valor de a é ", a)//O novo valor de a é 25
console.log("O novo valor de b é ", b)//O novo valor de b é 10

//Exercícios de interpretação de código
/*
let a = 10
let b = 10

console.log(b)

b = 5
console.log(a, b)
/* NO PRIMEIRO console.log SERÁ IMPRESSO O VALOR 10
E NO SEGUNDO console.log SERÁ IMPRESSO O VALOR DE 10 E 05
PORQUE A VARIAVEL B FOI ALTERADA DEPOIS DO PRIMEIRO console.log


let a = 10
let b = 20
c = a
b = c
a = b

console.log(a, b, c)
/* SERÁ IMPRESSO O VALOR 
DE 10, 10 E 10
   (a),(b) e (c)


let p = prompt("Quantas horas você trabalha por dia?")
let t = prompt("Quanto você recebe por dia?")
alert(`Voce recebe ${t/p} por hora`)
/* EU SUGERIRIA PARA A let p O NOME DE horasPorDia 
e para a let t SUGERIRIA salarioPorDia
*/
