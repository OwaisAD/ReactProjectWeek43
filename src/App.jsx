import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookPublisher from './components/BookPublisher'
import { useEffect } from 'react'
import bookFacade from './facades/bookFacade'

function App() {
  const [count, setCount] = useState(0)
  const [books, setBooks] = useState([])

  useEffect(() => {
    const getBooks = async () => {
      const booksFromServer = await bookFacade.getAllBooks()
      setBooks(booksFromServer)
    }
    getBooks()
  }, [])

  return (
    <div className="App">
        <BookPublisher books={books} bookFacade={bookFacade} setBooks={setBooks}/>
    </div>
  )
}

export default App
