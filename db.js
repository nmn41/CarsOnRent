const mongoose = require("mongoose");

function connectDB(){

    mongoose.connect('mongodb+srv://caaarsonrent:caaarsonrent1234@cluster0.0qwy2.mongodb.net/caaarsonrent' , {useUnifiedTopology: true , useNewUrlParser: true})

    const connection = mongoose.connection

    connection.on('connected' , ()=>{
        console.log('Mongo DB Connection Successfull')
    })

    connection.on('error' , ()=>{
        console.log('Mongo DB Connection Error')
    })


}

connectDB()

module.exports = mongoose