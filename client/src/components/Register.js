import React from 'react'
import useInput from '../hooks/use-input'

const styles = {
  label_div: 'shadow-xl px-1 flex flex-col rounded-lg m-5 ',
  input:
    'px-1 flex-1 w-4/5 rounded-lg  focus:border-verde border-4 mt-1 mb-1 bg-verzisor',
  input_wrong: 'px-1 flex-1 w-4/5 rounded-lg mt-1 mb-1  border-4  bg-ambient',
  error:
    'px-1 flex-1 w-4/5 rounded-lg border-ambient focus:border-verde border-4 mt-1 mb-1 ',
}

const checkUsername = (value) => {
  if (value.trim().length > 3 && value.trim().length < 10) {
    return { enteredValueIsValid: true }
  } else return { enteredValueIsValid: false, errorMessage: 'invalid username' }
}
const checkLastBookRead = (value) => {
  if (value.trim().length > 3) return { enteredValueIsValid: true }
  else return { enteredValueIsValid: false, errorMessage: 'invalid Book' }
}
const checkEmail = (value) => {
  const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  if (value.match(regex)) {
    return { enteredValueIsValid: true }
  } else return { enteredValueIsValid: false, errorMessage: 'invalid email' }
}
const checkAge = (value) => {
  if (parseInt(value) > 0 && parseInt(value) < 99) {
    return { enteredValueIsValid: true }
  } else {
    return { enteredValueIsValid: false, errorMessage: 'invalid age' }
  }
}

const checkPassword = (value) => {
  if (value.trim().length < 8)
    return {
      enteredValueIsValid: false,
      errorMessage: 'at least 8 characters',
    }
  return { enteredValueIsValid: true }
}

const checkConfirmedPassword = (value, password) => {
  if (value === password) return { enteredValueIsValid: true }
  else
    return {
      enteredValueIsValid: false,
      errorMessage: 'Passwords do not match',
    }
}

