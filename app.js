const express = require('express')
const morgan = require('morgan')

const app = express()


//MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())

//ROUTES
app.get('/', (req, res, next)=>{
    return res.json('helloworld')
})

//GENERAL ERROR HANDLING
module.exports = app