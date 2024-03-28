const express = require('express');
const path = require('path');
const app = express();
const routes = require('./routes');
const db = require('./db');
const router = express.Router()



app.use('/',  routes)
app.listen(3333, ()=> {
    console.log('SERVIDOR RODANDO')
})

app.use(express.json());






