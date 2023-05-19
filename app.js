const express = require('express')
const stringCrypt = require('./Module/strCrypt')
const app = express()
const PORT = 3300

const word = new stringCrypt().encrypt('Hello')

app.listen(PORT, () =>  { console.log(`app running on PORT: ${PORT}`)})