// const bool1 = true
// const bool2 = false
// const bool3 = !bool2

// let resultado = bool1 && bool2
// console.log("a. ", resultado)

/*Vai imprimir no console "a. false" porque no && os dois parâmetros precisam ser true para imprimir true*/

// resultado = bool1 && bool2 && bool3 
// console.log("b. ", resultado) 

/*Vai imprimir no console "b. false" por mais q tenhamos o bool1 true e o bool3 true também, o parâmetro bool2 é false, deixando 
assim o resultado false*/

// resultado = !resultado && (bool1 || bool2) 
// console.log("c. ", resultado)

/*Nesse caso vai imprimir "c. true" porque o sinal de exclamação faz o contrário do resultado anterior da let resultado e entre 
parênteses irá dar true também, porque estamos usando o sinal de OU '||' e no OU precisamos q apenas um dos parâmetros seja true
no caso, o bool1 é true, então true.*/

// console.log("d. ", typeof resultado)

/*Nessa impressão, o console irá imprimir o tipo em que a let resultado se encontra, "d. , boolean" porque o estado em que a 
let resultado se encontra agora é do tipo booleano */

//EXERCÍCIO 02
// let primeiroNumero = prompt("Digite um numero!")
// let segundoNumero = prompt("Digite outro numero!")

// const soma = primeiroNumero + segundoNumero

// console.log(soma)

/* Oque o 'meu colega' está tentando fazer é uma soma entre dois números, mas o código está lendo os dois valores que o úsuario 
responde como duas strings e está imprimindo os dois números, um seguido do outro */

//EXERCÍCIO 03
/*Esse exercício eu me bati um pouco, mas procurei no google como mudar de string para number e achei o comando parseInt() que altera
parâmetros do modo string para o modo number, não me lembrava de como fazer isso, talvez eu tenha pesquisado um comando mais avançado
mas esse foi o modo que eu achei, e achei bem simples na verdade, então o código ficaria assim 

let primeiroNumero = prompt("Digite um numero!")
let segundoNumero = prompt("Digite outro numero!")

const soma = parseInt(primeiroNumero) + parseInt(segundoNumero)

console.log(soma)
27 */

//EXERCÍCIO DE ESCRITA DE CÓDIGO
//EXERCÍCIO 1
let minhaIdade = prompt("Qual a sua idade?")
let idadeMelhorAmigo = prompt("Qual a idade do seu/sua melhor amigo(a)?" )
let compararIdades = parseInt(minhaIdade) > parseInt(idadeMelhorAmigo) 
console.log("Sua idade é maior do que a do seu melhor amigo?", compararIdades)
console.log("Você é ", minhaIdade - idadeMelhorAmigo , "anos mais velho que seu melhor amigo")

//EXERCÍCIO 2
let numeroPar = prompt("Insira um número par")
console.log(numeroPar % 2)
/* Para descobrir se uma variável é ou não par, basta usar ('Nome da var que voce quer descobrir se é par % 2) se retornar o número 0
então é par, porque todo número que é par é divisível por 2 e não tem resto, se sobrar qualquer outro número que não seja 0
então é ímpar.*/

/*Se um usúario escrever qualquer outro número ímpar, não irá retornar o número 0 */

//EXERCÍCIO 3
let idadeUsuario = prompt("Qual é sua idade?")
let idadeUsuarioMeses = parseInt(idadeUsuario) * 12
let idadeUsuarioDias = parseInt(idadeUsuario * 365)
let idadeUsuarioHoras = idadeUsuarioDias * 24 
console.log(idadeUsuarioMeses)
console.log(idadeUsuarioDias)
console.log(idadeUsuarioHoras)

//EXERCÍCIO 4
let numero1 = prompt("Insira um número aqui")
let numero2 = prompt("Insira outro número aqui")
console.log("O primeiro numero é maior que o segundo? ", parseInt(numero1) > parseInt(numero2))
console.log("O primeiro numero é igual ao segundo? ", parseInt(numero1) === parseInt(numero2))
console.log("O primeiro numero é divisível pelo segundo? ", (parseInt(numero1) % parseInt(numero2)) === 0)
console.log("O segundo numero é divisível pelo primeiro? ", (parseInt(numero2) % parseInt(numero1)) === 0 ) 
