import React, { useState } from 'react'

const styles = {
  label_div: 'shadow-xl px-1 flex flex-col rounded-lg m-5 ',
  input:
    'px-1 flex-1 w-4/5 rounded-lg  focus:border-verde border-4 mt-1 mb-1 bg-verzisor',
  input_wrong: 'px-1 flex-1 w-4/5 rounded-lg mt-1 mb-1  border-4  bg-ambient',
  error:
    'px-1 flex-1 w-4/5 rounded-lg border-ambient focus:border-verde border-4 mt-1 mb-1 ',
}

const Register = () => {
  const [username, setUsername] = useState('')
  const [usernameError, setUsernameError] = useState(false)
  const usernameHandler = (event) => {
    setUsername(event.target.value)
  }

  const submitHandler = (event) => {
    event.preventDefault()
    if (username.trim() === '') {
      setUsernameError(true)
      console.log(usernameError)
      return
    }
    setUsernameError(false)
  }

  return (
    <div className=" flex-auto flex justify-center items-center  ">
      <form className="items-center" onSubmit={submitHandler}>
        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="username">
            username
          </label>
          {usernameError && (
            <p className="text-xs text-ambient ">username cannot be empty</p>
          )}
          <input
            className={usernameError ? styles.input_wrong : styles.input}
            type="text"
            id="username"
            onChange={usernameHandler}
          />
        </div>
        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="book">
            Last read book
          </label>
          <p className="text-xs">min 4 caractere</p>
          <input className={styles.input} type="text" />
        </div>
        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="age">
            Age
          </label>
          <p className="text-xs">min 4 caractere</p>
          <input className={styles.input} type="number" />
        </div>
        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="email">
            email
          </label>
          <p className="text-xs">min 4 caractere</p>
          <input className={styles.input} type="email" />
        </div>
        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="password">
            Password
          </label>
          <p className="text-xs">min 4 caractere</p>
          <input className={styles.input} type="password" />
        </div>

        <div className={styles.label_div}>
          <label className="text-1xl flex-1" htmlFor="password">
            Confirm password
          </label>
          <p className="text-xs">min 4 caractere</p>
          <input className={styles.input} type="password" />
        </div>

        <input
          className={
            styles.input + 'w-full px-1 m-5 hover:bg-verde hover:cursor-pointer'
          }
          type="submit"
        />
      </form>
    </div>
  )
}

export default Register
