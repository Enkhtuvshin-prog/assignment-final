import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Page/Home";
import BookList from "./Page/BookList";
import BookDetail from "./Page/Bookdetail";
import { books } from "./data";
import { useState } from "react";
import Search from "./component/Search";
function App() {
  const [booksList, setBookslist] = useState(books);
  const changeText = (e) => {
    const filteredBook = books.filter(
      (book) => book.title.toLowerCase().startsWith(e.target.value) //includes
    );
    setBookslist(filteredBook);
  };
  return (
    <>
      <Search handleChange={changeText} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/booklist" element={<BookList books={booksList} />} />
        <Route path="/books/:id" element={<BookDetail books={books} />} />
      </Routes>
    </>
  );
}

export default App;
