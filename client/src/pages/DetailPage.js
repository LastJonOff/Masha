import React, {useCallback, useContext, useEffect, useState} from 'react'
import {useHistory, useParams} from 'react-router-dom'
import {useHttp} from '../hooks/http.hook'
import {Loader} from '../components/Loader'
import {SongCard} from '../components/SongCard'
import {EditForm} from "../components/EditForm";

export const DetailPage = () => {
    const {request, loading} = useHttp()
    const [song, setSong] = useState(null)
    const [form, setForm] = useState(false)
    const songId = useParams().id

    const history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [date, setDate] = useState('')

    const getSong = useCallback(async () => {
        try {
            const fetched = await request(`/api/songs/${songId}`, 'GET', null)
            setSong(fetched)
        } catch (e) {}
    }, [songId, request])

    useEffect(() => {
        getSong()
    }, [getSong])

    if (loading) {
        return <Loader />
    }

    const editHandler = async () => {
        try {
            setForm(!form)
        } catch (e) {}
    }


    return (
        <div>
            <div>
                { !loading && song &&
                    <div className="container">
                        <SongCard song={song} />
                        <button
                            className="btn grey darken-4"
                            style={{ marginLeft: '90%', marginRight: 10}}
                            onClick={(e) => editHandler()}
                        >
                            редактировать
                        </button>
                    </div>
                }
            </div>
            <div>
                {form && <EditForm handleName = "edit" songId={songId} />}
            </div>
        </div>
    )
}