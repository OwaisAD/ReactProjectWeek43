import React from 'react'
import Books from './Books'

const AllBooksComponent = ({books, setBooks, setNewBook, bookFacade, setEditMode, setHasChanged}) => {

  const sortBooks = e => {
    const value = e.target.value
    if(value === "year") {
      setBooks([...books].sort((a,b) => {
        var A = a.year_published;
        var B = b.year_published;
        return A - B;
      }))
    }
    if(value === "rating") {
      setBooks([...books].sort((a,b) => {
        var A = a.rating;
        var B = b.rating;
        return A - B;
      }))
    }
  }

  return (
    <div className='AllBooksComponent'>
      <h2>Currently Available Books</h2>
        <div>
          <button style={{marginRight: "5px"}} value={"year"} onClick={sortBooks}>Sort by year</button>
          <button value={"rating"} onClick={sortBooks}>Sort by rating</button> <br /> <br />
          <input style={{height: "32px", fontSize: "22px"}} type="text" placeholder='Search book'/>
        </div>
        {books.length > 0 ? <Books books={books} setBooks={setBooks} bookFacade={bookFacade} setEditMode={setEditMode} setNewBook={setNewBook} setHasChanged={setHasChanged}/> : <h4>Nothing to see here.. ;)</h4>}
    </div>
  )
}

export default AllBooksComponent
