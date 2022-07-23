const express = require('express');
const mysql = require('mysql');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    user: 'root',
    rost: 'localhost',
    password: '',
    database: 'books'
});

app.post('/registerRead', (request, response) => {
    const title = request.body.title;
    const author = request.body.author;
    const publishedIn = request.body.publishedIn;
    const rating = request.body.rating;

    db.connect((err) => {
      if (err) throw err;
      console.log("Connected!");
    });

    db.query("INSERT INTO readAlready (title, author, publishedIn, rating) VALUES (?, ?, ?, ?)", 
    [title, author, publishedIn, rating],
    (err, result) => {
      if (err) throw err;
      console.log(response);
    });
   
    db.end(); 
});

app.get('/readBooks', (request, response) => {
  db.query("SELECT * FROM readAlready;", (err, result) => {
    if (err) throw err;
      response.send(result);
  })
});

app.put('/editReadBooks', (request, response) => {
  const id = request.body.id;
  const title = request.body.title;
  
  db.query('UPDATE readAlready SET title = ? WHERE id = ?;', 
  [title, id], 
  (err, result) => {
    if (err) throw err;
      response.send(result);
  })
});

app.delete('/deleteReadBooks/:id', (request, response) => {
  const id = request.params.id;

  db.query("DELETE FROM readAlready WHERE id = ?;", id,
  (err, result) => {
    if (err) throw err;
      response.send(result);
  })
});

app.listen(3001, () => {console.log('Server 3001')});