// REQUIRE EXPRESS
const express = require('express')
const connectDB = require('./models/db')
// REQUIRE MANGOOSE
const mongoose = require('mongoose')

// CALL EXPRESS
const app = express()
//  initiallizing Mango DB
connectDB()
// SET STATIC
// REQUIRE BODY PARSER
const bodyParser = require('body-parser')
app.use(bodyParser.json())
// REQUIRE DOTENV
require('dotenv/config')
//Initializing Routes
const postRoutes = require('./routes/post')
// SET ROUTE
app.use('/post', postRoutes)

const PORT = process.env.PORT || 5000

// SET PORT TO LISTEN
app.listen(PORT, console.log('server is running'))
