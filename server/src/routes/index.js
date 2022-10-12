const express = require('express')
const router = express.Router()


const {register, getUsers} = require('../controllers/auth')

router.get('/users', getUsers)
router.post('/register', register)

module.exports = router