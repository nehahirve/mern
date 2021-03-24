const express = require('express')
const mongoose = require('mongoose')

const app = express()

const port = process.env.PORT || 8080

app.listen(port, () => console.log(`Listening on port ${port}`))
