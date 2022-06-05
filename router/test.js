const { append } = require('express/lib/response');

const router = require('express').Router();


router.get('/', (req, res) => {
    res.send('i am amit')
})



module.exports = router;