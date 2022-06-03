var express = require('express');
var router = express.Router();
var postsController = require("../controllers/posts");


router.get('/',postsController.getPosts);

router.post('/',postsController.createPost);

router.delete('/',postsController.deleteAllPosts);

router.delete('/:id',postsController.deletePost);

router.patch('/:id',postsController.updatePost);

module.exports = router;
