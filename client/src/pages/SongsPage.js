import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {SongsList} from '../components/SongsList'
import {useHistory} from "react-router-dom";

export const SongsPage = () => {
    const history = useHistory()
    const [songs, setSongs] = useState([])
    const {loading, request} = useHttp()

    const fetchTodos = useCallback(async () => {
        try {
            const fetched = await request('/api/songs', 'GET', null)

            setSongs(fetched)
        } catch (e) {}
    }, [request])

    useEffect(() => {
        fetchTodos()
    }, [fetchTodos])

    if (loading) {
        return <Loader/>
    }

    const pressHandler = async (removeId) => {
        try {
            const data = await request('/api/songs/delete', 'DELETE', {id: removeId})
            history.push(`/create`)
        } catch (e) {}
    }


    return (
        <>
            {!loading && <SongsList songs={songs} handle = {pressHandler}/>}
        </>
    )
}