const usersCtrl = {};

// Modelo 
const User = require('../models/user')


usersCtrl.renderSignUpForm = (req, res) => {
    res.render('users/signup');
};

usersCtrl.singup = async (req, res) => {
    let errors = [];
    const { nombre, correo, contraseña, confirm_password } = req.body;
    if (contraseña != confirm_password) {
      errors.push({ text: "Contraseña no coinciden" });
    }
    if (contraseña.length < 4) {
      errors.push({ text: "La contraseña debe tener mas de 4 caracteres" });
    }
    if (errors.length > 0) {
      res.render("users/signup", {
        errors,
        nombre,
        correo,
        contraseña,
        confirm_password
      });
    } else {
      // Look for email coincidence
      const emailUser = await User.findOne({ correo: correo });
      if (emailUser) {
        req.flash("error_msg", "El correo ya existe");
        res.redirect("/users/signup");
      } else {
        // Saving a New User
        const newUser = new User({ nombre, correo, contraseña });
        newUser.contraseña = await newUser.encryptPassword(contraseña);
        await newUser.save();
        req.flash("success_msg", "Ya te encuentras registrado");
        res.redirect("/users/signin");
      }
    }
  };
  

usersCtrl.renderSigninForm = (req, res) => {
    res.render('users/signin');
};

usersCtrl.signin = (req, res) => {
    res.send('signin')
};
usersCtrl.logout = (req, res) => {
    res.send('logout');
};


module.exports = usersCtrl;