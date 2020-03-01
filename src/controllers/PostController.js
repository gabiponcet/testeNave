const Post = require('../models/Post');

module.exports = {
    async index(req,res) {
        const { sort } = req.query;
            if (sort) {
                const posts = await Post.findAll({
                    order: ['title'],
                });
                return res.json(posts);
            } else {
                const posts = await Post.findAll();
                return res.json(posts);
            }
        
        
       
    },

    async store(req, res) {
        const { author, title , text } = req.body;

        const post = await Post.create({author, title,text});

        return res.json({post});
    }
}