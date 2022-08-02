const express = require('express');
const cors = require('cors');
const { connectDB } = require('./Database');
const { userRouter } = require('./Routes/user');
const { noteRouter } = require('./Routes/note');
require('dotenv').config()

const app = express();
app.use(cors());
app.use(express.json());
app.use(userRouter);
app.use(noteRouter);

app.use((req, res, next) => {
    console.log(`${req.method} ${req.path}`);
    next();
}
);

connectDB().then(()=>{
    app.listen(process.env.LOCAL_PORT, ()=>{
        console.log('Server started on port 8080');
    })
});

// console.log(process.env.MONGO_URI, process.env.PORT);

