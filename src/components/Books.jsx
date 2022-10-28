import React from 'react'
import Book from './Book'

const Books = ({books, setBooks, setNewBook, bookFacade, setEditMode}) => {
  return (
    <>
        {books.map(book => {
            return <Book key={book.id} book={book} bookFacade={bookFacade} setBooks={setBooks} setEditMode={setEditMode} setNewBook={setNewBook}/>
        })}
    </>
  )
}

export default Books
