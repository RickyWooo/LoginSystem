var db = require('../control/db.js');
const bcrypt = require('bcrypt');
var path = require('path');


module.exports = function(app){
    
    app.get('/', (req,res)=>{
        
    });
    
    app.get('/register', (req,res)=>{
        res.sendFile(path.resolve(__dirname,'..') + '/public/register.html');
    });

    app.post('/', (req,res)=>{
        var data = {};
        data = { "username":req.body.name,
                 "password":hash(req.body.password),
                 "email":req.body.email };
        console.log(data);
        db.addUser(data);
        
        res.sendFile(path.resolve(__dirname,'..') + '/public/index.html');
    });

    function hash(myPassword){
        const saltRounds = 10;
        bcrypt.hash(myPassword,saltRounds).then(function (hash) {
            console.log(hash);
            return hash;
        });
    }
}