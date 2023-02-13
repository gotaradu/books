require('dotenv').config()

const bcrypt = require('bcrypt')

// check again the client side validations (client can avoid that validation)
// check if username already exists in database
// check if email is already taken
// encrypt password
// ...

const checkUsername = () => {}
const checkBook = () => {}
const checkAge = () => {}
const checkEmail = () => {}
const checkPassowrd = () => {}
const checkPasswordsMatch = () => {}

const encryptPassword = async (password) => {
  const encryptedPassword = await bcrypt.hash(password, 5)
  return encryptedPassword
}

module.exports = { encryptPassword }
