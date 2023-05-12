const express = require('express')
const ffmpeg = require('ffmpeg')
let app = express()
const cors = require('cors')
const morgan = require('morgan')
const path = require('path')
// const server = require('http').Server(app)

PORT = 5115
URI = 'rtsp://admin:moaland1383@192.168.219.108:554'

Stream = require('node-rtsp-stream');

URL = 'rtsp://admin:moaland1383@192.168.219.108:554'
// Simple Websocket stream serve 
stream = new Stream({
    name: 'main',
    streamUrl: URL,
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
})


app.use(cors())
app.use(express.static('public'))

const mainRouter = require('./routes')
app.use('/', mainRouter)


app.listen(PORT, () => {
    console.log(`hello express ! run on ${PORT}`)
})