const express = require('express');
const router = express.Router();

// Connect Router to Model
let Product = require('../models/product');

/* BUY Operation */
router.get('/:id', async(req,res,next)=> {
    try {
        const id = req.params.id;
        const itemBought = await Product.findById(id);
        if (!itemBought) {
            return res.status(404).send('Product not found');
        }
        res.render('checkout', {
            title:"Checkout", 
            Product: itemBought
        });
    } catch(err) {
        console.error(err);
        res.render('Products/list', {
            error:'Error on Server'
        });
    }
});

/* CONFIRM Operation */
router.post('/confirm', (req,res,next)=> {
    res.redirect('confirmation');
});

module.exports = router;