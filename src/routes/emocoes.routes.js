import { Router } from "express";

const emocoesRoutes = Router();

let emocoes = [
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
];

emocoesRoutes.get("/", (req, res) => {
    return res.status(200).send(emocoes);
});

emocoesRoutes.post("/", (req, res) => {
    const { nome, cor } = req.body;

    const novaEmocao = {
        id: emocoes.length + 1,
        nome: nome,
        cor: cor
    };

    emocoes.push(novaEmocao);
    
    return res.status(201).send(emocoes);
});

export default emocoesRoutes