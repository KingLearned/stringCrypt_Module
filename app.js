const express = require('express')
const stringCrypt = require('./Module/strCrypt')
const app = express()
const PORT = 3300

const Pwd = 'emmilia&811# 3697821'
const word = stringCrypt.compare('emla81 672mii&1#3981',Pwd)

console.log(word)

app.listen(PORT, () =>  { console.log()})