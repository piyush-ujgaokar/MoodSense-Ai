import React, { useState } from 'react'
import './moodSongs.css'

const MoodSongs = () => {

    const [Songs, setSongs] = useState([
        {
            title:"test_song",
            artist:"test_artist",
            url:"test_url"
        },
        {
            title:"test_song",
            artist:"test_artist",
            url:"test_url"
        },
        {
            title:"test_song",
            artist:"test_artist",
            url:"test_url"
        }
    ])
    


  return (
    <div className='mood-songs'> 
        <h2>Recommended Songs</h2>
        {Songs.map((song, index) => (
            <div key={index}>
                <div className="title">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
                <div className="play-pause-btn">
                    <i className="ri-pause-line"></i>
                    <i class="ri-play-fill"></i>
                </div>
            </div>
        ))}    
     </div>
  )
}

export default MoodSongs