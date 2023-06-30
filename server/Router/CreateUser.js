const express = require('express');
const router = express.Router();
const User = require('../models/Usersc');
const {body , validationResult } = require('express-validator')
const bcrypt = require('bcryptjs')
const jwt = require("jsonwebtoken")

const key = "Mynameiskunalkishoriamastudentofnmitbengaluru"

// --------------------for create user --------------------

router.post('/createuser', 
([
    body('email','incorrect formate').isEmail(),
    body('name').isLength({min:5}),
    body('password','minimum 5 char').isLength({min:5}),
]),
async(req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }

    const salt = await bcrypt.genSalt(10);
    let secPassword = await   bcrypt.hash(req.body.password , salt);

    try { 
        // const{name , email , password , location} = req.body;
        await User.create({
            name: req.body.name, 
            email: req.body.email,  
            password:secPassword,
            location:req.body.location
        });
        res.json({ success: true });
    } catch (err) { 
        console.log(err);
        res.json({ success: false });
    }
}); 


// ------------for user login----------

router.post('/loginuser', 
([
    body('email','incorrect formate').isEmail(),
    body('password','minimum 5 char').isLength({min:5}),
]),
async(req, res) => {
    const error = validationResult(req);
    if(!error.isEmpty()){
        return res.status(400).json({error:error.array()})
    }
    // const salt = await bcrypt.genSalt(10);
    // let secPassword = await   bcrypt.hash(req.body.password , salt);
    // console.log(secPassword);
    const email = req.body.email;
    try { 
        const userData = await User.findOne({email});
        if(!userData){
            return res.status(400).json({error:"please enter the valid credentials"})
        }

        const pwdCompare = await bcrypt.compare(req.body.password , userData.password)
        if( !pwdCompare){
            return res.status(400).json({error:"please enter the valid credentials in password"})
        }

        const data = {
            user:{
                id: userData.id
            }
        }

        const authToken = jwt.sign(data,key);

            return res.json({ success: true , authToken:authToken });
        

    } catch (err) { 
        console.log(err);
        res.json({ success: false });
    }
}); 


module.exports = router;