const Register = () => {
  const {
    value: enteredUserName,
    enteredValueIsValid: enteredUserNameIsValid,
    hasError: enteredUserNameHasError,
    valueChangeHandler: enteredUserNameChangeHandler,
    inputBlurHandler: enteredUserNameBlurHandler,
    resetValue: enteredUserNameReset,
    errMessage: errMessageUsername,
  } = useInput((value) => checkUsername(value))
  const {
    value: enteredLastBookRead,
    enteredValueIsValid: enteredLastBookReadIsValid,
    hasError: enteredLastBookReadHasError,
    valueChangeHandler: enteredLastBookReadChangeHandler,
    inputBlurHandler: enteredLastBookReadBlurHandler,
    resetValue: enteredLastBookReadReset,
    errMessage: errMessageLastBookRead,
  } = useInput((value) => checkLastBookRead(value))
  const {
    value: enteredAge,
    enteredValueIsValid: enteredAgeIsValid,
    hasError: enteredAgeHasError,
    valueChangeHandler: enteredAgeChangeHandler,
    inputBlurHandler: enteredAgeBlurHandler,
    resetValue: enteredAgeReset,
    errMessage: errMessageAge,
  } = useInput((value) => checkAge(value))
  const {
    value: enteredEmail,
    enteredValueIsValid: enteredEmailIsValid,
    hasError: enteredEmailHasError,
    valueChangeHandler: enteredEmailChangeHandler,
    inputBlurHandler: enteredEmailBlurHandler,
    resetValue: enteredEmailReset,
    errMessage: errMessageEmail,
  } = useInput((value) => checkEmail(value))
  const {
    value: enteredPassword,
    enteredValueIsValid: enteredPasswordIsValid,
    hasError: enteredPasswordHasError,
    valueChangeHandler: enteredPasswordChangeHandler,
    inputBlurHandler: enteredPasswordBlurHandler,
    resetValue: enteredPasswordReset,
    errMessage: errMessagePassword,
  } = useInput((value) => checkPassword(value))
  const {
    value: enteredConfirmPassword,
    enteredValueIsValid: enteredConfirmPasswordIsValid,
    hasError: enteredConfirmPasswordHasError,
    valueChangeHandler: enteredConfirmPasswordChangeHandler,
    inputBlurHandler: enteredConfirmPasswordBlurHandler,
    resetValue: enteredConfirmPasswordReset,
    errMessage: errMessageConfirmPassword,
  } = useInput((value) => checkConfirmedPassword(value, enteredPassword))

  const formIsValid =
    enteredUserNameIsValid &&
    enteredLastBookReadIsValid &&
    enteredAgeIsValid &&
    enteredEmailIsValid &&
    enteredPasswordIsValid &&
    enteredConfirmPassword

  const formHandler = (event) => {
    event.preventDefault()
    console.log('formHandler')
    if (!enteredUserNameIsValid) return
    if (!enteredAgeIsValid) return
    if (!enteredEmailIsValid) return
    if (!enteredLastBookReadIsValid) return
    if (!enteredPasswordIsValid) return
    if (!enteredConfirmPasswordIsValid) return
    const data = {
      username: enteredUserName,
      lastBookRead: enteredLastBookRead,
      age: enteredAge,
      email: enteredEmail,
      password: enteredPassword,
      confirmPassword: enteredConfirmPassword,
    }
    console.log(data)
    const fetchUserHandler = async (data) => {
      const response = await fetch('http://localhost:4000/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      console.log(response)

      return response
    }
    fetchUserHandler(data)
    enteredUserNameReset()
    enteredAgeReset()
    enteredLastBookReadReset()
    enteredEmailReset()
    enteredPasswordReset()
    enteredConfirmPasswordReset()
  }
  return (
    <div className=" flex-auto flex justify-center items-center  ">
      <form
        onSubmit={formHandler}
        className="items-center"
        // onSubmit={submitHandler}
      >
        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="username">
            username
          </label>

          {enteredUserNameHasError && (
            <p className="text-xs">{errMessageUsername}</p>
          )}
          <input
            className={
              enteredUserNameHasError ? styles.input_wrong : styles.input
            }
            type="text"
            id="username"
            onChange={enteredUserNameChangeHandler}
            onBlur={enteredUserNameBlurHandler}
            value={enteredUserName}
          />
        </div>

        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="book">
            Last read book
          </label>
          {enteredLastBookReadHasError && (
            <p className="text-xs">{errMessageLastBookRead}</p>
          )}
          <input
            className={
              enteredLastBookReadHasError ? styles.input_wrong : styles.input
            }
            type="text"
            onChange={enteredLastBookReadChangeHandler}
            onBlur={enteredLastBookReadBlurHandler}
            value={enteredLastBookRead}
          />
        </div>

        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="age">
            Age
          </label>
          {enteredAgeHasError && <p className="text-xs">{errMessageAge}</p>}
          <input
            className={enteredAgeHasError ? styles.input_wrong : styles.input}
            type="text"
            onChange={enteredAgeChangeHandler}
            onBlur={enteredAgeBlurHandler}
            value={enteredAge}
          />
        </div>

        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="email">
            email
          </label>
          {enteredEmailHasError && <p className="text-xs">{errMessageEmail}</p>}
          <input
            className={enteredEmailHasError ? styles.input_wrong : styles.input}
            type="email"
            onChange={enteredEmailChangeHandler}
            onBlur={enteredEmailBlurHandler}
            value={enteredEmail}
          />
        </div>

        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="password">
            Password
          </label>
          {enteredPasswordHasError && (
            <p className="text-xs">{errMessagePassword}</p>
          )}
          <input
            className={
              enteredPasswordHasError ? styles.input_wrong : styles.input
            }
            type="password"
            onChange={enteredPasswordChangeHandler}
            onBlur={enteredPasswordBlurHandler}
            value={enteredPassword}
          />
        </div>

        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="password">
            Confirm password
          </label>
          {enteredConfirmPasswordHasError && (
            <p className="text-xs">{errMessageConfirmPassword}</p>
          )}
          <input
            className={
              enteredConfirmPasswordHasError ? styles.input_wrong : styles.input
            }
            type="password"
            onChange={enteredConfirmPasswordChangeHandler}
            onBlur={enteredConfirmPasswordBlurHandler}
            value={enteredConfirmPassword}
          />
        </div>

        <input
          className={
            formIsValid
              ? styles.input +
                'w-full px-1 m-5 hover:bg-verde hover:cursor-pointer'
              : styles.input + 'w-full px-1 m-5 hover:cursor-not-allowed '
          }
          type="submit"
          disabled={!formIsValid}
        />
      </form>
    </div>
  )
}

export default Register
