const mongoose = require('mongoose');
require('dotenv').config();

async function connectDB() {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        // await mongoose.connect('mongodb://127.0.0.1:27017/test');
        console.log('Connected to MongoDB');
    } catch (error) {
        console.log(error);
        throw error;
    }
}

module.exports = {connectDB};