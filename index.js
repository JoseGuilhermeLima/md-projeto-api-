const express = require("express")
const app = express()

app.use (express.urlencoded({extended:true}))
app.use (express.json)
app.get ('/', (req,res) =>{ 
    res.json({'mensagem': 'Consulta realizada'})}) 
app.post('/cadastracliente', (req,res) =>{ 
        const nome =req.body.nome 
        const telefone = req.body.telefone 
        console.log(`Cadastrado: ${nome} com o telefone ${telefone}`) 
        res.status(201).json({mensagem: `Cliente ${nome} cadastrado`})
        if (!nome) 
{ 
        res.status(422).json({mensagem: 'Campo nome é obrigatório'}) 
        return 
} 
    }) 
const porta= 3000 
app.listen(porta,()=> {console.log(`Rodando na porta ${porta}`)}) 