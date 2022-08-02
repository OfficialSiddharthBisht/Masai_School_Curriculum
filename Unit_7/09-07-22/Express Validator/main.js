const express = require('express');
const handlers = require('./express');

const app = express();
app.use(express.json());


app.get('/users', handlers.getUsers);
app.get('/', (req, res) => {
    res.status(200).send('Hello World!');
})
app.use(handlers.validator);
app.post('/register', handlers.registerUser);



app.listen(8080);