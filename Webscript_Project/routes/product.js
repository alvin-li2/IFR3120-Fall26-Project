let express = require('express');
let router = express.Router();
let mongoose = require('mongoose');

// Connect Router to Model
let Product = require('../models/product');

/* READ Operation */
router.get('/',async(req,res,next) => {
    try {
        const Productlist = await Product.find();
        res.render('Products/list', {
            title:'Products',
            Productlist:Productlist
        })
    } catch(err) {
        console.log(err);
        res.render('Products/list',{
            error:'Error on Server'
        })
    }
})

/* CREATE Operation */
router.get('/add', async(req,res,next)=>{
    try {
        res.render('Products/add',{
            title:'Add Product'
        });

    } catch(err) {
        console.log(err);
        res.render('Products/add',{
            error:'Error on Server'
        });
    }
        
});
router.post('/add', async(req,res,next)=>{
    try {
        let newProduct = Product({
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price
        });
        Product.create(newProduct).then(()=>{
            res.redirect('/product')
        });
    } catch(err) {
        console.error(err);
        res.render('Products/list', {
            error: 'Error on Server'
        });
    }
});

/* UPDATE Operation */
router.get('/edit/:id', async(req,res,next)=>{
    try {
        const id = req.params.id;
        const productToEdit = await Product.findById(id);
        res.render('Products/edit',{
            title:'Edit Product',
            Product: productToEdit
        });
    } catch(err) {
        console.log(err);
        next(err);
    }    
});
router.post('/edit/:id', async(req,res,next)=>{
    try {
        let id = req.params.id;
        let updatedProduct = Product({
            "_id":id,
            "name": req.body.name,
            "description": req.body.description,
            "price": req.body.price
        })
        Product.findByIdAndUpdate(id, updatedProduct).then(()=>{
            res.redirect('/product')
        })
    } catch(err) {
        console.error(err);
        res.render('Products/list', {
            error:'Error on Server'
        });
    }
});

/* DELETE Operation */
router.get('/delete/:id', async(req,res,next)=>{
    try {
        let id = req.params.id;        
        Product.deleteOne({_id:id}).then(()=>{
            res.redirect('/product')
        })
    } catch(err) {
        console.error(err);
        res.render('Products/list', {
            error:'Error on Server'
        })
    }
});

module.exports = router;