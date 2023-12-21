// const express = require('express');

import express from 'express';
import bodyParser from 'body-parser';

import todosRoutes from './routes/todos';

const app = express();
app.use(bodyParser.json());

app.use(todosRoutes);
app.listen(3000,()=>{
    console.log('server is running in PORT: 3000');
});