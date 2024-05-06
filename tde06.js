const express = require('express')
const server = express()

const port = 8080

server.get("/health", (req, res)=> {
    res.json({
        stats: "running"
    })
})

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`)
})