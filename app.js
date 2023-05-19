const express = require('express')
const app = express()
const PORT = 3300


// const strCrypt = require('./public/strCrypter')

app.listen(PORT, () =>  { console.log(`app running on PORT: ${PORT}`)})