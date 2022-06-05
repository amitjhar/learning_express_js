const express = require('express'); // function
const res = require('express/lib/response');

const app = express() //module
app.use(express.urlencoded({extended:'false'}))   // to show value in backend
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.get ('/',(req,res)=>{
// res.render('index') // for file show
res.send('hey i am here to talk with you')  // for message print 
  res.render('form', {title:'amit'});  // for show header name and change
})

app.get('/form',(req,res)=>{
res.render('form.ejs');
})

app.post('/form',(req,res)=>{
    console.log((req.body));

})




app.listen(3000);





