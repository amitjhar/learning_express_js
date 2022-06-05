const express = require('express')

const app = express();
const mongoose = require('mongoose')

const session = require('express-session')

app.use(session({
    secret:'amit',
    saveUninitialized:false,
    resave:false,

    
}))

app.use(express.urlencoded({extended:'false'}))

mongoose.connect('mongodb://127.0.0.1:27017/mr10',()=>{
console.log('conneted to database mr10');
});

const testRouter = require('./router/test')
const pageRouter = require('./router/page')
app.use(express.static('public'))
app.set('view engine', 'ejs')


app.use(pageRouter)
app.use('/admin',testRouter) // use prefix when you have mautiple home pages 





app.listen(5000,()=>{
    console.log('server is runnig on port 5000');
});