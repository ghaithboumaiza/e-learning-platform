const express = require('express')
require('dotenv').config();
const connect = require('./config/connectDb');
const cors = require('cors');
const app = express()
app.use(cors())
app.use(express.json())
app.use("/api/users",require("./routes/user-routes"))
app.use("/api/pubs",require("./routes/pub-routes"))
app.use("/api/cmntrs",require("./routes/cmntr-routes"))
app.use("/api/class",require("./routes/class-routes"))
app.use("/api/supports",require("./routes/support-routes"))
// app.use("/api/exams",require("./routes/exam-routes"))
app.use("/api/exams",require("./routes/exam-routes"))


connect()
const port = process.env.PORT

app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
