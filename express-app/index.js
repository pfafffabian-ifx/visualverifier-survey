const express = require("express");
const bodyParser = require("body-parser");
const session = require("express-session");
const MongoSurveyStorage = require("./db-adapters/mongo");
const apiBaseAddress = "/api";

const app = express();
app.use(
  session({
    secret: "mysecret",
    resave: true,
    saveUninitialized: true,
    // cookie: { secure: true }
  })
);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

function getStorage (req) {
  const storage = new MongoSurveyStorage(req.session);
  return storage;
}

function sendJsonResult (res, obj) {
  res.setHeader("Content-Type", "application/json");
  res.send(JSON.stringify(obj));
}

app.post(apiBaseAddress + "/post", (req, res) => {
  const storage = getStorage(req);
  const postId = req.body.postId;
  const surveyResult = req.body.surveyResult;
  storage.postResults(postId, surveyResult, (result) => {
    sendJsonResult(res, result.json);
  });
});

app.get(["/"], (_, res) => {
  res.sendFile("index.html", { root: __dirname + "/../public" });
});

app.use(express.static(__dirname + "/../public"));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Listening on port: " + port + "...");
});
