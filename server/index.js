const express = require('express')
const router = require('./src/routes')
const app = express()
const port = 5000
const cors = require('cors')

app.use(cors())
app.use(express.json())
app.use('/api/v1/', router)
app.use('/', (req, res) => {
    res.send('juki lari')
})


app.listen(port, console.log(`sarkam running on port ${port}`))