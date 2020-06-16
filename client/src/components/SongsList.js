import React, {useContext} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Link} from 'react-router-dom'

export const SongsList = ({ songs, handle, sort }) => {

    if (!songs.length) {
        return <p className="center">Не найдено ни одной песни</p>
    }

    return (

        <>
            <div>
                <button
                    className="btn yellow darken-4"
                    style={{marginRight: 10}}
                    onClick={(e) => sort(songs)}
                >
                    Sort by name
                </button>
            </div>
            { songs.map((song) => {
                return (
                    <div className="card center-align" style = {{width:'400px', display: 'inline-block', margin: '10px'}}>
                        <Link to={`/detail/${song._id}`} key={song._id}>
                        <div className="card-image " style={{width: '400px', height:'400px'}}>
                            <img src={song.imageSrc} />
                            <span className="card-title" style={{fontSize: '40px'}}>{song.title}</span>
                        </div>
                        </Link>
                        <div className="card-content black-text">
                            <span className="card-title "style={{fontWeight: 'bold'}}>{song.author} ({song.time})</span>
                            <button
                                className="btn-floating halfway-fab waves-effect waves-light red"
                                style={{color: 'white', marginBottom: '15%'}}
                                onClick={(e) => handle(song._id)}
                            >
                                x
                            </button>
                        </div>
                    </div>
                )
            }) }
        </>
    )
}