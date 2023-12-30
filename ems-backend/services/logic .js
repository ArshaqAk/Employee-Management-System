//import db
const { response } = require('express');
const db= require('./db');

//get all enployees details
const getAllEmployee=()=>{
    return db.Employee.find().then((response)=>{
        if(response){
            return {
                statusCode:200,
                employee:response
            }

        }
        else{
            return{
                statusCode:404,
                message:'No such data'
            }
        }
    })
}

//add employee
const addEmployees=(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:401,
                message:"Employee already exists"
            }
        }
        else{
            //store employee details in db
            const newEmployee=db.Employee({id,name,age,designation,salary})
            //to save employee details in db
            newEmployee.save()
            return{
                statusCode:200,
                message:"Employee added successfully"
            }
        }
    })

}

//delete an employee from data bs
const deleteEmployees=(id)=>{
    return db.Employee.deleteOne({id}).then((result)=>{
        if(result){

        return{
            statusCode:200,
            message:"Employee deleted successfully"
        }
    }
    else{
        return{
            statusCode:404,
            message:"Employee not found"

        }
    }
})
}


//view an employee
const viewEmployee=(id)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            return{
                statusCode:200,
                anEmployee:result
            }

        }else{
            return{
                statusCode:404,
                message:"could't find"
            }
        }

    })
}

const updateEmployee=(id,name,age,designation,salary)=>{
    return db.Employee.findOne({id}).then((result)=>{
        if(result){
            result.id=id;
            result.name=name;
            result.age=age;
            result.designation=designation;
            result.salary=salary;
            result.save();//to update changes in db
            return{
                statusCode:200,
                message:"employee data updated successfully"
            }
        }else{
            return{
                statusCode:404,
                message:"could't find employee"
            }
        }
    })
}



module.exports={
    getAllEmployee,
    addEmployees,
    deleteEmployees,
    viewEmployee,
    updateEmployee
}