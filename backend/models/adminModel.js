const {Schema,model} = require('mongoose');

const adminSchema = new Schema({
    adminName : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true,
        select : false
    },
    role : {
        type : String,
        required : true
    },
    image : {
        type : String,
        required : true
    }
},{timeseries : true});

module.exports = model('admin',adminSchema);