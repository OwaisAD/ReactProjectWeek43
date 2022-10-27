import {FaTimes, FaPen, FaStar} from "react-icons/fa"

const Book = ({book, setBooks, bookFacade}) => {
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

    const deleteBook = id => {
      console.log("deleting book with id", id)
    }

  return (
    <div className={`book`}>
        <h4><span className="bookTitle">Title: {book.title} ({book.year_published})</span> {' '} 
        <span><FaPen style={{color:"orange", cursor: "pointer"}}/> / <FaTimes style={{color:'red', cursor: 'pointer '}} onClick={() => deleteBook(book.id)}/></span></h4>
        <p>Author: {book.author}</p>
        <p>Rating: {bookStars[Math.ceil(book.rating)]} ({book.rating})</p>
    </div>
  )
}

export default Book
