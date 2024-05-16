function NoSQLCRUDAdapter(dbConnectFunction) {
  function getObjects(collectionName, filter, callback) {
    filter = filter || [];
    let query = {};
    filter.forEach(fi => query[fi.name] = fi.value);
    dbConnectFunction((dbo, finalizeCallback) =>
      dbo.collection(collectionName).find(query).toArray((error, results) => {
        finalizeCallback();
        if (error) {
          throw error;
        }
        callback(results);
      })
    );
  }

  function deleteObject(tableName, idValue, callback) {
    const command = "DELETE FROM " + tableName + " WHERE id='" + idValue + "'";
    dbConnectFunction(command, (error, results) => {
      if (error) {
        throw error;
      }
      callback(results);
    });
  }

  function createObject(tableName, object, callback) {
    const valueNames = [];
    const valueIndexes = [];
    const values = [];
    Object.keys(object).forEach((key, index) => {
      if(object[key] !== undefined) {
        valueNames.push(key);
        valueIndexes.push("$" + (index + 1));
        values.push(object[key]);
      }
    });
    const command = "INSERT INTO " + tableName + " (" + valueNames.join(", ") + ") VALUES (" + valueIndexes.join(", ") + ") RETURNING id";
    dbConnectFunction(command, values, (error, results) => {
      if (error) {
        throw error;
      }
      // console.log(JSON.stringify(results));
      callback(results.rows[0].id);
    });
  }

  function updateObject(tableName, object, callback) {
    const valueNames = [];
    const values = [];
    Object.keys(object).forEach((key, index) => {
      if(object[key] !== undefined) {
        valueNames.push(key + " = $" + (index + 1));
        values.push(object[key]);
      }
    });
    const command = "UPDATE " + tableName + " SET " + valueNames.join(", ") + " WHERE id = '" + object.id  + "'";
    dbConnectFunction(command, values, (error, results) => {
      if (error) {
        throw error;
      }
      callback(object);
    });
  }

  return {
    create: createObject,
    retrieve: getObjects,
    update: updateObject,
    delete: deleteObject
  }
}

module.exports = NoSQLCRUDAdapter;