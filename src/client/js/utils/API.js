import axios from 'axios'

export default {
    postNewUser: async newUser => {
        try {
            const {username, email, password} = newUser
            return await axios.post('/api/user', {
                vals: [username, email, password]
            })
        } catch (err) {
            return console.log(err)
        }
    },
    getAllUsers: async () => {
        try {
            const res = await axios.get('/api/user')
            return res.data
        } catch (err) {
            return console.log(err)
        }
    },
    deleteUserById: async id => {
        try {
            return await axios.delete(`api/users/${id}`)
        } catch (err) {
            return console.log(err)
        }
    }
}