const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const userRouter = require('./routes');

const app = express();

app.use(express.json());
app.use(cors());

app.use((req, res, next) => {
    console.info(`${req.method} ${req.url}`);
    next();
});
app.use(userRouter);


mongoose.connect('mongodb://127.0.0.1:27017/local').then(()=>{
    console.log("Connected to MongoDB");
}).then(()=>{
    app.listen(8080,()=>{
        console.log("Server is running on port 8080");
    })
});