// ATENÇÃO!!!
//    -> NÃO COMENTE NENHUMA DAS FUNÇÕES DECLARADAS!!! 
//    -> NÃO MODIFIQUE OS PARÂMETROS DAS FUNÇÕES!!! ()


// EXERCÍCIO 01
function retornaTamanhoArray(array) {
   return array.length
}

// EXERCÍCIO 02
function retornaArrayInvertido(array) {
    return array.reverse()
}

// EXERCÍCIO 03
function retornaArrayOrdenado(array) {
    return array.sort(function(a, b){return a-b})
}

// EXERCÍCIO 04
function retornaNumerosPares(array) {
    let pares = array.filter((item) => {
        return item % 2 === 0 
    })
    return pares
}

// EXERCÍCIO 05
function retornaNumerosParesElevadosADois(array) {
    let apenasPares = array.filter((item) => {
        return item % 2 === 0
    }).map((item)=>{
        return item ** 2
    })
    return apenasPares
}

// EXERCÍCIO 06
function retornaMaiorNumero(array) {
    let maior = 0
    for(let i = 0; i<array.length;i++){
        if(maior<array[i]){
            maior=array[i]
        }
    }
    return maior
}

// EXERCÍCIO 07
function retornaObjetoEntreDoisNumeros(num1, num2) {
    let verificaMaior = (num1, num2) =>{
        if(num1 > num2){
            return (true)
        } else {
            return(false)
        }
    }
    let verificaMenor = (num1, num2) =>{
        if(num1 < num2){
        return (true)
        } else {
        return (false)
        }
    }
    verificaMaior(num1,num2)
    verificaMenor(num1,num2)

    
}

// EXERCÍCIO 08
function retornaNPrimeirosPares(n) {
    let numeros = []
    for(let i=0;numeros.length<n;i+= 2){
        numeros.push(i)
    }
    return numeros
   
}

// EXERCÍCIO 09
function classificaTriangulo(ladoA, ladoB, ladoC) {

}

// EXERCÍCIO 10
function retornaSegundoMaiorESegundoMenor(array) {
    
  
}

// EXERCÍCIO 11
function retornaChamadaDeFilme(filme) {
   
}

// EXERCÍCIO 12
function retornaPessoaAnonimizada(pessoa) {
   
}

// EXERCÍCIO 13A
function retornaPessoasAutorizadas(pessoas) {
   
}

// EXERCÍCIO 13B
function retornaPessoasNaoAutorizadas(pessoas) {
  let pessoasNaoAutorizadas = pessoas.filter((pessoas)=>{
    if(pessoas.altura <= 1.5 || pessoas.idade < 14 || pessoas.idade >= 60){
        return pessoas
    }
  })
  return pessoasNaoAutorizadas
}

// EXERCÍCIO 14
function retornaContasComSaldoAtualizado(contas) {
    let resultado = contas.map((conta)=>{
        let soma = conta.compras.reduce((itemAnt, itemAtual) => itemAnt + itemAtual, 0)
        let saldo = conta.saldoTotal
        return {...conta, saldoTotal: saldo - soma, compras:[]}
    })
    return resultado
}

// EXERCÍCIO 15A
function retornaArrayOrdenadoAlfabeticamente(consultas) {
    
}

// EXERCÍCIO 15B
function retornaArrayOrdenadoPorData(consultas) {
   let resultado = consultas.sort((primeiraConsulta, segundaConsulta) => {
       return new Date(primeiraConsulta.dataDaConsulta.slipt("/").reverse()).getTime() - new Date(segundaConsulta.dataDaConsulta.split("/").reverse()).getTime()
   })
   return resultado
}