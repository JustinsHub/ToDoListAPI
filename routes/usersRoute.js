const express = require('express')
const router = express.Router()

router.get('/users', (req, res, next)=>{
    return res.json('hello world')
})

module.exports = router