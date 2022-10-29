const express = require('express')
const path = require('path')
var app = express()
const routerBureau = require('./router/bureau')
const bureauController=require('./controller/bureau')
const User = require('./models/contact')
var bodyParser = require('body-parser').urlencoded({extended : true})

app.use(express.static(path.join(__dirname,'assets')))
app.set('view engine', 'ejs');
app.set('views', 'views')
app.get('/home',(req,res)=>{
    res.render('index')
})

app.use('/home',routerBureau)

// app.get('/contact',(req,res)=>{
//     res.render('contact')
// })
// app.post('/contact', async(req,res)=>{
//     try {
//         const userData = new User(req.body)
//         await userData.save()
//         res.status(210).render('index')
//     } catch (error) {
//         res.status(500).send(error)
//     }
// })

app.listen(3000,()=>console.log('server started'))