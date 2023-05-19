const express = require('express')
const app = express()
const PORT = 3300

console.log('Hello World')

app.listen(PORT, () =>  { console.log(`app running on PORT: ${PORT}`)})