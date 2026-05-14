import express from 'express';
const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('It Works! Your site is running on Render.');
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
