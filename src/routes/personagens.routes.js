import { Router } from "express"

const personagensRoutes = Router()

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

app.get("/personagens" , (req, res) => {
    return res.status(200).send(personagens)
})