const mongodb = require('mongodb');
const config = require("../config")
const URL = `mongodb://${config.DB_URL}`;

const MongoClient = mongodb.MongoClient
const DB_NAME = config.DB_NAME
const client = new MongoClient(URL, { useNewUrlParser: true, useUnifiedTopology: true })

async function getDb() {
  if (!client.isConnected()) {
    await client.connect()
  }
  return client.db(DB_NAME)
}

exports.dbAccess = function (collection) {
  return Object.freeze({
    findAll: async function findAll() {
      const db = await getDb()
      const result = await db.collection(collection).find({})
      return await result.toArray()
    },
    findAllBy: async function findAll(query) {
      const db = await getDb()
      const result = await db.collection(collection).find(query)
      return await result.toArray()
    },
    findById: async function findById(_id) {
      const db = await getDb()
      const result = await db.collection(collection).findOne({ _id: new mongodb.ObjectID(_id) })
      return await result
    },
    insert: async function insert(obj) {
      const db = await getDb()
      const result = await db
        .collection(collection)
        .insertOne(obj)
      return result
    },
    update: async function update(_id, object) {
      const db = await getDb()
      const result = await db
        .collection(collection)
        .updateOne({ _id: new mongodb.ObjectID(_id) }, { $set: { ...object } })
      return result
    },
    remove: async function remove(_id) {
      const db = await getDb()
      const result = await db.collection(collection).deleteOne({ _id: new mongodb.ObjectID(_id) })
      return result
    }
  })
}
