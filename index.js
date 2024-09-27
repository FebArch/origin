// External Modules;
const express = require("express");
const path = require('path');
const cookieParser = require('cookie-parser');


// my modules
const staticRouter = require('./routes/staticRouter');
const {RestrictToLoginUserOnly} = require('./middlewares/auth')

// connecting to the database;
const connectToDB = require('./db');
connectToDB('mongodb://localhost:27017/HealthEase').then((value)=>{
    console.log("Database connected successfully");
}).catch((err)=>{
    console.log("Failed to connect to DB");
})

let app = express();
const PORT = 8000;


// Middlewares
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')))
app.use(cookieParser());

// Setting up the ejs Engine
app.set('view engine', 'ejs');
app.set('views', path.resolve('./views'));

// Routes
app.use('/', staticRouter);

app.listen(PORT, ()=>{
    console.log("Server plotted on PORT", PORT);
})