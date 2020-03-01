const Post = require('../models/Post');

module.exports = {
    async store(req, res) {
        const { author, title , text } = req.body;

        const user = await Post.create({author, title,text});

        return res.json(post);
    }
}