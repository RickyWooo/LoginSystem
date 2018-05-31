const bcrypt = require('bcrypt');

var myPassword = "123456789";
const saltRounds = 10;
bcrypt.hash(myPassword,saltRounds).then(function (hash) {
    // Store hash in your password DB.
    console.log(typeof(hash));
});