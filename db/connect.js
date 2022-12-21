const mongoose = require('mongoose');
mongoose.set("strictQuery", false); // to pass strict query error

const { MongoClient, ServerApiVersion } = require('mongodb');

 
const connectDB = (uri)=>{
    // return mongoose.connect(uri, options, callback )
    console.log("connect database");

    return mongoose.connect(uri, {
        useNewUrlParser:true,
        useUnifiedTopology:true
    })

};


module.exports = connectDB;


