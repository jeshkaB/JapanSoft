const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const {PORT, MONGO_URL} = require("./config/config");
const {positionsRouter, applicantsRouter} = require("./routes");

const {mainHandler} = require("./errors");


const app = express();

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use('/positions', positionsRouter);
app.use('/applicants', applicantsRouter);

app.use ('*', (req, res, next)=> {
    next (new Error('Rout not found'))
});
app.use(mainHandler);

app.listen(PORT, () => {
    console.log('App listen', PORT);
    mongoose.connect(MONGO_URL)
})
