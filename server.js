const app = require('./app')
const {PORT} = require('./config')

app.listen(PORT, ()=>{
    console.log(`You are connected to localhost:${PORT}`)
})