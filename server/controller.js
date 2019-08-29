const bcrypt = require('bcryptjs')

module.exports = {
    register: async (req, res) => {
        try {
            const db = req.app.get('db')
            const {username, password} = req.body

            const user = await db.get_user([username])
            if (user.length > 0) {
                return res.status(409).send({message: 'Username in use'})
            }
            const salt = bcrypt.genSaltSync(10)
            const hash = bcrypt.hashSync(password, salt)
            const newUser = await db.insert_user_info({username, password:hash})
            delete newUser[0].password
            req.session.user = newUser[0]
            res.status(200).send({
                message: 'Logged in',
                user: req.session.user,
                loggedIn: true
            })
        }
        catch(err) {
            res.status(500).send(`Error in register method: ${err}`)
        }
    }
}