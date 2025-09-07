db = new Mongo().getDB("surveyjs");

db.createCollection('results');
