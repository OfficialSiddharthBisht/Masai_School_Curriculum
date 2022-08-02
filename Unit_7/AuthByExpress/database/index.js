const mongoose = require('mongoose');

async function connectDB(){
    try {
        let uri = 'mongodb://127.0.0.1:27017/assignments'
        await mongoose.connect(uri);
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        throw error;
    }
    
}

module.exports = {connectDB};