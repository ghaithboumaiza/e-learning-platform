const express = require('express')
require('dotenv').config();
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
