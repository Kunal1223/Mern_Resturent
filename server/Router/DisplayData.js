const express = require('express');
const router = express.Router();

router.post('/displaydata' , (req,res) =>{ 
    try {
        // console.log(global.food_item);
        res.send([global.food_item ,global.food_catogry]);
    } catch (err) { 
        console.error(err.message);
       res.send('server error') ;
    }
})


module.exports = router;