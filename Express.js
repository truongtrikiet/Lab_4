const express = require('./Express')
const app = express()

app.get('/', (req, res) => {
    res.send('Hello World!')
})

app.listen(3000, () => {
    console.log('listening on port 3000')
})