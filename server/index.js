const express = require('express')
const cors = require('cors')
const path = require("path");
let app = express()
app.use(express.json())
app.use(cors())

app.get(`/onecall`,(req, res)=>{
    console.log(res.data)
    res.status(200).send(res.body)
})

app.get('/img/wn', (req, res)=>{
    res.status(200).send(res.body)
})

app.get('/', function (req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`Running on port ${port}`))