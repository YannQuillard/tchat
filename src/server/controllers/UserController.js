const db = require('../models/index.js')
const bcrypt = require('bcrypt')
const saltRounds = 12

module.exports = {
    createNewUser: (req, res) => {
        if(!req.isAuthenticated()) {
            const userData = req.body.vals
            bcrypt.hash(userData[2], saltRounds, (err, hash) => {
                if (err) {
                    console.error(err)
                }

                userData[2] = hash
                db.User.insertOne(userData, result => {
                    res.status(200).json({id: result.insertId})
                })
            })
        } else {
            res.status(400)
        }
    },
    getAllUsers: (req, res) => {
        db.User.selectAll(result => {
            res.status(200).json(result)
        })
    },
    getUsersById: (req, res) => {
        db.User.selectOneById(req.params.id, result => {
            res.status(200).json(result)
        })
    },
    updateUserById: (req, res) => {
        const userData = req.body.vals
        bcrypt.hash(userData[2], saltRounds, (err, hash) => {
            if (err) {
                console.error(err)
            }

            userData[2] = hash
            db.User.updateOne(userData, req.params.id, result => {
                if(result.changedRows === 0) {
                    res.status(204).end()
                } else {
                    res.status(200).end()
                }
            })
        })
    },
    deleteUserById: (req, res) => {
        db.User.deleteOne(req.params.id, result => {
            res.status(200).json(result)
        })
    }
}