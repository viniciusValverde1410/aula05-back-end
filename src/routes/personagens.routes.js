import { Router } from "express"

const personagensRoutes = Router()

let personagens = [
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

personagensRoutes.get("/", (req, res) => {
    return res.status (200)
    .send(personagens)
})

personagensRoutes.post("/", (req, res) => {
    const { nome, studio, vivo } = req.body;
    const novoPersonagem = {
        id: personagens.length + 1,
        nome: nome,
        studio: studio,
        vivo: vivo,
    };

    personagens.push(novoPersonagem);
    return res.status(201).send(novoPersonagem);
});

personagensRoutes.delete("/:id", (req, res) => {
    const { id } = req.params;

    const personagem = personagens.find((person) => person.id == id )

    if (!personagem) {
        return res.status(404).send({
            message: "Personagem não encontrado!"
        });
    }

    personagens = personagens.filter((person) => person.id != id)

    return res.status(200).send({
        message: "Personagem deletado",
        personagem,
    });
});

export default personagensRoutes