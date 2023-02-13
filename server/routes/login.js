const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const validation = require('../util/loginValidation')
const { UserModel } = require('./register')
const router = express.Router()

require('dotenv').config()
router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
mongoose.set('strictQuery', false)
mongoose.connect(
  'mongodb+srv://pocneste:QPwJjvGXkfLIpGaF@cluster0.jnxf09f.mongodb.net/book?retryWrites=true&w=majority',
)

router.post('/login', async (req, res, next) => {
  const data = req.body

  const userExists = await UserModel.findOne({ email: data.email }).exec()

  if (userExists) {
    //check password match
    // console.log(userExists)
    const passIsValid = await validation.passwordIsValid(
      data.password,
      userExists.password,
    )
    if (passIsValid) {
      console.log('passwords match')
      // here i sent the token for auth
      const token = await validation.getToken()
      res.send({ token })
    } else {
      console.log('wrong password')
    }
  } else {
    console.log('user does not exist')

    res.send('error')
  }
})
router.get('/login', (req, res, next) => {
  res.send('salut')
})

module.exports = router
