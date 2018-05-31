const MongoClient = require('mongodb').MongoClient;


// database init, "my project" is the name of the database
const dbName = 'myproject';   
const url = 'mongodb://localhost:27017';

module.exports.addUser = function (data){

    MongoClient.connect(url, { useNewUrlParser: true }, (err,client)=>{
        if(err){
            console.log("Unable to connect to the server",err);
        }
        console.log("Connect to server successfully.");

        const db = client.db(dbName); 

        insertDocuments(db,data, function() {
            client.close();
        });
    });     
    const insertDocuments = function(db, data, callback) {
        // Get the documents collection
        const collection = db.collection('documents');
        
        collection.insertOne(data, function(err, result) {
            console.log("Inserted 1 documents into the collection");
            callback(result);
        });
    }
}
