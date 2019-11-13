const UserService = require('./user.service')

exports.insert = async function (req, res) {
    try {
        const user = await UserService.insert(req.body);
        return res.status(200).json({ "success": true, name: user.name });
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.remove = async function (req, res) {
    try {
        const count = await UserService.remove(req.params.id);
        return res.status(200).json({ "success": true, "count": count });
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.update = async function (req, res) {
    try {
        const object = await UserService.update(req.params.id, req.body);
        return res.status(200).json({ "success": true, "update": object
     });
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.findAll = async function (req, res) {
    let users = await UserService.findAll()
    return res.json(users)
}
