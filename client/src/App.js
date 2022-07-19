import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedIn, setPublishedIn] = useState(0);
  const [rating, setRating] = useState(0);

  const [readBooks, setReadBooks] = useState([]);

  const addBookRead = () => {
    Axios.post("http://localhost:3000/registerRead", {
      title: title, 
      author: author, 
      publishedIn: publishedIn, 
      rating: rating
    }).then(() => {
      console.log('success');
    });
  }

  const getReadBooks = () => {
    Axios.get("http://localhost:3000/readBooks").then((response) => {
      setReadBooks(response.data);
    });
  }
 
  return (
    <div className="App">
      <div className="Title">
        <h1>Library</h1>
      </div>

      <div className="register">
        <h2>Register your books</h2>

        <label>Title </label>
        <input type="text" onChange={(event) => (setTitle(event.target.value))} /> 

        <label>Author </label>
        <input type="text" onChange={(event) => (setAuthor(event.target.value))} /> 

        <label>Published in </label>
        <input type="number" onChange={(event) => (setPublishedIn(event.target.value))} /> 

        <label>Rating </label>
        <input type="number" onChange={(event) => (setRating(event.target.value))} />

        <button type="submit" onClick={addBookRead}> REGISTER </button>
      </div>
      
      <div className="readBooks">
        <h2>Read books list</h2>

        <button onClick={getReadBooks} className="readBtn">SHOW BOOKS</button>

        {readBooks.map((val, key) => {
          return <div className="readBook"> 
            <h3>Title: {val.title}</h3>
            <h3>Author: {val.author}</h3>
            <h3>Published In: {val.publishedIn}</h3>
            <h3>Rating: {val.rating}</h3>
          </div>;
        })}
      </div>
      
    </div>
  );
}

export default App;
