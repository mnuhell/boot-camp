const express = require('express');
const app = express();
let notes = [
    {
        "id": 1,
        "content": "Tengo que estudiar clases full Stack",
        "date": "2019-05-30T18:30:34.091Z",
        "important": false
    },
    {
        "id": 2,
        "content": "revisar tareas Pizarra externos",
        "date": "2021-02-30T18:11:34.091Z",
        "important": false
    },
    {
        "id": 3,
        "content": "Terminar el TPV para los pagos desde la ficha",
        "date": "2021-02-10T11:30:34.091Z",
        "important": true
    }
]

app.get('/', (request, response) => {
    response.send('<h1> Hello World </h1>')
})

app.get('/api/notes', (request, response) => {
    response.json(notes)
} )

app.get('/api/notes/:id', ( req, res) => {
    const id = Number(req.params.id)
    const note = notes.find( note => note.id === id)
    if ( note ) {
        res.status(200).json( note )
    }  else {
        res.status(404).send('La nota no ha sido encontrada')
    }
})

app.delete('/api/notes/:id', (rep, resp) => {
    const id = req.params.id
    const note = notes.filter( note => note.id !== id);
    res.status(204)
})

const PORT = 3001
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`)
})
