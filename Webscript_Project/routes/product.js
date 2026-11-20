let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect Router to Model
let Product = require('../models/product');

/* Read Operation */
router.get('/',async(req,res,next) => {
    try {
        const Productlist = await Product.find();
        res.render('Products/list', {
            title:'Products',
            Productlist:Productlist
        })
    }
    catch(err){
        console.log(err);
        res.render('Products/list',{
            error:'Error on Server'
        })
    }
})

/* Create Operation */

/* Update Operation */

/* Delete Operation */

module.exports = router;