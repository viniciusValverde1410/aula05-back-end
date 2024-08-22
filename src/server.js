import express from 'express'
import { config } from 'dotenv'

config()

const serverPort = process.env.PORT || 3000

const app = express()
app.use(express.json())

app.get("/" , (req, res) => {
    return res.status(200).send({message: "Hello, World!"})
})

app.listen(serverPort, () => {
    console.log(`💜 Server staterd on http://localhost:${serverPort}`)
})