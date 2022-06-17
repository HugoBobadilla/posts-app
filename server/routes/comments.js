const router = require('express').Router();
const pool = require('../config/db');

// Get all comments
router.get('/', (req, res) => {
  pool.query("SELECT *FROM comment", (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }
    res.json(data);
  });
});

// Get specific comment by id
router.get('/:id', (req, res) => {
  const { id } = req.params;
  pool.query("SELECT *FROM comment WHERE id=?", [id], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }
    res.json(data);
  });
});

// Create a new comment
router.post('/', (req, res) => {
  const { commentBody, postId } = req.body;
  pool.query("INSERT INTO comment(commentBody, postId) VALUES(?, ?)", [commentBody, postId], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }
    res.json({ message: 'New comment created.' });
  });
});


// Update a post by Id
router.put('/:id', (req, res) => {
  const { commentBody, postId } = req.body;
  const { id } = req.params;

  pool.query("UPDATE post SET commentBody=? WHERE id=?", [commentBody, id], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }

    res.json({ message: 'Comment updated.' });
  });
});

// Delete a post by Id
router.delete('/:id', (req, res) => {
  const { id } = req.params;

  pool.query("DELETE FROM comment WHERE id=?", [id], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }

    res.json({ message: 'Comment deleted.' });
  });
});

module.exports = router;