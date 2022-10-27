import {FaTimes, FaPen, FaStar} from "react-icons/fa"

const Book = ({book}) => {
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

  return (
    <div className={`book`}>
        <h4><span className="bookTitle">Title: {book.title} ({book.year_published})</span> {' '} 
        <span><FaPen style={{color:"orange", cursor: "pointer"}} onClick={() => editPerson(person.id)}/> / <FaTimes style={{color:'red', cursor: 'pointer '}}/></span></h4>
        <p>Author: {book.author}</p>
        <p>Rating: {bookStars[Math.ceil(book.rating)]} ({book.rating})</p>
    </div>
  )
}

export default Book
