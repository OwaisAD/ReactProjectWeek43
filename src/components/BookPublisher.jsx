import React from 'react'
import InputBookComponent from './InputBookComponent'
import AllBooksComponent from './AllBooksComponent'

const BookPublisher = () => {
  return (
    <div>
        <div>
            <p>Logged in as: XXXX</p>
            <button>Logout</button>
        </div>
        <h2>Book Publisher</h2>
        <p>Current book count: XXXX</p>
        <div className='ioComp'>
            <InputBookComponent />
            <AllBooksComponent />
        </div>
    </div>
  )
}

export default BookPublisher
