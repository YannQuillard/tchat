const router = require('express').Router()
const usersRoutes = require('./users')

router.use('/user', usersRoutes)

router.get('/', (req, res) => {
    res.status(200).send('Succesful get to /api route')
})

module.exports = router