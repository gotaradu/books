const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const validation = require('../util/registerValidation')
const router = express.Router()
// mongodb+srv://pocneste:QPwJjvGXkfLIpGaF@cluster0.jnxf09f.mongodb.net/?retryWrites=true&w=majority
require('dotenv').config()

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({ extended: false }))
mongoose.set('strictQuery', false)
mongoose.connect(
  'mongodb+srv://pocneste:QPwJjvGXkfLIpGaF@cluster0.jnxf09f.mongodb.net/book?retryWrites=true&w=majority',
)

const Schema = mongoose.Schema

const userSchema = new Schema({
  username: String,
  lastBookRead: String,
  age: String,
  email: String,
  password: String,
  confirmPassword: String,
  date: Date,
})
const UserModel = mongoose.model('users', userSchema)

router.post('/register', async (req, res, next) => {
  const newPassword = await validation.encryptPassword(req.body.password)
  console.log(newPassword + ' Here!')
  const data = new UserModel(req.body)
  data.password = newPassword
  data.confirmPassword = newPassword
  data.date = Date.now()
  console.log(data + ' Data here')
  data
    .save()
    .then((item) => {
      console.log(item)
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
})
router.get('/register', (req, res, next) => {
  res.send('salut')
})

module.exports = module.exports = { router, UserModel }
