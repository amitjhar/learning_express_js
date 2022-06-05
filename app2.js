const express=require('express');
const app = express();//module

app.use(express.static('public'));
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.render('index');
//    res.send();
})


app.listen(5000);