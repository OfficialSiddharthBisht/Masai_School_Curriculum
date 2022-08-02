const express = require('express');
const handlers = require('./support');

const app = express();
app.use(express.json());

app.get("/books", handlers.allBooks, handlers.books);
app.get("/book/:name", handlers.book);




app.listen(8080);