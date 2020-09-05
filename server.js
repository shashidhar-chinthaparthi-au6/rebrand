const express = require("express")
const bodyparser = require('body-parser');
const User = require("./router/user")
const Cart = require("./router/cart")
require("./config/db")

const app = express()

app.use(bodyparser.json());
app.use(User)
app.use(Cart)

app.get("/",function(req,res){
    res.send("Welcome to home")
})

app.listen(3000,function(){
    console.log("server running port on 3000")
})