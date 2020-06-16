import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {SongsList} from '../components/SongsList'
import {useHistory} from "react-router-dom";

export const SongsPage = () => {
    const history = useHistory()
    const [songs, setSongs] = useState([])
    const {loading, request} = useHttp()

    const fetchSongs = useCallback(async () => {
        try {
            const fetched = await request('/api/songs', 'GET', null)

            setSongs(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchSongs()
    }, [fetchSongs])

    if (loading) {
        return <Loader/>
    }

    const pressHandler = async (removeId) => {
        try {
            const data = await request('/api/songs/delete', 'DELETE', {id: removeId})
            setSongs( songs.filter(song => {
                return song._id !== removeId
            }))
        } catch (e) {}
    }

    const sortHandler = async (songs) => {
        try {
            const fetched = await request('/api/songs/sort', 'GET', null)
            setSongs(fetched)
        } catch (e) {}
    }


    return (
        <>
            {!loading && <SongsList songs={songs} handle = {pressHandler}  sort = {sortHandler}/>}
        </>
    )
}