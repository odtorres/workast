const config = require("../../config")
const UserService = require('./user.service')

exports.insert = async function (req, res) {
    try {
        const user = await UserService.insert(req.body);
        return res.status(config.HTTP_STATUS_CODE["OK"]).json({ "success": true, name: user.name });
    } catch (e) {
        return res.status(config.HTTP_STATUS_CODE["Bad Request"]).json(e.message);
    }
}

exports.remove = async function (req, res) {
    try {
        const count = await UserService.remove(req.params.id);
        return res.status(config.HTTP_STATUS_CODE["OK"]).json({ "success": true, "count": count });
    } catch (e) {
        return res.status(config.HTTP_STATUS_CODE["Bad Request"]).json(e.message);
    }
}

exports.update = async function (req, res) {
    try {
        const object = await UserService.update(req.params.id, req.body);
        return res.status(config.HTTP_STATUS_CODE["OK"]).json({ "success": true, "update": object
     });
    } catch (e) {
        return res.status(config.HTTP_STATUS_CODE["Bad Request"]).json(e.message);
    }
}

exports.findAll = async function (req, res) {
    let users = await UserService.findAll()
    return res.status(config.HTTP_STATUS_CODE["OK"]).json(users)
}
