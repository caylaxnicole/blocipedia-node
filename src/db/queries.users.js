const User = require("./models").User;
const Wiki = require("./models").Wiki;
const bcrypt = require("bcryptjs");

module.exports = {
  createUser(newUser, callback){
    const salt = bcrypt.genSaltSync();
    const hashedPassword = bcrypt.hashSync(newUser.password, salt);
    return User.create({
      name: newUser.name,
      email: newUser.email,
      password: hashedPassword
    })
    .then((user) => {
      callback(null, user);
    })
    .catch((err) => {
      callback(err);
    })
  },

  getUser(id, callback){
    User.findById(id)
    .then((user) => {
      if(!user){
        callback(404);
      } else{
        callback(null, user);
        }
      })
      .catch((err) => {
        callback(err);
    });
  },

  upgradeUser(id, callback){
    return User.findById(id)
    .then((user) => {
      if(!user){
        return callback("User not found");
      } else{
        user.update
        ({role: "premium"})
        .then((user) => {
          callback(null, user);
        })
        .catch((err) => {
          callback(err);
        })
      }
    });
  },

  downgradeUser(id, callback){
    return User.findById(id)
    .then((user) => {
      if(!user){
        return callback("User not found");
      } else{
        user.update
        ({role: "standard"})
        return Wiki.all()
        .then((wikis) => {
          wikis.forEach((wiki) => {
            if(wiki.private == true){
              wiki.update({ private: false })
            }
          })
        })
        .then(() => {
          callback(null, user);
        })
        .catch((err) => {
          callback(err);
        })
      }
    });
  }




}
