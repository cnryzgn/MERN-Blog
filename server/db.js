const mongoose = require('mongoose')
const date = new Date()
const currentDate = `${date.getFullYear()}/${date.getMonth() + 1}/${date.getDate()} - ${date.getHours()}:${date.getMinutes()}`
const schema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true,
        default: Date.now
    }
})


// You can change with your own database url/name
mongoose.connect('mongodb://127.0.0.1:27017/myDatabase', () => console.log('DB Connection OK!'))

const Conn = mongoose.model('posts', schema)

module.exports = Conn