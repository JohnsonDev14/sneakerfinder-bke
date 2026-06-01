import express from 'express'
const app = express()
const PORT = 7788

app.get("/", (req,res) => {
    res.body("certinho")
})

app.listen(PORT, () => {
    console.log(`Rodando na porta ${PORT}`)
})