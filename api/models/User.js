/*
 adapter: 'mongo',

 //"bcrypt": "~0.8.0",
 
*/ 
var bcrypt = require('bcrypt-nodejs');

module.exports = {
  attributes: {
    provider: 'STRING',
    uid: 'STRING',
    password: 'STRING',
    name: 'STRING',
    email: 'STRING',
    firstname: 'STRING',
    lastname: 'STRING'
  },
      // Generating a hash
    generateHash: function (password) {
        return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    },

    // Checking if password is valid
    validPassword: function (user, password) {
        try {
            return bcrypt.compareSync(password, user.password);
        }
        catch (exception) {
            return false;
        }
    }
};
