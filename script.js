const express = require('express')
const app = express()

app.get('/', (res,req) => {
res.redirect('https://molarkaup.xyz/')
})
