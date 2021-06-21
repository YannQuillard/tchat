const connection = require('../config/database')
const User = {
    selectAll: result => {
        const queryString = `SELECT u.id, u.username FROM users AS u ORDER BY u.id ASC;`
        connection.query(queryString, (err, res) => {
            if (err) throw err
            result(res)
        })
    },
    getUserByEmailWithPassword: (username, done) => {
        const queryString = `SELECT u.id, u.email, u.password, FROM users AS u WHERE u.email = ? LIMIT 1;`
        connection.query(queryString, [username], (err, user) => {
            if (err) {
                return done(err, user)
            }
            return done(null, user[0])
        })
    },
    selectOneById: (id, result) => {
        const queryString = `SELECT u.id, u.username, FROM users AS u WHERE u.id = ? LIMIT 1;`
        connection.query(queryString, [id], (err, res) => {
            if(err) throw err
            result(res)
        })
    },
    selectOneByUsername: (username, result) => {
        const queryString = `SELECT u.id, u.username, FROM users AS u WHERE u.username = ? LIMIT 1;`
        connection.query(queryString, [username], (err, res) => {
            if (err) throw err
            result(res)
        })
    },
    deleteOne: (id, result) => {
        const queryString = `DELETE FROM users WHERE id = ?;`
        connection.query(queryString, [id], (err, res) => {
            if (err) throw err
            result(res)
        })
    },
    insertOne: (values, result) => {
        const queryString = `INSERT INTO users (username, email, password) VALUES (?, ?, ?);`
        connection.query(queryString, values, (err, res) => {
            if (err) throw err
            result(res)
        })
    },
    updateOne: (values, id, result) => {
        const queryString = `UPDATE users SET username=?, email=?, password=? WHERE id=?;`
        connection.query(queryString, values, (err, res) => {
            if (err) throw err
            result(res)
        })
    }
}

module.exports = User