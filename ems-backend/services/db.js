//node + mongodb connection 
// ..............................

// import mongoose
const mongoose= require('mongoose')

// connect the mongodb
mongoose.connect('mongodb://localhost:27017/Ems')

// create a model and schema for the collection
const Employee = mongoose.model('Employee',{
    id:Number,
    name:String,
    age:Number,
    designation:String,
    salary:Number
})

module.exports={
    Employee
}