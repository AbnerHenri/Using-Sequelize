const express = require('express')
const routes = require('./Routes/Router')
const app = express()

app.use(routes)

app.listen(3000, ()=>{ console.log('Server Running') })