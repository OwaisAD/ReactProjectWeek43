import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookPublisher from './components/BookPublisher'
import { useEffect } from 'react'
import bookFacade from './facades/bookFacade'

function App() {
  const [books, setBooks] = useState([])
  const[hasChanged, setHasChanged] = useState(false)
  
  //only used for searching for book name
  const [isSearchQuery, setIsSearchQuery] = useState(false)
  const [searchResult, setSearchResult] = useState([])

  useEffect(() => {
    if(isSearchQuery === true) {
      console.log("I AM HERE")
      console.log("SEARCH RES", searchResult)
      setBooks(searchResult)
      setIsSearchQuery(false)
    } else {
      console.log("NOW JUST GET EVERYTHING")
      bookFacade.getAllBooks().then(data => setBooks(data))
    }
    setHasChanged(false)
  }, [hasChanged, searchResult])

  return (
    <div className="App">
        <BookPublisher books={books} bookFacade={bookFacade} setBooks={setBooks} setHasChanged={setHasChanged} setSearchResult={setSearchResult} setIsSearchQuery={setIsSearchQuery}/>
    </div>
  )
}

export default App
