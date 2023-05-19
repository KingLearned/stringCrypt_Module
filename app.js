const express = require('express')
const WordCrypt = require('./Module/strCrypt')
const app = express()
const PORT = 3300

// WordCrypt()

app.listen(PORT, () =>  { console.log(`app running on PORT: ${PORT}`)})