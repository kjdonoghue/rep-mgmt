const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8080
require('dotenv').config()
const connectionString = process.env.CONNECTION_STRING
const pgp = require("pg-promise")()
global.db = pgp(connectionString)

app.use(express.json())
app.use(cors())

app.get('/daily-reviews', async (req, res) => {
    let result = await db.any('SELECT * from reviews')

    res.json(result)

})



app.listen(PORT, () => {
    console.log('The server is running...')
})