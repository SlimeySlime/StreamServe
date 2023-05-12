Stream = require('node-rtsp-stream');

URL = 'rtsp://admin:moaland1383@192.168.219.108:554'
stream = new Stream({
    name: 'main',
    streamUrl: URL,
    wsPort: 9999,
    ffmpegOptions: { // options ffmpeg flags
        '-stats': '', // an option with no neccessary value uses a blank string
        '-r': 30 // options with required values specify the value after the key
    }
})

