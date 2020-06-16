import React from 'react'

export const SongCard = ({ song }) => {
    return (
        <div className="card" style = {{width:'400px'}}>
            <div className="card-image " style={{width: '400px', height:'400px'}}>
                <img src={song.imageSrc} />
                <span className="card-title" style={{fontSize: '40px'}}>{song.title}</span>
            </div>
            <div className="card-content black-text">
                <span className="card-title "style={{fontWeight: 'bold'}}>{song.author} ({song.time})</span>

            </div>
        </div>
    )
}
