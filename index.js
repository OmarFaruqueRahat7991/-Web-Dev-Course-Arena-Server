const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

app.use(cors());


const categories = require('./Data/Categories.json');
const courses = require('./Data/Courses.json');

app.get('/', (req, res) => {
  res.send('Course API Running.')
})

app.get('/categories', (req, res) => {
  res.send(categories);
})
app.get('/courses', (req, res) => {
  res.send(courses);
})

app.listen(port, () => {
  console.log(`Course API Running ${port}`)
})