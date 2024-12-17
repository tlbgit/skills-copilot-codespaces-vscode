// Create web server
// 1. Load the express module
// 2. Create an instance of express
// 3. Create a route to handle GET requests to /comments
// 4. Send a response with comments JSON data
// 5. Start the server on port 3000
import express from 'express';
const app = express();

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.listen(3000, () => {
  console.log('Server started on http://localhost:3000');
});

const comments = [
  { username: 'tammy', comment: 'lololol' },
  { username: 'sk84', comment: 'lmao' },
  { username: 'jake', comment: 'rofl' }
];