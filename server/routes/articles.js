const express = require('express');
const router = express.Router();
const Article = require('../models/article');

// Get all articles
router.get('/', async (req, res) => {
  try {
    const articles = await Article.find();
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get articles by category
router.get('/:category', async (req, res) => {
  try {
    const articles = await Article.find({ category: req.params.category });
    res.json(articles);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add a new article
router.post('/', async (req, res) => {
  const article = new Article({
    title: req.body.title,
    author: req.body.author,
    content: req.body.content,
    category: req.body.category,
  });

  try {
    const newArticle = await article.save();
    res.status(201).json(newArticle);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
