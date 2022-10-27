import React from 'react'
import { useState } from 'react'

const InputBookComponent = ({bookFacade, books, setBooks}) => {

  const initialValue = {

  }

  const [newBook, setNewBook] = useState({id: "", title: "", author: "", "year_published": ""})

  const update = (event) => {
    const value = event.target.value
    const propertyName = event.target.id
    setNewBook({...newBook, [propertyName]:value})
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (
    <div className='BookComponentDiv'>
      <p>Add a book in the system:</p>
      <form onSubmit={handleSubmit}>
            <input id="title" type="text" placeholder='Book title' required onChange={update}/> <br />
            <input id="author" type="text" placeholder='Book author' required onChange={update}/> <br />
            <input id="year_published" type="text" placeholder='Publishing year' required onChange={update}/> <br />
            <input type="submit" value="Submit book"/>
      </form>
      <p>{JSON.stringify(newBook)}</p>
    </div>
  )
}

export default InputBookComponent
