//Exercícios de interpretação de código
//1.
// const filme = {
// 	nome: "Auto da Compadecida", 
// 	ano: 2000, 
// 	elenco: [
// 		"Matheus Nachtergaele", "Selton Mello", "Denise Fraga", 
// 		"Virginia Cavendish"
// 		], 
// 	transmissoesHoje: [
// 		{canal: "Telecine", horario: "21h"}, 
// 		{canal: "Canal Brasil", horario: "19h"}, 
// 		{canal: "Globo", horario: "14h"}
// 		]
// }

// console.log(filme.elenco[0])//Matheus Nachtergaele
// console.log(filme.elenco[filme.elenco.length - 1])//Virginia Cavendish
// console.log(filme.transmissoesHoje[2])//canal: Globo, horário: 14h.

// 2.
// const cachorro = {
// 	nome: "Juca", 
// 	idade: 3, 
// 	raca: "SRD"
// }

// const gato = {...cachorro, nome: "Juba"}

// const tartaruga = {...gato, nome: gato.nome.replaceAll("a", "o")}

// console.log(cachorro)//nome: Juca, idade: 3, raca: SRD
// console.log(gato)//nome: Juba, idade: 3, raca: SRD
// console.log(tartaruga)//nome: Jubo, idade: 3, raca:SRD
//b. A sintaxe de três pontos copia o objeto que o a pessoa colocar em seguida.

// 3.
// function minhaFuncao(objeto, propriedade) {
// 	return objeto[propriedade]
// }

// const pessoa = {
//   nome: "Caio", 
//   idade: 23, 
//   backender: false
// }

// console.log(minhaFuncao(pessoa, "backender"))//False
// console.log(minhaFuncao(pessoa, "altura"))//undefined
/*b. deu false, porque o valor de backender dentro do objeto pessoa é false, e retornou undefined no segundo console.log, porque não existe altura
dentro do objeto pessoa */

//Excercício de escrita de código
//a.
const pessoa = {
    nome: 'Artur',
    apelidos: ['Tutu', 'Arturso', 'Tur']
}
function mensagem(objeto1){
console.log(`Eu sou ${objeto1.nome}, mas pode me chamar de: ${objeto1.apelidos[0]}, ${objeto1.apelidos[1]} ou ${objeto1.apelidos[objeto1.apelidos.length-1]}.`)
}
mensagem(pessoa)

//b.
const pessoaNova = {
    ...pessoa,
    apelidos: ['Aaa', 'Ooo', 'Uuu']
}
mensagem(pessoaNova)

//2.
const informacao = {
    nome: 'Artur',
    idade: 19,
    profissao: 'Estudante'
}
 const outraInfo = {
     nome: 'Mike',
     idade: 20,
     profissao: 'Mágico'
 }
 function arrayInfo(obj1){
     const infos = [obj1.nome, obj1.nome.length, obj1.idade, obj1.profissao, obj1.profissao.length]
    return infos
 }
 arrayInfo(informacao);
 console.log (arrayInfo(informacao))
 console.log (arrayInfo(outraInfo))

 //3.
 const carrinho = []
 const fruta1 = {
     nome: 'Banana',
     disponibilidade: true
 }
 const fruta2 = {
     ...fruta1,
     nome: 'Uva'
 }
 const fruta3 = {
     ...fruta2,
     nome: 'Laranja'
 }
 function caixa(frutas){ 
     return carrinho.push(frutas)
 }
 caixa(fruta1);
 caixa(fruta2);
 caixa(fruta3);
 console.log (carrinho)