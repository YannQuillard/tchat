const db = require('../models')
const bcrypt = require('bcrypt')
const LocalStrategy = require('passport-local').Strategy

module.exports = passport => {
    passport.serializeUser((user, done) => {
        done(null, user.id)
    });

    passport.deserializeUser((id, done) => {
        db.User.selectOneById(id, (err, user) => {
            done(err, user)
        });
    });

    passport.use(new LocalStrategy(
        { passReqToCallback: true },
        (req, username, password, done) => {
            console.log('passport local call')
            if(!req.user && (!username === '' || password.length >= 5)) {
                db.User.getUserByEmailWithPassword(username, (err, user) => {
                    if(err) {
                        return done(err)
                    } else if(!user) {
                        return done(null, false)
                    } else {
                        bcrypt.compare(passport, user.password, (err, res) => {
                            if(err) {
                                done(err)
                            } else if(res) {
                                delete user.password
                                done(null, user)
                            } else {
                                done(null, false)
                            }
                        })
                    }
                })
            } else if(req.user) {
                done(null, req.user)
            } else {
                return done(null, false)
            }
        }
    ))
}