const express = require('express')
const morgan = require('morgan')
const ExpressError = require('../express-side-project/expressError')

const app = express()


//MIDDLEWARE
app.use(morgan('dev'))
app.use(express.json())

//ROUTES
app.get('/', (req, res, next)=>{
    return res.json('helloworld')
})

//404 ERROR MISSING PAGES
app.use((req,res,next)=>{
    const e = ExpressError('Page Not Found', 404)
})

//GENERAL ERROR HANDLING
app.use((err, req,res, next)=>{
    const status = err.status || 500
    const message = err.message
    return res.status(status).json({Error:{message, status}})
})
module.exports = app