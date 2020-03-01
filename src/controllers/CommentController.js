const Post = require('../models/Comment');
const Comment = require('../models/Comment');

module.exports = {
    async index(req,res) {
        const { post_id } = req.params;
      
        const post = await Post.findAll({
          where: {id: post_id},
          include: {
            model: Comment
          }});
        return res.json(post);
      
      },
    
    async store(req, res) {
        const { post_id } = req.params;
        const { author, message } = req.body;

        const post = await Post.findAll({where: {id: post_id}});

        console.log(JSON.parse(JSON.stringify(post)));
        if(!post){
            return res.status(400).json({error: 'Post not found'});
        }

        const comment = await Comment.create({
            post_id,
            author,
            message,
        });
        return res.json(comment);
    },
};