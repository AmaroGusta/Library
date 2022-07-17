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
    const publishedIn = Number(request.body.publishedIn);
    const rating = Number(request.body.rating);

    db.connect(function(err) {
      if (err) throw err;
      console.log("Connected!");
      const sql = "INSERT INTO readAlready (title, author, publishedIn, rating) VALUES (?, ?, ?, ?)";
      db.query(sql, [title, author, publishedIn, rating], function (err, result) {
        if (err) throw err;
        console.log("inserted");
      });
    });

});

app.listen(3000, () => {console.log('servidor 3000')});