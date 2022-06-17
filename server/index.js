const express = require('express');
const cors = require('cors');

// const connection = require('./config/db');

const app = express();

app.use(express.json());
app.use(cors());

// Routes
const authRoute = require('./routes/auth');
app.use('/auth', authRoute);
const postsRoute = require('./routes/posts');
app.use('/posts', postsRoute);
const commentsRoute = require('./routes/comments');
app.use('/comments', commentsRoute);

// connection.connect((err) => {
//   if(err) {
//     console.log('Error occurred', err);
//   } else {
//     console.log('Connected to Database');
//   }
// });

const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});