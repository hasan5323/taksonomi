const express = require('express')
const app = express()
const port = 1000
const router = require('./routes')
// const { json } = require('sequelize')

app.set('view engine', 'ejs')
app.set('appname', 'taksonomi webapp')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))
app.use(router)

app.listen(port,()=>{
    console.log(`server running on port ${port}`);
})