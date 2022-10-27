import React from 'react'
import Book from './Book'

const Books = ({books, setBooks, bookFacade}) => {
  return (
    <>
        {books.map(book => {
            return <Book key={book.id} book={book} setBook={setBooks} bookFacade={bookFacade}/>
        })}
    </>
  )
}

export default Books
