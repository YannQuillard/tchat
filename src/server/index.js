require('dotenv').config()
const express = require('express')
const passport = require('passport')
const session = require('express-session')
const routes = require('./middlewares/routes')

const app = express()

const PORT = process.env.PORT

app.set('env', process.env.NODE_ENV);
console.log(`Application env: ${process.env.NODE_ENV}`)

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