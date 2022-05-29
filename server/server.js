const express = require('express');
const app = express();
const cors = require('cors')
const PORT = 8080;
const DB = require('./db.js');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())


// Read
app.get('/api', (req, res) => {
    DB.find((err, data) => {
        if (err) throw err
        res.json(data)
    })
})

// Create
app.post('/api/create', (req, res) => {
    let data = req.body.data
    DB.create(data, (err, result) => {
        if (err) throw err
        console.log('Created!')
    })
})

// Update
app.put('/api/update/:id', (req, res) => {
    const itemId = req.params.id
    const newItem = {
        title: req.body.newTitle,
        content: req.body.newContent
    }
    DB.findByIdAndUpdate(itemId, newItem, (err, result) => {
        if (err) throw err
        res.redirect('http://localhost:3000/posts')
    })
})

// Delete
app.delete('/api/delete/:id', (req, res) => {
    const userId = req.params.id
    DB.findByIdAndDelete(userId, (err, result) => {
        if (err) throw err
        console.log('Deleted!')
    })
})
app.listen(PORT, () => console.log('Server Online!'));