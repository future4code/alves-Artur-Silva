import express, {Request, Response} from "express"
import cors from "cors"
import { users } from "./data"

const app = express()

app.use(cors())
app.use(express.json())

app.listen(3003, () => console.log("Servidor disponível em 3003"))

app.get("/playlists", (req, res) => {
  // tenho todos os usuários
  const currentUsers = users // array de objetos
  console.log(1, currentUsers);

  // Vou pegar as playlists de cada usuário
  const userPlaylists = currentUsers.map((user: any) => {
    return user.playlists 
  }) // array de arrays
  console.log(2, userPlaylists)

  const result = userPlaylists.flat(1)

  res.status(200).send(result);
})


app.get("/tracks", (req, res) => {
  const playlistId = req.query.id

  if(!playlistId) res.status(400).send("Não é possível realizar a operação. ID da playlista ausente")

  const allPlaylists = users.map((user: any) => {
    return user.playlists
  }).flat(1)

  let tracks;

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
      tracks = playlist.tracks
    }
  })

  res.status(200).send(tracks)
})

app.delete("/playlist", (req, res) => {
  const id = req.query.id

  users.forEach((user: any) => {
    user.playlists = user.playlists.map((playlist: any) => {
      if (playlist.id === id) {
        return {}
      }
      return playlist
    });
  })

  res.status(200).send(users)
})

app.delete("/track", (req, res) => {
  const trackId = req.query.trackId
  const playlistId = req.query.playlistId

  const allPlaylists = users
    .map((user: any) => {
      return user.playlists;
    })
    .flat(1);
  for (let i = 0; i <= allPlaylists.lenght; i++) {
    allPlaylists[i]
  }

  for (let playlist of allPlaylists) {
    playlist
  }

  allPlaylists.forEach((playlist: any) => {
    if (playlist.id === playlistId) {
       playlist.tracks = playlist.tracks.map((track: any) => {
         if (track.id === trackId) {
           return {};
         }
         return track;
       });
    }
  })

  res.status(200).send(allPlaylists)
})

app.get("/ping", (req:Request, res:Response) => {
  res.send("Pong 🏓")
})

type all = [
  {
    userId: number
    id: number
    title: string
    completed: boolean
  }
]

app.get("/", (req:Request, res: Response) => {
  res.send(afazeres)
})

app.get('/true', (req: Request, res: Response) => {
  const afazeresTrue = afazeres.filter((afazeres) => {
    if(afazeres.completed === true){
      return afazeres
    }
  })
  res.send(afazeresTrue)
})

app.get("/false", (req:Request, res: Response) => {
  const afazeresFalse = afazeres.filter((afazeres) => {
    if (afazeres.completed === false){
      return afazeres
    }
  })
  res.send(afazeresFalse)
})

app.post('/', (req:Request,res:Response) => {
  const title = req.body.title
  const completed = req.body.completed
  const id = Math.floor(Date.now() * Math.random())
  const userId = Math.floor(Date.now() * Math.random())
  
  const novoAfazer = [...afazeres, afazeres.push({
    userId:userId,
    id:id,
    title:title,
    completed:completed
   }
)]
  res.send(novoAfazer)
})

app.patch('/edit/:afazerId', (req:Request, res:Response) => {
  // const newCompleted = 
  // const novaLista = afazeres.map(() => {

  // })
})

const afazeres = [
  {
    userId:Math.floor(Date.now() * Math.random()),
    id: Math.floor(Date.now() * Math.random()),
    title:"Fazer almoço",
    completed:true
  },
  {
    userId:Math.floor(Date.now() * Math.random()),
    id:Math.floor(Date.now() * Math.random()),
    title:"Dormir",
    completed:false
  },
  {
    userId:Math.floor(Date.now() * Math.random()),
    id:Math.floor(Date.now() * Math.random()),
    title:"Estudar",
    completed:false
  },
  {
    userId:Math.floor(Date.now() * Math.random()),
    id:Math.floor(Date.now() * Math.random()),
    title:"Tomar banho",
    completed:true
  },
  {
    userId:Math.floor(Date.now() * Math.random()),
    id:Math.floor(Date.now() * Math.random()),
    title:"Conversar com amigos",
    completed:false
  },
  {
    userId:Math.floor(Date.now() * Math.random()),
    id:Math.floor(Date.now() * Math.random()),
    title:"Fazer café",
    completed:true
  }
]