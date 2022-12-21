const Product =require('../models/product');




const getAllProducts = async (req, res)=>{

    const {company, sort, select} = req.query;

    const queryObj = {};
    
    let APIresult =  Product.find(queryObj);




    if(company){
        queryObj.company= company;
    }

    if(sort){
        let sortFix = sort.replace(","," ");
        APIresult= APIresult.sort(sortFix);
    }

    if(select){
        // let selectFix = select.replace(","," ");
        let selectFix = select.split(",").join(" ");

        APIresult= APIresult.select(selectFix);
    }


    // console.log('file ',req.query)
    // const myData = await Product.find({});
    const myData = await APIresult;
    // console.log(req.query) 
    

    res.status(200).json(myData);
};

const getAllProductsTest = async (req, res)=>{
    // res.status(200).json({ msg: "I am Get All Products Test" });


    const myData = await Product.find(req.query).sort("-price");

    res.status(200).json(myData);
};


module.exports = { getAllProducts, getAllProductsTest };