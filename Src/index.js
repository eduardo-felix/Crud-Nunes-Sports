const express = require('express')
require('dotenv').config()
const app = express()
const PORT = process.env.PORT || 8000

app.use(express.json())

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`))