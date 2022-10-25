const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./Data/Categories.json');

app.get('/', (req, res) => {
  res.send('Course API Running.')
})

app.get('/categories', (req, res) => {
  res.send(categories);
})

app.listen(port, () => {
  console.log(`Course API Running ${port}`)
})