const ArticleService = require('./article.service')

exports.insert = async function (req, res) {
    try {
        const article = await ArticleService.insert(req.body);
        return res.status(200).json({ "success": true, title: article.title });
    } catch (e) {
        return res.status(500).json(e.message);
    }
}

exports.remove = async function (req, res) {
    try {
        const count = await ArticleService.remove(req.params.id);
        return res.status(200).json({ "success": true, "count": count });
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.update = async function (req, res) {
    try {
        const object = await ArticleService.update(req.params.id, req.body);
        return res.status(200).json({
            "success": true, "update": object
        });
    } catch (e) {
        return res.status(500).json(e);
    }
}

exports.findAll = async function (req, res) {
    let articles = await ArticleService.findAll()
    return res.json(articles)
}

exports.findAllByTag = async function (req, res) {
    let articles = await ArticleService.findAllByTag(req.body.tags)
    return res.json(articles)
}
