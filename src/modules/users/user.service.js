const clientDb = require("../../db")
const Model = require("./user.model")
const collection = "user"
const dbUser = clientDb.dbAccess(collection)

exports.findById = async function findById(id) {
    return await dbUser.findById(id)
}

exports.findAll = async function findAll() {
    return await dbUser.findAll()
}

exports.insert = async function insert(user) {
    const validUser = Model.User(user)
    const result = await dbUser.insert(validUser)
    return result.ops[0]
}

exports.update = async function update(_id, object) {
    const result = await dbUser.update(_id, object)
    return result.modifiedCount > 0 ? { _id: _id, ...object } : null
}

exports.remove = async function remove(_id) {
    const result = await await dbUser.remove(_id)
    return result.deletedCount
}
