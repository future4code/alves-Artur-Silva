// Exercícios de escrita de código

// 1. Dado o seguinte array de cachorrinhos que são clientes de um pet shop, 
// realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
const msg = `Você ganhou um cupom de desconto de 10% para tosar o/a`
const pets = [
    { nome: "Lupin", raca: "Salsicha"},
    { nome: "Polly", raca: "Lhasa Apso"},
    { nome: "Madame", raca: "Poodle"},
    { nome: "Quentinho", raca: "Salsicha"},
    { nome: "Fluffy", raca: "Poodle"},
    { nome: "Caramelo", raca: "Vira-lata"},
 ]
 const nomeDog = pets.map((nome) =>{
    return nome.nome
 })
console.log (nomeDog)
const salsichas = pets.filter((dog)=>{
    if(dog.raca.toLowerCase() === 'salsicha'){
        return dog
    }
})
console.log (salsichas)

const mensagemDesconto = pets.filter((dog)=>{
    return dog.raca.toLowerCase()==='poodle'
    }).map((dog)=>{
        return `Você ganhou um cupom de desconto de 10% para tosar o/a ${dog.nome}!`
    })
    console.log(mensagemDesconto)


    //2. Dado o seguinte array de produtos, realize as operações pedidas nos itens abaixo utilizando as funções de array map e filter:
    const produtos = [
        { nome: "Alface Lavada", categoria: "Hortifruti", preco: 2.5 },
        { nome: "Guaraná 2l", categoria: "Bebidas", preco: 7.8 },
        { nome: "Veja Multiuso", categoria: "Limpeza", preco: 12.6 },
        { nome: "Dúzia de Banana", categoria: "Hortifruti", preco: 5.7 },
        { nome: "Leite", categoria: "Bebidas", preco: 2.99 },
        { nome: "Cândida", categoria: "Limpeza", preco: 3.30 },
        { nome: "Detergente Ypê", categoria: "Limpeza", preco: 2.2 },
        { nome: "Vinho Tinto", categoria: "Bebidas", preco: 55 },
        { nome: "Berinjela kg", categoria: "Hortifruti", preco: 8.99 },
        { nome: "Sabão em Pó Ypê", categoria: "Limpeza", preco: 10.80 }
     ]
     console.log('Esse é o preço', produtos)
     const nomeProdutos = produtos.map((objeto) =>{
         return objeto.nome
     })
     console.log (nomeProdutos)



     const produtosComDesconto = produtos.map((objeto) => {
         return objeto.preco - objeto.preco * 0.05
     })
    console.log(produtosComDesconto)

     const produtosBebidas = produtos.filter((objeto) =>{
         return objeto.categoria.toLowerCase() === 'bebidas'
     })
    console.log(produtosBebidas)

    const palavraYpe = produtos.filter((objeto)=>{
        return objeto.includes('Ypê')
    })
    console.log(palavraYpe)

    