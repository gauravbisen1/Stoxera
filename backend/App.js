require('dotenv').config();

const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 8080;//for specify when we deply port will change
const URL = process.env.MONGO_URL;

const app = express();

app.listen(PORT , ()=>{
    console.log("server is running on 8080");
    mongoose.connect(URL);
    console.log("DB connected!");
})