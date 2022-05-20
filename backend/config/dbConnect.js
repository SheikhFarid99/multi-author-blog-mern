const mongoose = require('mongoose');

module.exports = dbConnect = async()=>{
    try {
        const response = await mongoose.connect(process.env.DB_URL,{useNewUrlParser:true});
        console.log("Database connected........")
    } catch (error) {
        console.log(error)
    }
}