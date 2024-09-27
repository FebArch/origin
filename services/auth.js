const jwt = require('jsonwebtoken');
const secretKey = 'xyz'

function setUserData(userData) {
    return jwt.sign({
        _id: userData._id,
        name: userData.username,
        email: userData.email,
    }, secretKey);
}

function getUserData(token){
    if(!token){
        return null;
    }
    try{
        return jwt.verify(token, secretKey)
    }catch{
        return null;
    }
}


module.exports = {setUserData, getUserData};