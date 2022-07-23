import '../App.css';
import { useState } from "react";
import Axios from "axios";

export default function ReadBooks() {

  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [publishedIn, setPublishedIn] = useState(0);
  const [rating, setRating] = useState(0);

  const [readBooks, setReadBooks] = useState([]);

  const [newTitle, setNewTitle] = useState("");

  const addBookRead = () => {
    Axios.post("http://localhost:3001/registerRead", {
      title: title, 
      author: author, 
      publishedIn: publishedIn, 
      rating: rating
    }).then(() => {
      console.log('success');
    });
  }

  const getReadBooks = () => {
    Axios.get("http://localhost:3001/readBooks").then((response) => {
      setReadBooks(response.data);
    });
  }

  const updateTitle = (id) => {
    Axios.put("http://localhost:3001/editReadBooks", {
      title: newTitle,
      id: id
    }).then((response) => {
      setReadBooks(setReadBooks.map((val)=> {
        return val.id == id ? {
          id: val.id,
          title: val.newTitle,
          author: val.author,
          publishedIn: val.publishedIn,
          rating: val.rating
        } : val
      }));
      document.alert('updated!');
    });
  }

  const deleteReadBooks = (id) => {
    Axios.delete(`http://localhost:3001/deleteReadBooks/${id}`).then((response) => {
      setReadBooks(setReadBooks.filter((val) => {return val.id == id}));
      document.alert('deleted!');
    });
  }
 
  return (
    <div className="App">
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

/*
<div> 
  {" "}
  <input id='tt' type='text' onChange={(event) => (setNewTitle(event.target.value))} /> 
  <button className='changeBtns' onClick={() => {updateTitle(val.id)}}> UPDATE TITLE </button>

  {" "}
  <button className='changeBtns' onClick={() => {deleteReadBooks(val.id)}}>DELETE</button>
</div>
*/