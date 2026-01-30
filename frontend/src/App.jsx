import { useState } from 'react'
import './App.css'
import FacialExpression from './components/FacialExpression'
import MoodSongs from './components/MoodSongs'
import ThemeToggle from './components/ThemeToggle'

function App() {
   const [Songs, setSongs] = useState([])

  return (
    <div className="app-shell">
      <div style={{width:260}} className="panel fade-in">
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:12}}>
          <h3 style={{margin:0}}>moody Player</h3>
          <ThemeToggle />
        </div>
        <p style={{color:'var(--muted)'}}>Detect mood with your camera and get song suggestions.</p>
      </div>

      <main style={{flex:1}}>
        <div className="panel fade-in" style={{marginBottom:18}}>
          <FacialExpression setSongs={setSongs} />
        </div>

        <div className="panel fade-in">
          <MoodSongs Songs={Songs}/>
        </div>
      </main>
    </div>
  )
}

export default App
