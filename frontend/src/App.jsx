import { useState } from 'react'
import './App.css'
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <FacialExpression />
     <MoodSongs/>
    </>
  )
}

export default App
