const {getUserData} = require('../services/auth')

async function RestrictToLoginUserOnly(req, res, next) {

    const userUid = req.cookies?.uid;

    if(!userUid){
        return res.redirect('/login');
    }
    const user = getUserData(userUid);

    if(!user){
        res.redirect('/login');
    }

    req.user = user;

    next();
}

module.exports = {RestrictToLoginUserOnly}