var demoData = require("./demo-surveys");

db = db.getSiblingDB('surveyjs');

db.createCollection('surveys');

db.sample_collection.insertMany(demoData.surveys);