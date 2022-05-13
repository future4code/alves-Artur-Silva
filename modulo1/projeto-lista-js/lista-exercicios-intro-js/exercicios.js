// EXEMPLOS DE IMPLEMENTAÇÃO ---------------------------------------------------------------

// EXERCÍCIO 0A
function soma(num1, num2) {
  // implemente sua lógica aqui
  return num1 + num2
}

// EXERCÍCIO 0B
function imprimeMensagem() {
  // implemente sua lógica aqui
  const mensagem = prompt('Digite uma mensagem!')

  console.log(mensagem)
}

// EXERCÍCIOS PARA FAZER ------------------------------------------------------------------

// EXERCÍCIO 01
function calculaAreaRetangulo() {
  // implemente sua lógica aqui
let altura = prompt('Digita a altura de um triangulo')
let largura = prompt('Digita a largura de um triangulo')
let area = (altura * largura) 
console.log(area)
}

// EXERCÍCIO 02
function imprimeIdade() {
  // implemente sua lógica aqui
let anoAtual = prompt('Digite o ano atual')
let anoNascimento = prompt('Digite seu ano de nascimento')
let idadeUsuario = anoAtual - anoNascimento
console.log (idadeUsuario)
}

// EXERCÍCIO 03
function calculaIMC(peso, altura) {
  // implemente sua lógica aqui
const imcUsuario = peso / (altura * altura)
return imcUsuario
}

// EXERCÍCIO 04
function imprimeInformacoesUsuario() {
  // implemente sua lógica aqui
  // "Meu nome é NOME, tenho IDADE anos, e o meu email é EMAIL."
  let nome = prompt('Qual seu nome?')
  let idade = prompt('Qual sua idade?')
  let email = prompt('Qual seu e-mail?')
  console.log(`Meu nome é ${nome}, tenho ${idade} anos, e o meu email é ${email}.`)
}

// EXERCÍCIO 05
function imprimeTresCoresFavoritas() {
  // implemente sua lógica aqui
let cor1 = prompt('Digita uma primeira cor favorita')
let cor2 = prompt('Digite sua segunda cor favorita')
let cor3 = prompt('Digite sua terceira cor favorita')
let coresFavoritas = [] 
coresFavoritas.push (cor1, cor2, cor3)
console.log(coresFavoritas)
}

// EXERCÍCIO 06
function retornaStringEmMaiuscula(string) {
  // implemente sua lógica aqui
return string.toUpperCase()
}

// EXERCÍCIO 07
function calculaIngressosEspetaculo(custo, valorIngresso) {
  // implemente sua lógica aqui
return custo / valorIngresso
}

// EXERCÍCIO 08
function checaStringsMesmoTamanho(string1, string2) {
  // implemente sua lógica aqui
return string1.length === string2.length
}

// EXERCÍCIO 09
function retornaPrimeiroElemento(array) {
  // implemente sua lógica aqui
return array[0]
}

// EXERCÍCIO 10
function retornaUltimoElemento(array) {
  // implemente sua lógica aqui
return array[array.length-1]
}

// EXERCÍCIO 11
function trocaPrimeiroEUltimo(array) {
  // implemente sua lógica aqui
  let firstElement = array.shift()
  let lastElement = array.pop()
  array.push(firstElement)
  array.unshift(lastElement)
  return (array)
}
// EXERCÍCIO 12
function checaIgualdadeDesconsiderandoCase(string1, string2) {
  // implemente sua lógica aqui
  return string1.toUpperCase() === string2.toUpperCase()
}

// EXERCÍCIO 13
function checaRenovacaoRG() {
  // implemente sua lógica aqui
let anoAtual = prompt('Digite o ano atual')
let anoNascimento = prompt('Digite o ano de nascimento de uma pessoa')
let anoCarteira = prompt('Digite o ano em que a carteira de identidade foi emitida')

}

// EXERCÍCIO 14
function checaAnoBissexto(ano) {
  // implemente sua lógica aqui
// let cincoAnos = >= 20 anos === 5 anos 
// let dezAnos = < 20 anos || = 50 anos === 10 anos
// let quinzeAnos = ano < 50 anos === 15 anos
}

// EXERCÍCIO 15
function checaValidadeInscricaoLabenu() {
  // implemente sua lógica aqui

}