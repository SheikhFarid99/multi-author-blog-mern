const {Schema,model} = require('mongoose');

const categorySchema = new Schema({
    categoryName : {
        type : String,
        required : true
    },
    categorySlug : {
        type : String,
        required : true
    },
    categoryDes : {
        type : String,
        required : true
    }
},{timestamps:true});

module.exports = model('category',categorySchema);