require('dotenv').config()
const express = require('express')
const passport = require('passport')
require('./config/passport')(passport)
const session = require('express-session')
const routes = require('./middlewares/routes')
const path = require('path')

const app = express()

const PORT = process.env.PORT
if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')))
}

app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(session({
    secret: process.env.SECRET,
    resave: true,
    saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

app.listen(PORT, () =>
    console.log(`Server running on port ${PORT}`)
)