import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 4000

const app = express()
app.use(express.json())

const emocoes = [
    {
        id: 1,
        nome: "Raiva",
        cor: "Vermelho"
    },
    {
        id: 2,
        nome: "Alegria",
        cor: "Amarelo"
    },
    {
        id: 3,
        nome: "Ansiedade",
        cor: "Laranja"
    }
]

const personagens = [
    {
        id: 100,
        nome: "Homem de Ferro",
        studio: "Disney",
        vivo: false
    },
    {
        id: 101,
        nome: "Batman",
        studio: "DC",
        vivo: true
    },
    {
        id: 102,
        nome: "Mcqueen",
        studio: "Pixar",
        vivo: true
    }
]

app.get("/" , (req, res) => {
    return res.status(200).send({message: "Hello, World!"})
})

app.get("/2tds2" , (req, res) => {
    return res.status(200).send({message: "Hello, DS2!"})
})

app.get("/emocoes" , (req, res) => {
    return res.status(200).send(emocoes)
})

app.get("/personagens" , (req, res) => {
    return res.status(200).send(personagens)
})

app.listen(serverPort, () => {
    console.log(`💜 Server staterd on http://localhost:${serverPort}`)
})