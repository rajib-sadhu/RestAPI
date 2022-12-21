require('dotenv').config();

const connectDB = require('./db/connect');
const Product = require('./models/product');

const ProductJSON = require('./product.json');


const start = async ()=>{
    try{
        await connectDB(process.env.MONGODB_URL);
        await Product.deleteMany();
        await Product.create(ProductJSON);
        console.log('success product')
    }
    catch(err){
        console.log('error|||| '+err)
    }
}

start();