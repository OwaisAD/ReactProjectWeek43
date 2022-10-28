import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookPublisher from './components/BookPublisher'
import { useEffect } from 'react'
import bookFacade from './facades/bookFacade'

function App() {
  const [books, setBooks] = useState([])

  useEffect(() => {
    bookFacade.getAllBooks().then(data => setBooks(data))
  }, [])

  return (
    <div className="App">
        <BookPublisher books={books} bookFacade={bookFacade} setBooks={setBooks}/>
    </div>
  )
}

export default App
