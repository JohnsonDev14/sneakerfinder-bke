import express from "express";

const app = express();
const PORT = 8080

app.get("/teste", (req,res) => {
    res.send("deu certo")
})

app.listen(PORT, ()=>{
    console.log(`server rodando na porta ${PORT}`);
})

