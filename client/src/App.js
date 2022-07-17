import './App.css';
import { useState } from "react";
import Axios from "axios";

function App() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedIn, setPublishedIn] = useState(0);
  const [rating, setRating] = useState(0);

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
 
  return (
    <div className="App">
      <div className="register">
        <label>Title </label>
        <input type="text" onChange={(event) => (setTitle(event.target.value))} /> 

        <label>Author </label>
        <input type="text" onChange={(event) => (setAuthor(event.target.value))} /> 

        <label>Published in </label>
        <input type="number" onChange={(event) => (setPublishedIn(event.target.value))} /> 

        <label>Rating </label>
        <input type="number" onChange={(event) => (setRating(event.target.value))} />

        <button type="submit" onClick={addBookRead}> Sign In </button>
      </div>
      
    </div>
  );
}

export default App;
