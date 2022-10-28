import React from 'react'
import { useRef } from 'react'
import Books from './Books'

const AllBooksComponent = ({books, setBooks, setNewBook, bookFacade, setEditMode, setHasChanged, setSearchResult,setIsSearchQuery}) => {

    const inputRef = useRef(null)

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

  const searchBook = async (e) => {
    e.preventDefault()

    let title = inputRef.current.value
    console.log("looking for title", title)
    if(title === "") {
      await bookFacade.getAllBooks()
      .then(data =>{
        setSearchResult(data)
      })
      setIsSearchQuery(current => !current)
    }
    await bookFacade.getBookByName(`title_like`, title)
      .then(data =>{
        console.log("ACTUAL QUERY DATA,", data)
        setSearchResult(data)
      })
      setIsSearchQuery(current => !current)
  } 

  return (
    <div className='AllBooksComponent'>
      <h2>Currently Available Books</h2>
        <div>
          <button style={{marginRight: "5px"}} value={"year"} onClick={sortBooks}>Sort by year</button>
          <button value={"rating"} onClick={sortBooks}>Sort by rating</button> <br /> <br />
          <input style={{height: "32px", fontSize: "22px"}} type="text" placeholder='Search book' id='bookInput' name='bookInput' ref={inputRef}/>
          <button onClick={searchBook}>Search</button>

        </div>
        {books.length > 0 ? <Books books={books} setBooks={setBooks} bookFacade={bookFacade} setEditMode={setEditMode} setNewBook={setNewBook} setHasChanged={setHasChanged}/> : <h4>Nothing to see here.. ;)</h4>}
    </div>
  )
}

export default AllBooksComponent
