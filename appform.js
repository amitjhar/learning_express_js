const express = require('express')//function
const app = express()//module

app.use(express.urlencoded({extended:false}))
app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    // res.send('home page');
    res.render('home',{title:'amit'});

    
})
app.get('/form', (req,res)=>{
    res.render('form.ejs')
})
app.post('/form',(req,res)=>{
    console.log(req.body);
})

app.listen(5000);