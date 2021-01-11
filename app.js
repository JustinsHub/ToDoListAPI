const express = require('express')

const app = express()

app.get('/', (req, res, next)=>{
    return res.json('helloworld')
})

module.exports = app