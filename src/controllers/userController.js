const userQueries = require("../db/queries.users.js");
const passport = require("passport");
const sendgrid = require("../library/sendgrid.js");


module.exports = {
  signUp(req, res, next){
    res.render("users/sign_up");
  },

  create(req, res, next){
    let newUser = {
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirmation: req.body.password_conf
    };
    userQueries.createUser(newUser, (err, user) => {
      if(err){
        req.flash("error", err);
        res.redirect("/users/sign_up");
      } else{
        sendgrid.newUserEmail(newUser.email, newUser.name);
        passport.authenticate("local")(req, res, () => {
          req.flash("notice", "You've successfully signed up!");
          res.redirect("/");
        })
      }
    });
  }
}
