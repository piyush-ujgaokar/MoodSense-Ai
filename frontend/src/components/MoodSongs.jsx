import React, { useEffect, useRef, useState } from 'react'
import './moodSongs.css'

const MoodSongs = ({Songs}) => {

        const [playingIndex, setPlayingIndex] = useState(null)
        const audioRef = useRef(new Audio())

        useEffect(() => {
            const audio = audioRef.current
            audio.onended = () => setPlayingIndex(null)
            return () => {
                audio.pause()
                audio.src = ''
            }
        }, [])

        useEffect(() => {
            const audio = audioRef.current
            if (playingIndex === null) {
                audio.pause()
                audio.currentTime = 0
                return
            }
            const song = Songs[playingIndex]
            if (!song) return
            audio.src = song.songUrl
            audio.play().catch(() => {})
        }, [playingIndex, Songs])

        const toggle = (index) => {
            if (playingIndex === index) setPlayingIndex(null)
            else setPlayingIndex(index)
        }

    return (
        <div className='mood-songs'> 
                <h2>Recommended Songs</h2>
                {Songs.length === 0 && <p className="muted">No suggestions yet — click "Detect Mood"</p>}
                {Songs.map((song, index) => (
                    <div className={`main-box ${playingIndex===index? 'playing':''}`} key={index}>
                                <div className="title">
                                        <h3>{song.title}</h3>
                                        <p className="muted">{song.artist}</p>
                                </div>
                                <div className="play-pause-btn">
                                        <button className="icon-btn" onClick={()=> toggle(index)}>
                                            {playingIndex === index ? <i className="ri-pause-line"></i>: <i className="ri-play-fill"></i>}
                                        </button>
                                </div>
                        </div>
                ))}    
         </div>
    )
}

export default MoodSongs