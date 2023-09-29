const express = require("express")
const cors = require("cors")
const bodyparser = require("body-parser")
const database = require("mysql")
// const variablename = package variablename into function
const connect = express()

connect.use(cors())
connect.use(bodyparser.json())
connect.use(express.json())
connect.use(express.static('public'))
connect.use(bodyparser.urlencoded({extended:true}))
// To connect the mysql to the DB 
let databaseconnection= database.createConnection({
    host:"localhost",
    port:3306,
    user:"root",
    password:"mranjana@2305",
    database:"inventory_management"
})

databaseconnection.connect(function(error){
    if(error){
        console.log(error)
    }
    else{
        console.log("database is connected")
    }
})

connect.get('/getdata',(request,response)=>{
    let sql='select * from product'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.get('/getdataloc',(request,response)=>{
    let sql='select * from location'
    databaseconnection.query(sql,(error,result)=>{
        if(error){
            response.send(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.get('/singledata/:product_id',(request,response)=>{
    let {product_id}= request.params
    let sql='select * from product where product_id=?'
    databaseconnection.query(sql,[product_id],(error,result)=>{
        if(error){
            response.send(error)
            console.log(error)
        }
        else{
            response.send(result)
        }
    })
})

connect.put('/update/:product_id',(request,response)=>{
    let {product_id}= request.params
    let {product_name,price,quantity}=request.body
    let sql='update product set product_name=?,price=?,quantity=? where product_id=?'
    databaseconnection.query(sql,[product_name,price,quantity,product_id],(error,result)=>{
        if(error){
            response.send({"status":"error"})
            console.log(error)
        }
        else{
            response.send({"status":"success"})
        }
    })
})

connect.post('/delete',(request,response)=>{
    let {product_id}=request.body
    let sql='delete from product where product_id=?'
    databaseconnection.query(sql,[product_id],(error,result)=>{
      if(error){
        response.send({"status":"error"})
      }
      else {
        response.send({"status":"success"})
      }
    })
    })

    connect.post('/addproduct',(request,response)=>{
        let {product_id,product_name,price,quantity }=request.body
        let sql='insert into product(product_id,product_name,price,quantity)values(?,?,?,?)'
        databaseconnection.query(sql,[product_id,product_name,price,quantity],(error,result)=>{
            if(error){
                response.send({"status":"error"})
                console.log(error)
            }
            else{
                response.send({"status":"success"})
            }
        })
    })

    connect.post('/dispatch/:product_id',(request,response)=>{
        let {product_id}=request.params
        let {product_name,quantity,product_from,product_to,to_quantity,dispatch_in,dispatch_out}=request.body
        let sql='insert into product_movement(product_name, quantity, product_from, product_to, product_id, from_quantity, to_quantity , dispatch_in , dispatch_out)values(?,?,?,?,?,?,?,?,?)'
        databaseconnection.query(sql,[product_name,quantity,product_from,product_to,product_id,quantity, to_quantity,dispatch_in,dispatch_out],(error,result)=>{
            if(error){
                response.send({"status":"error"})
                console.log(error)
            }
            else{
                response.send({"status":"success"})
            }
        })
        let {r_quatity}=request.body
        console.log(r_quatity)
        let updatsql='update product set quantity=? where product_id=?'
        databaseconnection.query(updatsql,[r_quatity,product_id],(error,result)=>{
            if(error){
                console.log(error)
            }
            else{
                console.log("updated")
            }
        })
    })


// we need to create port No:
connect.listen(3002,()=>{
    console.log("server run in 3002 port")
})
