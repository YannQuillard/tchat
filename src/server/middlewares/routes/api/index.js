const router = require('express').Router()
const usersRoutes = require('./users')
const loginRoutes = require('./login')

router.use('/user', usersRoutes)
router.use('/login', loginRoutes)

router.get('/', (req, res) => {
    res.status(200).send('Succesful get to /api route')
})

module.exports = router