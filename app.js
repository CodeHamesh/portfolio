const express = require('express');
const app = express();
const path = require('path');
const ejsMate = require('ejs-mate');
const { title } = require('process');


app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'))
app.engine('ejs',ejsMate)
app.use(express.static(path.resolve('./public')))
app.get('/',(req,res)=>{
    res.send('home')
})

app.get('/home',(req,res,next)=>{
   try {
    res.render('home.ejs',{title:'Portfolio'})
   } catch (err) {
    next(err)
   }
})

app.get('/about',(req,res,next)=>{
   try {
    res.render('about.ejs',{title: 'About me'})
   } catch (err) {
    next(err)
   }
})

app.get('/contact',(req,res,next)=>{
   try {
    res.render('contact.ejs',{title:'Contact Me'})
   } catch (err) {
    next(err)
   }
})

app.use('*',(req,res,next)=>{
        res.render('error.ejs',{title:'Error',msg:'404 Page Not Found'})
        next()
})

app.use((err,req,res,next)=>{
     res.render('error.ejs',{title:'Error',msg: err.message})
     next(err)
})







const PORT = 9000
app.listen(PORT, ()=> console.log('server run 9000'))
