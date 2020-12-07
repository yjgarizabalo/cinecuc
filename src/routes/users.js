const {Router} = require("express");
const router =  Router();

const { 
    renderSignUpForm, 
    renderSigninForm, 
    signin, 
    singup, 
    logout  
} =require('../controllers/users.controlle')

// Routes
router.get("/users/signup", renderSignUpForm);

router.post("/users/signup", singup);

router.get("/users/signin", renderSigninForm);

router.post("/users/signin", signin);

router.get("/users/logout", logout);

module.exports = router;