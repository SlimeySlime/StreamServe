const app = require('express')()
    server =  require('http').Server(app),
    io = require('socket.io')(server),

server.listen(3033)

// let uri = 'rtsp://jinsu:1q2w3e4r!@192.168.219.108:554'
let uri = 'rtsp://admin:moaland1383@192.168.219.108:554'
// let stream = new rtsp.FFPMEG({input: uri})

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
} )

// app.get('/stream', (req, res) => {
//     try {
//         Stream = require('node-rtsp-stream')
//         stream = new Stream({
//         name: 'test',
//         streamUrl: uri,
//         wsPort: 9999,
//         ffmpegOptions: { // options ffmpeg flags
//             '-stats': '', // an option with no neccessary value uses a blank string
//             '-r': 30 // options with required values specify the value after the key
//         }
//         })
//     } catch (e) {
//         console.log('error on stream', e)
//     }
    
//     // res.send(stream);
//     res.send('hello world')
// })