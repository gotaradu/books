import useInput from '../hooks/use-input'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
const styles = {
  label_div: 'shadow-xl px-1 flex flex-col rounded-lg m-5 ',
  input:
    'px-1 flex-1 w-4/5 rounded-lg  focus:border-verde border-4 mt-1 mb-1 bg-verzisor',
  input_wrong: 'px-1 flex-1 w-4/5 rounded-lg mt-1 mb-1  border-4  bg-ambient',
  error:
    'px-1 flex-1 w-4/5 rounded-lg border-ambient focus:border-verde border-4 mt-1 mb-1 ',
}

const Login = () => {
  const navigate = useNavigate()

  useEffect(() => {
    const isAuth = localStorage.getItem('token')

    if (isAuth) navigate('/')
  }, [])

  const loginHandler = (event) => {
    event.preventDefault()

    if (!enteredEmailIsValid) return
    const data = { email: enteredEmail, password: enteredPassword }
    console.log(data)

    const fetchLoginHandler = async () => {
      const response = await fetch('http://localhost:4000/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })
      return response
    }
    fetchLoginHandler(data)
      .then((response) => {
        return response.json()
      })
      .then((token) => {
        localStorage.setItem('token', token.token)
        navigate('/')
      })

    enteredEmailReset()
    enteredPasswordReset()
  }

  // take inputs from form
  // make a post request with email and pass
  const checkEmail = (value) => {
    const regex = /^\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
    if (value.match(regex)) {
      return { enteredValueIsValid: true }
    } else return { enteredValueIsValid: false, errorMessage: 'invalid email' }
  }
  const checkPassword = (value) => {
    if (value.trim().length < 8)
      return {
        enteredValueIsValid: false,
        errorMessage: 'invalid password',
      }
    return { enteredValueIsValid: true }
  }
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
  return (
    <div className="flex-auto flex justify-center items-center bg-gradient-radial from-verzisor to-back lg:container lg:w-auto   ">
      <form className="items-center" onSubmit={loginHandler}>
        <div className="shadow-xl px-3 flex flex-col rounded-lg m-5 ">
          <label className="text-5xl flex-1 opacity-50 ">User</label>
          {enteredEmailHasError && <p className="text-xs">{errMessageEmail}</p>}
          <input
            className={enteredEmailHasError ? styles.input_wrong : styles.input}
            type="email"
            onChange={enteredEmailChangeHandler}
            onBlur={enteredEmailBlurHandler}
            value={enteredEmail}
          />
        </div>
        <div className="shadow-xl px-3 flex flex-col rounded-lg m-4">
          <label className="text-5xl flex-1 opacity-50">Password</label>
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

        <button
          onClick={loginHandler}
          className="shadow-xl px-3 flex-auto w-auto rounded-lg m-4  bg-verzisor place-self-center hover:bg-verde hover:cursor-pointer"
        >
          Login
        </button>
      </form>
    </div>
  )
}

export default Login
