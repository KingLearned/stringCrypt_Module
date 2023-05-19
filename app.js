const express = require('express')
const stringCrypt = require('./Module/strCrypt')
const app = express()
const PORT = 3300

const word = 'It initializes an empty string variable called Decrypting to store the decrypted result.'

const ToEncode = stringCrypt.encrypt(word)
const ToDecode = stringCrypt.decrypt(ToEncode)
const ToCompare = stringCrypt.compare(ToEncode, ToDecode)

console.log(ToEncode)
console.log(ToDecode)
console.log(ToCompare)

app.listen(PORT, () =>  { console.log()})