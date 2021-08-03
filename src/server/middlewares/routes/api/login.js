const router = require('express').Router()
const passport = require('passport')

router
    .route('/')
    .post(
        passport.authenticate('local'),
        (req, res) => {
            console.log('req.sessionID: ', req.sessionID)
            res.status(200).json({ user: req.user })
        }
    )

module.exports = router
