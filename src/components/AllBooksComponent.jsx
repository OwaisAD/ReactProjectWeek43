import React from 'react'
import Books from './Books'

const AllBooksComponent = ({books, setBooks, bookFacade}) => {
  return (
    <div className='AllBooksComponent'>
      <h3>Currently Available Books</h3>
        {books.length > 0 ? <Books books={books} setBook={setBooks} bookFacade={bookFacade}/> : <h4>Nothing to see here.. ;)</h4>}
    </div>
  )
}

export default AllBooksComponent
