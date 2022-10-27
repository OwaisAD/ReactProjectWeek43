import React from 'react'
import Books from './Books'

const AllBooksComponent = (props) => {
  return (
    <div className='AllBooksComponent'>
      <h3>Currently Available Books</h3>
        {props.books.length > 0 ? <Books books={props.books}/> : <h4>Nothing to see here.. ;)</h4>}
    </div>
  )
}

export default AllBooksComponent
