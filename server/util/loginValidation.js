require('dotenv').config()
const KEY = process.env.SECRET_KEY
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 5)
  return encryptedPassword
}
const passwordIsValid = async (pass1, pass2) => {
  const passwordsMatch = await bcrypt.compare(pass1, pass2)
  return passwordsMatch
}

const getToken = async () => {
  const str = jwt.sign('radu', KEY)
  return str
}
module.exports = { encryptPassword, passwordIsValid, getToken }
