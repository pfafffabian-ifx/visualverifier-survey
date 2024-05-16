const fs = require("fs");
const NoSQLCRUDAdapter = require("./nosql-crud-adapter");
const SurveyStorage = require("./survey-storage");

const readFileSync = filename => fs.readFileSync(filename).toString("utf8");

const dbConfig = {
  host: process.env.DATABASE_HOST || "localhost",
  port: process.env.DATABASE_PORT || 27017,
  database: process.env.DATABASE_DB,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD
    ? readFileSync(process.env.DATABASE_PASSWORD)
    : null
};

const MongoClient = require('mongodb').MongoClient;
const url = `mongodb://${dbConfig.user}:${dbConfig.password}@${dbConfig.host}:${dbConfig.port}/`;
console.log(url);

function MongoStorage(session) {
  function dbConnectFunction(callback) {
    MongoClient.connect(url, function(err, db) {
      if (err) throw err;
      var dbo = db.db(dbConfig.database);
      callback(dbo, () => {
        db.close(); 
        if(!process.env.DATABASE_LOG) {
          console.log(arguments[0]);
          console.log(arguments[1]);
        }
      });
    });
  }
  const dbQueryAdapter = new NoSQLCRUDAdapter(dbConnectFunction);
  return new SurveyStorage(dbQueryAdapter);
}

module.exports = MongoStorage;
