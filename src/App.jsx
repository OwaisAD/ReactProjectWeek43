import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookPublisher from './components/BookPublisher'
import { useEffect } from 'react'
import bookFacade from './facades/bookFacade'

function App() {
  const [books, setBooks] = useState([])
  const[hasChanged, setHasChanged] = useState(false)

  useEffect(() => {
    bookFacade.getAllBooks().then(data => setBooks(data))
    setHasChanged(false)
  }, [hasChanged])

  return (
    <div className="App">
        <BookPublisher books={books} bookFacade={bookFacade} setBooks={setBooks} setHasChanged={setHasChanged}/>
    </div>
  )
}

export default App
