import React, {useState} from 'react'
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {useHttp} from "../hooks/http.hook";
import {useHistory} from "react-router-dom";

export const EditForm = ({ song, handleName, songId }) => {
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [author, setAuthor] = useState('')
    const [time, setTime] = useState('')
    const [imgsrc, setImgSrc] = useState('')
    const {request} = useHttp()

    const editHandler = async () => {
        try {
            const data = await request('/api/songs/edit', 'POST', {title: title, author: author, time: time, imageSrc: imgsrc , id: songId})
            window.location.reload(false);
        } catch (e) {}
    }

    const createHandler = async () => {
        try {
            const data = await request('/api/songs/create', 'POST', {title: title, author: author, time: time, imageSrc: imgsrc})
            history.push(`/detail/${data.song._id}`)
        } catch (e) {}
    }

    return (
        <div className="row">
            <div className="col s8 offset-s2" style={{paddingTop: '2rem'}}>
                <div className="input-field">
                    <input
                        placeholder="Название"
                        id="title"
                        type="text"
                        value={title}
                        onChange={e => setTitle(e.target.value)}
                    />
                    <label htmlFor="title">Введите название</label>

                </div>
                <div className="input-field">
                    <input
                        placeholder="Автор"
                        id="author"
                        type="text"
                        value={author}
                        onChange={e => setAuthor(e.target.value)}
                    />
                    <label htmlFor="title">Введите автора</label>

                </div>

                <div className="input-field">
                    <input
                        placeholder="Ссылка на изображение"
                        id="imgsrc"
                        type="text"
                        value={imgsrc}
                        onChange={e => setImgSrc(e.target.value)}
                    />
                    <label htmlFor="title">Вставьте ссылку на картинку</label>

                </div>

                <InputLabel id="demo-simple-select-label">Длительность</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={time}
                    onChange={e => setTime(e.target.value)}
                >
                    <MenuItem value={'3:00'}>3:00</MenuItem>
                    <MenuItem value={'3:30'}>3:30</MenuItem>
                    <MenuItem value={'4:00'}>4:00</MenuItem>
                </Select>

                <div>
                    <button
                        className="btn yellow darken-4"
                        style={{marginRight: 10}}
                        onClick={handleName === "create"? createHandler : editHandler}
                    >
                        Создать
                    </button>
                </div>
            </div>
        </div>
    )
}
