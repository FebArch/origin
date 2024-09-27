const { error } = require('console');
const USER = require('../models/users')
const {setUserData} = require('../services/auth')


// home
async function handleHomeGetReq(req, res) {
    return res.render('home');
}
async function handleHomePostReq(req, res) {
    
}




// signup
async function handleSignupGetReq(req, res) {
    return res.render('signup');
    
}

async function handleSignupPostReq(req, res) {
    const {username, email, password, confirmPass} = req.body;

    
    if(confirmPass != password){
        return res.render('signup', {error: 'Confirm your Password Correctly'});
    }

    let data = await USER.create({
        username, email, password, 
    })

    return res.render('home', {data});
}


// profile

async function handleProfileGetReq(req, res) {
    let userUid = req.cookies?.uid

    let data = USER.find({})


    res.render('profile', {data})
    
}

async function handleProfilePostReq(req, res) {
    
}


// login
async function handleLoginGetReq(req, res) {
    return res.render('login')
    
}
async function handleLoginPostReq(req, res) {

    let {email, password} = req.body;

    let data = await USER.findOne({email, password})

    if (!data) {
        return res.render("login", {error: "Username not Found!"})
    }

    let token = setUserData(data)
    res.cookie('uid',token)

    return res.redirect('/');
}

module.exports = {handleHomeGetReq, handleHomePostReq, handleSignupGetReq, handleSignupPostReq, handleLoginGetReq, handleLoginPostReq, handleProfileGetReq, handleProfilePostReq} 

// shubhashree.langade23@mmit.edu.in