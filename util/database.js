const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;

// this block of code is for connecting to the MongoDB database;
const mongoConnect = (callback) => {
  MongoClient.connect(
    "mongodb+srv://almayo:7Io7qZCy4UCs4jpj@cluster0.26zhx4l.mongodb.net/shop"
  )
    .then((client) => {
      console.log("Connected!!");
      // storring the connection; in a variable;
      _db = client.db();
      callback(client);
    })
    .catch((err) => {
      console.log(err);
      throw err;
    });
};
// this block of code is for accessing to the data if it exists;
const getDb = () => {
  if (_db) {
    return _db;
  }
  throw "No data Available";
};

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
