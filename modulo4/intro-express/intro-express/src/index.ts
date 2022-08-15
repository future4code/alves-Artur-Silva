import express, { Request, Response } from 'express'
import cors from 'cors'

const app = express()

app.use(express.json())
app.use(cors())



app.listen(3003, () => {
    console.log("O servidor está rodando na porta 3003")
})

app.get('/users', (req:Request, res: Response) => {
    const ex1 = 'users.map'
    console.log(req.body.user.name)
})