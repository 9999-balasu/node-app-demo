
const express = require('express')
const port = process.env.PORT || 5520

const app = express()

app.get('/',(req,res)=>{
    res.send('<h1>Welcom to INNOVETION HUB</h1>')
})


app.listen(port,()=>{
    console.log('application is running on port:',port)
})