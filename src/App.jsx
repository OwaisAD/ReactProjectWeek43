import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import BookPublisher from './components/BookPublisher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <BookPublisher />
    </div>
  )
}

export default App
