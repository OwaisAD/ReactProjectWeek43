import React from 'react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const InputBookComponent = ({bookFacade, books, newBook, setBooks, setNewBook, editMode, setEditMode, setHasChanged}) => {

  const update = (event) => {
    const value = event.target.value
    const propertyName = event.target.id
    setNewBook({...newBook, [propertyName]:value})
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    if(newBook.id === "") {
      newBook.id = uuidv4()
      bookFacade.createBook(newBook)
      setHasChanged(true)
  } else { // if id already exists we just want to change it
      let bookToEdit = {
        id: newBook.id,
        title: newBook.title,
        author: newBook.author,
        year_published: newBook.year_published,
        rating: newBook.rating,
      }

      bookFacade.updateBook(bookToEdit.id, bookToEdit)
      setEditMode(false)
  }
    
    setHasChanged(true)
    setNewBook({id: "", title: "", author: "", rating: "", "year_published": ""})

  }

  return (
    <div className='BookComponentDiv'>
      <h2>Add a book:</h2>
      <form onSubmit={handleSubmit}>
            <input id="title" value={newBook.title} type="text" placeholder='Book title' required onChange={update}/> <br />
            <input id="author" value={newBook.author} type="text" placeholder='Book author' required onChange={update}/> <br />
            <input id="year_published" value={newBook.year_published} type="number" placeholder='Publishing year' min={1000} max={2022} required onChange={update}/> <br />
            <input id="rating" value={newBook.rating} type="number" min={1} max={5} step="0.01" placeholder='Rating' required onChange={update}/> <br />
            <input type="submit" value="Submit book"/>
      </form>
      {editMode && <p style={{fontSize: "22px"}}>Currently in edit mode</p>}
      <p>{JSON.stringify(newBook)}</p>
    </div>
  )
}

export default InputBookComponent
