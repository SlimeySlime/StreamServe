const path = require('path')
let express = require('express')
let router = express.Router()

router.get('/', (req, res) => {
    res.sendFile(__dirname, 'index.html')
})
router.get('/index', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})
router.get('/hello', (req, res) => {
    res.send('hello express !')
})

module.exports = router