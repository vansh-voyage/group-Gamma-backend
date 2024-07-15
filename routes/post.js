const express = require('express');
const router = express.Router();
const postController = require('../controllers/post');

router.post('/create', postController.createPost);
router.get('/get', postController.getAllPosts);

module.exports = router;
