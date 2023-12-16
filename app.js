app.set('appname', 'taksonomi webapp')
const express = require('express')
const app = express()
const port = 1000
const router = require('./routes')

app.set('view engine', 'ejs')

app.use(express.urlencoded({extended:true}))
app.use(express.json())
app.use(express.static('public'))

app.use(router)

app.listen(port, (err)=>{
    if(err){
        console.log(err);
    } else {
        console.log(`server listening on http://localhost:${port}/ `);
    }
})