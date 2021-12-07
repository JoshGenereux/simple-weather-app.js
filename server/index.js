const express = require('express')
const cors = require('cors')
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

app.listen(4000, ()=>console.log("Running on 4000"))