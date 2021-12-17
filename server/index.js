const express = require('express')
const cors = require('cors')
const path = require("path");
let app = express()
app.use(express.json())
app.use(cors())

app.get(`/onecall`,(req, res)=>{
    console.log(res.data)
    res.status(200).send(res.body)
    console.log(res.body)
})

app.get('/img/wn', (req, res)=>{
    res.status(200).send(res.body)
    console.log(res.body)
})

app.get('/', (req, res)=>{
    res.sendfile(path.join(__dirname, '/index.html'))
})

const port = process.env.PORT || 4000;

app.listen(port, ()=> console.log(`Running on port ${port}`))