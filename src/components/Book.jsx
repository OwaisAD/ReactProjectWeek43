import {FaTimes, FaPen, FaStar} from "react-icons/fa"

const Book = ({book, setBooks, setNewBook, bookFacade, setEditMode}) => {
    let starElement = <FaStar style={{color:"yellow"}}/>
    let starElement2 = (<><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/></>)
    let starElement3 = (<><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/></>)
    let starElement4 = (<><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/></>)
    let starElement5 = (<><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/><FaStar style={{color:"yellow"}}/></>)

    const bookStars = {
        1: starElement,
        2: starElement2,
        3: starElement3,
        4: starElement4,
        5: starElement5,
    }

    const editBook = id => {
      console.log("editing book with id", id)
      setEditMode(true)
      // get person and display his name in the input field
      setNewBook(book)
    }

    const deleteBook = async id => {

      bookFacade.deleteBook(id)
      bookFacade.getAllBooks().then(data => setBooks(data))
    }

  return (
    <div className={`book`}>
        <h4><span className="bookTitle">Title: {book.title} ({book.year_published})</span> {' '} 
        <span><FaPen style={{color:"orange", cursor: "pointer"}} onClick={() => editBook(book.id)}/> / <FaTimes style={{color:'red', cursor: 'pointer '}} onClick={() => deleteBook(book.id)}/></span></h4>
        <p>Author: {book.author}</p>
        <p>Rating: {bookStars[Math.round(book.rating)]} ({book.rating})</p>
    </div>
  )
}

export default Book
