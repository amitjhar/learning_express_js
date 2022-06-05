const mongoose= require('mongoose') //module

const studentSchema= mongoose.Schema({
    name:String,
    address:String,
    rollNo:Number
})

module.exports=mongoose.model('students',studentSchema);
