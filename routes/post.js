// REQUIRE EXPRESS
const express = require('express');
// Initializing ROUTER
const router = express.Router();
// defining Routes
const Post = require('../models/Posts');
// SET ROUTER
router.get('/', (req, res) => {
  res.send('we are on post');
});

router.post('/', async (req, res) => {
  const post = new Post({
    name: req.body.name,
    email: req.body.email
  });

  try {
    // const saved = await post.save();
    res.json(post);
    res.json(req.body).status(200);
  } catch (error) {
    console.error(error);
  }
});
router.get('/posts/:postId', async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.send(post);
  } catch (error) {
    res.json({ message: error });
  }
});

module.exports = router;
