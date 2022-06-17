const router = require('express').Router();
const pool = require('../config/db');

// Get all posts
router.get('/', (req, res) => {
  pool.query("SELECT *FROM post", (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }
    res.json(data);
  });
});

// Get specific post by Id
router.get('/:id', (req, res) => {
  const id = req.params.id;
  pool.query('SELECT *FROM post WHERE id=?', [id], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }

    res.json(data);
  });
});

// Create a new post
router.post('/', (req, res) => {
  const { postBody, userId } = req.body;
  pool.query("INSERT INTO post(postBody, userId) VALUES(?, ?)", [postBody, userId], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }
    res.json({ message: 'New post created.' });
  });
});

// Update a post by Id
router.put('/:id', (req, res) => {
  const { postBody, userId } = req.body;
  const { id } = req.params;

  pool.query("UPDATE post SET postBody=? WHERE id=?", [postBody, id], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }

    res.json({ message: 'Post updated.' });
  });
});

// Delete a post by Id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM post WHERE id=?", [id], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }

    res.json({ message: 'Post deleted.' });
  });
});

module.exports = router;