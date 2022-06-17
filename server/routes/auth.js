const router = require('express').Router();
const bcrypt = require('bcrypt');
const pool = require('../config/db');

router.post('/register', async (req, res) => {
  const body = req.body;
  const hashedPassword = await bcrypt.hash(body.userPassword, 10);

  pool.query("INSERT INTO user(fullName, username, userPassword) VALUES(?, ?, ?)", [body.fullName, body.username, hashedPassword], (err, data) => {
    if(err) {
      res.json({ error: err.message });
    }
    // rows fetch
    res.json({ message: 'New user created.' });
  });
});

module.exports = router;