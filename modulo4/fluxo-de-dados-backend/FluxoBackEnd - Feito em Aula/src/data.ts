export type editarMusica = {
    musica:string,
    artista:string
}

export type Musicas = {
    musica: string,
    artista: string,
    ano: number
}

export type Playlist = {
    nome: string,
    musicas: Musicas[]
}


export const playlist: Playlist[] = [
    {
        nome: "anos 80",
        musicas: [
            {
                musica: "is this love",
                artista: "WhiteSnake",
                ano: 1980
            },
            {
                musica: "welcome to the jungle",
                artista: "Guns and Rose",
                ano: 1980
            }
        ]
    },
    {
        nome: "Sertanejo",
        musicas: [
            {
                musica: "borbulhas de amor",
                artista: "fagner",
                ano: 1990
            },
            {
                musica: "Evidencias",
                artista: "xitaozin de xororo",
                ano: 1990
            }
        ]
    },
    {
        nome: "Anos 2000",
        musicas: [
            {
                musica: "iris",
                artista: "GoGoDools",
                ano: 1990
            },
            {
                musica: "save me",
                artista: "smallvillage",
                ano: 2000
            }
        ]
    }
]

export type Produto = {
    id:string,
    name:string,
    price:number
}

export type Produtos = [    
    {produto: Produto}
]

export const prudutos: Produto[] = [
    {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name:"Chave",
        price:12.00
    },
    {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name:"Banana",
        price:9.99,
    },
    {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name:"Monitor",
        price:400.99,
    },
    {
        id:Math.floor(Date.now() * Math.random()).toString(36),
        name:"Peixe",
        price:30.50,
    }
]