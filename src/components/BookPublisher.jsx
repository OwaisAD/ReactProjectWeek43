import React from 'react'
import InputBookComponent from './InputBookComponent'
import AllBooksComponent from './AllBooksComponent'

const BookPublisher = (props) => {
  return (
    <div>
        <div className='loginStatus'>
            <h4>Logged in as: Admin</h4>
            <button>Logout</button>
        </div>
        <h2>Book Publisher</h2>
        <p>Current book count: {props.books.length}</p>
        <div className='ioComp'>
            <InputBookComponent bookFacade={props.bookFacade} books={props.books} setBooks={props.setBooks}/>
            <AllBooksComponent books={props.books} bookFacade={props.bookFacade}/>
        </div>
    </div>
  )
}

export default BookPublisher
