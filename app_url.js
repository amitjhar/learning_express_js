const express = require('express')

const app = express();

app.use(express.urlencoded({extended:false}))

const testRouter = require('./router/test')
const pageRouter = require('./router/page')
app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(pageRouter)
app.use('/admin',testRouter) // use prefix when you have mautiple home pages 





app.listen(5000);