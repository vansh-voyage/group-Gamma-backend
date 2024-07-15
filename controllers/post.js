const Post = require('../models/post');

exports.createPost = async (req, res) => {
  const post = new Post(req.body);
  try {
    await post.save();
    res.status(201).json(post);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getAllPosts = async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
