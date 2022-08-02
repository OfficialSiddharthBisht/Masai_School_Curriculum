const express = require('express');
const cors = require('cors');
const {connectDB} = require('./database/index');
const { userRouter } = require('./routes/user');
const {postRouter} = require('./routes/post');

const app = express();
app.use(express.json());
app.use(cors());
app.use(logger);

app.use(userRouter);
app.use(postRouter);

function logger (req, res, next) {
    console.info(`${req.method} , ${req.path}`);
    next();
}

connectDB().then(()=>{
    app.listen(8080, ()=>{
        console.log('Server started on port 8080');
    })
})