const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const router = express.Router()
// mongodb+srv://pocneste:QPwJjvGXkfLIpGaF@cluster0.jnxf09f.mongodb.net/?retryWrites=true&w=majority
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
  date: Date,
})
const UserModel = mongoose.model('users', userSchema)

router.post('/register', (req, res, next) => {
  const data = new UserModel(req.body)
  data
    .save()
    .then((item) => {
      console.log('saved')
    })
    .catch((err) => {
      res.status(400).send('unable to save to database')
    })
})
router.get('/register', (req, res, next) => {
  res.send('salut')
})

module.exports = router
