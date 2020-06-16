const {Router} = require('express')
const Song = require('../models/Song')
const router = Router()

router.post('/create', async (req, res) => {
    try {
        console.log(req.body)
        const {title, author, time, imageSrc} = req.body
        console.log(title)
        console.log(author)
        console.log(time)
        console.log(imageSrc)

        const existing = await Song.findOne({ title: title, author: author })
        if (existing) {
            return res.json({ song: existing })
        }

        const song = new Song({
            title, author, time, imageSrc
        })
        console.log(song)

        await song.save()

        res.status(201).json({ song })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.delete('/delete', async (req, res) => {
    try {
        const song = await Song.findOneAndDelete({ _id: req.body.id })
        const songs = await Song.find()
        res.json(songs)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/', async (req, res) => {
    try {

        const songs = await Song.find()
        res.json(songs)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.get('/sort', async (req, res) => {
    try {

        const songs = await Song.find().sort({title: 1})
        res.json(songs)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

router.post('/edit', async (req, res) => {
    try {
        console.log(req.body)
        const {title, author, time, imageSrc, id} = req.body

        const song = await Song.findOne({ _id: id  })
        console.log(song)
        if (song) {
            const newSong = await Song.update({ _id: req.body.id  }, {title: title, author: author, time: time, imageSrc: imageSrc})
            return res.status(201).json({ song: newSong })
        }

        res.status(404).json({ message: "error" })
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})


router.get('/:id', async (req, res) => {
    try {
        const song = await Song.findById(req.params.id)
        res.json(song)
    } catch (e) {
        res.status(500).json({ message: 'Что-то пошло не так, попробуйте снова' })
    }
})

module.exports = router