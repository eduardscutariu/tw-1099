const express = require('express');
const users = require('./users');
const app = express();
const cors=require('cors');
const PORT=3000;

app.use(cors());

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.get('/users', (req, res) => {
    res.status(200).json(users)
})

app.listen(PORT,()=>{console.log(`Server is running on http://127.0.0.1:${PORT}`)});