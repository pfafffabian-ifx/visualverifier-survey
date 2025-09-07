let currentId = 1;

function SurveyStorage (dbQueryAdapter) {
  function postResults (postId, json, callback) {
    const newObj = {
      postid: postId,
      json: json
    };
    dbQueryAdapter.create("results", newObj, id => { 
      newObj.id = id;
      callback(newObj);
    });
  }

  return {
    postResults: postResults,
    getResults: (postId, callback) => {
      dbQueryAdapter.retrieve("results", [{ name: "postid", op: "=", value: postId }], (results) => { callback({ id: postId, data: results.map(r => r.json)}); });
    },
    changeName: (id, name, callback) => {
      dbQueryAdapter.update("surveys", { id: id, name: name }, (results) => { callback(results); });
    }
  };
}

module.exports = SurveyStorage;