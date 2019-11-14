const clientDb = require("../../db")
const Model = require("./article.model")
const UserService = require("../users/user.service")
const collection = "article"
const dbArticle = clientDb.dbAccess(collection)

exports.findAll = async function findAll() {
    return await dbArticle.findAll()
}

exports.findAllByTag = async function findAllByTag(tags = []) {
    //$all in case of and 
    //$in in case of or
    return await dbArticle.findAllBy({ tags: { "$all": tags } })
}

exports.insert = async function insert(article) {
    const validArticle = Model.Article(article)
    const user = await UserService.findById(validArticle.userId)
    if (user) {
        const result = await dbArticle.insert(validArticle)
        return result.ops[0]
    }
    throw new Error('Article must have a valid user.')
}

exports.update = async function update(_id, object) {
    const result = await dbArticle.update(_id, object)
    return result.modifiedCount > 0 ? { _id: _id, ...object } : null
}

exports.remove = async function remove(_id) {
    const result = await await dbArticle.remove(_id)
    return result.deletedCount
}
