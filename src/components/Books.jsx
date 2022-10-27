import React from 'react'
import Book from './Book'

const Books = ({books}) => {
  return (
    <>
        {books.map(book => {
            return <Book key={book.id} book={book}/>
        })}
    </>
  )
}

export default Books
