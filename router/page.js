const router= require('express').Router();

const student = require('../model/student');
const Student = require('../model/student');
const reg = require('../model/reg');
const req = require('express/lib/request');


router.get('/',(req,res)=>{


    // res.send('home page');
    res.render('home',{title:'documents'});

    
})
router.get('/form', (req,res)=>{
    res.render('form.ejs')
})
router.post('/form',(req,res)=>{
    console.log(req.body);
})

router.get('/test/:name',(req,res)=>{
    console.log(req.params.name) 

})


                         //    create table 

router.get('/test2',(req,res)=>{
    
   const a= new Student({
        name:'lokesh',
        address:'bassi',
        rollNo:334
    })
    a.save();
})
router.get('/form',(req,res)=>{
   req.render('form.ejs') 
})
router.post('/form2',async(req,res)=>{
    console.log(req.body);
    const name = req.body.name;
    const address = req.body.address;
    const roll = req.body.roll;

    const a = new student({
        name:name,
        address:address,
        rollNo:roll,
    })
   await a.save();

    res.redirect('/fetchs')
})
     

    //    fetch -> for single value

router.get('/fetch',async(req,res)=>{
    
    const studentsrecords = await Student.findOne();
    // console.log(studentsrecords);

    
    res.render('fetch.ejs',{studentsrecords});
})

                // fetch -> for multiple values

                
router.get('/fetchs',check,async(req,res)=>{
    
    const studentsRecords = await Student.find();
    // console.log(studentsrecords);
    
    res.render('fetchs.ejs',{studentsRecords});
})


                  //  for Update 



router.get('/formupdate/:id',async(req,res)=>{
    const id = req.params.id;
     const studentsRecords = await student.findById(id)
    res.render('formupdate',{studentsRecords})
})

router.post('/update/:id',async(req,res)=>{
   const id= req.params.id
    // console.log(req.body);

    const name = req.body.name;
    const address = req.body.address;
    const rollNO = req.body.rollNo;

   await Student.findByIdAndUpdate(id,{name:name,address:address,rollNO:rollNO})
   res.redirect('/fetchs')
})

            //    for  delete 

router.get('/delete/:id',async( req,res)=>{
    const id = req.params.id
    const studentsRecords = await Student.findByIdAndDelete(id)
    res.render('delete',{studentsRecords})
    res.redirect('/fetchs')
})


                    // ragistration pannel 


router.get('/registration',(req,res)=>{
    res.render('regform.ejs')
})

router.post('/regform',check,async(req,res)=>{
    const username = req.body.user
    const password = req.body.pass
    const regrecords = new reg({username:username,password:password})  // vale insert in database
    await regrecords.save()      // save value in database
})



                // logIN pannel 

router.get('/login',(req,res)=>{
    res.render('loginform.ejs')
})

router.post('/loginform',async(req,res)=>{
const username = req.body.user
const password = req.body.pass
const record = await reg.findOne({username:username})
console.log(record.password)


if(record !== null){
    if(record.password == password)
    {
        req.session.isAuth = true;
    res.redirect('/fetchs')
}
else{
    res.redirect('/login')
}

}
else{
    res.redirect('/login')

}


})


//    middleware function 

function check(req,res,next){
    if(req.session.isAuth){
        next()
    }
else{
    res.redirect('/login')
}
}


// logout session 

router.get('/logout',(req,res)=>
{
    req.session.destroy()
    res.redirect('/login')
})
module.exports=router; 





