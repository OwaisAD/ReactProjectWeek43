import React from "react";
import InputBookComponent from "./InputBookComponent";
import AllBooksComponent from "./AllBooksComponent";
import { useState } from "react";
import { useEffect } from "react";

const BookPublisher = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [newBook, setNewBook] = useState({
    id: "",
    title: "",
    author: "",
    rating: "",
    year_published: "",
  });


  return (
    <div>
      <div className="loginStatus">
        <h4>Logged in as: Admin</h4>
        <button>Logout</button>
      </div>
      <h1>Book Publisher</h1>
      <h2>
        Found{" "}
        <div className="circle">
          <div className="bookCount">{props.books.length}</div>
        </div>
        {props.books.length === 1 ? " book" : " books"}
      </h2>
      <div className="ioComp">
        <InputBookComponent
          newBook={newBook}
          setNewBook={setNewBook}
          bookFacade={props.bookFacade}
          books={props.books}
          setBooks={props.setBooks}
          editMode={editMode}
          setEditMode={setEditMode}
          setHasChanged={props.setHasChanged}
        />
        <AllBooksComponent
          setNewBook={setNewBook}
          books={props.books}
          setBooks={props.setBooks}
          bookFacade={props.bookFacade}
          setEditMode={setEditMode}
          setHasChanged={props.setHasChanged}
          setIsSearchQuery={props.setIsSearchQuery}
          setSearchResult={props.setSearchResult}
        />
      </div>
    </div>
  );
};

export default BookPublisher;
