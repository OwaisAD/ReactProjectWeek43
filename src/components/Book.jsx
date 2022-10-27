import {FaTimes} from "react-icons/fa"

const Book = ({book}) => {
  return (
    <div className={`book`}>
    <h3>{book.title} {' '} 
    <FaTimes style={{color:'red', cursor: 'pointer '}}/></h3>
    <p>{book.author} / {book.year_published}</p>
    <p>{book.rating}</p>
    
</div>
  )
}

export default Book
