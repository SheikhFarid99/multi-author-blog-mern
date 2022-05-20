const validator  = require('validator');
const adminModel = require('../models/adminModel');
const bcrpty = require('bcrypt');
const jwt = require('jsonwebtoken');


module.exports.admin_login = async(req,res)=>{
    
    const {email,password} = req.body;

    const error = {

    }

    if(email && !validator.isEmail(email)){
        error.email = "please provide your valid email"
    }
    if(!email){
        error.email = "please provide your email";
    }
    if(!password){
        error.password = "please provide your password"
    }

    if(Object.keys(error).length>0){
        return res.status(400).json({errorMessage : error})
    }else{
        try {
            const getAdmin = await adminModel.findOne({email}).select('+password');
            if(getAdmin){
                const matchPassword = await bcrpty.compare(password,getAdmin.password);
                if(matchPassword){
                    const token = jwt.sign({
                        id : getAdmin._id,
                        name : getAdmin.adminName,
                        role :getAdmin.role,
                        image : getAdmin.image
                    },process.env.SECRET,{expiresIn : '7d'});

                    res.status(200).cookie('blog_token',token,{
                        expires : new Date(
                            Date.now() + process.env.COOKIE_EXP*24*60*60*1000
                        ),
                        httpOnly : true
                    }).json({
                        successMessage : 'login successfull',
                        token
                    })

                }else{
                    return res.status(400).json({errorMessage :{error:"Passwod does not match"}});
                }

            }else{
                return res.status(400).json({errorMessage : {error:"Email does not exits"}});
            }
        } catch (error) {
            return res.status(500).json({errorMessage : {error:"Internal server error"}});
        }
    }


}