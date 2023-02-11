import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
// import BookList from "./Page/BookList";
import BookList from "./Page/BookList";
import BookDetail from "./Page/Bookdetail";
import {books} from "./data"
// import { books } from "./data";
import { useState } from "react";
import Search from "./component/Search";
import Book from "./component/Book";
import { createContext } from "react";

export const UserContext = createContext(null)
function App() {
  const [booksList, setBookslist] = useState(books);
  const [userName, setUserName] = useState("Niima")
  const changeText = (e) => {
    const filteredBook = books.filter(
      (book) => book.title.toLowerCase().startsWith(e.target.value) //includes
    );
    setBookslist(filteredBook);
    
  };
  // console.log("bkkl", booksList)

  return (
    <>
    <UserContext.Provider value={{userName, setUserName}}>
      <Search handleChange={changeText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList books={booksList}/>} />
        <Route path="/books/:id" element={<BookDetail books={books} />} />
      </Routes>
    </UserContext.Provider>
    </>
  );
}

export default App;
