const mongoose = require('mongoose')
require('dotenv').config()

const connectDatabase = async() => {

    try{
        const conObj = await mongoose.connect(process.env.CONN_URI)

        if(conObj){
            console.log(`database connected!`);
        }
        else{
            console.log(`database not connected`);
        }
    }
    catch(err){
        console.log(err);
    }

}

module.exports = connectDatabase