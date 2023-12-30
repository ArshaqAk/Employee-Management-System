// import express
const express=require('express')

// import cors
const cors=require('cors')

//import logic
const logic=require('./services/logic ')

//create a server application using the express
const serverApp=express()

//use cors and express
serverApp.use(cors({//to connet two diffent ports
    origin:'http://localhost:3000'
}))

serverApp.use(express.json())

//server listen
serverApp.listen(8000,()=>{
    console.log('server listening on pot 8000');
}    )

//get all employee api call
serverApp.get('/getEmployees',(req,res)=>{
    logic.getAllEmployee().then((result)=>{
        res.status(result.statusCode).json(result)//array of data
    })
})

//add an employee api call
serverApp.post('/addEmployees',(req,res)=>{
    logic.addEmployees(req.body.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})


//delete an employee
serverApp.delete('/deleteEmployees/:id',(req,res)=>{
    logic.deleteEmployees(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})

//view an employee api call
serverApp.get('/viewEmployees/:id',(req,res)=>{
    logic.viewEmployee(req.params.id).then((result)=>{
        res.status(result.statusCode).json(result)
    
})
})

//update an employee  api call
serverApp.post('/updateEmployees/:id',(req,res)=>{
    logic.updateEmployee(req.params.id,req.body.name,req.body.age,req.body.designation,req.body.salary).then((result)=>{
        res.status(result.statusCode).json(result)
    })
})