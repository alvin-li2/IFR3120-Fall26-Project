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
//get operation (gets info)
router.get('/add', async(req,res,next)=>{
    try{
        res.render('Products/add',{
            title:'Add Product'
        });

    }
    catch(err)
    {
        console.log(err);
        res.render('Products/add',{
            error:'Error on Server'
        })
    }
        
});
//post operatio (posts info)
//*router.post('/add', async(req,res,next)=>{});*/
/* Update Operation */

/* Delete Operation */

module.exports = router;